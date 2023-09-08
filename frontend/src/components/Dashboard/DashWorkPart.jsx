import React, {useState, useEffect, useContext} from 'react'

import './CSS/dashWorkPart.css'
import AuthContext from '../../utils/AuthContext'
import newEmptyImage from './images/empty.jpg'

const DashWorkPart = () => {

    let {authTokens} = useContext(AuthContext)
    

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

            console.log(data)
          } catch (error) {
            console.error('Error fetching instructor courses:', error);
          }
        };
    
        fetchCreativeProduct();
      }, []);
  return (
    
    <div>
        <section className='workSection'>
            <div className='workDesc'>
              <p><i class="uil uil-clipboard-notes"></i> List of works</p>
            </div>
            { creativeProducts.length === 0 ? (
              <div className='emptyDiv'>
                <img className='emptyImage' src={newEmptyImage} alt="" />
                <p className='emptyMessage'>No creative products available.</p>
              </div>
            ):(

              <div className='dashProductDivs'>
                  {creativeProducts.map ((product) => (
                      <div className='dashProduct'>
                        <img key={product.id} src={product.image} alt="" />

                        <div className='profileImage'>
                          <img key={product.id} src={product.creator.profilePic } alt="" />
                          <p key={product.id}>@{product.creator.username}</p>
                        </div>
                      </div>
                  ))}
              </div>
            )
            }
        </section>
    </div>
  )
}

export default DashWorkPart