//import React from 'react'
//https://www.youtube.com/watch?v=jbfuzcrfjqQ
import React, { useContext, e, useRef, useState } from "react"
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from "../../Context/ShopContext"
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from "react-router-dom"

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    /* const {getTotalCartItems} = useContext(ShopContext); */
    const menuRef = useRef();

    const dropdown_toggle = () =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }


  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""></img>
            <p>Shahnaz Herbal</p>            
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />

        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Home</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">FACE CARE</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">BODY CARE</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">HAIR CARE</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("parlour")}}><Link style={{textDecoration:'none'}} to="/parlour">PARLOUR PRODUCT</Link>{menu==="parlour"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("ucoming")}}><Link style={{textDecoration:'none'}} to="/ucoming">UP COMMING</Link>{menu==="ucoming"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
                        
            {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
        </div>

    </div>
  )
}

export default Navbar