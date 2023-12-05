import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as moon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as fullMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({mode, setMode}) {

  const handleClick = () => {
    if(mode === "dark"){
      setMode("light");
    } else {
      setMode("dark");
    }
    sessionStorage.setItem("mode", mode)
  }

  return (
    <nav className={mode === "dark" ? "dark" : ""} >
        <h1>Where in the world ?</h1>
        <div onClick={handleClick} className="dark-toggle">
            {
              mode === "dark" ?
              <FontAwesomeIcon icon={fullMoon} />
              :
              <FontAwesomeIcon icon={moon} />
            }
            <p>Dark Mode</p>
        </div>
    </nav>
  )
}
