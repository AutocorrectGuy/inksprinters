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
      <div className="mx-auto flex w-full max-w-7xl justify-between px-2">
        {/* Left side */}
        <div className="flex items-center lg:grow">
          <FontAwesomeIcon icon={faMusic} className="mr-6 h-7 w-7 text-rose-600" />

          {/* Search bar with dropdown */}
          <div className="hidden lg:flex lg:grow">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="h-9 w-full max-w-xs grow rounded-l-full border-y border-l border-r-0 border-neutral-600 bg-neutral-700 placeholder:text-neutral-400"
            />
            <Dropdown>
              <Dropdown.Trigger>
                <button
                  type="button"
                  className="flex h-9 items-center rounded-r-full border-y border-r border-neutral-600 bg-neutral-700 pr-3 font-light text-neutral-400 transition duration-150 ease-in-out focus:outline-none"
                >
                  Click me
                  <svg
                    className="-me-0.5 ms-2 h-4 w-4"
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

              <Dropdown.Content contentClasses="bg-neutral-700">
                {[...Array(5)].map((_x, i) => (
                  <Dropdown.Link
                    className="text-neutral-200 hover:bg-neutral-600 focus:bg-rose-600 active:bg-rose-600"
                    key={`search-dropdown-value-${i}`}
                    href="/"
                  >
                    Option {i + 1}
                  </Dropdown.Link>
                ))}
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>

        {/* Right side */}
        <div className="flex">
          <Link
            href={route('login')}
            className="font-semibold text-neutral-600 hover:text-neutral-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-neutral-400 dark:hover:text-white"
          >
            Log in
          </Link>
          <Link
            href={route('register')}
            className="ms-4 font-semibold text-neutral-600 hover:text-neutral-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-neutral-400 dark:hover:text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavQuest
