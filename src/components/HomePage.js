import React from 'react'
import CourseComponent from './CourseComponent'

const HomePage = () => {
  return (
    <>
      <div className="h-screen">
        <div className="h-20 sm:h-1/2 flex items-center justify-items-center">
          <div className="relative w-full">
            <p className="w-full text-center text-3xl sm:text-6xl tracking-tight font-extrabold absolute">
              My Courses Page
          </p>
          </div>
        </div>
        <div className="w-full py-10">
          <p className="text-center font-extrabold sm:text-lg max-w-screen-md mx-auto">
            This is a list of all the courses that I have done in the past + the ones I'm currenlty working on.
          </p>
        </div>
        <CourseComponent />
      </div>
    </>
  )
}

export default HomePage
