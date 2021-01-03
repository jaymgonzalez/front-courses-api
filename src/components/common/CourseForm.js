import React from "react"
import TextInput from "./TextInput"
import Spinner from './Spinner'


function CourseForm({ onSubmit, onChange, course, authors, errors, loading, error }) {


  if (error) throw error

  if (loading) return <Spinner />

  console.log(course.finished)

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
        {authors?.map((author, i) => <option key={i} value={author.id}>{author.name}</option>)}
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

      <label className="block text-gray-800 font-bold mb-1 pr-4 pt-2 capitalize" htmlFor="finished">Finished?</label>

      <input
        id="finished"
        name="finished"
        type="checkbox"
        checked={course.finished}
        onChange={onChange}
        // onClick={() => course.finished = !course.finished}
        value={course.finished}
        className={`bg-gray-50 border-2 w-1/6 rounded py-2 px-4 "border-gray-200`}
      />

      <button className="mx-auto my-10 shadow-2xl hover:text-gray-50 flex bg-blue-200 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-blue-800 text-xl font-extrabold py-3 px-6 rounded-xl" type="submit">Save Course</button>
    </form>
  )
}

export default CourseForm
