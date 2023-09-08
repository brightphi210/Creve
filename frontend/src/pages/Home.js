import React from 'react'
import Header from '../components/HeaderCompo/Header'
import SectionOne from '../components/HomeCompo/SectionOne'
import SectionTwo from '../components/HomeCompo/SectionTwo'
import SectionThree from '../components/HomeCompo/SectionThree'
import SectionFour from '../components/HomeCompo/SectionFour'
import SectionFive from '../components/HomeCompo/SectionFive'
import SectionFourNew from '../components/HomeCompo/SectionFourNew'


// import React, { useState, useEffect } from 'react';



const Home = () => {

  return (
    <div>
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFourNew />
        <SectionFive />
    </div>
  )
}

export default Home