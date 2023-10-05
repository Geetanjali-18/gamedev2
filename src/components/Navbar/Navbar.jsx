import React from 'react'
import { useState , useEffect } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import Logo from "../../assets/logo.jpg"

const Navbar = () => {
  // const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState((window.innerWidth <= 700));
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
      const handleResizing = () => {
          setIsSmallScreen((window.innerWidth <= 700));
      }
      window.addEventListener('resize', handleResizing);
      return () => {
          window.removeEventListener('resize', handleResizing);
      }
  }, []);

  return (
      <>
          {isSmallScreen && <div className={(showNavbar) ? "hamburger-menu close" : "hamburger-menu"} id="menu" onClick={() => setShowNavbar(!showNavbar)}>
                  <span></span>
                  <span></span>
              </div>}
          <nav className={(showNavbar && isSmallScreen) ? "navbar show" : "navbar"} id="navbar">
              <ul>
                  <li>
                      <Link to="/"  onClick={() => setShowNavbar(!showNavbar)}>HOME</Link>
                  </li>
                  <li>
                      <Link to='/gameRelease' onClick={() => setShowNavbar(!showNavbar)}>GAMES</Link>
                  </li>
                  <li>
                      <a href=""><img className = "navLogo" src={Logo}  onClick={() => setShowNavbar(!showNavbar)}  ></img></a>
                  </li>
                  <li>
                      <a  onClick={() => setShowNavbar(!showNavbar)}>EVENTS</a>
                  </li>
                  <li>
                      <a  onClick={() => setShowNavbar(!showNavbar)}>SPONSER</a>
                  </li>
              </ul>
          </nav>
      </>
  );
}

export default Navbar
