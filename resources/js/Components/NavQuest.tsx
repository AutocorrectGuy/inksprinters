import { Link } from '@inertiajs/react'
import React from 'react'
import TextInput from './TextInput'
import Dropdown from './Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA, faMusic, faRouble } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const NavQuest = (props: Props) => {
  return (
    <div className="navbar fixed top-0 w-full border-b border-b-neutral-800 bg-neutral-900">
      <div className='max-w-7xl w-full mx-auto flex justify-between px-2'>

        {/* Left side */}
        <div className='flex lg:grow items-center'>
          <FontAwesomeIcon icon={faMusic} className='w-7 h-7 mr-6 text-rose-600' />

          {/* Search bar with dropdown */}
          <div className='lg:grow hidden lg:flex'>


            <input type="text" placeholder="What are you looking for?" className="grow max-w-xs border-y border-l border-r-0 border-neutral-600 rounded-l-full bg-neutral-700 w-full placeholder:text-neutral-400 h-9" />
            <Dropdown>
              <Dropdown.Trigger>
                <button
                  type="button"
                  className="flex items-center font-light rounded-r-full border-y border-r border-neutral-600 text-neutral-400 bg-neutral-700 focus:outline-none transition ease-in-out duration-150 h-9 pr-3"
                >
                  Click me
                  <svg
                    className="ms-2 -me-0.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Dropdown.Trigger>

              <Dropdown.Content contentClasses='bg-neutral-700'>
                {[...Array(5)].map((_x, i) => <Dropdown.Link className='text-neutral-200 hover:bg-neutral-600 active:bg-rose-600 focus:bg-rose-600' key={`search-dropdown-value-${i}`} href='/'>Option {i + 1}</Dropdown.Link>)}
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>

        {/* Right side */}
        <div className='flex'>
          <Link
            href={route('login')}
            className="font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >
            Log in
          </Link>
          <Link
            href={route('register')}
            className="ms-4 font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavQuest