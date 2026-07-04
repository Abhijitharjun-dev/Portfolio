import { useEffect, useState } from 'react'

// Cycles through `words` with a type / pause / delete rhythm.
export function useTypewriter(words, { typeMs = 70, deleteMs = 40, pauseMs = 1800 } = {}) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteMs : typeMs
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, pauseMs])

  return text
}
