import React from 'react'
import './creativeModal.css'
import { useEffect, useRef, useState } from 'react';

const CreativeModal = ({ isOpen, closeModal }) => {
  const modalRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  const myUrl2 = `http://127.0.0.1:8000/api/creative/register/?search=${searchQuery}`
  

  const handleSearch = async (e) =>{
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
      setSearchResults(creativeUsers)


    }catch(e){
      console.log("There was an error fetching the data!!")
    }
  }


  return (
    <div>
        <section className='creativeModal' >
            <div className='creativeDiv' ref={modalRef}>
                <form action="" className='modalForm' onSubmit={handleSearch}>
                    <i class="uil uil-search mySearch"></i>
                    <input 
                      type="text" 
                      placeholder='Search something . .'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                    <span onClick={closeModal} className='myCloseBtn'>Close</span>
                </form>
            </div>

            <div className='creativeProfileDiv'>
            {searchResults.map((creative) =>(
              
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

export default CreativeModal