import React, { useState } from 'react'
import { postAuthor, updateAuthor } from '../../api/course-api'
import AuthorForm from './AuthorForm'
import { useFetch } from '../../hooks/useFetch'

const FormTemplate = ({ mongoId }) => {

  const { data: authors, loading, error } = useFetch('authors')

  const [errors, setErrors] = useState({})
  const [author, setAuthor] = useState({
    id: null,
    name: '',
    platform: ''
  })

  function formIsValid() {
    const _errors = {}

    if (!author.name) _errors.name = "Name is required"
    if (!author.id) _errors.id = "Id is required"
    if (!author.platform) _errors.platform = "Platform is required"

    setErrors(_errors)

    return Object.keys(_errors).length === 0
  }

  const onSubmitPost = (event) => {
    event.preventDefault()
    if (!formIsValid()) return
    postAuthor('authors', author)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log({ err })
      })
  }

  const onSubmitPut = (event) => {
    event.preventDefault()
    updateAuthor('authors/', author._id, author)
      .then(() => {
        window.location.href = '/'
      })
      .catch((err) => {
        console.log({ err });
      })
  }

  const onChange = ({ target }) => {
    setAuthor({
      ...author,
      id: author.id || authors.length + 1,
      [target.name]: target.value,
    })
  }

  const getAuthorById = (id) => {
    return authors?.filter(author => author._id === id)
  }

  if (mongoId) {
    let _author = getAuthorById(mongoId)
    _author && _author[0]._id !== author._id && setAuthor(_author[0])
    return (
      <div>
        <section className="w-full pt-10">
          <p className="text-center font-extrabold sm:text-lg max-w-screen-md text-gray-800">
            Use this form to update the author
          </p>
        </section>
        <AuthorForm author={author} authors={authors} onSubmit={onSubmitPut} onChange={onChange} errors={errors} loading={loading} error={error} />
      </div>
    )
  } else {
    return (
      <div>
        <section className="w-full pt-10">
          <p className="text-center font-extrabold sm:text-lg max-w-screen-md text-gray-800">
            Use this form to create an author
          </p>
        </section>
        <AuthorForm author={author} authors={authors} onSubmit={onSubmitPost} onChange={onChange} errors={errors} loading={loading} error={error} />
      </div>
    )
  }
}

export default FormTemplate
