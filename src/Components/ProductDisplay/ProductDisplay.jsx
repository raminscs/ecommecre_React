import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import youtube_icon from '../Assets/youtube_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'


export const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt="" />                
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt="" />

            </div>
        </div>

        <div className='productdisplay-right'>
        <br/>
        <br/>
            <h1>{product.name}</h1>
           {/*  <div className='productdisplay-right-stars'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div> */}
            {/* <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">Offer Price: {product.old_price}</div>
                <div className="productdisplay-right-price-new">Regular Price: {product.new_price}</div>
            </div> */}
            <br/>
            <br/>
            <div className="productdisplay-right-description">    
                
                {/* <span>{product.rmk}</span> */}
                
            </div>
            <br/>
            <br/>
            
            <div>                                     
                <div className="shopcategory-products-social-icon">   
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

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
            </div>

            <p className="productdisplay-right-category">
                <h2>
                    Details about product :
                </h2>
                {/* <h4>
                    {product.details}
                </h4>   */}                              
            </p>
            <br/>
            <p className="productdisplay-right-category"><h2><span>Call for Order : </span>01329-645200</h2></p>
            {/* <DescriptionBox/> */}
        </div>
        
    </div>
    
  )
}

export default ProductDisplay