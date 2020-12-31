import React, { useState } from "react"
import TextInput from "./common/TextInput"
import { useAuthorsData } from '../hooks/useAuthorsData'




function CourseForm() {

  const authorsData = useAuthorsData()
  const [errors, setErrors] = useState({})
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
    description: ""
  })

  async function postData(url = 'https://course-api-express.herokuapp.com/api/courses', data = course) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return response.json()
  }


  function createSlug(value) {
    return value
      .replace(/[^a-z0-9_]+/gi, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()
  }


  const onSubmit = (event) => {
    event.preventDefault()
    if (!formIsValid()) return
    postData()
    console.log('course sent')
  }

  const onChange = ({ target }) => {
    setCourse({
      ...course,
      id: authorsData.length - 1,
      slug: createSlug(course.title),
      [target.name]: target.value
    })
  }

  function formIsValid() {
    const _errors = {}

    if (!course.title) _errors.title = "Title is required"
    if (!course.authorId) _errors.authorId = "Author is required"
    if (!course.category) _errors.category = "Category is required"
    if (!course.description) _errors.description = "Description is required"

    setErrors(_errors)

    return Object.keys(_errors).length === 0
  }

  console.log(JSON.stringify(course))

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={onChange}
        name="title"
        value={course.title}
        error={errors.title}
      />
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={onChange}
            value={course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            {authorsData && authorsData.map((author, i) => <option key={i} value={author.id}>{author.name}</option>)}
          </select>
        </div>
        {errors.authorId && (
          <div className="pt-2 text-red-500 text-xs italic">{errors.authorId}</div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={onChange}
        value={course.category}
        error={errors.category}
      />

      <TextInput
        id="description"
        label="Description"
        name="description"
        onChange={onChange}
        value={course.description}
        error={errors.description}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  )
}



export default CourseForm
