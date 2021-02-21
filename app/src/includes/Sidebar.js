import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Sidebar (){
  const [isOpen, setOpen] = useState(false);
  const publicurl = process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : '/';
  // {'${process.env.REACT_APP_PUBLIC_URL}/Campaigns'}
    return(
        <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{marginTop:"20px"}}>
      <ul className={'nav ${isOpen && "active"}'}>
        <li className="nav-item" activeclassname="active" >
          <Link className="nav-link" to='/'> <i className="fa fa-home menu-icon"></i>
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item" activeclassname="active">
          <Link className="nav-link" to='/Campaigns'> <i className="fa fa-bullhorn menu-icon"></i>
            <span className="menu-title">Campaigns</span>
          </Link>
        </li>
        <li className="nav-item" activeclassname="active">
          <Link className="nav-link" to='/Billing'> <i className="fa fa-credit-card menu-icon"></i>
            <span className="menu-title">Billing</span>
          </Link>
        </li>
        <li className="nav-item" activeclassname="active">
          <Link className="nav-link" to='/Settings'>
            <i className="fa fa-cog menu-icon" aria-hidden="true"></i>
            <span className="menu-title">Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
    );
}
export default Sidebar;