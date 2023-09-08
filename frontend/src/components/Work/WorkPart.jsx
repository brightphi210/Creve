
import React, { useState, useEffect } from 'react'
import './workPart.css'


const WorkPart = () => {

  const url = 'http://127.0.0.1:8000/api/products/'
  const [products, setProduct] = useState([])

  const fetchData =  async () =>{
    try{
      const response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      })
      const data = await response.json();
      setProduct(data)


    }catch(e){
      console.log("There was an error fetching the data!!")
    }
  }


  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <section className='workSection'> 
        <div className='workSectionDiv'>
          <form action="" className='myForm'>
            <input type="text" placeholder='Search here . . ' />
            <button>Seach</button>
          </form>

          <ul>
            <li>Discover</li>
            <li>Web</li>
            <li>Furnitures</li>
            <li>Fashions</li>
            <li>Cobbling</li>
            <li>Digital Art</li>
            <li>UI Designer</li>
          </ul>

          <div className='workBtn'>
            <button><i class="uil uil-sort-amount-down"></i> Filters</button>
          </div>
        </div>


        <div className='workProductDiv'>
          { products.map((product) => (
            
            <div className='workDiv'>
              <img src={product.image} alt="" />
              <h3 className='productOverlay'>{product.name}</h3>
              <div className='profileDiv'>
                <img src={product.creator.profilePic} alt="" />
                <div className='profileFlex'>
                  <p>{product.creator.name}</p>
                  <button>Profile <i class="uil uil-arrow-right"></i></button>
                </div>
                <span><i class="uil uil-heart"></i> 30</span>
              </div>
            </div>

          ))}
        </div>
      </section>
    </div>
  )
}

export default WorkPart