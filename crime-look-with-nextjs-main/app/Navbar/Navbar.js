'use client'
import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Link from 'next/link'
import Image from 'next/image'
import { FaSignInAlt, FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const HideHamburgerMenu = () =>{
    setIsActive(!isActive);
  }

  return (
    <div className="navbar-container">
      <div className="top-ribbon">
        <p className="ribbon-text-1 text-animation-1">Published from Madhya Pradesh, Uttar Pradesh and Chattisgarh</p>
        <p className="ribbon-text-2 text-animation-2">National Hindi Monthly Magazine</p>
        <div className="icon-box">
          <FaFacebookF color="white" size={20} className="ribbon-icon" />
          <FaGooglePlusG color="white" size={20} className="ribbon-icon" />
          <FaTwitter color="white" size={20} className="ribbon-icon" />
        </div>
      </div>
      <div className="navbar-title-container">
        <div className="navbar-title-1"></div>
        <Image src='/logo.svg' className="img" alt="logo" width={130} height={50} />
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-list-container ${isActive ? 'active' : ''}`}>
        <ul className="navbar-list">
          <li><Link className="link" onClick={HideHamburgerMenu} href='/' style={{textDecoration: 'none'}}>Main Page</Link></li>
          <li><Link className="link" onClick={HideHamburgerMenu} href='/about' style={{textDecoration: 'none'}}>About Us</Link></li>
          <li><Link className="link" onClick={HideHamburgerMenu} href='/gallery' style={{textDecoration: 'none'}}>Gallery</Link></li>
          <li><Link className="link" onClick={HideHamburgerMenu} href='/contact' style={{textDecoration: 'none'}}>Contact</Link></li>
          <li><Link className="link" onClick={HideHamburgerMenu} href='/davp-rni' style={{textDecoration: 'none'}}>DAVP/RNI</Link></li>
          <li><Link className="link advertisement" onClick={HideHamburgerMenu} href='/advertisement' style={{textDecoration: 'none'}}>Advertising Rate</Link></li>        
        </ul>
        <Link style={{textDecoration: 'none'}} href='/login'>
          <button className="login-button" onClick={HideHamburgerMenu}>
            <FaSignInAlt className="login-icon" />
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;