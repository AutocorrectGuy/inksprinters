import { Link, Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import RUNNER_SVG from '../../../images/Pages/Welcome/inksprinters-runner.svg'
import GROUND_SVG from '../../../images/Pages/Welcome/inksprinters-ground.svg'
import ExcelToText from './ExcelToText/ExcelToText'
import TopNav from './components/TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCaretRight, faHome, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import MainLayout from '@/Layouts/MainLayout'


const Welcome = ({ auth }: PageProps<{ laravelVersion: string; phpVersion: string }>) => {

  return (
    <MainLayout auth={auth}>
      {/* pr-80 lets to center everything */}
      {/* Main content */}
      <div className="flex flex-col grow z-10 items-center justify-center pb-32 my-20">
        <div className='pr-80 w-full'>
          {/* Inksprinters logo */}
          <div className="flex items-center justify-center text-6xl h-20">
            <h1>
              <span className='text-gray-900'>INKS</span>
              <span className='text-gray-300 font-medium'>PRINT</span>
              <span className='text-gray-900'>ERS</span>
            </h1>
          </div>

          <img src={GROUND_SVG} className='absolute w-full bottom-0 right-0 -z-10 opacity-60' />

          <div className='flex justify-center items-center w-full'>
            <div className='flex items-center relative w-full max-w-[550px]'>
              <img src={RUNNER_SVG} className='absolute w-96 h-96 right-0 -z-10 translate-x-1/2 -translate-y-1 overflow-hidden -rotate-6' />

              <FontAwesomeIcon icon={faSearch} className='absolute text-gray-600 w-10 h-10 left-6' />
              <div className='w-full border-b-8 border-gray-900 bg-gray-900 rounded-xl'>
                <input type="text"
                  autoFocus
                  placeholder="YOUR KEYWORDS HERE"
                  className={`input pl-20 py-12 text-4xl w-full bg-gray-800 shadow-2xl shadow-[#0000007c]
                placeholder:text-gray-400 placeholder:font-medium border-[3px] outline-transparent ring-0 focus:ring-0 focus:outline-none rounded-xl m-0 outline focus:border-[#631633]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>

  )
}

export default Welcome