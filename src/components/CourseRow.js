import React from 'react'
import { Link } from 'react-router-dom'
import { SiPluralsight, SiLinkedin, SiUdemy } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'


const CourseRow = ({ title, finished, slug, author, platform }) => {


  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <div className="h-10 w-10 rounded-full">
              <IconContext.Provider value={{
                className: "rounded-lg",
                size: 38
              }}>
                {platform && platform.indexOf('pluralsight') !== -1 && <SiPluralsight className=" bg-gradient-to-b from-red-300 to-pink-700 text-gray-50" />}
                {platform && platform.indexOf('linkedin') !== -1 && <SiLinkedin className="text-blue-700" />}
                {platform && platform.indexOf('udemy') !== -1 && <SiUdemy />}
              </IconContext.Provider>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              {author}
            </div>
            <div className="text-sm text-gray-500 capitalize">
              {platform}
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
        {finished ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Finished
          </span>
        ) : (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
              In Progress
            </span>
          )}
      </td>
    </tr>
  )
}

export default CourseRow
