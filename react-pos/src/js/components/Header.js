import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div className="text-center"
    
  
  >
    <h1>
      <a 
        style={{color: "#337AB7"
   }}
      href="/#/">Real Time Billing System</a>
    </h1>

    <ul className="nav-menu">
      <li className="lead">
        <Link to="/inventory"
        
        style={{textDecoration: "none", padding: "2px"}}

        >Inventory</Link>
      </li>
      <li className="lead">
        <Link to="/">POS</Link>
      </li>
      <li className="lead">
        <Link to="/transactions">Bill Summary</Link>
      </li>
      <li className="lead">
        <Link to="/livecart">Live Bills</Link>
      </li>
    </ul>
  </div>
);

export default Header;
