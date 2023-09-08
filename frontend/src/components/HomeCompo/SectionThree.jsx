 import React from 'react'

import './SectionThree.css'

import howImage from './images/howitworks.jpg'

const SectionThree = () => {
  return (
    <div>
      <section className='sectionThree'>

        <div className='sectionThreeDiv' data-aos="zoom-in-up" data-aos-duration="1000">

            <div >
                <h2>How does it work?</h2>
                <h4><i class="uil uil-check-circle"></i> Choose perfect talent</h4>
                <p>
                    Browse talent profiles. 
                    Compare bio and select the best one. 
                </p>
            </div>


            <div>
                <h4><i class="uil uil-check-circle"></i> Drop a required message </h4>
                <p>
                    Simply drop a project or contest for what you need done 
                    and you will recieve reply within minutes.
                    and work will be done.
                </p>
            </div>

            <div>
                <h4><i class="uil uil-check-circle"></i> Pay when you’re satisfied</h4>
                <p>
                    Pay securely using our Milestone Payment system. 
                    Release payments when it has been completed 
                    and you're 100% satisfied.
                </p>
            </div>
        </div>


        <div className='imageDiv' data-aos="fade-up" data-aos-duration="3000">
            <img src={howImage} alt="" />
        </div>

      </section>
    </div>
  )
}

export default SectionThree
