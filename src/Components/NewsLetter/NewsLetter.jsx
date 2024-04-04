import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Email</h1>
        <p>Subscribe to our newsletter and stay connected</p>
        <div>
            <input type='email' placeholder='Your email Address'/>
            <button>Subscribe Now</button>
        </div>

        <div>
          <p>Address: South Bishil, Mirpur-1, Dhaka</p>
        </div>
        <div>
          <p><h2>Call For Order : 01329-645200 </h2></p>
        </div>
    </div>
  )
}

export default NewsLetter