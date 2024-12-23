import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Browser() {
  return (
    <div>
      <NavLink to={'/'}>Back</NavLink>
      <h1>Home</h1>
    </div>
  )
}
