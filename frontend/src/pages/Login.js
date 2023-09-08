import React, { useContext, useState } from 'react'
import './login.css'
import { Link, Navigate, redirect } from'react-router-dom'
import mylogo from'./images/craves.png'
import bgImage from'./images/login-img1.png'
import AuthContext from '../utils/AuthContext'
const Login = () => {

    let {loginUser} = useContext(AuthContext)


  return (
    <div>
        <section className='loginDiv'>
            <div className='loginimageDiv'>
                <div className='image'>
                    <img src={bgImage} alt="" />
                </div>
                <h3>Welcome to Creve Africa . . . .</h3>

            </div>
            <div className='formDiv'>
                <img className='myLogo' src={mylogo} alt="" />
                <div className='backHome'>
                    <h2>Login to your account</h2>
                    <Link to={'/'} ><p><i class="uil uil-arrow-left"></i> Back to home</p></Link>
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
        </section>
    </div>
  )
}

export default Login