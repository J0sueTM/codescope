import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { HiMenuAlt2 } from 'react-icons/hi'

import Navbar from "./Navbar"

function Header() {        
  let [ isNavClosed, setIsNavClosed ] = useState(true)

  return (
    <>
      <header className={`relative w-full p-4 flex flex-row justify-between items-center ${isNavClosed ? 'bg-dark' : 'bg-light'} z-20
                          sm:w-1/2 sm:flex-row-reverse ${isNavClosed ? 'sm:justify-end' : 'sm:justify-between'}
                          lg:w-1/3
                          xl:w-1/4`}>
        <IoMdClose
          className={`${isNavClosed ? 'hidden' : 'block'} w-8 h-8 fill-dark cursor-pointer`}
          onClick={() => setIsNavClosed(true)}
        />
        <HiMenuAlt2
          className={`${isNavClosed ? 'block' : 'hidden'} w-8 h-8 fill-light cursor-pointer
                      sm:ml-4`}
          onClick={() => setIsNavClosed(false)}
        />
        <p className={`font-bold text-3xl ${isNavClosed ? 'text-light' : 'text-dark'}`}>CODESCOPE</p>
      </header>
      <Navbar isClosed={isNavClosed}/>
    </>
  )
}

export default Header