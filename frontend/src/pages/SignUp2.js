import React, { useState } from 'react'
import './login.css'

import { Link, Navigate } from'react-router-dom'
import mylogo from'./images/craves.png'
import bgImage from'./images/login-img1.png'
const SignupTwo = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false) 

    let url = 'http://127.0.0.1:8000/api/user/register/'


    const submit = async (e) => {
        e.preventDefault();
        const userData = {name, username, email, password };

        try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });

            const data = await response.json();
            if (data.success) {
              console.log('User registration successful!');
            } else {
              console.error('User registration failed.');
            }

        } catch (error) {
            console.error('Error occurred while registering the user:', error);
          }
        setRedirect(true)
    }

    if(redirect){
        return <Navigate to='/login' />
    }

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
                <h2>Register as User</h2>
                    <Link to={'/'} ><p><i class="uil uil-arrow-left"></i> Back to home</p></Link>
                </div>

                <form action="" onSubmit={submit}>
                    <label htmlFor="">Full Name</label>
                    <input 
                        type="text" 
                        // placeholder="Enter your Name" 
                        value={name}
                        required
                        onChange={e=> setName(e.target.value)}
                    />

                    <label htmlFor="">Email Adress</label>
                    <input 
                        type="email" 
                        // placeholder="Enter your Email" 
                        value={email}
                        required
                        onChange={e=> setEmail(e.target.value)}
                    />

                    <label htmlFor="">Username</label>
                    <input 
                        type="tex" 
                        // placeholder="Enter username" 
                        value={username}
                        required
                        onChange={e=> setUsername(e.target.value)}
                    />

                    <label htmlFor="">Password</label>
                    <input 
                        type="password" 
                        // placeholder="Enter your Password" 
                        value={password}
                        required
                        onChange={e=> setPassword(e.target.value)}
                    />

                    <button type='submit'>Sign Up</button>

                    <p>
                        Already have an account ?
                        <Link to={'/' + 'login'}> <span>Login</span></Link>
                    </p>
                </form>
            </div>
        </section>
    </div>
  )
}

export default SignupTwo