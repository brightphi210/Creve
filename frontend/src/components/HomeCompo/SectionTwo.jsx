import React from 'react'
import './SectionTwo.css'

import { useState, useEffect } from 'react'
import axios from 'axios'


import userImage from './images/default.png'

import { Link } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const SectionTwo = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.how 
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const url = "http://127.0.0.1:8000/api/products/"
  // const profileUrl = "http://127.0.0.1:8000/api/creativeProfile/"

  const [products, setProducts] = useState([])

  const limitedProducts = products.slice(0, 5);

  const fetchProduct = () => {

    axios.get(url).then((res) => {

      setProducts(res.data)
      console.log(res.data)

    }).catch(err => {
      console.log(err)
    })
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <section className='SectionTow'>
        <h2>Popular Service</h2>
        <div className='SectionTwoDiv'>

          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            itemClass="carousel-item-padding-60-px"
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
          >


            {limitedProducts.map(product => (
              <div className='SectionEachDivGen' >
                <div className='SectionEachDiv' data-aos="zoom-up">
                  <div className='SectionTowImage'>
                    <img key={product.id} src={product.image} alt="" />
                  </div>

                  <div className='overlay'>
                    <p key={product.id}>{product.name}</p>
                    <i class="uil uil-heart-alt icons" ></i>
                  </div>
                </div>

                <div className='SectionTwoUser'>
                  <div >
                    <img key={product.id} src={product.creator.profilePic || '/media/profile_pics/default.png' } alt="" />
                  </div>
                  <div className='profilePart'>
                    <p key={product.id}>{product.creator.name}</p>
                    <button>Profile</button>
                  </div>
                  <span><i class="uil uil-heart-alt heart" ></i>30</span>
                </div>

              </div>
            ))}
          </Carousel>
            <Link to={'/' + 'works' }><button className='btn'>View Work <i class="uil uil-arrow-right"></i></button></Link>
        </div>

      </section>
    </div>
  )
}

export default SectionTwo
