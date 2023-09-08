import React from 'react'
import './SectionOne.css'
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';


function SectionOne() {

  const location = useLocation();
  const state = location.state || {};
  const successMessage = state.successMessage;


  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [successMessage]);


  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <section className='sectionOne'>
          {isVisible && successMessage && <p className='loginMessage1'> <i class="uil uil-exclamation-octagon"></i> {successMessage}</p>}
            <div className='sectionOneDiv' data-aos="fade-up" data-aos-duration="3000">
                <h1>Discover  Best <br /> <span>Talents </span> Around</h1>
                <p className='p1'>
                  Explore and Hire best talents around the you and accross Africa. 
                </p>
                <p className='p2'>
                  We help provide greate talents on various fields such as  Photography, Cobbling <br />
                  Web / Mobile Development,  Digital Marketing, Fashion Designing,
                   Furnitures etc.
                </p>
                <div className='sectionOne_buttons_div'>
                  <button>Hire Talent <i class="uil uil-arrow-up-right"></i></button>
                  <span>Join Our Team <i class="uil uil-arrow-up-right"></i></span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SectionOne