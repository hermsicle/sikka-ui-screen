import React from 'react'
import { Logo, HeaderSelect, User } from '../components'

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo/>
      <div className="practices">
        <p>Practice(s)</p>
        <HeaderSelect />
      </div>
      <User />
    </div>
  )
}

export default NavBar