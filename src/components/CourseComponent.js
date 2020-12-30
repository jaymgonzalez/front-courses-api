import React from 'react'
import CourseRow from './CourseRow'
import { useCoursesData } from '../hooks/useCoursesData'
import { useAuthorsData } from '../hooks/useAuthorsData'




const CourseComponent = () => {

  const coursesData = useCoursesData()
  const authorsData = useAuthorsData()

  const authorAndCourseData = coursesData && coursesData.reduce((acc, curr, i, arr) => {
    authorsData && authorsData.map(author => {
      if (author.id === curr.authorId) {
        curr.authorName = author.name
        curr.platform = author.platform
      }
      return curr
    })
    return arr
  }, 0)

  return (
    <div>
      <div className="flex flex-col py-10 mx-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                  {authorAndCourseData && authorAndCourseData.map(course =>
                    <CourseRow
                      key={course.id}
                      title={course.title}
                      slug={course.slug}
                      category={course.category}
                      author={course.authorName}
                      platform={course.platform}
                      finished={course.finished}

                    />
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourseComponent
