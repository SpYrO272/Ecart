import React from 'react'
import { faCartShopping, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slice/wishlistSlice'
import { addItemToCart } from '../redux/slice/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  const dispatch = useDispatch()
  
  const wishes =(item)=>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItem(item.id))
  }
  return (
    <>
      <h1 className='pt-32 text-center text-4xl text-violet-800'>Wishlist</h1>
      { wishlistArray?.length>0?
      <div className='mt-5 mb-10 px-10 md:grid grid-cols-4'>
        
        {wishlistArray?.map((item)=>(
            <div className=" p-2">
            <div className="p-3 rounded shadow-lg">
              <img className='w-full h-60' src={item?.image} alt="no image" />
              <h4 className='text-center text-3xl'>{item?.title.slice(0,25)}</h4>
              <p className='text-justify'>{item?.description.slice(0,120)}</p>
              <p className='text-2xl'>Price: <span className='text-violet-600'>$ {item?.price}</span></p>
              <div className='flex justify-between'>
                <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='p-3 rounded text-white'><FontAwesomeIcon icon={faTrashCan} style={{color: "#ff0000",}} /></button>
                <button onClick={()=>wishes(item)} className='p-3 rounded text-white'><FontAwesomeIcon icon={faCartShopping} style={{color: "#099f0c",}} /></button>
              </div>
            </div>
          </div>
          
        ))}
        
      </div>  
        :

      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div>
          <img src="https://i.pinimg.com/564x/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.jpg" alt="no image" className='w-full h-80' />
        </div>
        <div></div>
      </div>
      }
    </>
    
  )
}

export default Wishlist