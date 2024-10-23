import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);

  const cartArray =  useSelector((state)=>state.cartItem)
  console.log(cartArray);
  
  
  const [show, setshow] = useState(false)
  const change =()=>{
    setshow(!show)
  }
  
  return (
    <>
      <div className='w-full min-h-30 bg-violet-500 p-4 md:flex items-center'>
      <div className='flex w-full'>
       <Link to={'/'}> <h1 className='text-white text-3xl font-bold'><FontAwesomeIcon icon={faCartShopping} /> E-CART</h1>  </Link>
        <button onClick={change} className='ms-auto md:hidden border border-white rounded p-2'><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></button>
      </div>

      { show && <div className='mt-4 flex md:hidden'>
        <Link to={'/wishlist'}><button className='flex items-center p-4 border border-white rounded px-4 py-3  text-white me-4 hover:bg-white hover:text-violet-600'><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} />  WishList <span className='px-2 border-slate-400 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span></button></Link>
        <Link to={'/cart'}><button className='flex items-center p-4 border border-white rounded px-4 py-3  text-white me-4 hover:bg-white hover:text-violet-600'><FontAwesomeIcon icon={faCartShopping} style={{color: "#099f0c",}} /> Cart <span className='px-2 border-slate-400 bg-slate-400 rounded ms-2'>{cartArray?.length}</span></button></Link>
      </div>  }


       <div className='md:flex ms-auto hidden'>
        <Link to={'/wishlist'}><button className='flex items-center p-4 border border-white rounded px-4 py-3  text-white me-4 hover:bg-white hover:text-violet-600'><FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} />  WishList <span className='px-2 border-slate-400 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span></button></Link>
        <Link to={'/cart'}> <button className='flex items-center p-4 border border-white rounded px-4 py-3  text-white me-4 hover:bg-white hover:text-violet-600'><FontAwesomeIcon icon={faCartShopping} style={{color: "#099f0c",}} /> Cart <span className='px-2 border-slate-400 bg-slate-400 rounded ms-2'>{cartArray?.length}</span></button></Link>
      </div> 
      </div>
    </>
  )
}

export default Header
