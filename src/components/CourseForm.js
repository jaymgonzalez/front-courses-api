import React, { useState } from "react"
import TextInput from "./common/TextInput"
import { useCourseAuthorData } from "../hooks/useCourseAuthorData"
import Spinner from './common/Spinner'





function CourseForm() {

  const { courseAuthorData: courses, loading, error } = useCourseAuthorData()

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
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log({ err });
      })
  }

  const onChange = ({ target }) => {
    setCourse({
      ...course,
      id: courses.length + 1,
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

  if (loading) return <Spinner />

  return (
    <form className="w-full max-w-sm mx-auto py-20 px-2" onSubmit={onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={onChange}
        name="title"
        value={course.title}
        error={errors.title}
      />

      <label className="block text-gray-800 font-bold mb-1 pr-4 pt-2 capitalize" htmlFor="author">Author</label>
      <select
        id="author"
        name="authorId"
        onChange={onChange}
        value={course.authorId || ""}
        className={`bg-gray-50 border-2 w-full rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white ${errors.authorId ? "border-red-500" : "border-gray-200"} focus:border-lightblue-800`}
      >
        <option value="" />
        {courses.map((author, i) => <option key={i} value={author.authorId}>{author.name}</option>)}
      </select>
      {errors.authorId && (
        <div className="pt-2 text-red-500 text-xs italic">{errors.authorId}</div>
      )}


      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={onChange}
        value={course.category}
        error={errors.category}
      />
      <label className="block text-gray-800 font-bold mb-1 pr-4 pt-2 capitalize" htmlFor="description">Description</label>

      <textarea
        id="description"
        name="description"
        onChange={onChange}
        value={course.description}
        error={errors.description}
        className={`bg-gray-50 border-2 w-full rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white appearance-none ${errors.description ? "border-red-500" : "border-gray-200"} focus:border-blue-800`}
      />

      <button className="mx-auto my-10 shadow-2xl hover:text-gray-50 flex bg-blue-200 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-blue-800 text-xl font-extrabold py-3 px-6 rounded-xl" type="submit">Save Course</button>
    </form>
  )
}



export default CourseForm
