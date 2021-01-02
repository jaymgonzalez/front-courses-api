import React, { useState } from 'react'
import { postCourse, updateCourse } from '../../api/course-api'
import CourseForm from './CourseForm'
import { useCourseAuthorData } from '../../hooks/useCourseAuthorData'

const FormTemplate = () => {

  const { courseAuthorData: courses, authors, loading, error } = useCourseAuthorData()

  const [errors, setErrors] = useState({})
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
    description: "",
    finished: false
  })

  function formIsValid() {
    const _errors = {}

    if (!course.title) _errors.title = "Title is required"
    if (!course.authorId) _errors.authorId = "Author is required"
    if (!course.category) _errors.category = "Category is required"
    if (!course.description) _errors.description = "Description is required"

    setErrors(_errors)

    return Object.keys(_errors).length === 0
  }

  const onSubmitPost = (event) => {
    event.preventDefault()
    if (!formIsValid()) return
    postCourse('courses', course)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log({ err });
      })
  }

  const onSubmitPut = (event) => {
    event.preventDefault()
    updateCourse('courses/', course._id, course)
      .then(() => {
        window.location.reload()
      })
      .catch((err) => {
        console.log({ err });
      })
  }

  function createSlug(value) {
    return value
      .replace(/[^a-z0-9_]+/gi, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()
  }


  const onChange = ({ target }) => {
    setCourse({
      ...course,
      id: courses.length + 1,
      slug: createSlug(course.title),
      [target.name]: target.value
    })
  }

  return (
    <div>
      <CourseForm authors={authors} courses={courses} onSubmitPost={onSubmitPost} onSubmitPut={onSubmitPut} onChange={onChange} course={course} errors={errors} loading={loading} error={error} />

    </div>
  )
}

export default FormTemplate















