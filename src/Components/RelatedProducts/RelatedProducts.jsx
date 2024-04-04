import React, {useContext} from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import { ShopContext } from "../../Context/ShopContext"
import {Item} from '../Item/Item'
import youtube_icon from '../Assets/youtube_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import { Link } from 'react-router-dom'

export const RelatedProducts = () => {
   const {addToCart}=useContext(ShopContext); 

  return (
    <div className='reladerproducts'>
      <br/>
      <br/>
        <h1>Related Products</h1>
        <hr/>
        <div className='reladerproducts-item'>
            {data_product.map((item,i)=>{
                //return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                return <div>
                <Item key={i} 
                id={item.id} 
                
                  name={
                    <div>
                      <b>Product : </b>
                      {item.name}
                    </div>                   
                  } 

                image ={item.image}

                new_price={
                  <div>
                    <b>Offer Price: </b>
                    {item.new_price} 
                  </div>
                }                  
                old_price={
                  <div>
                    <b>Regular Price: </b>
                    {item.old_price} 
                  </div>
                  }/>

                <br/>
                <div>                                     
                  <div className="shopcategory-products-social-icon">   
                  <button onClick={()=>{addToCart(item.id)}}>ADD TO CART</button>

                      <div className="">                
                          <Link to="https://www.youtube.com/@SolverQ" target="">
                          <img src={youtube_icon} alt=""/>
                          </Link>
                      </div>
                      <div className="">                
                          <Link to="https://web.facebook.com/shahnazherbalbd" target="">
                              <img src={facebook_icon} alt=""/>
                          </Link>
                      </div>
                  </div>
                  
                  
                </div>
          </div>
         
            })}
            
        </div>
    </div>
    
  )
}

export default RelatedProducts
