import "./NavbarStyles.css";

import React from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

// useState is used for click functionality
const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick =() => { setClick(!click);
  }

  return (
    <div className="header">
      <Link to ="/">
        <h1>My Portfolio</h1>
      </Link>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Project">Project</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      {/* handle click is used to togggle between hamburer and cross */}
      <div className="hamburger" onClick={handleClick}>
        {click?( <FaBars size={20} style={{color: '#fff'}} />) :(
        <FaTimes size={20} style={{color: '#fff'}} />
        )}
      </div>
    </div>
  )
}

export default Navbar
