import React from 'react'
import { useState } from 'react'
import './header.css'

function Header() {

  window.addEventListener('DOMContentLoaded', updateNav);
window.addEventListener('scroll', updateNav);

function updateNav() {
  const currentRegion = [...document.querySelectorAll("section:not([id=''])")]
    .find(e=>e.getBoundingClientRect().top>=0)
    
  if(currentRegion) {
    console.log(currentRegion.id)
    window.location.hash = `#${currentRegion.id}`;
    
    [...document.querySelectorAll(`a:not([href='#${currentRegion.id}'])`)]
      .forEach(a=>a.classList.remove('active'))
      
    document.querySelector(`a[href='#${currentRegion.id}']`)?.classList.add('active')
  }
}


  const [activeMenu, isactiveMenu] = useState(true);
  const [ActiveLink, isActiveLink] = useState(0);

  const handleResize = () => {
    window.innerWidth > 767 && !activeMenu ? isactiveMenu(!activeMenu) : "";
    window.innerWidth <= 767 && activeMenu ? isactiveMenu(!activeMenu) : "";
  }

  window.addEventListener('resize', handleResize)
  
  const handleClick = (e, number) => {
    activeMenu && window.innerWidth < 767 ? isactiveMenu(!activeMenu) : "";
    
    document.querySelectorAll('header ul a').forEach((element, index) => {
      if(element.classList.contains('activeMenu')) element.classList.remove('activeMenu')
      if(index == number) isActiveLink(number)
    });
  }

  return (
    <header>
        <nav className='d-flex justify-between container align-center relative'>
            <div className="brand d-flex align-center justify-between gap-1">
                <i className="fa-solid fa-martini-glass-citrus white-text"></i>
                <a href="#"><h1>Deivid's Delicious</h1></a>
            </div>
            <ul className={`${activeMenu ? "d-flex" : "d-none"} flex-1 justify-end`}>
                <li><a href="#home" onClick={() => handleClick(event, 0)} className={`${ActiveLink == 0 ? "active" : ""}`}>Home</a></li>
                <li><a href="#about" onClick={() => handleClick(event, 1)} className={`${ActiveLink == 1 ? "active" : ""}`}>About</a></li>
                <li><a href="#menu" onClick={() => handleClick(event, 2)} className={`${ActiveLink == 2 ? "active" : ""}`}>Menu</a></li>
                <li><a href="#contact" onClick={() => handleClick(event, 3)} className={`${ActiveLink == 3 ? "active" : ""}`}>Contact</a></li>
            </ul>
            <i className="fa-solid fa-bars" onClick={() => isactiveMenu(!activeMenu)}></i>
        </nav>
    </header>
  )
}

export default Header