import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
   const navStyle ={
    color: "white"
   }
  return (
    <div >
        <ul className='navLinks'>
            <Link style={navStyle} to="/">
            <li>Home</li>
            </Link>
            <Link style={navStyle} to="/Profiles">
            <li>Profiles</li>
            </Link>
            <Link style={navStyle} to="/Checkout">
            <li>CheckOut</li>
            </Link>
            <Link style={navStyle} to="/Return">
            <li>Return</li>
            </Link>
            <Link style={navStyle} to="/Login">
            <li>Login</li>
            </Link>
        </ul>
    </div>
  )
}

export default Nav