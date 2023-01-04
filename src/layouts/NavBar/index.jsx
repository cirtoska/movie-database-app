import React from 'react'
import NavBarList from './NavBarList'
import {navItemsLeft, navItemsRight} from './navItems'

const NavBar = () => {
  return (
    <nav className='h-16 bg-tmdbDarkBlue flex justify-between items-center text-white font-semibold max-w-[1400px] mx-auto px-10'>
      <NavBarList items={navItemsLeft}/>
      <NavBarList items={navItemsRight}/>
    </nav>
  )
}

export default NavBar