import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
        <h1>Where in the world ?</h1>
        <div className="dark-mode">
            {/* <p>{Icone}</p> */}
            <p>Dark Mode</p>
        </div>
    </nav>
  )
}
