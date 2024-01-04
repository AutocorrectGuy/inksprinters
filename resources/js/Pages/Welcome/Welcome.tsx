import { PageProps } from '@/types'
import RUNNER_SVG from '../../../images/Pages/Welcome/inksprinters-runner.svg'
import GROUND_SVG from '../../../images/Pages/Welcome/inksprinters-ground.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import MainLayout from '@/Layouts/MainLayout'
import { useState } from 'react'

const boxShadow = {
  boxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.8)',
  WebkitBoxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.8)', // for Safari and older Chrome browsers
  MozBoxShadow: 'inset 0 0 14px rgba(0, 0, 0, 0.8)', // for Firefox
}

const HeroInputField = () => {
  const [inputText, setInputText] = useState<string>('')

  return (
    <div className="relative flex w-full max-w-[750px] items-center">
      <img src={RUNNER_SVG} className="absolute right-0 -z-10 w-[600px] translate-x-1/2 overflow-hidden" />

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
            className={`input m-0 w-full bg-neutral-800 ${
              inputText.length > 0 ? 'pt-12' : 'pt-4'
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

const Welcome = ({ auth }: PageProps<{ laravelVersion: string; phpVersion: string }>) => {
  return (
    <MainLayout auth={auth}>
      {/* pr-80 lets to center everything */}
      {/* Main content */}
      <div className="flex grow flex-col items-center justify-center overflow-hidden pb-40 pr-20">
        <div className="flex w-full items-center justify-center">
          <HeroInputField />
        </div>
      </div>
    </MainLayout>
  )
}

export default Welcome
