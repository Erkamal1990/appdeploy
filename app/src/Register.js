import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { Link ,Redirect,useHistory} from "react-router-dom";
import {toast, Slide} from 'react-toastify';
import config from './config.json';
import axios from 'axios';
import './App.css';
import Comman from './includes/Comman';
toast.configure();
function Register() {
  var api_Path = process.env.REACT_APP_API_PATH;
  const history = useHistory();
  const [frist_name, setfrist_name] = useState("");
	const [last_name, setlast_name] = useState("");
	const [mobile, setmobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswaord] = useState("");
  // Error Message

  const [frist_nameErr,setfrist_nameErr] = useState({});
  const [last_nameErr,setlast_nameErr] = useState({});
  const [mobileErr,setmobileErr] = useState({});
  const [emailErr,setEmailErr] = useState({});
  const [passwordErr,setPasswordErr] = useState({});

  const googleResponse = (response) => {
    const tokenBlob = new Blob([JSON.stringify({response: response,type:'3'}, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };
    
    fetch(api_Path+'user/register', options).then(r => {
              r.json().then(user => {
                if (user.data.id) {
                  saveSession(user);
                  history.push("/");
                }
        });
    })
}
const facebookResponse = (response) => {
  const tokenBlob = new Blob([JSON.stringify({response: response,type:'2'}, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
  };
  fetch(api_Path+'user/register', options).then(r => {
        r.json().then(user => {
            if (user.data.id) {
              saveSession(user);
              history.push("/");
            }
      });
    })
};
  const onSubmit = (e)=>{
    e.preventDefault();
    const isValid = formValidation();
    if(isValid){
      //Call Login Api
      const UserData = {
        frist_name:frist_name,
        last_name:last_name,
        email: email,
        mobile:mobile,
        password:password,
      }
    const tokenBlob = new Blob([JSON.stringify(UserData, null, 2)], {type : 'application/json'});
    const options = {
        method: 'POST',
        body: tokenBlob,
        mode: 'cors',
        cache: 'default'
    };
    fetch(api_Path+'user/register', options).then(r => {
        r.json().then(user => {
            if (user) {
              // saveSession(user);
              toast.dark(user.message, { 
                position: toast.POSITION.BOTTOM_RIGHT,
                 autoClose:5000,hideProgressBar: true,transition: Slide,}
              )
              history.push("/Login");
            }
        });
      })
    }
  }
function saveSession(obj) {
  sessionStorage.setItem("userData", JSON.stringify(obj));
  sessionStorage.setItem("isLogin", true);
  return true;
}
// Form Validation
  const formValidation = () => {
		const frist_nameErr = {};
		const last_nameErr = {};
		const mobileErr = {};
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;
    if (email) {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        emailErr.emailValid = "Please enter valid email address.";
        isValid = false;
      }
    }else{
      emailErr.emailBlank = "Please enter your email Address.";
      isValid = false;
    }
    if (!password) {
      passwordErr.passError = "Please enter password.";
      isValid = false;
		}
		if (!frist_name) {
      frist_nameErr.frist_nameError = "Please enter first name.";
      isValid = false;
		}
		if (!last_name) {
      last_nameErr.last_nameError = "Please enter last name.";
      isValid = false;
		}
		if (!mobile) {
      mobileErr.mobileError = "Please enter mobile.";
      isValid = false;
		}
		
		setfrist_nameErr(frist_nameErr);
		setlast_nameErr(last_nameErr);
		setmobileErr(mobileErr);
    setEmailErr(emailErr);
		setPasswordErr(passwordErr);
    return isValid;
  }
// Form Validation
  return ( 
  <div className="container-scroller">
    {/* <Comman /> */}
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
      <div className="row flex-grow">
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="auth-form-transparent text-left p-3">
            <div className="brand-logo">  
              <img src="img/logo.jpg" alt="logo"/>
            </div>
            <h4>Registration</h4>
            <form className="pt-3" onSubmit={onSubmit}>
            <div className="form-group">
                <label >First Name</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="fa fa-user text-primary"></i>
                        </span>
                    </div>
                    <input type="text" name="frist_name" onChange={(e)=>{setfrist_name(e.target.value)}} value={frist_name} className="form-control form-control-lg border-left-0" placeholder="First Name"/>
                </div>
								{Object.keys(frist_nameErr).map((key)=>{
                  return <div style={{color:'red'}}>{frist_nameErr[key]}</div>
                })}
            </div>
            <div className="form-group">
                <label >Last Name</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="fa fa-user text-primary"></i>
                        </span>
                    </div>
                    <input type="text" name="last_name" onChange={(e)=>{setlast_name(e.target.value)}} value={last_name} className="form-control form-control-lg border-left-0" placeholder="Last Name"/>
                </div>
								{Object.keys(last_nameErr).map((key)=>{
                  return <div style={{color:'red'}}>{last_nameErr[key]}</div>
                })}
            </div>
            <div className="form-group">
                <label >Mobile No</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="fa fa-mobile text-primary"></i>
                        </span>
                    </div>
                    <input type="text" name="mobile" onChange={(e)=>{setmobile(e.target.value)}} value={mobile} className="form-control form-control-lg border-left-0" placeholder="Mobile Number"/>
                </div>
								{Object.keys(mobileErr).map((key)=>{
                  return <div style={{color:'red'}}>{mobileErr[key]}</div>
                })}
            </div>
            <div className="form-group">
                <label >Email Id</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="fa fa-envelope text-primary"></i>
                        </span>
                    </div>
                    <input type="email" name="email" className="form-control form-control-lg border-left-0"  onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Email"/>
                </div>
								{Object.keys(emailErr).map((key)=>{
                  return <div style={{color:'red'}}>{emailErr[key]}</div>
                })}
            </div>
            <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                    <div className="input-group-prepend bg-transparent">
                        <span className="input-group-text bg-transparent border-right-0">
                            <i className="fa fa-lock text-primary"></i>
                        </span>
                    </div>
                    <input type="password" name="password" className="form-control form-control-lg border-left-0" onChange={(e)=>{setPasswaord(e.target.value)}}  value={password}  placeholder="Password"/>
                </div>
								{Object.keys(passwordErr).map((key)=>{
                  return <div style={{color:'red'}}>{passwordErr[key]}</div>
                })}
            </div>
            <div className="mt-4">
            Have an account? <Link to='/Login' className="text-primary"><strong>Login</strong></Link>
        </div> 
              <div className="my-3">
                <input className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  type="submit" value="SIGN UP" />
              </div>
              <div className="mb-2 d-flex socialButtons">
                <FacebookLogin
                  appId={config.FACEBOOK_APP_ID}
                  fields="name,email,picture"
                  callback={facebookResponse} 
                  textButton="Facebook"
                  tag="button"
                  cssClass="btn btn-facebook auth-form-btn flex-grow mr-1"
                  icon={<i className="fab fa-facebook-f mr-2"></i>}
                  >
              </FacebookLogin>
              <GoogleLogin
                      clientId={config.GOOGLE_CLIENT_ID}
                      onSuccess={googleResponse}
                      onFailure={googleResponse}
                      icon={false}
                      className="btn btn-google auth-form-btn flex-grow ml-1"
                >
                <i className="fab fa-google mr-2"></i>Google
                </GoogleLogin>
              </div>      
            </form>
          </div>
        </div>
        <div className="col-lg-6 login-half-bg d-flex flex-row">
          <p className="text-white font-weight-medium  flex-grow align-self-end mystyel">Welcome to Makedigital <br/>
          Sign in your performance dashboard to review the campaigns result and lannch new campaigns !</p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}
export default Register;