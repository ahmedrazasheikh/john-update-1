import React from 'react'
import './LoginPage2.css'
import image from '../assets/images/account-img.png'
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <div>

<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"/>
				</div>

				<form class="login100-form validate-form">
<span  className='askjcbasiucaaa'>One Last Thing</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada me</p>
			
				
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Password"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
				
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<a class="txt2" href="#">
							Username / Password?
						</a>
					</div>
					<Link to={'/Signup'}>
					<div class="text-center p-t-136">
						<a class="txt2" href="#">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
					</Link>
				</form>
			</div>
		</div>
	</div>





    </div>
  )
}

export default LogInPage