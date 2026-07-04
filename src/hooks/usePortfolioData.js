import { useEffect, useState } from 'react'


export function usePortfolioData(fetcher, initial = null) {
  const [data, setData] = useState(initial)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    fetcher()
      .then((result) => active && setData(result))
      .catch((err) => active && setError(err))
      .finally(() => active && setLoading(false))
    return () => {
      active = false
    }
  }, [fetcher])

  return { data, loading, error }
}
