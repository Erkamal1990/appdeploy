import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link,Redirect,useHistory } from 'react-router-dom';
import {logout} from './Comman';
import axios from 'axios';
import AllStep from '../steps/AllStep';
import { Modal, Button, ProgressBar } from "react-bootstrap";
import {toast, Slide} from 'react-toastify';
toast.configure();
function Header (){
  var img_Path = process.env.REACT_APP_IMG_PATH;
  
  console.log(document.location);
  const history = useHistory();
  var user_image = './img/sm_login-bg.png';
  var frist_name = '';
  if(sessionStorage.getItem('userData')){
    var sessioData = JSON.parse(sessionStorage.getItem('userData'));
    user_image = sessioData.data.user_image;
    frist_name= sessioData.data.frist_name;
  }
  
  const [open, setOpen] = useState(false);
  const logout = () => {
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('isLogin');
    toast.dark('user sucessfully logout.', { 
      position: toast.POSITION.BOTTOM_RIGHT,
       autoClose:5000,hideProgressBar: true,transition: Slide,}
    )
    history.push("/login");
  };
 

     return(
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row default-layout-navbar">
          
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <Link className="navbar-brand brand-logo" to="/">
        <img src={'./img/logo.jpg'} alt="logo" />
        
      </Link>
      <Link className="navbar-brand brand-logo-mini" to="/">
        <img src={'./img/sm_login-bg.png'} alt="logo" />
      </Link>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize"> <span
      className="fas fa-bars"></span>
      </button>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item  d-lg-flex">
          {/* <button type="button" className="btn btn-info btn-rounded btn-fw" data-toggle="modal"
          data-target="#exampleModal">+ Create New Campaign</button> */}
          <Button variant="primary" type="button" className="btn btn-info btn-rounded btn-fw" onClick={() => setOpen(true)}>
          + Create New Campaign
      </Button>
        </li>
        <li className="nav-item nav-profile dropdown disp">
          <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
            <img src={user_image} alt={frist_name} />
          </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
            <a className="dropdown-item"> <i className="fas fa-cog text-primary"></i>
            Settings</a>
            <div className="dropdown-divider"></div>
            <span onClick={logout}  className="dropdown-item"> <i className="fas fa-power-off text-primary"></i>
            Logout</span>
          </div>
        </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
      data-toggle="offcanvas"> <span className="fas fa-bars"></span>
      </button>
    </div>
    <div>
    <Modal size="lg" show={open} onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Campaign</Modal.Title>
        </Modal.Header>
        <div className="modal-body">
        <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-10 col-md-10 col-lg-12 col-xl-12 text-center p-0  mb-2">
                <div className="card px-0 pb-0 mt-3 mb-3">
                  <form id="msform">
                    <AllStep />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Save Changes
          </Button>
        </Modal.Footer>*/}
      </Modal> 
      </div>
  </nav>
    );
}
export default Header;