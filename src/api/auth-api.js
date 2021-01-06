const baseUrl = process.env.REACT_APP_API_BASE_URL || 'https://course-api-express.herokuapp.com/auth/'


const signin = async (user) => {
  try {
    let response = await fetch(baseUrl + 'signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

const signout = async () => {
  try {
    let response = await fetch(baseUrl + 'signout/', { method: 'GET' })
    return await response.json()
  } catch (err) {
    console.log(err)
  }
}

export {
  signin,
  signout
}