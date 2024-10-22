import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../../context/ShopContext"
import Heading from "../heading/Heading";
import ProductItem from "../productItem/ProductItem";


const BestSeller = () => {

const {products} = useContext(ShopContext);

const [bestSeller , setBestSeller] = useState([]);

useEffect(()=>{

    const bestProduct = products.filter((item)=> (item.bestseller))
setBestSeller(bestProduct)
    

},[])

  return (
   <>
  <div className="latestCollection section">
    <div className="lat-head">
   <Heading text1={"BEST"} text2={"SELLERS"} />
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quas. Lorem ipsum dolor sit amet.</p>  
   </div>

   {/* Rendering Products */}

   <div className="product-container">
{
  bestSeller.map((item, index)=>{
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

export default BestSeller