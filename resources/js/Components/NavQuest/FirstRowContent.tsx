import { Link } from '@inertiajs/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'
import SearchBarDropdown from './SearchBarDropdown'

const FirstRowContent = () => {
  const { isDesktopWidth } = useContext(WindowUtilsContext)

  return (
    <div className={`w-full border-b border-b-neutral-800 ${isDesktopWidth ? 'py-2' : ''}`}>
      <div className="max-w-7xl w-full mx-auto flex justify-between px-2">
        {/* Left side */}
        <div className="flex w-full gap-3 items-center">
          {/* Burger Icon */}
          <div className="lg:hidden">
            <label htmlFor="nav-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex lg:grow items-center">
            {/* Logo */}
            <FontAwesomeIcon icon={faMusic} className="w-7 h-7 mr-6 text-pink-600" />
            {isDesktopWidth && <SearchBarDropdown />}
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-3 items-center">
          <Link
            href={route('login')}
            className="font-semibold whitespace-nowrap text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >
            Log in
          </Link>
          <div className="border-r border-r-neutral-600 h-4 rounded-full" />
          <Link
            href={route('register')}
            className="font-semibold whitespace-nowrap text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FirstRowContent
