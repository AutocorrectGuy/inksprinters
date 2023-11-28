import React, { useContext } from 'react'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'
import SearchBarDropdown from './SearchBarDropdown'

const SecondRowContent = () => {
  const { isDesktopWidth, showSecondRow, navbarData } = useContext(WindowUtilsContext)

  return isDesktopWidth ? (
    // Desktop device width
    <div className={`w-full bg-neutral-800 ${showSecondRow ? 'block' : 'hidden'}`}>
      <div className="flex gap-8 justify-start max-w-7xl w-full mx-auto px-2 text-neutral-400 font-medium">
        {navbarData.rowTwo.map((item, index) => (
          <div
            key={index}
            className="py-2 border-b border-b-transparent hover:border-b-neutral-200 hover:text-neutral-200 cursor-pointer duration-100"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  ) : (
    // Mobile device width
    <div className="px-4 py-2">
      <SearchBarDropdown />
    </div>
  )
}

export default SecondRowContent
