
import React from 'react'
import './CSS/topbar.css'
import { Link } from 'react-router-dom';

import AuthContext, { useAuth } from '../../utils/AuthContext';
import { useEffect, useState, useContext } from 'react';
import logoImage from './images/Creve.png'

import userImage from './images/user.png'
const TopBar = () => {
  let {user, logoutUser} = useContext(AuthContext)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openMenu = () => {
    setIsNavOpen(true)
  };


  const closeMenu = () => {
    setIsNavOpen(false)
  };
  return (
    <div>
      <header>
        <section className='topBarSection'>
          
          <div className='inputSection'>
            <Link to={'/'}><img src={logoImage} alt="" /></Link>


            <form action="" className='form'>
              <i class="uil uil-search mysearchIcon"></i>
              <input type="text" placeholder='search something . . .' />
            </form>
          </div>
          
          <ul className={`dashLinks ${isNavOpen ? "open" :"close"} `}>
            <Link to={'/' + 'dashboard'}><li>Dashboard</li></Link>
            <Link to={'/' + 'dashboard/create'}><li>Create</li></Link>
            <Link to={'/' + 'dashboard/work'}><li>Works</li></Link>
            <li>Reviews</li>
            <li>Messages</li>
            <button className='login' onClick={logoutUser}><i class="uil uil-arrow-down-left"></i> Logout</button>
            <img src={userImage} alt="" />
            <i class="uil uil-bell"></i>
            <i class="uil uil-multiply topIcons newIcons" onClick={closeMenu}></i>
          </ul>

          <div className='proSection'>
              <i class="uil uil-apps topIcons" onClick={openMenu}></i>
          </div>


        </section>
        
      </header>
    </div>
  )
}

export default TopBar