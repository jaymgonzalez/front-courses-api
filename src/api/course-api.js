const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://course-api-express.herokuapp.com/api/'

const postCourse = async (url = 'courses', data) => {
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  } catch (err) {
    console.log(err)
  }

}

const updateCourse = async (url = 'courses/', id, data) => {
  try {
    const response = await fetch(baseUrl + url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(response.json)
    return response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  postCourse,
  updateCourse
}