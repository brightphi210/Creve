import React from 'react'
import { Link } from 'react-router-dom'
import './SignOption.css'
import myImage from './images/craves.png'

const SignOption = () => {
  return (
    <div className='signSectionOne'>
        {/* <img src={myImage} alt="" /> */}
        <Link to={'/'} ><h3><i class="uil uil-arrow-left"></i> Back to home</h3></Link>
        <Link to={'/' + 'creative/signup'}><button>Continue as Creative <i class="uil uil-arrow-up-right"></i></button></Link>
        <Link to={ '/' + 'user/signup'}><button>Continue as User <i class="uil uil-arrow-up-right"></i></button></Link>
        <p>The Goal - Empowering Millions of Africans . . .</p>
    </div>
  )
}

export default SignOption