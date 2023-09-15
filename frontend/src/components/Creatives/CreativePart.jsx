import React from 'react'
import { useState, useEffect } from 'react'
import './creativePart.css'


const CreativePart = () => {



  const [creatives, setCreatives] = useState([])
  const [creativeText, setCreativeText] = useState('')
  const myUrl = "http://127.0.0.1:8000/api/creative/register/"
  const myUrl2 = `http://127.0.0.1:8000/api/creative/register/?search=${creativeText}`
  
  const noResults = creatives.length === 0;

  const fetchData = async () =>{
    try{
      const response = await fetch(myUrl,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      })
      const data = await response.json();
      const creativeUsers = data.filter(user => user.is_creative);
      setCreatives(creativeUsers)


    }catch(e){
      console.log("There was an error fetching the data!!")
    }
  }

  const fetchData2 = async (e) =>{
    e.preventDefault()
    try{
      const response = await fetch(myUrl2,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      })
      const data = await response.json();
      const creativeUsers = data.filter(user => user.is_creative);
      setCreatives(creativeUsers)


    }catch(e){
      console.log("There was an error fetching the data!!")
    }
  }


  useEffect(() => {
    fetchData();
  }, [creativeText]);


  return (
    <div>
        <section className='creativePart'>
          
          <form className='myFormNew' onSubmit={fetchData2}>
            <div className='creativeSearchDiv'>
              <i class="uil uil-search creaIcon"></i>
              <input 
                type="text"  
                placeholder='search something . . '
                value={creativeText}
                onChange={(e) => setCreativeText(e.target.value)}
              />
            </div>
            <button type="submit">Search</button>
          </form>


          <div className='creativeProfileDiv'>
            {creatives.map((creative) =>(
              
              <div className='creativeEach'>
                {noResults ? (
                    <div>
                    <h1>No creatives found</h1>
                  </div>
                  ):(

                    <div className='eachDiv'>
                      <img src={creative.profilePic} alt="" />
                      <h2>{creative.name}</h2>
                      <p>@{creative.username}</p>
                    </div> 
                  )
                }
              </div>
            ))}
          </div>
        </section>
        {/* <CreativeModal  isOpen={isModalOpen} closeModal={closeModal}/> */}
        {/* <ProductSearchModal isOpen={isModalOpen} onClose={closeModal} /> */}
    </div>
  )
}

export default CreativePart
