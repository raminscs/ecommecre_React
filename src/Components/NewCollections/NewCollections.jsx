import React, {useContext} from 'react'
import { ShopContext } from "../../Context/ShopContext"
import './NewCollections.css'
import {Item} from '../Item/Item'
import new_collection from '../Assets/new_collections'
import youtube_icon from '../Assets/youtube_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import { Link } from 'react-router-dom'

export const NewCollections = () => {
  
  const {addToCart}=useContext(ShopContext);

  return (
    <div className='new-collections'>
        <h1>Our Collections</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                  {/* <div>
                          <Item key={i} 
                          id={item.id} 
                          
                            name={
                              <div className="collections-product-name-bg">
                                <h3>
                                  {item.name}
                                </h3>
                                
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
                <div>  */}

                      <div className="shopcategory-products-social-icon">   
                      <button onClick={()=>{addToCart(item.id)}}>ADD TO CART</button>

                          <div className="">                
                              <Link to="https://web.facebook.com/shahnazherbalbd" target="">
                                  <img src={facebook_icon} alt=""/>
                              </Link>
                          </div>
                          <div className="">                
                              <Link to="https://www.youtube.com/@SolverQ" target="">
                              <img src={youtube_icon} alt=""/>
                              </Link>
                          </div>
                      </div>
                 /*  </div>
                </div> */
            })}
        </div>        

    </div>
  )
}

export default NewCollections