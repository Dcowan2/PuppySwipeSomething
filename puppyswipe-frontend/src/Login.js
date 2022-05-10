import React from "react";
import { Link } from "react-router-dom";
import PuppyCards from "./PuppyCards"


const Login = () => {
  return (
    <div>
    <br />
         <button><Link to ="/PuppyCards">PuppyCards</Link></button>     
    </div>
    
  );
};
  
export default Login;