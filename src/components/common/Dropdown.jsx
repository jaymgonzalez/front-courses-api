import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false)
  const dropdown = useRef()

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      setIsOpen(false)
    }
  }

  function handleClickOutside(event) {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return (
    <div ref={dropdown} onKeyDown={handleKeyDown}>
      <div className="relative inline-block text-left z-10">
        <div>
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-pink-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
            Admin
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* 
  <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
    To: "transform opacity-0 scale-95" 
    -->
    */}
        {isOpen &&
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="py-1">
              <Link to="/create-course" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Create Course</Link>
            </div>
            <div className="py-1">
              <Link to="/authors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Authors List</Link>
              <Link to="/create-author" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Create Author</Link>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Dropdown
