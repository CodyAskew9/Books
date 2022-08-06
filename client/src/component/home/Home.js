import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const returnStyle={
  color: "#1466c4"
  }
  const checkOutStyle={
  color: "#945dcf"
  }
  return (
    <div className='home'>
      <Link style={checkOutStyle} to={"/Profiles"}>
    <div className='checkOutSide'>
        <h1>CheckOut A Book</h1>

    </div>
      </Link>
     <div className='returnSide'>
      <Link style={returnStyle} to={"/Profiles"}>
        <h1>Return a book</h1>
        </Link>
    </div>
    </div>
  )
}

export default Home