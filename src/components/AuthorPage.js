import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteAuthor, deleteCourse } from '../api/course-api'
import { useFetch } from '../hooks/useFetch'
import Spinner from './common/Spinner'
import { SiPluralsight, SiLinkedin, SiUdemy } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'


const AuthorPage = () => {

  const { id } = useParams()
  const { data: authors, loading, error } = useFetch('authors')

  if (error) throw error

  if (loading) return <Spinner />

  let _author = authors.filter(author => author._id === id)
  _author = _author[0]

  return (
    <article className="max-w-screen-sm border w-11/12 sm:w-2/3 mx-auto border-gray-400 rounded-lg md:p-4 bg-white sm:py-3 px-2 mt-10">
      <div>
        <div className="m-2">
          <div className="flex items-center">
            <div className="mr-2">
              <IconContext.Provider value={{
                className: "rounded-lg",
                size: 38
              }}>
                {_author.platform && _author.platform.indexOf('pluralsight') !== -1 && <SiPluralsight className=" bg-gradient-to-b from-red-300 to-pink-700 text-gray-50" />}
                {_author.platform && _author.platform.indexOf('linkedin') !== -1 && <SiLinkedin className="text-blue-700" />}
                {_author.platform && _author.platform.indexOf('udemy') !== -1 && <SiUdemy className="text-red-600" />}
              </IconContext.Provider>
            </div>
            <div>
              <p className="text text-gray-700 font-semibold">{_author.name}
              </p>
              {/* <section className="flex text-xs text-gray-600 hover:text-black">
                <p className="pr-2">Finished:</p><time dateTime="2019-08-02T13:58:42.196Z">Aug  2 '19 </time>
              </section> */}
            </div>
          </div>
        </div>
        <div className="mx-auto py-8 px-10 sm:p-16 justify-between flex flex-wrap max-w-screen-sm overflow-hidden">
          <Link className="pt-2" to={`/update-author/${id}`}>
            <button className="shadow-2xl hover:scale-110 transform font-extrabold uppercase py-4 px-8 bg-blue-500 rounded-3xl text-blue-200">Update</button>
          </Link>
          <Link className="pt-2" to="/" onClick={() => deleteAuthor('authors/', _author._id)}>
            <button className="shadow-2xl hover:scale-110 transform font-extrabold uppercase py-4 px-8 bg-red-500 rounded-3xl text-red-200">Delete</button>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default AuthorPage
