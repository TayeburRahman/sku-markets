import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/login/login.css"
// import Footer from "components/Home/Footer";
// import Header from "components/Home/Header";

const Register = () => {
    const [ accepted,setAccepted]=useState(false);


    return (
        <>
            {/* <Header/> */}
            <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xxl-4 col-lg-5 col-md-5" style={{backgroundColor: '#f8f9fa !important'}}>
                            <div class="cardlogin" style={{backgroundColor: '#f8f9fa !important'}}>


                                <div class="card-headerlogin pt-4 pb-4 text-center" >
                                    <Link to='/'>
                                        <span><img style={{ width: '200px', height: '60px' }} src="images/SKU-Market-Logo.svg" alt="logo" height="" /></span>
                                    </Link>
                                </div>

                                <div class="card-body2 p-4" style={{backgroundColor: '#f8f9fa !important'}}>

                                    <div class="text-center ">
                                        <h4 class="text-dark-50 text-center pb-0 fw-bold ">Free Sign Up</h4>
                                        <p class="text-muted mb-4 fs-5 px-4">Don't have an account? Create your account, it takes less than a minute</p>
                                    </div>

                                    <form action="#" style={{backgroundColor: '#f8f9fa !important'}}>
                                    <div class="mb-3">
                                            <label for="fullname" class="form-label fs-5">Full Name</label>
                                            <input class="form-control" type="text" id="emailaddress" required="" placeholder="Enter your full name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="emailaddress" class="form-label fs-5">Email address</label>
                                            <input class="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                        </div>

                                        <div class="mb-3">
                                            <a href="pages-recoverpw.html" class="text-muted float-end"><small>Forgot your password?</small></a>
                                            <label for="password" class="form-label fs-5">Password</label>
                                            <div class="input-group input-group-merge">
                                                <input type="password" id="password" class="form-control" placeholder="Enter your password" />
                                                <div class="input-group-text" data-password="false">
                                                    <span class="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mb-3 mb-3">

                                            <div class="mb-3 form-check d-flex align-items-center">
                                                <input
                                                 onClick={()=>setAccepted(!accepted)}
                                                 type="checkbox" class="" style={{width: '18px' , height: '18px'}} id="exampleCheck1" />
                                                <label class="form-check-label fs-5 text-black" for="exampleCheck1">I accept Terms and Conditions</label>
                                            </div>
                                        </div>

                                        <div class="mb-3 mb-0 text-center">
                                            <button class="py-1 px-2 fs-5 text-white border-none" type="submit" style={{border: 'none', borderRadius: '6px' ,color: 'white' , backgroundColor: '#1560FF'  }} disabled={!accepted === true}> Sign Up </button>
                                        </div>

                                    </form>
                                </div>
                            </div>


                            <div class="row mt-3">
                                <div class="col-12 text-center">
                                    <p class="text-muted" >Already have account?  <Link to='/Login' class="text-muted ms-1 fw-bold fs-5"><b>Log In</b></Link></p>

                                    <h6 class="fw-normal text-muted fs-5">All rights reserved @ 2022 - 2023</h6>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Register;