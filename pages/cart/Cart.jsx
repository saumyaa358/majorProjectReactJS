import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'
import Heading from '../../components/heading/Heading';
import { assets } from '../../assets/assets';
import { RiDeleteBin6Line } from "react-icons/ri";


const Cart = () => {

  const {products , currency , cartItems, updateQuantity} = useContext(ShopContext);

  const [cartData , setCartData] = useState([]);

  useEffect(()=>{
    const tempData = [];

    for(const items in cartItems){
    for(const item in cartItems[items]){
      if(cartItems[items][item] > 0){
        tempData.push({
          _id: items,
          size:item,
          quantity:cartItems[items][item]
        })
      }
    }
    }

   setCartData(tempData);
    
  },[cartItems])


  return (
    <>

    <div className="cart-page section">
    <Heading text1={"Your"} text2={"Cart"} />

    <div className="cart-container">
      <div className="cart-sub">
        {
          cartData.map((item , index)=>{

            const productData = products.find((product)=> product._id === item._id)

            return(
              <div key={index} className="cart-items">
                
                <img className='image-cart' src={productData.image[0]} alt="" />
                <p>{productData.name}</p>

                <div className="cart-price">
                <p>{currency}{productData.price}</p>
                <p>{item.size}</p>
                </div>

                <div className="inputs">
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0'? null : updateQuantity(item._id , item.size , Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} />
                </div>

                <div className="cart-bin">
               <RiDeleteBin6Line onClick={()=> updateQuantity(item._id, item.size , 0)} />
                </div>

               



              </div>
            )

          })
        }
      </div>
    </div>
    </div>
   


    </>
  )
}

export default Cart