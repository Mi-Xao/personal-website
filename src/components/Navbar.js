import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import x from '../images/xicon.png'
import hamburger from '../images/menubutton.png'
import logo from '../images/bunnylogo.png'

function Navbar() {

  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => setNavToggle(!navToggle);
  const closeNavToggle = () => setNavToggle(!navToggle);

  return (
    <nav className='navbar'>
      <div className='bar'>
        <Link to='/' className='navbar-logo'>
          <img src={logo} width='50' alt='logo'/>
        </Link>
        <div className='menu-icon' onClick={handleNavToggle}>
            {navToggle ? <img src={x} width="20" height="20" alt='x'/> : 
              <img src={hamburger} width="20" height="20" alt='hamburger'/>}
        </div>
      </div>
      <ul className={navToggle ? 'link-options' : 'ul-inactive'}
          onClick={closeNavToggle}>
        <li className='navbar-li link-home'>
            <Link to='/' className='navbar-link'>home</Link>
          </li>
          <li className='navbar-li link-projects'>
            <Link to='/projects' className='navbar-link'>projects</Link>
          </li>
          <li className='navbar-li link-contact'>
            <Link to='/contact' className='navbar-link'>links</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar