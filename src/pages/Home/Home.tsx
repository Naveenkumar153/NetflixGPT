import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <NavLink to={'/'}>Back</NavLink>
      <h1>Home</h1>
    </div>
  )
}
