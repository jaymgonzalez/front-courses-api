import { useState, useEffect } from 'react'

export const useAuthorsData = () => {

  const url = 'https://course-api-express.herokuapp.com/api/authors'

  const [authorsData, setAuthorsData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setAuthorsData(jsonData)
    }
    fetchData()
  }, [])

  return authorsData

}
