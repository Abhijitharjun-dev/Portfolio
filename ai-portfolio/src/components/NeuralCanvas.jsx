import { useEffect, useRef } from 'react'

// Colors per theme — canvas can't read CSS custom properties directly.
const PALETTES = {
  dark: {
    particle: 'rgba(94, 234, 212, 0.55)',
    link: (a) => `rgba(139, 92, 246, ${0.16 * a})`,
    mouseLink: (a) => `rgba(34, 211, 238, ${0.25 * a})`,
  },
  light: {
    particle: 'rgba(13, 148, 136, 0.5)',
    link: (a) => `rgba(124, 58, 237, ${0.18 * a})`,
    mouseLink: (a) => `rgba(8, 145, 178, ${0.3 * a})`,
  },
}

// Animated "neural network" particle field rendered on <canvas>.
// Pure requestAnimationFrame — no libraries. Respects reduced-motion.
export default function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    const mouse = { x: null, y: null }
    let palette = PALETTES[document.documentElement.dataset.theme] || PALETTES.dark

    // Follow theme switches without re-mounting the canvas.
    const themeObserver = new MutationObserver(() => {
      palette = PALETTES[document.documentElement.dataset.theme] || PALETTES.dark
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      const count = Math.min(90, Math.floor(canvas.offsetWidth / 14))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
      }))
    }

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = palette.particle
        ctx.fill()
      }

      const LINK = 130
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = palette.link(1 - dist / LINK)
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
        if (mouse.x !== null) {
          const dx = particles[i].x - mouse.x
          const dy = particles[i].y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < 170) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = palette.mouseLink(1 - dist / 170)
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouse)
    canvas.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouse)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
}
