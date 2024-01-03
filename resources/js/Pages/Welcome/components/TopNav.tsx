import { PageProps } from '@/types'
import { Link } from '@inertiajs/react'
import React from 'react'
import ExcelToText from '../ExcelToText/ExcelToText'

const TopNav = ({ auth }: PageProps) => {
  return (
    <div className="p-6 text-right sm:fixed sm:right-0 sm:top-0 text-lg z-10">
      {auth.user ? (
        <Link
          href={route('dashboard')}
          className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-300 dark:hover:text-white"
        >
          Dashboard
        </Link>
      ) : (
        <div className="flex">
          <ExcelToText />
          <Link
            href={route('login')}
            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-300 dark:hover:text-white"
          >
            Log in
          </Link>

          <Link
            href={route('register')}
            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-300 dark:hover:text-white"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}

export default TopNav