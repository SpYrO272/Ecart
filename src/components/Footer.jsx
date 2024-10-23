import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='min-h-60 bg-violet-500 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div className="p-2">
            <h1 className='text-white text-3xl font-bold'><FontAwesomeIcon icon={faCartShopping} /> E-CART</h1>
            <p className='text-white mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequatur tenetur alias sed iusto commodi exercitationem enim excepturi cupiditate? Cumque facilis reprehenderit assumenda nisi inventore cum tempore voluptates dolorem blanditiis?</p>
        </div>
        <div className=" p-2 text-white flex md:justify-center">
          <div>
            <h1 className='text-white text-3xl font-bold mb-5'>Links</h1>
            <Link to={'/'}><p>Home</p></Link>
            <Link to={'/wishlist'}><p>Wishlist</p></Link>
            <Link to={'/cart'}><p>Cart</p></Link>
          </div>
       </div>
        <div className="p-2 text-white flex md:justify-center ">
          <div>
            <h1 className='text-3xl font-bold mb-5'>Guides</h1>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className=" p-2 text-white px-0 md:px-5">
        <h1 className='text-3xl font-bold mb-5'>Contact US</h1>
          <div className='flex mt-5'>
            <input type="text" placeholder='Email id' className='w-5/6 p-2 rounded' />
            <button className='p-2 bg-orange-400 rounded ml-5'>Subscribe</button>
            
          </div>
          <div className="flex justify-between mt-5">
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </div>
        </div>

    </div>
  )
}

export default Footer