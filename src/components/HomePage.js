import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CourseComponent from './CourseComponent'
import { useUser } from '../user/userContext'

const HomePage = () => {

  const { user, setUser } = useUser()

  return (
    <>
      <div className="h-screen">
        <nav className={`w-full ${!user.loggedIn ? "justify-end" : "justify-between"} flex flex-wrap p-10`}>
          {
            !user.loggedIn
              ?
              <Link to="/login">
                <button className="capitalize font-bold text-xl transform hover:text-white hover:scale-110 bg-pink-500 text-pink-100 py-3 px-6 rounded-3xl shadow-2xl">
                  sign in
                </button>
              </Link>
              :
              <>
                <div className="flex flex-wrap justify-start items-center">
                  <NavLink to="/create-course">
                    <button className="capitalize font-bold transform hover:text-white hover:scale-110 bg-pink-800 ml-3 text-pink-100 py-2 px-4 rounded-3xl shadow-2xl">
                      Cretate Course
                    </button>
                  </NavLink>
                  <NavLink className="" to="/create-author">
                    <button className="capitalize font-bold transform hover:text-white hover:scale-110 bg-pink-800 ml-3 text-pink-100 py-2 px-4 rounded-3xl shadow-2xl">
                      Create Authors
                    </button>
                  </NavLink>
                </div>
                <Link to="/" onClick={() => {
                  sessionStorage.removeItem('jwt')
                  setUser({ loggedIn: false })
                }}>
                  <button className="capitalize font-bold text-xl transform hover:text-white hover:scale-110 bg-pink-500 text-pink-100 py-3 px-6 rounded-3xl shadow-2xl">
                    sign out
                  </button>
                </Link>
              </>
          }
        </nav>
        <div className="h-20 sm:h-1/4 flex items-center justify-items-center">
          <div className="relative w-full">
            <p className="w-full text-center text-3xl sm:text-6xl tracking-tight font-extrabold absolute">
              My Courses Page
          </p>
          </div>
        </div>
        <div className="w-full py-10">
          <p className="text-center font-extrabold sm:text-lg max-w-screen-sm mx-auto">
            This is a list of all the courses that I have done in the past + the ones I'm currenlty working on.
          </p>
        </div>
        <CourseComponent />
      </div>
    </>
  )
}

export default HomePage
