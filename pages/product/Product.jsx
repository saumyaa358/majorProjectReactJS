import React from 'react';
import './product.css'
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {ShopContext} from '../../context/ShopContext'
import { assets } from '../../assets/assets';

const Product = () => {


  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () =>{

    products.map((item)=>{

      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
       
        
        return null;
      }

    })

  }

  useEffect(()=>{
    fetchProductData()
  },[productId]);

  

  return productData ? (
    <>

<div className="detail-sec  section">

    <div className="detail-images-con">

      <div className="small-img-box">
      {
        productData.image.map((item, index)=>(
          <img src={item} onClick={()=> setImage(item)}  key={index} alt="" />
        ))
      }
      </div>
<div className="big-img-box">
  <img src={image} alt="" />
</div>
      

    </div>

    <div className="detail-pro-info">
      <h1>{productData.name}</h1>
      <div className="ratings">
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_icon} alt="" />
        <img src={assets.star_dull_icon} alt="" />
      </div>
      <p>{currency}{productData.price}</p>
      <p>{productData.description}</p>

      <div className="pro-size">
        {productData.sizes.map((item, index)=>(
          <button onClick={()=> setSize(item)} key={index} className={`size-btn ${item === size ? "cl":""}`}>{item}</button>
        ))}
      </div>

      <button  onClick={()=> addToCart(productData._id , size)} className='cart-btn'>Add to cart</button>

      <div className="our-points">
        <p>100% Orginal product</p>
        <p>Cash in delivry available on this product</p>
        <p>Easy Return and Exchange policy within 7 days</p>
      </div>
    </div>
    </div>
    </>
  ) : <div className="" style={{height:"100vh", background:"#000"}}></div>
}

export default Product