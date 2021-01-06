import React, { useState } from 'react'
import { signin } from '../api/auth-api'
import auth from '../api/auth-helper'
import { Redirect } from 'react-router-dom'
import TextInput from './common/TextInput'
import { useUser } from '../user/userContext'


const LoginPage = (props) => {

  const { setUser } = useUser()

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    redirectToReferrer: false
  })

  const clickSubmit = (e) => {
    e.preventDefault()
    const _user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(_user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, loggedIn: true, error: '', redirectToReferrer: true })
          setUser({
            loggedIn: true
          })
        })
      }
    })
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const { from } = props.location.state || {
    from: {
      pathname: '/'
    }
  }

  const { redirectToReferrer } = values
  if (redirectToReferrer) {
    return (<Redirect to={from} />)
  }

  return (
    <form className="w-full max-w-sm mx-auto py-20 px-2" onSubmit={clickSubmit}>
      <TextInput
        id="email"
        label="email"
        type="email"
        onChange={handleChange('email')}
        name="email"
        value={values.email}
        error={values.error}
      />

      <TextInput
        id="password"
        label="password"
        name="password"
        type="password"
        onChange={handleChange('password')}
        value={values.password}
        error={values.error}
      />

      <button className="mx-auto my-10 shadow-2xl hover:text-gray-50 flex bg-blue-200 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-blue-800 text-xl font-extrabold py-3 px-6 rounded-xl" type="submit">Log In</button>
    </form>
  )
}

export default LoginPage
