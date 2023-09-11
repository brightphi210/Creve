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
          {/* <div className='creativePartDiv'>
            {creatives.map((creative)=>(
              <div className='creativeProfileDiv'>
                <img src={creative.profilePic} alt="" />
              </div>
            ))}
          </div> */}
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
