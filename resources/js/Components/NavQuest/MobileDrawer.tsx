import React, { useContext } from 'react'
import { WindowUtilsContext } from '@/Contexts/WindowUtilsContext' // Adjust the import path as needed

const MobileDrawer = () => {
  const { navbarData } = useContext(WindowUtilsContext)

  return (
    <div className="drawer-side">
      <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay" />
      <ul className="menu p-4 w-80 min-h-full bg-neutral-900">
        {/* Sidebar content from navbarData */}
        {navbarData.rowTwo.map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a> {/* Replace '#' with actual link */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileDrawer
