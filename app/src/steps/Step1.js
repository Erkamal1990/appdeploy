import React, { useState, useEffect } from "react";
const Step1 = ({ setForm, formData, navigation }) => {
  const {mediaObject,platform,handle,url,phone_number,store_name,info_name,info_email,info_phone,info_other,brand_name,ios_link,android_link} = formData;
  var sessioData = JSON.parse(sessionStorage.getItem('userData'));
//   console.log(sessioData.data.id);
  formData.loggedinUser = sessioData.data.id;
  const { next } = navigation;
  // Media objects
  const [showDiv, setshowDiv] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    formData.mediaObject = value;
  };
  
     var [mediaObjectErr,setmediaObjectErr] = useState();
     var [platformErr,setplatformErr] = useState();
     var [handleErr,sethandleErr] = useState();
     var [urlErr,seturlErr] = useState();
     var [phone_numberErr,setphone_numberErr] = useState();
     var [store_nameErr,setstore_nameErr] = useState();
     var [leadInfoErr,setleadInfoErr] = useState();
     var [brand_nameErr,setbrand_nameErr] = useState();
     var [applinkErr,setapplinkErr] = useState();

    function validateUrl(url) {
        var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (pattern.test(url)) {
            return true;
        } 
            return false;
    }

  const formValidation = () => {
    let isValid = true;

    if(!formData.mediaObject){
        mediaObjectErr = "Please Select at least one media object.";
        isValid = false;
     }

    if(formData.mediaObject == 1){
        if(!formData.platform){
            platformErr = "Please enter select platform.";
           isValid = false;
        }
        if(formData.platform=='WhatsApp'){
            var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
            if(!phoneRGEX.test(formData.handle)){
                handleErr = "Please enter valid number.";
                isValid = false;
            }
        }
        if(!formData.handle){
            handleErr = "Please fill out this field.";
            isValid = false;
        }
    }

    if(formData.mediaObject == 2){
       if (formData.url) {
          if (!validateUrl(formData.url)) {
            urlErr = "Please enter valid url.";
            isValid = false;
          }
        }else{
            urlErr = "Please fill out this field.";
          isValid = false;
        }

    }
    if(formData.mediaObject == 3){
        if (formData.phone_number) {
         var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
         if(!phoneRGEX.test(formData.phone_number)){
            phone_numberErr = "Please enter valid number.";
            isValid = false;
        }
         }else{
             phone_numberErr = "Please fill out this field.";
           isValid = false;
         }
 
     }
     if(formData.mediaObject == 4){
        if(!formData.store_name){
           store_nameErr = "Please fill out this field.";
           isValid = false;
        }
    }
     if(formData.mediaObject == 5){
         var collect_lead = [];
        if(formData.info_email){
            collect_lead.push('email');
          }
          if(formData.info_name){
            collect_lead.push('name');
          }
          if(formData.info_phone){
            collect_lead.push('phone');
          }
          
        if (collect_lead.length <= 1) {
             leadInfoErr = "Please Select at least 2 fields.";
             isValid = false;
         }
     }
    if(formData.mediaObject == 8 ){
        if(!formData.brand_name){
           brand_nameErr = "Please fill out this field.";
           isValid = false;
        }
    }

     if(formData.mediaObject == 9){
        var appUrl = false;
        applinkErr = "Please Select at least 1 app link.";
       if(formData.ios_link){
          appUrl = true;
              if (!validateUrl(formData.ios_link)) {
                applinkErr = "Please enter valid url.";
                appUrl = false;
              }
         }

         if(formData.android_link){
            appUrl = true;
              if (!validateUrl(formData.android_link)) {
                applinkErr = "Please enter valid url.";
                appUrl = false;
              }
         }     
       if (!appUrl) {
            applinkErr = applinkErr;
            isValid = false;
        }
    }
    if(formData.mediaObject == 10){
        if (formData.url) {
           if (!validateUrl(formData.url)) {
             urlErr = "Please enter valid url.";
             isValid = false;
           }
         }else{
             urlErr = "Please fill out this field.";
           isValid = false;
         }
     }
    setmediaObjectErr(mediaObjectErr);
    setplatformErr(platformErr);
    sethandleErr(handleErr);
    seturlErr(urlErr);
    setphone_numberErr(phone_numberErr);
    setstore_nameErr(store_nameErr);
    setleadInfoErr(leadInfoErr);
    setbrand_nameErr(brand_nameErr);
    setapplinkErr(applinkErr);
    return isValid;
}
const onSubmit = ()=>{
    // e.preventDefault();
    const isValid = formValidation();
    if(isValid){
        next();
    }
  }

  return (
    <>
    <fieldset>
        <br/>
        <h4 style={{textAlign:"left",color: "#5851bb"}}> Meadia Objective </h4>
        {mediaObjectErr ?(
            <div style={{textAlign: "left",color:'red'}}>{mediaObjectErr}</div>
        ):null}
        <div className="row">
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==6 ? true:false} name="mediaObject" className="checkbox check-message coupon_question" 
                value="6"  onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd">
                    <i className="fab fa fa-users"></i>
                </div>
                <h4 className="taghedd">Followers or Fans</h4>
                <div className="name taghedd">Get more followers or fans to your account.</div>
                </div>
            </label>
            </div>
        </div>
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==7 ? true:false} name="mediaObject" className="checkbox check-message coupon_question" 
                value="7"  onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd">
                    <i className="fab fa fa-video"></i>
                </div>
                <h4 className="taghedd">Video Views</h4>
                <div className="name taghedd">Generate views to your video.</div>
                </div>
            </label>
            </div>
        </div>
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==1 ? true:false} name="mediaObject" className="checkbox check-message coupon_question" 
                value="1"  onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd">
                    <i className="fab fa fa-comment"></i>
                </div>
                <h4 className="taghedd">Messages</h4>
                <div className="name taghedd">Get Direct Messages.</div>
                </div>
            </label>
            </div>
        </div>

        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==2 ? true:false} name="mediaObject" className="checkbox check-message coupon_question1" value="2" id="inputWebsite" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd"><i className="fab fa fa-globe"></i></div>
                <h4 className="taghedd">Website Traffic</h4>
                <div className="name taghedd">Send quality traffic to your website.</div>
                </div>
            </label>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==8 ? true:false} name="mediaObject" className="checkbox check-message coupon_question4" value="8" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd"><i className="fab fa fa-filter"></i></div>
                <h4 className="taghedd">Reach & Awareness</h4>
                <div className="name taghedd">Increase your brand Reach</div>
                </div>
            </label>
            </div>
        </div>
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==3 ? true:false} name="mediaObject" className="checkbox check-message coupon_question2" value="3" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd"><i className="fab fa fa-phone" aria-hidden="true"></i></div>
                <h4 className="taghedd">Phone Calls</h4>
                <div className="name taghedd">Lorem ipsum dolor sit amet.</div>
                </div>
            </label>
            </div>
        </div>
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==4 ? true:false} name="mediaObject" className="checkbox check-message coupon_question3" value="4" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd">
                    <i className="fab fa fa-university"></i>
                </div>
                <h4 className="taghedd">Store Visits</h4>
                <div className="name taghedd">Lorem ipsum dolor sit amet.</div>
                </div>
            </label>
            </div>
        </div>
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==5 ? true:false} name="mediaObject" className="checkbox check-message coupon_question4" value="5" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd"><i className="fab fa fa-filter"></i></div>
                <h4 className="taghedd">Lead Generation</h4>
                <div className="name taghedd">Collect leads for your business or brand.</div>
                </div>
            </label>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==9 ? true:false} name="mediaObject" className="checkbox check-message coupon_question4" value="9" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd"><i className="fab fa fa-filter"></i></div>
                <h4 className="taghedd">App Installation</h4>
                <div className="name taghedd">Generate downloads for your App</div>
                </div>
            </label>
            </div>
        </div>
        <div className="col-md-3">
            <div className="container1">
            <label className="option_item">
                <input type="radio" defaultChecked={formData.mediaObject==10 ? true:false} name="mediaObject" className="checkbox check-message coupon_question2" value="10" onChange={handleChange} onClick={() => setshowDiv(!showDiv)}/>
                <div className="option_inner facebook">
                <div className="tickmark"></div>
                <div className="icon taghedd"><i className="fab fa fa-phone" aria-hidden="true"></i></div>
                <h4 className="taghedd">Conversions</h4>
                <div className="name taghedd">Drive sales or action on your website.</div>
                </div>
            </label>
            </div>
        </div>
        </div>
        <input type="button"  onClick={onSubmit} className="next action-button" value="Next" />
        {formData.mediaObject==1 ? (
        <div  className="row" >
        <div className="col-md-6">
            <div className="answer">
            <p style={{textAlign: "left", fontSize: "18px"}}>Select your messages platforms*</p>
            <div className="form-group">
                <div className="form-check">
                <label className="form-check-label" style={{textAlign: "left"}}>
                    <input type="radio" defaultChecked={formData.platform=="WhatsApp"?true:false} className="form-check-input" name="platform" value="WhatsApp" onChange={setForm}/>
                    WhatsApp
                    <i className="input-helper"></i></label>
                </div>
                <div className="form-check">
                <label className="form-check-label" style={{textAlign: "left"}}>
                    <input type="radio" className="form-check-input" name="platform" value="Facebook_Instagram_DM" onChange={setForm} id="optionsRadios2"
                     defaultChecked={formData.platform=="Facebook_Instagram_DM"?true:false}/>
                    Facebook & Instagram DM
                    <i className="input-helper"></i></label>
                </div>
                {platformErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{platformErr}</div>
                ):null}
                <div className="form-group">
                    {formData.platform == 'WhatsApp' ? (
                        <>
                        <label className="form-check-label"  style={{textAlign: "left",display: 'block',marginTop:'15px'}}>Enter What's App Number *</label>
                        <input type="text" name="handle" value={handle} onChange={setForm} className="form-control form-control-sm inp"/>
                        </>
                    ) : 
                    <>
                       <label className="form-check-label"  style={{textAlign: "left",display: 'block',marginTop:'15px'}}>Enter Handle</label>
                       <input type="text" name="handle" pattern="[0-9]*" value={handle} onChange={setForm} className="form-control form-control-sm inp"/>
                       </>
                    }
                    {handleErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{handleErr}</div>
                     ):null}
                </div>
            </div>
            </div>
        </div>
        </div>
        ) : null}
        {formData.mediaObject==2 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer1">
            <p style={{textAlign: "left", fontSize: "18px"}}>Landing page or Website Address *</p>
            <div className="form-group">
                <input type="text" name="url" value={url} onChange={setForm} className="form-control form-control-sm inp" placeholder="http:// or https://" required />
                {urlErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{urlErr}</div>
                ):null}
            </div>
            </div>
        </div>
        </div>
    ) : null}
    {formData.mediaObject==3 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer2">
            <p style={{textAlign: "left", fontSize: "18px"}}>Phone Number *</p>
            <div className="form-group">
                <input type="text" name="phone_number" value={phone_number} onChange={setForm} className="form-control form-control-sm inp" required />
                {phone_numberErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{phone_numberErr}</div>
                ):null}
            </div>
            </div>
        </div>
        </div>
        ) : null}
        {formData.mediaObject == 4 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer3">
            <p style={{textAlign: "left", fontSize: "18px"}}>Store Name *</p>
            <div className="form-group">
                <input type="text" name="store_name" value={store_name} onChange={setForm} className="form-control inp" required />
                {store_nameErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{store_nameErr}</div>
                ):null}
            </div>
            </div>
        </div>
        </div>
        ) : null}
        {formData.mediaObject==5 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer4">
            <p style={{textAlign: "left", fontSize: "18px"}}>What information do you want to ask for?
                Select at least 2 fields.</p>
            <div className="form-group">
                <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" name="info_name" value={info_name} onChange={setForm} className="form-check-input" defaultChecked={formData.info_name?true:false}/>
                    Name
                    <i className="input-helper"></i></label>
                </div>
                <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" defaultChecked={formData.info_email?true:false} name="info_email" value={info_email} onChange={setForm} className="form-check-input"/>
                    Email
                    <i className="input-helper"></i></label>
                </div>
                <div className="form-check">
                <label className="form-check-label">
                    <input type="checkbox" name="info_phone" defaultChecked={formData.info_phone?true:false} value={info_phone} onChange={setForm} className="form-check-input"/>
                    Phone Number
                    <i className="input-helper"></i></label>
                </div>
                {leadInfoErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{leadInfoErr}</div>
                ):null}
                <p style={{textAlign: "left", fontSize: "18px"}}>Others </p>
                <div className="form-group">
                    <input type="text" name="info_other" value={info_other} onChange={setForm} className="form-control inp" />
                </div>
            </div>
            </div>
        </div>
        </div>
        ) : null}
        {formData.mediaObject==8 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer1">
            <p style={{textAlign: "left", fontSize: "18px"}}>Brand Name *</p>
            <div className="form-group">
                <input type="text" name="brand_name" value={brand_name} onChange={setForm} className="form-control form-control-sm inp"/>
                {brand_nameErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{brand_nameErr}</div>
                ):null}
            </div>
            </div>
        </div>
        </div>
    ) : null}
   {formData.mediaObject==9 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer1">
            <p style={{textAlign: "left", fontSize: "18px"}}>IOS App Url</p>
            <div className="form-group">
                <input type="text" name="ios_link" value={ios_link} onChange={setForm} className="form-control form-control-sm inp"/>
            </div>
            <p style={{textAlign: "left", fontSize: "18px"}}>Android App link</p>
            <div className="form-group">
                <input type="text" name="android_link" value={android_link} onChange={setForm} className="form-control form-control-sm inp"/>
                {applinkErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{applinkErr}</div>
            ):null}
            </div>
            </div>
        </div>
        </div>
    ) : null}
    {formData.mediaObject==10 ? (
        <div className="row">
        <div className="col-md-6">
            <div className="answer1">
            <p style={{textAlign: "left", fontSize: "18px"}}>Landing page or Website Address *</p>
            <div className="form-group">
                <input type="text" name="url" value={url} onChange={setForm} className="form-control form-control-sm inp"/>
                {urlErr ?(
                    <div style={{textAlign: "left",color:'red'}}>{urlErr}</div>
                ):null}
            </div>
            </div>
        </div>
        </div>
    ) : null}
    </fieldset>
    </>
  );
};

export default Step1;
