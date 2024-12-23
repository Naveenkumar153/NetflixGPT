import React from 'react'
import { NavLink } from 'react-router-dom'

export default function InitialScreen() {
  return (
    <div className='d-flex align-middle justify-items-start'>
       <div>
         <NavLink to='/home'>Home</NavLink>
       </div>
       <div>
         <NavLink to='/browser'>Browser</NavLink>
       </div>
    </div>
  )
}
