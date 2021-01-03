import React from 'react'
import TextInput from "./TextInput"
import Spinner from './Spinner'

const AuthorForm = ({ onSubmit, onChange, author, errors, loading, error }) => {

  if (error) throw error

  if (loading) return <Spinner />

  return (
    <form className="w-full max-w-sm mx-auto py-20 px-2" onSubmit={onSubmit}>
      <TextInput
        id="name"
        label="name"
        onChange={onChange}
        name="name"
        value={author.name}
        error={errors.name}
      />

      <TextInput
        id="platform"
        label="platform"
        name="platform"
        onChange={onChange}
        value={author.platform}
        error={errors.platform}
      />

      <button className="mx-auto my-10 shadow-2xl hover:text-gray-50 flex bg-blue-200 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-blue-800 text-xl font-extrabold py-3 px-6 rounded-xl" type="submit">Save Author</button>
    </form>
  )
}

export default AuthorForm
