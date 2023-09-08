import React from 'react'

import './SectionFourNew.css'

import talentImage from './images/EN.webp'
const SectionFourNew = () => {
  return (
    <div>
        <section className='SectionFourNew' >
            <div className='talentImage' data-aos="fade-up" data-aos-duration="3000">
                <img src={talentImage} alt="" />
            </div>

            <div className='talentTextDiv' data-aos="fade-up" data-aos-duration="1000">
                <h2>For Creatives</h2>
                <h1>Attract Greate Clients</h1>
                <h3>
                    Meet clients you’re excited to work with and take 
                    your career or business <br /> to new heights.
                </h3>

                <h4> Creve Pro</h4>
                <p><i class="uil uil-shield-check"></i> Upgrade to Creve Pro to be rated among the top Creatives </p>
                <p><i class="uil uil-shield-check"></i> Greate opportunities in taking profiles close to clients </p>
                <p><i class="uil uil-shield-check"></i> Make profile standout </p>

                <button>Learn More </button>
                
            </div>
        </section>
    </div>
  )
}

export default SectionFourNew