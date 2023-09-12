
import React, { useState, useEffect } from 'react'
import './workPart.css'
import WorkModal from './workModal'
import WorkFiltered from './WorkFiltered'

const WorkPart = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const url = 'http://127.0.0.1:8000/api/products/'
  const [searchQuery, setSearchQuery] = useState('');
  const urla = `http://127.0.0.1:8000/api/products/?search=${searchQuery}`
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


  const fetchData2 =  async (e) =>{
    e.preventDefault()
    try{
      const response = await fetch(urla,{
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
  }, [searchQuery]);


  
  
  return (
    <div>
      <section className='workSection'> 
        <div className='workSectionDiv'>
          <form action="" className='myForm' onSubmit={fetchData2}>
            <input 
            type="text" 
            placeholder='Search here . . ' 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit'>Search</button>
          </form>

          <ul>
            <li>Discover</li>
            <li>Web/App</li>
            <li>Furnitures</li>
            <li>Fashions</li>
            <li>Cobbling</li>
            <li>UI/UX</li>
          </ul>

          <div className='workBtn'>
            <button onClick={openModal}><i class="uil uil-sort-amount-down"></i> Filters</button>
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
      <WorkModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default WorkPart