
import React from 'react'
import { useState, useContext, useEffect} from 'react';
import { Link, Navigate } from'react-router-dom'
import './CSS/dashCreatePart.css'
import AuthContext from '../../utils/AuthContext';

const DashCreatePart = () => {


  const [isVisible, setIsVisible] = useState(true);
  let {authTokens} = useContext(AuthContext)
    //   ==================== create Api ===========================
    let url = 'http://127.0.0.1:8000/api/products/create/'
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("");

    const [redirect, setRedirect] = useState(false) 

    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image);

      console.log(authTokens.access);
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', 
            "Authorization": `Bearer ${authTokens.access}`
          },
          body: formData
        });
  
        if (response.ok) {
          
          console.log("Product created successfully")
          setMessage ("Product created successfully !!")
          setImage("")
          setName("")
          setDescription("")
          
        } 
        
        else {
          console.log("Product Failed to create")
        }
      } catch (error) {
        console.log("Exceptional error: " + error)
      }

      setRedirect(true)
    };


    

    useEffect(() => {
      if (message) {
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
  
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [message]);


  return (
    <div>
        <section className='dashCreatePart'>
            <h2><i class="uil uil-lightbulb-alt"></i> Create Work Here</h2>
            {isVisible && message && <p className='loginMessage'>{message}</p>}
            <div className='dashCreateDiv'>

              {/* ====================== form ============================ */}
                <form action="" className='dashCreateformDiv' onSubmit={handleSubmit}>
                    <div className='formDivOne'>
                        <h3>Create New Item</h3>

                        {/* ============ upload ================= */}
                        <div className='formDivTwo' >
                            <label for="file-upload" class="upload-label">
                              <i class="uil uil-image"></i>
                              <p><span>PNG, JPG, GIF up to 2MB</span></p>
                              <span>Choose a file</span>
                              <input 
                                type="file" 
                                id="file-upload" 
                                class="input-file" 
                                accept="image/*" 
                                onChange ={(e) => setImage(e.target.files[0])}
                              />
                          </label>
                        </div> 


                        {/* ============== product Name ================= */}
                        <div className='inputOne'>
                            <label>Work Name</label>
                            <input 
                              name="name"
                              type='text'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                        </div>



                        {/* ============== product category ================= */}

                        {/* <label className='myCategory'>Category</label>
                        <select id="mySelect">
                            <option selected>-- select category -- </option>
                            <optgroup label="Web and Mobile">
                                <option value="Mobile App">Mobile App</option>
                                <option value="Website">Website Dev</option>
                            </optgroup>

                            <optgroup label="Furnitures">
                                <option value="Chair">Chairs</option>
                                <option value="Tables">Tables</option>
                            </optgroup>

                            <optgroup label="Fashions">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </optgroup>
                        </select>  */}


                        {/* ============== product description ================= */}

                        <div className='inputTwo'>
                            <label>Work Description</label>
                            <textarea 
                                 value={description}
                                 onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                    </div>

                    <div className='myBtn'>
                        <button type='submit'>Upload <i class="uil uil-arrow-up-right"></i></button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default DashCreatePart
