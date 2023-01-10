import React, { useState } from 'react'
import './AddtoCard.css'
 import plus  from './plus.svg';
 import bb from '../assets/images/menu-icon.svg'
import logo from '../assets/images/header-logo-1.svg'
import man from '../assets/images/user.svg'
import shopping from '../assets/images/shopping-icon.svg'
 import Minus   from'./minus.svg';
 import Heart from './twitter-heart.png'
 import Delete from './delete-icn.svg'
 import shirt  from '../assets/images/shirt-2.png'
 import dd from  '../assets/images/footer-logo.png'
 import image from './images/veg.png'
 import caroImage from '../assets/images/banner-img.png'
 

const AddtoCard = () => {
    const [product1,Setproduct1 ] = useState(2)
    const [product2,Setproduct2 ] = useState(1)
  return (
    <div>
      <div  className='bg-black  text-white'> Spend $50 for free shipping</div>
      <div className='mmmmiok' >
        <div className='mmnnhhyy'>
          <img src={bb} className='sasaasjmj' alt="Not Found" />

          <img src={logo} alt="" />

          {/* Inner Logo */}
          <div className='setrtmn'>
            <img className='pr-3' src={man} alt="" />

            <span className='text-white pr-3' > |</span>
            <img className='pr-3' src={shopping} alt="" />

          </div>

        </div>



        {/* Second */}

        <div className='mmqqoop'>

          <div className='iiyytt'>
            
          </div>


          <div className='ffmmkklloo'>
            {/* <img src={caroImage} alt="" /> */}
          </div>
        </div>



      </div>




{/*  */}
   <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">QUANTITY</h3>
   	   	<h3 class="Heading">QUANTITY</h3>
   	   	<h3 class="Heading">Total</h3>

   	   </div>

   	   <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img src={shirt} style={{ "height":"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Apple Juice</h1>
   	   	  	{/* <h3 class="subtitle">250ml</h3> */}
   	   	  	{/* <img src={image} style={{ "height":"30px" }}/> */}
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn" onClick={()=>{
                Setproduct1(product1+1)
            }}   >+</div>
   	   	  	<div class="count">{product1}</div>
   	   	  	<div class="btn" onClick={()=>{

if(product1 != 0 ){
                    
    Setproduct1(product1-1)
}
                
            }} >-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$2.99</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>

   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
   	   	  	<img src={shirt} style={{ "height":"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Grapes Juice</h1>
   	   	  	{/*   <h3 class="subtitle">250ml</h3> */}
   	   	  	{/* <img src={image} style={{ "height":"30px" }}/> */}
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn"  onClick={()=>{
                Setproduct2(product2+1)
            }}  >+</div>
   	   	  	<div class="count">{product2}</div>
   	   	  	<div class="btn"
            onClick={()=>{
                if(product2 != 0 ){
                    
                    Setproduct2(product2-1)
                }

            }}
            >-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$3.19</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div>
   	 <hr/> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">2 items</div>
   	 	</div>
   	 	<div class="total-amount">$6.18</div>
   	 </div>
   	 <button class="buttondcdscds">Checkout</button></div>
   </div>




    <div className="pg-footer">
      <footer className="footer">
        {/* <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
        </svg> */}
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <img src={dd} alt="" />
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Start</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Documentation</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <a href="#">Installation</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Contact</a>
                </li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <a href="#">News</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                  <a href="#">Privacy Notice</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Security</a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Blog</a>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#">Customers</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column   dsfsfdsfdscdsfds">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> Let's Chat</h2>
              <p className="footer-call-to-action-description"> Have a support question?</p>

              <div className='adsufv'>
              <input className='border-1  kkll border-whites rounded-sm px-4 py-1'  placeholder='Email Address' type="text" name="" id="" />
              <button className='nnju  border-black text-xl text-black mt-6 px-11 py-4 '>SUBSCRIBE</button>
              </div>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title"> You Call Us</h2>
              <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> Ahmed</a></p>
            </div>
          </div>
        
        </div>
        
      </footer>
    </div>
    </div>
  )
}

export default AddtoCard
