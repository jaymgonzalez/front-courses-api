import React from 'react'
import { useFetch } from '../hooks/useFetch'
import Spinner from './common/Spinner'
import AuthorRow from './AuthorRow'

const AuthorsPage = () => {

  const { data: authors, loading, error } = useFetch('authors')

  if (error) throw error

  if (loading) return <Spinner />

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
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {authors.map(author =>
                    <AuthorRow
                      key={author.id}
                      name={author.name}
                      platform={author.platform}
                      mongoId={author._id}
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

export default AuthorsPage
