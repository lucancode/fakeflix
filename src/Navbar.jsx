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
      </nav>
    </header>
  )
}

export default Navbar