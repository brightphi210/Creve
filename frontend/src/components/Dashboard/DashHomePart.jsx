
import React from 'react'

// import { jwtDocode } from 'jwt-decode' 

import jwt_decode  from 'jwt-decode'
import './CSS/dashHomePart.css'
import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import emptyImage from './images/empty.jpg'


import AuthContext from '../../utils/AuthContext';


const DashHomePart = ({ onSubmit }) => {

  


  const location = useLocation();
  
  const state = location.state || {};
  const successMessage = state.successMessage;
  // const successMessage1 = state.successMessage;


  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [successMessage]);


  const [creativeProducts, setCreativeProducts] = useState([]);

  useEffect(() => {
    const fetchCreativeProduct = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/creativeProducts/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${authTokens.access}`
            // Add any authentication headers if required
          },
        });

        const data = await response.json();
        setCreativeProducts(data);
      } catch (error) {
        console.error('Error fetching instructor courses:', error);
      }
    };

    fetchCreativeProduct();
  }, []);




  const [file, setFile] = useState(null);

  const storedToken = localStorage.getItem('authToken');
  let {authTokens} = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  
  console.log(authTokens.access);
  const decodedtoken = jwt_decode(storedToken)
  console.log('THis is ur token', decodedtoken.user_id)

  const userId = decodedtoken.user_id
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('profile_pic', file);

    fetch('https://gen-zsquare.com/api/userprofile/update/46', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authTokens.access}`, // Include your authentication token
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Profile picture updated successfully:', data);
        // Handle any additional logic or UI updates
      })
      .catch(error => {
        console.error('Error updating profile picture:', error);
        // Handle errors and update UI accordingly
      });
  };
  return (
    <div>
      <section className='dashHomePart'>
      {isVisible && successMessage && <p className='loginMessage'><i class="uil uil-exclamation-octagon"></i> {successMessage}</p>}
        <div className='dashHomePartFlex'>
          <div >

            <div className='backHome'>
              <p> <i class="uil uil-apps"></i> Welcome to your dashboard</p>
            </div>
            <div className='secttionCards'>

            
              <div className='reviewsSection one'>
                <h3><i class="uil uil-archive"></i> {creativeProducts.length}</h3>
                <p>Products</p>
              </div>
            


              <div className='reviewsSection two'>
                <h3><i class="uil uil-heart"></i> 10</h3>
                <p>Favourites</p>
              </div>


              <div className='reviewsSection three'>
                <h3><i class="uil uil-eye"></i> 7</h3>
                <p>Reviews</p>
              </div>

              <div className='reviewsSection four'>
                <h3><i class="uil uil-comment-alt-lines"></i> 100</h3>
                <p>Messages</p>
              </div>
              
            </div>


            <div>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpdate}>{isLoading ? 'Loading . . ' : 'Submit'}</button>
            </div>
            {/* <div className='workDes'>
              <p><i class="uil uil-clipboard-notes"></i> List of works</p>
            </div>
            { creativeProducts.length > 0 ? (
              <div className='dashProductDiv'>
                {creativeProducts.map(product => (
                    <div className='dashProducts'>
                      <img key={product.id} src={product.image} alt="" />
                      <p key={product.id}>{product.name}</p>
                    </div>
                  ))}
            </div>
            ):(
              <div className='emptyDiv'>
                <img className='emptyImage' src={emptyImage} alt="" />
                <p className='emptyMessage'>No creative products available.</p>
              </div>
            )
            } */}

            
          </div>



            {/* <div className='dashRecent'>
              <h3>Recent Activity</h3>

              <div className='message'>
                <p><i class="uil uil-comment-alt-message"></i> Message</p>
                <h4> I Love your work, I need a logo</h4>
                <p className='span2'>July 10 2023</p>
              </div>

              <div className='message'>
                <p><i class="uil uil-eye"></i> Review</p>
                <h4> Good work, He gave me nice job</h4>
                <p className='span2'>Oct. 04 2023</p>
              </div>

              <div className='message'>
                <p><i class="uil uil-heart"></i> Favourite</p>
                <h4> You just got a Favourites</h4>
                <p className='span2'>May 30 2023</p>
              </div>

              <button >See More</button>
            </div> */}
        </div>
      </section>
    </div>
  )
}

export default DashHomePart
