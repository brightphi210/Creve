import React from 'react'

import './SectionFour.css'

const SectionFour = () => {
  return (
    <div>
        <section className='SectionFour'>
            <div data-aos="zoom-in-right" data-aos-duration="1000">
                <h2>Browse talent by category</h2>
                <p>looking for job <i>Browse job</i></p>
            </div>


            <div className='sectionFourDiv' data-aos="fade-up" data-aos-duration="3000">
                <div className='SectionFour-left'>
                    <h3>Design / Creative</h3>
                    <div className='ratingDiv'>
                        <p><i class="uil uil-star"></i> 4/5</p>
                        <p>300 + skils</p>
                    </div>
                </div>


                <div className='SectionFour-left' data-aos="fade-up" data-aos-duration="3000">
                    <h3>Sales / Marketing</h3>
                    <div className='ratingDiv'>
                        <p><i class="uil uil-star"></i> 4/5</p>
                        <p>300 + skils</p>
                    </div>
                </div>


                <div className='SectionFour-left' data-aos="fade-up" data-aos-duration="3000">
                    <h3>Funiture / Ulphostries</h3>
                    <div className='ratingDiv'>
                        <p><i class="uil uil-star"></i> 4/5</p>
                        <p>300 + skils</p>
                    </div>
                </div>


                <div className='SectionFour-left' data-aos="fade-up" data-aos-duration="3000">
                    <h3>Development / Tech</h3>
                    <div className='ratingDiv'>
                        <p><i class="uil uil-star"></i> 4/5</p>
                        <p>300 + skils</p>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default SectionFour