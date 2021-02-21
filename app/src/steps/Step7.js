import React from "react";
import FacebookLogin from 'react-facebook-login';
import config from '../config.json';
const Step7 = ({ setForm, formData, navigation }) => {
  const { } = formData;

  const { previous, next } = navigation;
  const facebookResponse = (response) => {
	  formData.fbPageName = response.name;
	  formData.fbUserImage = response.picture.data.url;
	  formData.fbUserId = response.id;
	  next();
	// const tokenBlob = new Blob([JSON.stringify({response: response,type:'2'}, null, 2)], {type : 'application/json'});
	// const options = {
	// 	method: 'POST',
	// 	body: tokenBlob,
	// 	mode: 'cors',
	// 	cache: 'default'
	// };

  };

//   if(!formData.chan_facebook || !formData.chan_instagram){
// 	next();
// 	if(formData.chan_youtube){
// 		previous();
//   	}
//   }

//   if(formData.chan_youtube){
// 	next();
//   }

  return (
    <>
			<fieldset>
				<br/><br/>
				<h4 style={{textAlign: "left", color: "#5851bb"}}>Channnel Authentication</h4>
				<br/>
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6 grid-margin stretch-card" style={{border: "3px solid #3b5999"}}>
						<div className="card text-center">
							<div className="card-body">
								<p className="mt-4 card-text" style={{fontSize: "23px", lineHeight: "34px"}}>
									To Advertise on Facebook or Instagram, You must have a Facebook page Please Link your
									page before starting to build your ads
								</p>
								{/* <button className="btn btn-info btn-sm mt-3 mb-4">Connect Facebook Page</button> */}
								<FacebookLogin
									appId={config.FACEBOOK_APP_ID}
									fields="name,email,picture"
									callback={facebookResponse} 
									textButton="Connect Facebook Page"
									tag="button"
									cssClass="btn btn-info btn-sm mt-3 mb-4"
									icon={<i className="fab fa-facebook-f mr-2"></i>}
									>
								</FacebookLogin>
							</div>
						</div>
					</div>
				</div>
				<input type="button" onClick={next} name="next" className="next action-button" value="Next" />
				<input type="button" onClick={previous} name="previous" className="previous action-button-previous" value="Previous" />
			</fieldset>
    </>
  );
};

export default Step7;
