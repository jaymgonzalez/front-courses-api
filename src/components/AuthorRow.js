import React from 'react'
import { Link } from 'react-router-dom'
import { SiPluralsight, SiLinkedin, SiUdemy } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'

const AuthorRow = ({ name, platform, mongoId }) => {
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
                {platform?.indexOf('pluralsight') !== -1 && <SiPluralsight className=" bg-gradient-to-b from-red-300 to-pink-700 text-gray-50" />}
                {platform?.indexOf('linkedin') !== -1 && <SiLinkedin className="text-blue-700" />}
                {platform?.indexOf('udemy') !== -1 && <SiUdemy className="text-red-600" />}
              </IconContext.Provider>
            </div>
          </div>
          <Link to={`/author/${mongoId}`}>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {name}
              </div>
              <div className="text-sm text-gray-500 capitalize">
                {platform}
              </div>
            </div>
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default AuthorRow
