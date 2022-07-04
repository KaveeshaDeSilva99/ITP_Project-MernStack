import React from "react";
import logo from '../logo/logo.jpg'
import {Link} from 'react-router-dom';

function Header(){

    return(
      <div>

<div class="sidebar">
            <img src={logo} height={100} width={100} alt="profile picture" className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow"/>
            <img src=""/>
             <a href="#" className="navbar-brand mx-0 font-weight-bold  text-nowrap" >  Home  </a>
        <ul className="navbar-nav flex-column w-100 justify-content-center">
        <li className="nav-item">
              <a href="/add" className="nav-link"> Add supplier</a>
            </li>
            <li className="nav-item">
              <a href="/update/:id" className="nav-link"> Update supplier </a>
            </li>
            
            <li className="nav-item">
              <a href="/delete" className="nav-link"> Delete supplier</a>
            </li>
            <li className="nav-item">
              <a href="/all" className="nav-link"> Supplier payment report </a>
            </li>
            
              
            </ul>
      </div>



       
       
        </div>

    )
}
      
      
      

export default Header;