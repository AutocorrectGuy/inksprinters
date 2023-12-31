import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center flex flex-col gap-8 rounded bg-gray-800 p-4 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        {/* <a className="link link-hover">Suggestions</a> */}
        <a href="mailto:martins.sturainis.lspa@gmail.com" className="link-hover link">
          Contact
        </a>
        {/* <a className="link link-hover">Get Access</a> */}
      </nav>
      <aside>
        <p className="text-gray-500">
          Coded and designed for educational purposes by{' '}
          <a className="font-bold delay-75 duration-200 hover:text-gray-300" href="https://github.com/AutocorrectGuy">
            AutocorrectGuy
          </a>
        </p>
      </aside>
    </footer>
  )
}

export default Footer
