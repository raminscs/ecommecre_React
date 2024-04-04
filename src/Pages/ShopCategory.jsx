import React, { useContext } from 'react'
import  './CSS/ShopCategory.css'
/* import { ShopContext } from '../Context/ShopContext' */
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import {Item} from '../Components/Item/Item'
import youtube_icon from '../Components/Assets/youtube_icon.png'
import facebook_icon from '../Components/Assets/facebook_icon.png'
import { Link } from 'react-router-dom'

export const ShopCategory = (props) => {
  
  const {all_product} = useContext(ShopContext);
  /* const {addToCart}=useContext(ShopContext); */

  return (
    <div className='shop-category'>
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
       {/*  <p>
          <span>Showing 1-12 </span> out of 36 products
        </p> */}
        <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if(props.category===item.category)
        {
          return <div>
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
                  <div>                                     
                    <div className="shopcategory-products-social-icon">   
                    {/* <button onClick={()=>{addToCart(item.id)}}>ADD TO CART</button> */}
                    <button onClick={()=>{}}>ADD TO CART</button>

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
          
        }
        else{
          return null;
        }
      })}
      </div>
      {/* <div className="shopcategory-loadmore"> 
        Load More...
      </div> */}
    </div>
  )
}

export default ShopCategory