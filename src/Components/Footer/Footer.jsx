import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import youtube_icon from '../Assets/youtube_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>Shahnaz Herbal</p>
        </div>
       {/*  <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul> */}
        <div className="footer-social-icon">
            
            <div className="footer-icons-followus p">
                <p>Follow US : </p>
            </div>
            <div className="footer-icons-container">                
                <Link to="https://web.facebook.com/shahnazherbalbd" target="">
                    <img src={facebook_icon} alt=""/>
                </Link>
            </div>
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>
            </div>
            <div className="footer-icons-container">                
                <Link to="https://www.youtube.com/@SolverQ" target="">
                <img src={youtube_icon} alt=""/>
                </Link>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
            </div>
        </div>
        <div className="footer-copyright">
            
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>

    </div>
  )
}


export default Footer