import { useState, useEffect } from 'react'

const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://course-api-express.herokuapp.com/api/'

export function useFetch(url) {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl + url)
        if (response.ok) {
          const jsonData = await response.json()
          setData(jsonData)
        } else {
          throw response
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, error, loading }

}
