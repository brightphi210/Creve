import React from 'react'
import { useEffect, useRef } from 'react';

const WorkModal = ({ isOpen, closeModal }) => {
    const modalRef = useRef(null);

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

    
  return (
    <div>
        <section className='creativeModal' >
            <div className='creativeDiv' ref={modalRef}>
                {/* <i class="uil uil-multiply closeIcon" onClick={closeModal}></i> */}
                <form action="" className='modalForm'>
                    <i class="uil uil-search mySearch"></i>
                    <input 
                    type="text" placeholder='Search something . .'/>
                    <button>Search</button>
                    <span onClick={closeModal} className='myCloseBtn'>Close</span>
                </form>
            </div>
        </section>
    </div>
  )
}

export default WorkModal