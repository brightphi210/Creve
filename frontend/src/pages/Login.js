import React, { useContext, useState } from 'react'
import './login.css'
import { Link, Navigate, redirect } from'react-router-dom'
import mylogo from'./images/craves.png'
// import bgImage from'./images/integrations.mp4'
import bgImage from'./images/dribbble.mp4'
import AuthContext from '../utils/AuthContext'
const Login = () => {

    let {loginUser} = useContext(AuthContext)


  return (
    <div>
        <section className='loginDivGen'>
            <div className='loginDiv'>
                <div className='loginimageDiv'>
                    <div className='image'>
                        <video src={bgImage} alt=""  
                        autoPlay 
                        controls={false} 
                        muted loop
                        preload="auto"
                        className='myVideo'
                        />
                    </div>
                    {/* <h3>Welcome to Creve Africa . . . .</h3> */}

                </div>
                <div className='formDiv'>
                    <img className='myLogo' src={mylogo} alt="" />
                    <div className='backHome'>
                        <h2>Login to your account</h2>
                        <Link to={'/'} ><h4 className=''><i class="uil uil-arrow-left"></i> Back to home</h4></Link>
                    </div>

                    <form action="" onSubmit={loginUser} >
                        <label htmlFor="">Email Address</label>
                        <input 
                            type="email" 
                            name='email' 
                            required
                        />

                        <label htmlFor="">Password</label>
                        <input 
                            type="password" 
                            name='password' 
                            required
                        />


                        <button type='submit'>Login</button>

                        <p>Don't have account ? <Link to={ '/' + 'signup/Option'}><span >Create An Account</span></Link></p>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login