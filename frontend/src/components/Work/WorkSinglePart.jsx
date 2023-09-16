
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from 'react-router-dom';

import './workSinglePart.css'

const WorkSinglePart = () => {
    const [myProduct, setMyProduct] = useState('')
    const { id } = useParams();
  
    useEffect(() =>{
      const url = `http://127.0.0.1:8000/api/products/${id}/`
  
      fetch(url)
      .then((res) => {return res.json()})
      .then((data) => setMyProduct(data))
      .catch(err => console.log(err))
    }, [])
  return (
<div className='productSingleGenDiv'>
        <section className='productSingleDiv'>
              <div >
                {myProduct ? 
                  <div>
                    <Link to={'/' + 'works'}><i class="uil uil-multiply creativeClose"></i></Link>
                    
                    <div className="productSingleDivFlex">
                        <img src={myProduct.creator.profilePic} alt="" />
                        <div>
                            <h2>{myProduct.name}</h2>
                            <p>{myProduct.creator.name}</p>
                        </div>

                        <button className="proBtn">Hire me</button>
                    </div>
                    <div className="mainImage"><img src={myProduct.image} alt="" /></div>
                    <div className="proDescDiv">
                        <h3>{myProduct.description}</h3>
                        <p>Want to say hi?  <i class="uil uil-angle-down"></i></p>
                        <p className="emailP">Drop us a few lines at <span>{myProduct.creator.email}</span></p>
                    </div>
                    <div className="mainImage"><img src={myProduct.image2} alt="" /></div>
                    <div className="proSideBar">
                        <img src={myProduct.creator.profilePic} alt="" />
                        <i class="uil uil-heart"></i>
                        <i class="uil uil-comment"></i>
                        <i class="uil uil-share"></i>
                    </div>
                  </div>
                 : null }
            </div>
        </section>
    </div>
  )
}

export default WorkSinglePart