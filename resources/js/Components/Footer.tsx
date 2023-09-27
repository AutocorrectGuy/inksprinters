import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gray-800 text-base-content rounded flex flex-col gap-8">
      <nav className="grid grid-flow-col gap-4">
        {/* <a className="link link-hover">Suggestions</a> */}
        <a href="mailto:martins.sturainis.lspa@gmail.com" className="link link-hover">Contact</a>
        {/* <a className="link link-hover">Get Access</a> */}
      </nav>
      <aside>
        <p className='text-gray-500'>Coded and designed for educational purposes by <a className='font-bold hover:text-gray-300 delay-75 duration-200' href='https://github.com/AutocorrectGuy'>AutocorrectGuy</a></p>
      </aside>
    </footer>
  )
}

export default Footer