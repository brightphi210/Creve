
import './creativeSinglePart.css'

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';

const CreativeSinglePart = () => {
  const [myCreative, setMyCreative] = useState('')
  const { id } = useParams();

  useEffect(() =>{
    const url = `http://127.0.0.1:8000/api/creative/${id}/`

    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => setMyCreative(data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <div className='creativeSingleGenDiv'>
        <section className='creativeSingleDiv'>
              <div >
                {myCreative ? 
                  <div>
                    <Link to={'/creatives'}><i class="uil uil-multiply"></i></Link>
                    <p>{myCreative.id}</p>
                    <h2>{myCreative.name}</h2>
                    <img src={myCreative.profilePic} alt="" />
                  </div>
                 : null }
            </div>
        </section>
    </div>
  )
}

export default CreativeSinglePart
