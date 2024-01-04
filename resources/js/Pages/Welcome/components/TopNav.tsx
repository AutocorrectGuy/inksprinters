import { PageProps } from '@/types'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'
import ExcelToText from '../ExcelToText/ExcelToText'
import LOGO_WITH_TEXT from '../../../../images/Pages/Welcome/logo-with-text.svg'
import { styles } from '@/Layouts/config/MainLayout.config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const TopNav = ({ auth }: PageProps) => {

  const { url } = usePage()

  return (
    <div className="z-10 text-xl fixed top-0 right-0 left-0 bg-white bg-opacity-[8%] flex"
      style={{ height: styles.topNavHeigh }}
    >
      <div className='flex items-center pl-2' style={{ width: styles.sideNavWidth }}>
        <img src={LOGO_WITH_TEXT}
          style={{ width: styles.sidebarWidth - 20 }}
        />
      </div>

      <div className="flex flex-grow h-full">
        <div className='grow'>
          {
            url !== '/' &&
            <div className='grow h-full flex items-center'>
              <FontAwesomeIcon icon={faSearch} className="h-8 w-8 -scale-x-100 text-[#a19e97] ml-8 mr-2" />
              <input type="text"
                placeholder="Click to type search results here"
                className={`input w-full max-w-[500px] placeholder:italic px-6 text-[#C7C3BB] bg-[#1b2025] placeholder:text-[#595a5b] placeholder:font-medium focus:ring-0 
            focus:border-transparent rounded-full text-[1.375rem]`}
              />
            </div>
          }

        </div>
        <div className='flex h-full items-center px-6'>
          <ExcelToText />
          <Link
            href={route('login')}
            className="ml-4 font-semibold focus:rounded-sm text-neutral-400 hover:text-white"
          >
            Log in
          </Link>

          <Link
            href={route('register')}
            className="ml-4 font-semibold focus:rounded-sm text-neutral-400 hover:text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav
