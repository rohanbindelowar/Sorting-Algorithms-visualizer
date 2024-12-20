import React from 'react'
import "../styles/Header.css"
import logo from "../assets/image/logo.png"

const Header = () => {
  return (
    <div className='header'>
       <img className="logo" src={logo} />
        <div className="heading">
        
            Sorting Algorithm Visualizer
        </div>
    </div>
  )
}
export default Header;


