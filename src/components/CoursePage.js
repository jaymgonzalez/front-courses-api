import React from 'react'
import { useParams } from 'react-router-dom'
import { useCourseAuthorData } from '../hooks/useCourseAuthorData'
import Spinner from './common/Spinner'


const CoursePage = () => {

  const { slug } = useParams()
  const { courseAuthorData: course, loading, error } = useCourseAuthorData()

  if (error) throw error

  if (loading) return <Spinner />

  let _course = course.filter(course => course.slug === slug)
  _course = _course[0]

  return (
    <article className="border w-2/4 mx-auto border-gray-400 rounded-lg md:p-4 bg-white sm:py-3 py-4 px-2 m-10">
      <div>
        <div className="m-2">
          <div className="flex items-center">
            <div className="mr-2">
              <a href="/hagnerd">
                <img className="rounded-full w-8" src="https://res.cloudinary.com/practicaldev/image/fetch/s---dcV6iX4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/112962/b1373942-b945-4d16-af76-c448e080d14a.jpeg" alt="hagnerd profile" loading="lazy" />
              </a>
            </div>
            <div>
              <p className="text text-gray-700 text-sm hover:text-black">{_course.authorName}
              </p>
              <p className="text-xs text-gray-600 hover:text-black">
                <time dateTime="2019-08-02T13:58:42.196Z">Aug  2 '19 </time>
              </p>
            </div>
          </div>
        </div>
        <div className="pl-12 md:pl-10 xs:pl-10">
          <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 leading-7">
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
      </div>
    </article>
  )
}

export default CoursePage
