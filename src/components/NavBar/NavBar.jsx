import React from 'react';
import "./NavBar.css";

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />

      <div className='nav-items'>
        <a href="#" className='nav-item'>Home</a>
        <a href="#" className='nav-item'>TV Shows</a>
        <a href="#" className='nav-item'>Movies</a>
        <a href="#" className='nav-item'>Latest</a>
        <a href="#" className='nav-item'>My List</a>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>

    </div>
  );
}

export default NavBar;
