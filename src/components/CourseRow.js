import React from 'react'
import { Link } from 'react-router-dom'


const CourseRow = ({ title, category, slug, author }) => {


  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {author}
            </div>
            <div className="text-sm text-gray-500">
              El email de julian
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <Link to={`/course/${slug}`}>
          <div className="text-sm text-gray-900">{title}</div>
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
    </tr>
  )
}

export default CourseRow
