import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navBar'>
        <img src={logo} alt="React AeroByte - P - 1 logo" className='logoImage'/>
        <p className='nav-title'>React AeroByte - P - 2</p>
    </nav>
  )
}

export default Navbar