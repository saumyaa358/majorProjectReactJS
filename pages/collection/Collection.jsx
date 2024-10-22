import React, { useContext, useState } from 'react'
import './collection.css'
import Heading from '../../components/heading/Heading'
import {ShopContext} from '../../context/ShopContext'
import { useEffect } from 'react'
import ProductItem from '../../components/productItem/ProductItem'

const Collection = () => {

  const {products, search , showSearch} = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {

    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setCategory(prev => [...prev, e.target.value]);
    }

  }
  const toggleSubCategory = (e) => {

    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }else{
      setSubCategory(prev => [...prev, e.target.value]);
    }

  }

const applyFilter  = () =>{
  let productCopy = products.slice();

if(showSearch && search){
  productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
}


  if(category.length > 0){
    productCopy = productCopy.filter(item => category.includes(item.category))
  }


  if(subCategory.length > 0){
    productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));

    
  }

 
  setFilterProducts(productCopy);

  
}


 

useEffect(()=>{

  applyFilter()

},[category, subCategory, search, showSearch])



  return (
    <>
    
    <div className="collections section">
        <div className="filter-sec">
      <h1 onClick={()=> setShowFilters(!showFilters)}>Filters</h1>

      <div className="category-fil">
        <h2>categories</h2>
        <div className="fil-input-con">
          <div className="fil-items">
          <input value={'Men'} onChange={toggleCategory} type="checkbox" />
          <p>Men</p>
          </div>
          <div className="fil-items">
          <input value={'Women'} onChange={toggleCategory} type="checkbox" />
          <p>Women</p>
          </div>
          <div className="fil-items">
          <input value={'Kids'} onChange={toggleCategory} type="checkbox" />
          <p>Kids</p>
          </div>
          
        </div>

      </div>
      <div className="type-fil">
      <h2>type</h2>
      <div className="fil-input-con">
          <div className="fil-items">
          <input onChange={toggleSubCategory} value={'Topwear'} type="checkbox" />
          <p>Topwear</p>
          </div>
          <div className="fil-items">
          <input onChange={toggleSubCategory} value={'Bottomwear'} type="checkbox" />
          <p>Bottomwear</p>
          </div>
          <div className="fil-items">
          <input onChange={toggleSubCategory} value={'Winterwear'} type="checkbox" />
          <p>Winterwear</p>
          </div>
          
        </div>
      </div>


        </div>
        <div className="all-products">
        <Heading text1={"All"} text2={"Collections"} />

        <div className="collection-container">
        {
          filterProducts.map((item, index)=>{
                return(
                  <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                )
          })
        }
        </div>

       
        </div>
       
    </div>
    </>
  )
}

export default Collection