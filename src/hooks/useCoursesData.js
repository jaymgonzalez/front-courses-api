import { useState, useEffect } from 'react'

export const useCoursesData = () => {

  const url = 'https://course-api-express.herokuapp.com/api/courses'

  const [coursesData, setCoursesData] = useState()


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setCoursesData(jsonData)
    }
    fetchData()
  }, [])



  return coursesData

}




