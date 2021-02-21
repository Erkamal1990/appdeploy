import React,{useState} from "react";

const Step3 = ({ setForm, formData, navigation }) => {
  const { chan_facebook,chan_instagram,chan_youtube ,chan_google} = formData;
  const { previous, next } = navigation;
  var [channelErr, setchannelErr] = useState();
	 const formValidation = () => {
		let isValid = false;
		channelErr = "Please Select at least one channel.";
		if (formData.chan_facebook) {
			isValid = true;
		}
		if (formData.chan_instagram) {
			isValid = true;
		}
		if (formData.chan_youtube) {
			isValid = true;
		}
		if (formData.chan_google) {
			isValid = true;
		}
		setchannelErr(channelErr);
		return isValid;
	}

	const onSubmit = ()=>{
		// e.preventDefault();
		const isValid = formValidation();
		if(isValid){
			next();
		}
	  }
	  console.log(formData);
  return (
    <>
    <fieldset>
			<br/><br/>
			<h4 style={{textAlign: "left", color: "#5851bb"}}>Platform</h4>
			<p style={{textAlign: "left", fontSize: "20px"}}>You need to select at least one channel</p>
			{channelErr ?(
				<div style={{textAlign: "left",color:'red'}}>{channelErr}</div>
			):null}
			<div className="container-fluid">
				<div className="row" style={{margin: "0px auto"}}>
					<div className="col-md-1">
					</div>
					<div className="col-md-2">
						<label className="container2">
							<input type="checkbox" name="chan_facebook" defaultChecked={formData.chan_facebook?true:false} value="facebook" onChange={setForm} className="input check-social"/>
							<span className="d_checkbox"></span>
							<img src="./img/facebook.png" className="font4566"/>
						</label>
					</div>

					<div className="col-md-2">
						<label className="container2">
							<input type="checkbox"  name="chan_instagram" defaultChecked={formData.chan_instagram?true:false} value='instagram' onChange={setForm} className="input check-social"/>
							<span className="d_checkbox"></span>
							<img src="./img/insta.png" className="font4566"/>
						</label>
					</div>

					<div className="col-md-2">
						<label className="container2">
							<input type="checkbox" defaultChecked={formData.chan_youtube?true:false} className="input check-social" name="chan_youtube" value='youtube' onChange={setForm}/>
							<span className="d_checkbox"></span>
							<img src="./img/youtube.png" className="font4566"/>
						</label>
					</div>

					<div className="col-md-2">
						<label className="container2">
							<input type="checkbox" defaultChecked={formData.chan_google?true:false} className="input check-social" name="chan_google" value="google" onChange={setForm} />
							<span className="d_checkbox"></span>
							<img src="./img/googlesearch.png" className="font4566"/>
						</label>
					</div>
					<div className="col-md-2">
						<label className="container2" style={{background: "#f0f8ff"}}>
							<input type="checkbox" className="input check-social" disabled/>
							<span className="d_checkbox"></span>
							<img style={{opacity:"0.5"}} src="./img/tiktok.png" className="font4566"/>
						</label>
					</div>
				</div>
			</div>
			<input type="button" onClick={onSubmit} className="next action-button" value="Next" />
			<input type="button" onClick={previous} name="previous" className="previous action-button-previous" value="Previous" />
		</fieldset>
    </>
  );
};

export default Step3;
