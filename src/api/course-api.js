const postData = async (url = 'courses', data) => {
  const response = await fetch('https://course-api-express.herokuapp.com/api/' + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export {
  postData
}