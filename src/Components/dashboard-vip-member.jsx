import React from 'react'
import './dashboard-vip-member.css';
import logo from '../assets/images/admin.png'
import { Link } from "react-router-dom";
const DashbordOrderAdmin = () => {
  return (
    <>
    
<div className="main flex flex-col ">

<div className="head flex flex-col notOfTGBNHY items-center	">
  <div className='flex  kjhiasuxva items-center'>
  <img src={logo} alt="" />
  <div className=" flex flex-col">
  <h3  className='text-2xl'>John Carter</h3> 
  <h5 className='ali text-blue-600 ' >ADMIN</h5>
  </div>
  </div>
</div>


{/* Secod Part  */}

<div className="secondpart ml-60  flex items-center w-90  ">

    {/* <h3>From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</h3> */}
    <div className="navbar 	   border-2  border-red">
    <ul className='list-none flex flex-col text-xl '>
    <Link to={'/DashbordOrderAdmin'}><li className='py-6 px-20 bg-black text-white ' ><a href="#">DASHBOARD</a></li></Link>
    <Link to={'/MyreviewAdmin'}><li className='py-6  text-black  ' ><a href="#">MY REVIEW</a></li></Link>
    <Link to={'/MembershipVip'}><li className='py-6    text-black ' ><a href="#">PAYMENT</a></li></Link>
    <Link to={'/'}><li className='py-6 text-black   ' ><a href="#">LOGOUT</a></li></Link>
                  
                  
                  
                  
                </ul>
    </div>
    <div className="inner  flex flex-col pl-6	   ">
    <span className='sssf max-w-80' >Hello! Mike Procic</span>
    <div  className='sssss'>

    <p className='oolol' >From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default DashbordOrderAdmin