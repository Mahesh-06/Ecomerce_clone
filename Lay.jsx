import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
const Lay = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default Lay
