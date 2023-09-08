
import './Header.css'
import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import logo from './images/craves.png'

import AuthContext, { useAuth } from '../../utils/AuthContext';
const Header = () => {

  // const {user, logoutUser} = useContext(AuthContext)
  let {user, logoutUser} = useContext(AuthContext)

  // ================ CHANGE THEME =============================
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);


  // ======================= OPEN AND CLOSE NAV-BAR =================

  const [isNavOpen, setIsNavOpen] = useState(false)
  const [redirect, setRedirect] = useState(false);


  const openMenu = () => {
    setIsNavOpen(true)
  };


  const closeMenu = () => {
    setIsNavOpen(false)
  };


  return (
    <div className={`App ${theme}`} >
      <header className='header' >
            <div className='logo'>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            
            <ul className={`nav-ul ${isNavOpen ? "open" :"close"} `}>
                
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/'+'creatives'}><li>Find Talents</li></Link>
                <Link to={'/'+'works'}><li>Services</li></Link>


                <li className='dropdown'>Community <i class="uil uil-angle-down down"></i>
                <ul class="dropdown-content">
                  <li>Invite a Friend</li><hr />
                  <li>FAQS</li><hr />
                  <li>Blog</li><hr />
                  <li>Become a Talent</li>
                </ul>
                </li>


                <li className='dropdown'>Category <i class="uil uil-angle-down down"></i>
                  <ul class="dropdown-content">
                    <li>Funitures</li><hr />
                    <li>Web and Mobile</li><hr />
                    <li>Cobbling</li><hr />
                    <li>Fashion Design</li><hr />
                    <li>Photography</li><hr />
                  </ul>
                </li>


                <i class="uil uil-multiply closebtn" onClick={closeMenu}></i>
                
                {/* =================== Nav for small Screen ===================== */}
                <div className='nav_right'>
                  {user ? (
                    <>
                      <button className='login' onClick={logoutUser}>Logout</button>
                      <Link to={'/'+'dashboard'}><button className='dashboard'>Dashboard <i class="uil uil-arrow-up-right"></i></button></Link>
                    </>
                  ):
                  (
                    <>
                      <Link to={'/' + 'login'}><button className='login'>Login</button></Link>

                      <Link to={'/' + 'signup/Option'}><button className='register'>Get Started <i class="uil uil-arrow-up-right"></i> </button></Link>

                    </>
                  )}
              </div>
            </ul> 

                  
            <div className='nav_right'>

              {/* ===================== Nav for big screen ========================== */}
                  <div className='icons_class'>
                  <i class="uil uil-brightness-low icon" onClick={toggleTheme}></i>
                  </div>

                  {user ? (
                    <>
                      <button className='login' onClick={logoutUser}>Logout <i class="uil uil-arrow-up-right"></i> </button>
                      <Link to={'/'+'dashboard'}><button className='dashboard'>Dashboard <i class="uil uil-arrow-up-right"></i></button></Link>
                    </>
                  ):
                  (
                    <>
                      <Link to={'/'+'login'}><button className='login'>Login <i class="uil uil-arrow-up-right"></i></button></Link>

                      <Link to={'/'+'signup/Option'}><button className='register'>Get Startedc<i class="uil uil-arrow-up-right"></i></button></Link>

                    </>
                  )}

                  {/* {user && <p className='hello'>{user.username}</p>} */}
              </div>

            {/* <i class="uil uil-list-ul openbtn" onClick={openMenu}></i> */}
            <i class="uil uil-apps openbtn" onClick={openMenu}></i>
      </header>
    </div>
  )
}

export default Header
