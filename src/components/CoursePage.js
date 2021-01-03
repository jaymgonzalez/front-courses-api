import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteCourse } from '../api/course-api'
import { useCourseAuthorData } from '../hooks/useCourseAuthorData'
import Spinner from './common/Spinner'
import { SiPluralsight, SiLinkedin, SiUdemy } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'


const CoursePage = () => {

  const { slug } = useParams()
  const { courseAuthorData: course, loading, error } = useCourseAuthorData()


  if (error) throw error

  if (loading) return <Spinner />

  let _course = course.filter(course => course.slug === slug)
  _course = _course[0]

  console.log(_course.finished)

  return (
    <article className="border sm:w-2/3 mx-auto border-gray-400 rounded-lg md:p-4 bg-white sm:py-3 px-2 mt-10">
      <div>
        <div className="m-2">
          <div className="flex items-center">
            <div className="mr-2">
              <IconContext.Provider value={{
                className: "rounded-lg",
                size: 38
              }}>
                {_course.platform && _course.platform.indexOf('pluralsight') !== -1 && <SiPluralsight className=" bg-gradient-to-b from-red-300 to-pink-700 text-gray-50" />}
                {_course.platform && _course.platform.indexOf('linkedin') !== -1 && <SiLinkedin className="text-blue-700" />}
                {_course.platform && _course.platform.indexOf('udemy') !== -1 && <SiUdemy className="text-red-600" />}
              </IconContext.Provider>
            </div>
            <div>
              <p className="text text-gray-700 font-semibold">{_course.authorName}
              </p>
              {/* <section className="flex text-xs text-gray-600 hover:text-black">
                <p className="pr-2">Finished:</p><time dateTime="2019-08-02T13:58:42.196Z">Aug  2 '19 </time>
              </section> */}
            </div>
          </div>
        </div>
        <div className="pl-12 md:pl-10 xs:pl-10">
          <h2 className="text-2xl font-bold mb-2 leading-7">
            {_course.title}
          </h2>
          <div className="mb-2">
            <p className="text-sm text-gray-600 p-1 hover:text-black">
              <span className="text-opacity-50">#</span>
              {_course.category}
            </p>
          </div>
          <div className="mb-1 leading-6">
            {_course.description}
          </div>
        </div>
        <div className="mx-auto py-8 px-10 sm:p-16 justify-between flex flex-wrap max-w-screen-sm overflow-hidden">
          <Link className="pt-2" to={`/update-course/${slug}`}>
            <button className="font-extrabold uppercase py-4 px-8 bg-blue-500 rounded-3xl text-blue-200">Update</button>
          </Link>
          <Link className="pt-2" to="/" onClick={() => deleteCourse('courses/', _course._id)}>
            <button className="font-extrabold uppercase py-4 px-8 bg-red-500 rounded-3xl text-red-200">Delete</button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default CoursePage
