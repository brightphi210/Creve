import React from 'react'
import './creativeModal.css'

const CreativeModal = () => {
  return (
    <div>
        <section className='creativeModal'>
            <div className='creativeDiv'>
                <i class="uil uil-multiply"></i>
                <form action="" className='modalForm'>
                    <i class="uil uil-search mySearch"></i>
                    <input type="text" placeholder='Search something . .'/>
                    <button>Search</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default CreativeModal