import React, { useContext, useEffect, useRef, useState } from 'react'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext'
import FirstRowContent from './FirstRowContent'
import SecondRowContent from './SecondRowContent'
import MobileDrawer from './MobileDrawer'

const NavMain = () => {
  const { isDesktopWidth, windowDimensions } = useContext(WindowUtilsContext)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (navbarRef.current) {
      // Update the height of the navbar
      setNavbarHeight(navbarRef.current.clientHeight)
    }
  }, [windowDimensions]) // Recalculate when the layout switches between desktop and mobile

  return (
    <div>
      {/* Navbar */}
      <div ref={navbarRef} className="py-0 fixed top-0 w-full bg-neutral-900 flex flex-col z-50">
        <div className="drawer">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col">
            <FirstRowContent />
            <SecondRowContent />
          </div>

          <MobileDrawer />
        </div>
      </div>

      {/* Placeholder div to offset the main content by the height of the navbar */}
      <div style={{ height: `${navbarHeight}px` }}></div>
    </div>
  )
}

export default NavMain
