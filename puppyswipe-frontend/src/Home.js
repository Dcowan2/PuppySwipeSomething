import React from 'react'
import { Link } from "react-router-dom";
import logo from './Logo/logo1.png';
import "./Home.css";



export default function Home() {

  return (
      
    <React.Fragment>
        <section class="vh-100"/>
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
            <img src ={logo} alt = "logo"/>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form action="file:///Users/maliyabaxter/COSC-484/CreateAccount/Create.html"  class="needs-validation" nonvalidate>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3"><b>Sign in</b></p>
                </div>
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example3" class="form-control form-control-lg"
                    placeholder="Username" required/>
                  <label class="form-label" for="form3Example3">Username</label>
                </div>
      
                
                <div class="form-outline mb-3">
                  <input type="password" id="form3Example4" class="form-control form-control-lg"
                    placeholder="Enter password" required/>
                </div>
      
                <div class="d-flex justify-content-between align-items-center">
            
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label class="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>
                
                <div class="text-center text-lg-start mt-4 pt-2">
                <button><Link to ="/PuppyCards">PuppyCards</Link></button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="file:///Users/maliyabaxter/COSC-484/CreateAccount/Create.html" class="link-danger">Register</a></p>
                </div>
              </form>
              
            </div>
          </div>
        </div>
    </React.Fragment>
    
  )
};



