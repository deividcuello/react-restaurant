import React from 'react'
import { useState } from 'react'
import './header.css'

function Header() {

  const [active, isActive] = useState(false);

  const handleResize = () => {
    window.innerWidth > 767 && !active ? isActive(!active) : "";
    window.innerWidth < 767 && active ? isActive(!active) : "";
  }

  window.addEventListener('resize', handleResize)
  
  const handleClick = () => {
    active ? isActive(!active) : "";
  }

  

  return (
    <header>
        <nav className='d-flex justify-between container align-center relative'>
            <div className="brand d-flex align-center justify-between gap-1">
                <i className="fa-solid fa-martini-glass-citrus white-text"></i>
                <a href="#"><h1>Deivid's Delicious</h1></a>
            </div>
            <ul className={`${active ? "d-flex" : "d-none"} flex-1 justify-end`}>
                <li><a href="#" onClick={handleClick}>Home</a></li>
                <li><a href="#about" onClick={handleClick}>About</a></li>
                <li><a href="#menu" onClick={handleClick}>Menu</a></li>
                <li><a href="#contact" onClick={handleClick}>Contact</a></li>
            </ul>
            <i className="fa-solid fa-bars" onClick={() => isActive(!active)}></i>
        </nav>
    </header>
  )
}

export default Header