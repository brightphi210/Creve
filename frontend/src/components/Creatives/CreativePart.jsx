import React from 'react'
import { useState, useEffect } from 'react'
import './creativePart.css'
import item from './craves.png'


const CreativePart = () => {
  const myUrl = "http://127.0.0.1:8000/api/creative/register/"
  const [creatives, setCreatives] = useState([])
  

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


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
        <section className='creativePart'>
          
          <form action="" className='myFormNew'>
            <input type="text"  placeholder='search something . . '/>
            <button>Search</button>
            <p className='filterNew'><i class="uil uil-sort-amount-up sort"></i> Filter</p>
          </form>


          <div className='creativeProfileDiv'>
            {creatives.map((creative) =>(
              
              <div className='creativeEach'>
                  <div className='eachDiv'>
                    <img src={creative.profilePic} alt="" />
                    <h2>{creative.name}</h2>
                    <p>@{creative.username}</p>
                  </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default CreativePart
