import React, { useContext, useEffect, useState } from 'react'
import './latestCollection.css';
import { ShopContext } from '../../context/ShopContext';
import Heading from '../heading/Heading';
import ProductItem from '../productItem/ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProduct , setLatestProduct] = useState([]);

    useEffect(()=>{
      setLatestProduct(products.slice(0 , 10));
      
    },[])
    

  return (
   <>
   <div className="latestCollection section">
    <div className="lat-head">
   <Heading text1={"Latest"} text2={"Collecton"} />
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quas. Lorem ipsum dolor sit amet.</p>  
   </div>

   {/* Rendering Products */}

   <div className="product-container">
{
  latestProduct.map((item, index)=>{
return(
  <>
  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
  </>
)
  })
}
   </div>
   </div>
   </>
  )
}

export default LatestCollection