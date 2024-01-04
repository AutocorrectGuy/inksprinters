import { PageProps } from '@/types'
import RUNNER_SVG from '../../../images/Pages/Welcome/inksprinters-runner.svg'
import GROUND_SVG from '../../../images/Pages/Welcome/inksprinters-ground.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MainLayout from '@/Layouts/MainLayout'
import { useState } from 'react'
import { styles } from '@/Layouts/config/MainLayout.config'
import { usePage } from '@inertiajs/react'

const boxShadow = {
  boxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.8)',
  WebkitBoxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.8)', // for Safari and older Chrome browsers
  MozBoxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.8)', // for Firefox
}

const HeroInputField = () => {
  const [inputText, setInputText] = useState<string>('')

  return (
    <div className="relative flex w-full max-w-[750px] items-center">
      <img src={RUNNER_SVG} className="absolute right-0 -z-10 translate-x-1/2 overflow-hidden" />

      <div
        className="flex h-40 w-full items-center rounded-[16px] bg-neutral-800 text-[#C7C3BB] outline outline-2 outline-[#666666] focus:border-[#C7C3BB] focus:outline-[#C7C3BB] focus:ring-[#C7C3BB]"
        style={{ ...boxShadow }}
      >
        <div className="flex h-full w-40 items-center justify-center rounded-[16px]">
          <FontAwesomeIcon icon={faSearch} className="h-12 w-12 -scale-x-100 text-[#C7C3BB]" />
        </div>
        <div className="relative mr-8 w-full">
          <input
            onChange={(e) => setInputText(e.target.value)}
            defaultValue={''}
            type="text"
            autoFocus
            placeholder="Type keywords here"
            className={`input m-0 w-full bg-neutral-800 ${inputText.length > 0 ? 'pt-12' : 'pt-4'
              } rounded-t-[16px] border-0 pb-12 pl-4 text-5xl
                font-medium text-[#C7C3BB] outline-none ring-0 placeholder:text-neutral-500 focus:border-0 focus:outline-none focus:ring-0`}
          />
          {inputText.length === 0 && (
            <div className="absolute -bottom-4 left-4 text-xl font-medium text-neutral-500">
              e.g.: "Excel Converter"
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const crumbPaths = [
  'Home', 'Convert Excel', 'Download File'
]

const Welcome = ({ auth }: PageProps<{ laravelVersion: string; phpVersion: string }>) => {

  const { url } = usePage()
  return (
    <MainLayout auth={auth}>
      {/* pr-80 lets to center everything */}
      {/* Main content */}
      {
        url === '/'
          ? <div className="flex grow flex-col items-center justify-center overflow-hidden pb-40 pr-20">
            <div className="flex w-full items-center justify-center">
              <HeroInputField />
            </div>
          </div>
          : <div className="flex flex-col grow border my-12">
            Content wrapper
            <div className='max-w-5xl flex flex-col grow w-full mx-auto border'>
              Content container
              
              {/* Navigation */}
              <div className='flex justify-between bg-white/20 border'>
                <div className='border'>Crumb</div>
                <div className='border'>Nav arrows</div>
              </div>
              
              {/* Heading */}
              <h1 className='border bg-white/10'>Heading text</h1>

              {/* Content */}
              <div className='border flex flex-col grow bg-white/5'>
                content
              </div>

            </div>
          </div>
      }
    </MainLayout>
  )
}

export default Welcome

// className={`${borderRadiusClass} flex items-center justify-between border-[#242C29] bg-gradient-to-r 
// from-[#000522]/80 from-15% via-[#390d19]/80 to-[#8f1d1d]/80 py-3 hover:from-[#c8c3bb] 
// hover:via-[#c8c3bb] hover:to-[#c8c3bb] hover:text-[#1b1b1a] `}