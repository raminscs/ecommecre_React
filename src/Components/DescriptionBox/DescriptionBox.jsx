import React from 'react'
import './DescriptionBox.css'


export const DescriptionBox = () => {
  
    return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
            Learn How To Create Complete Ecommerce Website Using React JS Step by Step Tutorial 2023 | React JS Project to Make E-Commerce Website
            </p>
            <p>
            We will create the Home page where we will display the trending products, offer banner, newsletter subscription form, then we will make product page for men's category, women's category and kids category. After that we will make the single product page with product image gallery, product price, product description and related products list, then we will make the shopping cart page
            </p> 
        </div>
    </div>
  )
}

export default DescriptionBox