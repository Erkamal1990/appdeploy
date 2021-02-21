import React, { useState } from "react";
import axios from 'axios';
const Step5 = ({ setForm, formData, navigation }) => {
  const {fbAdData,instaAdData,googleAdData,YouTubeAdData} = formData;

  const { previous, next } = navigation;
  const [fbimage, setFbImage] = useState({ preview: "", raw: "" });
  const [instaImage, setInataImage] = useState({ preview: "", raw: "" });

  const [fbEditable, setfbEditable] = useState(false);
  const [instaEditable, setinstaEditable] = useState(false);
  const [googleEditable, setGoogleEditable] = useState(false);
  const [youtubeEditable, setyoutubeEditable] = useState(false);

  const [FbAdPreview, setFbAdPreview] = useState({ message: "", imageUrl: "" , heading1:"" , heading2:"" , url:"" , button:"" });
  const [InstaAdPreview, setInstaAdPreview] = useState({  message: "", imageUrl: "" , url:"", button: "" });
  const [YouTubeAdPreview, setYouTubeAdPreview] = useState({ youtube_link: ""});

 

  var [messageErr, setmessageErr] = useState();
  var [fbimageUrlErr, setfbimageUrlErr] = useState();
  var [fbUrlErr, setfbUrlErr] = useState();
  var [instaImageUrlErr, setinstaImageUrlErr] = useState();
  var [instaUrlErr, setinstaUrlErr] = useState();

  var [googleHeading1Err, setgoogleHeading1Err] = useState();
  var [googleHeading2Err, setgoogleHeading2Err] = useState();
  var [googleUrlErr, setgoogleUrlErr] = useState();
  var [googleMessage1Err, setgoogleMessage1Err] = useState();
  var [googleMessage2Err, setgoogleMessage2Err] = useState();

  var [googleSiteHeadingErr, setgoogleSiteHeadingErr] = useState();
  var [googleSiteUrlErr, setgoogleSiteUrlErr] = useState();
  var [youtubeLinkErr, setyoutubeLinkErr] = useState();

// form
const [FormList, setFormList] = useState([]);
const [googleAdPreview, setGoogleAdPreview] = useState(
	{
	Heading1: "",
	Heading2:"",
	Heading3:"",
	url: "",
	message1:"",
	message2:"",
	});
	// handle click event of the Add button
	const addSiteLink = () => {
		setFormList([...FormList, { siteHeading: "", description1: "" , description2:"" , siteUrl:"" }]);
	  };
//handle click event of the Remove button
  const handleRemoveForm = index => {
    const list = [...FormList];
    list.splice(index, 1);
    setFormList(list);
  };
   // handle input change
   const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...FormList];
    list[index][name] = value;
    setFormList(list);
  };
// form


  formData.fbAdData = FbAdPreview;
  formData.instaAdData = InstaAdPreview;
  formData.googleAdData = googleAdPreview;
  formData.YouTubeAdData = YouTubeAdPreview;
  formData.googleAdData.siteLink = FormList;
console.log(formData);
  const FbEditable = e => {
    if (e) {
		setfbEditable(true);
    }
  };
  const InstaEditable = e => {
  if (e) {
	setinstaEditable(true);
  }
};
const GoogleEditable = e => {
  if (e) {
	setGoogleEditable(true);
  }
};
const YouTubeEditable = e => {
	if (e) {
	  setyoutubeEditable(true);
	}
  };
// Preview
const FbPreview = e => {
    if (e) {
		setfbEditable(false);
	}
  };
  const InstaPreview = e => {
    if (e) {
		setinstaEditable(false);
    }
  };
  const youtubeAdPreview = e => {
    if (e) {
		setyoutubeEditable(false);
    }
  };
  const GoogleAdPreview = e => {
    if (e) {
		setGoogleEditable(false);
    }
  };
  const fbchangeHandler = e => {
	setFbAdPreview({...FbAdPreview, [e.target.name]: e.target.value});
	if (e.target.files) {
		formData.FbAdImg = e.target.files[0];
		setFbImage({
		  preview: URL.createObjectURL(e.target.files[0]),
		  raw: e.target.files[0]
		});
	  }
  }

  const instachangeHandler = e => {
	setInstaAdPreview({...InstaAdPreview, [e.target.name]: e.target.value});
	if (e.target.files) {
		formData.InstaAdImg = e.target.files[0];
		setInataImage({
		  preview: URL.createObjectURL(e.target.files[0]),
		  raw: e.target.files[0]
		});
	  }
  }
 
	function validateUrl(url) {
		var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		if (pattern.test(url)) {
			return true;
		} 
			return false;
	}
	 const formValidation = () => {
		let isValid = true;
		if(formData.chan_facebook){
			if (!formData.fbAdData.message) {
				messageErr = "Please fill out this field.";
			  isValid = false;
			}
			if(formData.FbAdImg){
				if (!formData.FbAdImg.name) {
					fbimageUrlErr = "Please add an image to your facebook ad.";
				isValid = false;
				}
			}
			if (formData.fbAdData.url) {
				if (!validateUrl(formData.fbAdData.url)) {
					fbUrlErr = "Please enter valid url.";
				  isValid = false;
				}
			}
			setfbEditable(true);
		}

		if(formData.chan_instagram){	
			if(formData.InstaAdImg){
				if (!formData.InstaAdImg.name) {
					instaImageUrlErr = "Please add an image to your instagram ad.";
				isValid = false;
				}
			}
			if (formData.instaAdData.url) {
				if (!validateUrl(formData.instaAdData.url)) {
					instaUrlErr = "Please enter valid url.";
				  isValid = false;
				}
			  }
			setinstaEditable(true);
		}
		if(formData.chan_google){	
			if (!formData.googleAdData.Heading1) {
				googleHeading1Err = "Please fill out this field.";
			  isValid = false;
			}
			if (!formData.googleAdData.Heading2) {
				googleHeading2Err = "Please fill out this field.";
			  isValid = false;
			}
			if (!formData.googleAdData.message1) {
				googleMessage1Err = "Please fill out this field.";
			  isValid = false;
			}
			if (!formData.googleAdData.message2) {
				googleMessage2Err = "Please fill out this field.";
			  isValid = false;
			}
			if (formData.googleAdData.url) {
				if (!validateUrl(formData.googleAdData.url)) {
					googleUrlErr = "Please enter valid url.";
				  isValid = false;
				}
			  }
			  if (!formData.googleAdData.url) {
				  googleUrlErr = "Please fill out this field.";
				  isValid = false;
			  }
			  setGoogleEditable(true);
		}
		if(formData.chan_youtube){	
			if (formData.YouTubeAdData.youtube_link) {
				if (!validateUrl(formData.YouTubeAdData.youtube_link)) {
					youtubeLinkErr = "Please enter valid url.";
				  isValid = false;
				}
			  }
			setyoutubeEditable(true);
		}

		setmessageErr(messageErr);
		setfbimageUrlErr(fbimageUrlErr);
		setinstaImageUrlErr(instaImageUrlErr);
		setfbUrlErr(fbUrlErr);
		setinstaUrlErr(instaUrlErr);

		setgoogleHeading1Err(googleHeading1Err);
		setgoogleHeading2Err(googleHeading2Err);
		setgoogleUrlErr(googleUrlErr);
		setgoogleMessage1Err(googleMessage1Err);
		setgoogleMessage2Err(googleMessage2Err);
		setgoogleSiteHeadingErr(googleSiteHeadingErr);
		setgoogleSiteUrlErr(googleSiteUrlErr);
		setyoutubeLinkErr(youtubeLinkErr);
		return isValid;
	}

	const onSubmit = ()=>{
		const isValid = formValidation();
		if(isValid){
			next();
		}
	  }
	  const googleChangeHandler = (e) => {
		setGoogleAdPreview({...googleAdPreview, [e.target.name]: e.target.value});
		}
		const youtubechangeHandler = (e) => {
			setYouTubeAdPreview({...YouTubeAdPreview, [e.target.name]: e.target.value});
			}

  return (
    <>
    <fieldset>
			<div className="row">
				{/* Facebook Ad */}
				{formData.chan_facebook && 
				<div className="col-md-3">
					<div className="sectionCenter">
						<div>
							<img src="./img/facebook-header.png"
								width="100%"/>
						</div>
						<div className="mainPosts">
							<div className="mainPosts__title">
								<div className="mainPosts__title--profile">
									{formData.fbUserImage ? (
									<div className="globalProfile__circleProfile" style={{backgroundImage: "url("+formData.fbUserImage+")"}}>
										<span></span>
									</div>
									) : (
										<div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/profile.jpg)"}}>
										<span></span>
									    </div>
									)}

									<div className="mainPosts__title--profile--name">
										<a href="#">{formData.fbPageName ? formData.fbPageName : 'Business page'} </a>
										<span>1h <i className="fas fa-globe-americas"></i> </span>
									</div>
								</div>
								{!fbEditable && (
										<i className="fas fa-edit" id="facebookAd" style={{cursor: "pointer"}} onClick={FbEditable}></i>
									)}
							</div>
							{fbEditable ? (
								<>
							<div className="mainPosts__description">
							    <textarea className="form-control" name="message" onChange={fbchangeHandler} value={formData.fbAdData.message} placeholder="Add a message to your customers here."></textarea>
								{messageErr ?(
									<div style={{textAlign: "left",color:'red'}}>{messageErr}</div>
								):null}
							</div>
							<div className="mainPosts__post" style={{backgroundImage: "url("+fbimage.preview+")"}}>
							<label htmlFor="upload-button" className="imageLabel">
										<h5 className="text-center clickToUpload">Click Upload your photo</h5>
								</label>
								<input
									type="file"
									id="upload-button"
									style={{ display: "none" }}
									onChange={fbchangeHandler}
								/>
							</div>
							{fbimageUrlErr ?(
									<div style={{textAlign: "left",color:'red'}}>{fbimageUrlErr}</div>
								):null}
							<div className="mainPosts__description">
							<input type="text" name="heading1" onChange={fbchangeHandler} value={formData.fbAdData.heading1} placeholder="Headline 1" className="form-control other_input"></input>
							<input type="text" name="heading2" onChange={fbchangeHandler} value={formData.fbAdData.heading2} placeholder="Headline 2" className="form-control other_input"></input>
							<input type="text" name="url" onChange={fbchangeHandler} value={formData.fbAdData.url} placeholder="Add Website OR Facebook Page URL" className="form-control other_input"></input>
							{fbUrlErr ?(
									<div style={{textAlign: "left",color:'red'}}>{fbUrlErr}</div>
							):null}
							<input type="button" name="next" onClick={FbPreview} className="next action-button" value="Preview" />
							</div>
							</>
							) : (
								<>
							<div className="mainPosts__description">
							{formData.fbAdData.message ? formData.fbAdData.message : 'Add a message to your customers here'}
							</div>
							{fbimage.preview ? (
								<div className="mainPosts__post" style={{backgroundImage: "url("+fbimage.preview+")"}}></div>
								) : (
									<div className="mainPosts__post" style={{backgroundImage: "url(img/post-1.jpg)"}}></div>
								)}
							<div className="mainPosts__description">
							<p className="heading_data">{formData.fbAdData.heading1 ? formData.fbAdData.heading1 : 'Add a catchy headline 1 here'}</p>
							<p className="heading_data">{formData.fbAdData.heading2 ? formData.fbAdData.heading2 : 'Add a catchy headline 2 here'}</p>
							</div>
								</>
							)}
							<div className="mainPosts__reaction">
								<div className="mainPosts__reaction--icons">
									<div className="svg">
										<img src="svg/like.svg" alt="" />
									</div>
									<div className="svg">
										<img src="svg/heart.svg" alt="" />
									</div>
									<div className="svg">
										<img src="svg/care.svg" alt="" />
									</div>
									<a href="#">52k</a>
								</div>
							</div>
							<div className="mainPosts__likeShare">
								<span>
									<div className="svg">
										<img src="svg/like_light.svg" alt="" />
									</div>
									<h3>Like</h3>
								</span>
								<span>
									<div className="svg">
										<img src="svg/comment.svg" alt="" />
									</div>
									<h3>Comment</h3>
								</span>
								<span>
									<div className="svg">
										<img src="svg/share.svg" alt="" />
									</div>
									<h3>Share</h3>
								</span>
							</div>
						</div>
						<div>
							<img src="./img/facebook-footer.png"
								width="100%"/>
						</div>
					</div>
				</div>
					}
				{/* Instagram Ad */}
				{formData.chan_instagram && 
				<div className="col-md-3">
					<div className="sectionCenter">
						<div>
							<img src="./img/header-insta.png"
								width="100%"/>
						</div>
						<div className="mainPosts">
							<div className="mainPosts__title">
								<div className="mainPosts__title--profile">
									<div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/profile.jpg)"}}>
										<span></span>
									</div>

									<div className="mainPosts__title--profile--name">
										<a href="#">Business page</a>
										<span>22h <i className="fas fa-globe-americas"></i> </span>
									</div>
								</div>
								{!instaEditable && (
										<i className="fas fa-edit"  style={{cursor: "pointer"}} onClick={InstaEditable}></i>
									)}
							</div>

							{instaEditable ? (
								<>
								<textarea className="form-control" name="message" onChange={instachangeHandler} value={InstaAdPreview.message} placeholder="Add a message to your customers here."></textarea>
								<div className="mainPosts__post" style={{backgroundImage: "url("+instaImage.preview+")"}}>
									<label htmlFor="uploadInsta" className="imageLabel">
												<h5 className="text-center clickToUpload">Click Upload your photo</h5>
										</label>
										<input
											type="file"
											id="uploadInsta"
											style={{ display: "none" }}
											onChange={instachangeHandler}
										/>
									</div>
									{instaImageUrlErr ?(
											<div style={{textAlign: "left",color:'red'}}>{instaImageUrlErr}</div>
										):null}
								<div className="mainPosts__description">
								<input type="text" name="url" onChange={instachangeHandler} value={InstaAdPreview.url} placeholder="Add Website OR Facebook Page URL" className="form-control other_input"></input>
								{instaUrlErr ?(
									<div style={{textAlign: "left",color:'red'}}>{instaUrlErr}</div>
							):null}
								<input type="button" name="next" onClick={InstaPreview} className="next action-button" value="Preview" />
							</div>
							</>
							) : (
								<>
								<div className="mainPosts__description">
								{InstaAdPreview.message ? InstaAdPreview.message : 'Add a message to your customers here'}
								</div>
								{instaImage.preview ? (
								<div className="mainPosts__post" style={{backgroundImage: "url("+instaImage.preview+")"}}></div>
								) : (
									<div className="mainPosts__post" style={{backgroundImage: "url(img/post-4.jpg)"}}></div>
								)}
								</>
							)}
							<div className="mainPosts__reaction">
								<div className="mainPosts__reaction--icons">
									<div className="svg">
										<img src="svg/like.svg" alt="" />
									</div>
									<div className="svg">
										<img src="svg/heart.svg" alt="" />
									</div>
									<div className="svg">
										<img src="svg/care.svg" alt="" />
									</div>
									<a href="#">105k</a>
								</div>
							</div>
							<div className="mainPosts__likeShare">
								<span>
									<div className="svg">
										<img src="svg/like_light.svg" alt="" />
									</div>
									<h3>Like</h3>
								</span>
								<span>
									<div className="svg">
										<img src="svg/comment.svg" alt="" />
									</div>
									<h3>Comment</h3>
								</span>
								<span>
									<div className="svg">
										<img src="svg/share.svg" alt="" />
									</div>
									<h3>Share</h3>
								</span>
							</div>
						</div>
						<div>
							<img src="./img/footer-insta.png"
								width="100%"/>
						</div>
					</div>
				</div>
				}
			{/* Instagram Ad */}
			{/* google search Ad */}
			{formData.chan_google && 
				<div className="col-md-3">
					<div className="sectionCenter">
						<div>
							<img src="./img/ggogleSearchHeader.png"
								width="100%"/>
						<div className="mainPosts" style={{marginTop:'0px'}}>
								<div className="mainPosts__title--profile">
								<img src="./img/new_google_search_head.png"
										width="100%"/>
								</div>
								{googleEditable ? (
								<>
								<div className="mainPosts__description">
								<input type="text" name="Heading1" onChange={googleChangeHandler} value={formData.googleAdData.Heading1} placeholder="Enter Headline 1" className="form-control other_input"></input>
								{googleHeading1Err ?(
										<div style={{textAlign: "left",color:'red'}}>{googleHeading1Err}</div>
								):null}
								<input type="text" name="Heading2" onChange={googleChangeHandler} value={formData.googleAdData.Heading2} placeholder="Enter Headline 2" className="form-control other_input"></input>
								{googleHeading2Err ?(
										<div style={{textAlign: "left",color:'red'}}>{googleHeading2Err}</div>
								):null}
								
								<input type="text" name="Heading3" onChange={googleChangeHandler} value={formData.googleAdData.Heading3} placeholder="Enter Headline 3" className="form-control other_input"></input>
								
								
		                     <input type="text" name="url" onChange={googleChangeHandler} value={formData.googleAdData.url} placeholder="Add Website OR Facebook Page URL" className="form-control other_input"></input>
							 {googleUrlErr ?(
										<div style={{textAlign: "left",color:'red'}}>{googleUrlErr}</div>
								):null}
							 <input type="text" name="message1" onChange={googleChangeHandler} value={formData.googleAdData.message1} placeholder="Enter message 1 to your customers" className="form-control other_input"></input>
								{googleMessage1Err ?(
										<div style={{textAlign: "left",color:'red'}}>{googleMessage1Err}</div>
								):null}
								<input type="text" name="message2" onChange={googleChangeHandler} value={formData.googleAdData.message2} placeholder="Enter message 2 to your customers" className="form-control other_input"></input>
								{googleMessage2Err ?(
										<div style={{textAlign: "left",color:'red'}}>{googleMessage2Err}</div>
								):null}
								{/* dynamic form */}

								<div>									
									{/* {formDataList} */}
									{FormList.length > 0 ? (
										<>
									{FormList.map((val, idx)=> {
									let headline = `siteHeading`, description1 = `description1`,description2 = `description2`,url = `siteUrl`
									return (
									<>
										{idx < 4 ? (
										<div key={idx}>
										<small style={{float:"left",color:"#5851bb",fontWeight:"700"}}> Site Link </small>
												<i className="fas fa-trash" onClick={handleRemoveForm}  style={{cursor: "pointer",float:"right"}}></i>
												<div className="clearfix"></div>
										<input type="text" onChange={e => handleInputChange(e, idx)} name={headline} value={val.siteHeading} placeholder="Enter a sitelink headline" className="form-control other_input"></input>
										<input type="text" onChange={e => handleInputChange(e, idx)} name={description1} value={val.description1} placeholder="Enter description 1" className="form-control other_input"></input>
										<input type="text" onChange={e => handleInputChange(e, idx)} name={description2} value={val.description2} placeholder="Enter description 2" className="form-control other_input"></input>
										<input type="text" onChange={e => handleInputChange(e, idx)} name={url} value={val.siteUrl} placeholder="Add Landing Page URL" className="form-control other_input"></input>
										</div>
									):null}
									</>
									)
								})}
								</>
								):null}

									{/* dynamic form */}
									<small onClick={addSiteLink} style={{cursor: "pointer",color:"#5851bb",fontWeight:"700"}}>+ Add Site Link</small>
									<input type="button" name="next" onClick={GoogleAdPreview} className="next action-button" value="Preview" />
									</div>
									
								</div>
							   </>
							) : (
								<>
								<div className="searchAdContant pl-3 pt-3 pr-3 text-left">
									<small style={{float:"left",color:"#000"}}><strong>AD </strong> https://test.com</small>
									{!googleEditable && (
										<i className="fas fa-edit"  style={{cursor: "pointer",float:"right"}} onClick={GoogleEditable}></i>
									)}
									<div className="clearfix"></div>
									<div class="row pl-2">
										<p class="w-100 p_heading">
											<span>{formData.googleAdData.Heading1 ? formData.googleAdData.Heading1 : 'Enter Headline 1'}</span>
											<span class="pl-2">| </span>
											<span>{formData.googleAdData.Heading2 ? formData.googleAdData.Heading2 : 'Enter Headline 2'}</span>
											<span class="pl-2">|</span>
											<span class=" pl-2">{formData.googleAdData.Heading3 ? formData.googleAdData.Heading3 : 'Enter Headline 3'}</span>
										</p>
									</div>
									<div class=" row pl-2 mt-2 w-100"> 
										<p class="mb-0 pr-2 p_dis"><span>{formData.googleAdData.message1 ? formData.googleAdData.message1 : 'Enter a message 1 to your customer.'}</span></p>
										<p className="p_dis"><span>{formData.googleAdData.message1 ? formData.googleAdData.message1 : 'Enter a message 2 to your customer.'}</span></p>
									</div>

									<hr style={{marginTop:"0px"}} />
									<div class="row pl-2 ad-box">
									{formData.googleAdData.siteLink.length > 0 ? (
										<>
									{formData.googleAdData.siteLink.map((val, idx)=> {
									return (
									<>
										{idx < 4 ? (
										<div class="col-lg-6 col-md-6 col-6">
											<div class="row">
												<p className="p_heading mb-1">{formData.googleAdData.siteLink[idx].siteHeading}</p>
											</div>
											<div class="row">
												<p className="p_dis">{formData.googleAdData.siteLink[idx].description1}</p>
											</div>
											<div class="row">
												<p className="p_dis">{formData.googleAdData.siteLink[idx].description2}</p>
											</div>
										</div>
									):null}
									</>
									)
								})}
								</>
								):null}
									</div>
							 </div>
								</>
							)}
						<div>
							<img src="./img/blury_search_background.jpg"
								width="100%"/>
						</div>
					</div>
				</div>
			{/* google search Ad */}
			</div>
			</div>
			}
			{/* You tube link Ad */}
			{formData.chan_youtube && 
				<div className="col-md-3">
					<div className="sectionCenter">
						<div className="mainPosts">
							<div className="mainPosts__title">
								<div className="mainPosts__title--profile">
									<div className="mainPosts__title--profile--name">
										<a href="#">Youtube</a>
									</div>
								</div>
								{!YouTubeEditable && (
										<i className="fas fa-edit"  style={{cursor: "pointer"}} onClick={YouTubeEditable}></i>
									)}
							</div>

							{YouTubeEditable ? (
								<>
								<div className="mainPosts__description">
								<input type="text" name="youtube_link" onChange={youtubechangeHandler} value={formData.YouTubeAdData.youtube_link} placeholder="Add Youtube Video Link" className="form-control other_input"></input>
								{youtubeLinkErr ?(
									<div style={{textAlign: "left",color:'red'}}>{youtubeLinkErr}</div>
							):null}
								{/* <input type="button" name="next" onClick={youtubeAdPreview} className="next action-button" value="Preview" /> */}
							</div>
							</>
							) : (
								<>
								<div className="mainPosts__description">
								{InstaAdPreview.message ? InstaAdPreview.message : ''}
								</div>
								</>
							)}
						</div>
					</div>
				</div>
				}
			{/* You tube link Ad */}
			</div>
			<input type="button"  onClick={onSubmit} className="next action-button" value="Next" />
			<input type="button" name="previous" onClick={previous} className="previous action-button-previous" value="Previous" />
		</fieldset>
    </>
  );
};

export default Step5;
