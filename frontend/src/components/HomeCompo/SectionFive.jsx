
import React from 'react'
import './SectionFive.css'


import guide1 from './images/guide1.webp'

import guide2 from './images/guide2.webp'

import guide3 from './images/guide3.webp'


const SectionFive = () => {
  return (
    <div>
      <section className='SectionFive'>
      <div className='sectionFiveMore'>
        <h2>Guild to help you grow your brand</h2>
      </div>

        <div className='guildImagesDiv'>
            <div className='guildDiv'> 
                <img src={guide1} alt="" />
                <h2>Start Online Business & work from home</h2>
                <p>Lorem ipsum dolor sitmollitia, officia.</p>
            </div>

            <div className='guildDiv'>
                <img src={guide2}alt="" />
                <h2>Start Online Business & work from home</h2>
                <p>Lorem ipsum dolor sitmollitia, officia.</p>
            </div>

            <div className='guildDiv'>
                <img src={guide3} alt="" />
                <h2>Start Online Business & work from home</h2>
                <p>Lorem ipsum dolor sitmollitia, officia.</p>
            </div>
        </div>

        <button>See More </button>

      </section>
    </div>
  )
}

export default SectionFive
