import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
  // use state hook to store and set value 
  const [showDarkBackground, setShowDarkBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) { // scroll down (vertical) by 150px, then show the nav background color
          setShowDarkBackground(true);
      } else {
          setShowDarkBackground(false); // else keep it hidden
      }
    };

    // call the function to be executed using event listener to check the action performed on the window
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once
  
  return (
    <header className='header'>
      <nav className={showDarkBackground ? 'nav dark-bg' : 'nav'}>
      <h2 className='logo'>FAKEFLIX</h2>

        {/* <div className="account_btn">
          <button className='signin'>Sign In</button>
          <button className='signup'>Sign Up</button>
        </div> */}
        <div className='group'>
          <svg viewBox="0 0 24 24" aria-hidden="true" className='icon'>
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input className='input' type='search' placeholder='Search' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar