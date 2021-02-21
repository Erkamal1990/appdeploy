import React from 'react';
function Campaign (){
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    style={{display: "none"}} aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel" style={{fontSize:"22px"}}>Create Campaign</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-10 col-md-10 col-lg-12 col-xl-12 text-center p-0  mb-2">
                <div className="card px-0 pb-0 mt-3 mb-3">
                  <form id="msform">
                    <ul id="progressbar">
                      <li className="active" id="account"><strong className="streongdt">Media Objective</strong>
                      </li>
                      <li id="personal"><strong>Audience Selection</strong>
                      </li>
                      <li id="paymentone"><strong>Platform</strong>
                      </li>
                      <li id="paymenttwo"><strong>Budget</strong>
                      </li>
                      <li id="paymentfour"><strong>Creative</strong>
                      </li>
                      <li id="paymentthree"><strong>Forcasting</strong>
                      </li>
                      <li id="payment"><strong>Channel Authenrication</strong>
                      </li>
                      <li id="confirm"><strong>Payment</strong>
                      </li>
                    </ul>
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <br/>
                    <fieldset>
                      <br/>
                      <h4 stylestyle={{textAlign:"left",color: "#5851bb"}}> Meadia Objective </h4>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="container1">
                            <label className="option_item">
                              <input type="checkbox" className="checkbox check-message coupon_question" id="inputMessage"
                                value="1"/>
                              <div className="option_inner facebook">
                                <div className="tickmark"></div>
                                <div className="icon taghedd">
                                  <i className="fab fa fa-comment"></i>
                                </div>
                                <h4 className="taghedd">Messages</h4>
                                <div className="name taghedd">Lorem ipsum dolor sit amet.</div>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="container1">
                            <label className="option_item">
                              <input type="checkbox" className="checkbox check-message coupon_question1" id="inputWebsite"/>
                              <div className="option_inner facebook">
                                <div className="tickmark"></div>
                                <div className="icon taghedd"><i className="fab fa fa-globe"></i></div>
                                <h4 className="taghedd">Website Traffic</h4>
                                <div className="name taghedd">Lorem ipsum dolor sit amet.</div>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="container1">
                            <label className="option_item">
                              <input type="checkbox" className="checkbox check-message coupon_question2"/>
                              <div className="option_inner facebook">
                                <div className="tickmark"></div>
                                <div className="icon taghedd"><i className="fab fa fa-phone" aria-hidden="true"></i></div>
                                <h4 className="taghedd">Phone Calls</h4>
                                <div className="name taghedd">Lorem ipsum dolor sit amet.</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="container1">
                            <label className="option_item">
                              <input type="checkbox" className="checkbox check-message coupon_question3"/>
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
                        <div className="col-md-4">
                          <div className="container1">
                            <label className="option_item">
                              <input type="checkbox" className="checkbox check-message coupon_question4"/>
                              <div className="option_inner facebook">
                                <div className="tickmark"></div>
                                <div className="icon taghedd"><i className="fab fa fa-filter"></i></div>
                                <h4 className="taghedd">Lead Generation</h4>
                                <div className="name taghedd">Lorem ipsum dolor sit amet.</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="next" className="next action-button" value="Next" />

                      <div className="row">
                        <div className="col-md-6">
                          <div className="answer">
                            <p style={{textAlign: "left", fontSize: "18px;"}}>Select your messages platforms</p>
                            <div className="form-group">
                              <div className="form-check">
                                <label className="form-check-label" style={{textAlign: "left"}}>
                                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                                    value=""/>
                                  WhatsApp
                                  <i className="input-helper"></i></label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label" style={{textAlign: "left"}}>
                                  <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2"
                                    value="option2" checked=""/>
                                  Messenger & Instagram DM
                                  <i className="input-helper"></i></label>
                              </div>
                            </div>
                            <p style={{textAlign: "left", fontSize: "12px"}}>* Please enter your WhatsApp number</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="answer1">
                            <p style={{textAlign: "left", fontSize: "18px;"}}>Website address</p>
                            <div className="form-group">
                              <input type="text" className="form-control form-control-sm inp" placeholder="example.com"
                                aria-label="Username"/>
                            </div>
                            <p style={{textAlign: "left", fontSize: "12px;"}}>*Please enter your website address</p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="answer2">
                            <p style={{textAlign: "left", fontSize: "18px;"}}>Phone Number</p>
                            <div className="form-group">
                              <input type="text" className="form-control form-control-sm inp" placeholder="050 123 4567"
                                aria-label="Username"/>
                            </div>
                            <p style={{textAlign: "left", fontSize: "12px;"}}>* Please enter your phone number</p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="answer3">
                            <p style={{textAlign: "left", fontSize: "18px;"}}>Store Name</p>
                            <div className="form-group">
                              <input type="text" className="form-control inp" id="exampleInputUsername1"
                                placeholder="Search for your store name"/>
                            </div>
                            <p style={{textAlign: "left", fontSize: "12px;"}}>* Please enter your store name</p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="answer4">
                            <p style={{textAlign: "left", fontSize: "18px;"}}>What information do you want to ask for?
                              Select at least 2 fields.</p>
                            <div className="form-group">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input" checked=""/>
                                  Name
                                  <i className="input-helper"></i></label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                  Email
                                  <i className="input-helper"></i></label>
                              </div>
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input" checked=""/>
                                  Phone Number
                                  <i className="input-helper"></i></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <div className="col-md-12">

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
                          <br/>
                          <h4 style={{textAlign: "left", color: "#5851bb"}}> Audience Selection </h4>
                          <p style={{textAlign: "left"}}>Select Location, Age, Gender and Interest of people you want to
                            reach with you ad.</p>
                          <br/>
                          <h4 style={{textAlign: "left"}}>Gender</h4>
                          <br/>
                          <div className="form-group" style={{textAlign: "left"}}>
                            <div className="form-check" style={{display: "inline-block"}}>
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                                  value=""/>
                                All
                                <i className="input-helper"></i></label>
                            </div>
                            &nbsp;&nbsp;
                            <div className="form-check" style="display: inline-block;">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                                  value=""/>
                                Men
                                <i className="input-helper"></i></label>
                            </div>
                            &nbsp;&nbsp;
                            <div className="form-check" style="display: inline-block;">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                                  value=""/>
                                Women
                                <i className="input-helper"></i></label>
                            </div>
                          </div>
                          <br/>
                          <div className="slider-wrap">
                            <h4 style={{textAlign: "left"}}>Age</h4>
                            <input type="text" id="range_03" name="range_03" value="" />
                          </div>
                          <br/><br/>
                          <h4 style={{textAlign: "left"}}>Location</h4>
                          <br/>
                          <div className="row">
                            <div className="col-md-3">
                              <input type="text" className="form-control inp" id="exampleInputUsername1"
                                placeholder="Country"/>
                            </div>
                            <div className="col-md-3">
                              <input type="text" className="form-control inp" id="exampleInputUsername1"
                                placeholder="State"/>
                            </div>
                            <div className="col-md-3">
                              <input type="text" className="form-control inp" id="exampleInputUsername1" placeholder="City" />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                              <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home-1" role="tab"
                                    aria-controls="home-1" aria-selected="true">Demographics</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile-1" role="tab"
                                    aria-controls="profile-1" aria-selected="false">Behaviors</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact-1" role="tab"
                                    aria-controls="contact-1" aria-selected="false">Behaviors</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact-1" role="tab"
                                    aria-controls="more-1" aria-selected="false">More Categories</a>
                                </li>
                              </ul>
                              <div className="tab-content">
                                <div className="tab-pane fade show active" id="home-1" role="tabpanel"
                                  aria-labelledby="home-tab">
                                  <div className="">
                                    <div className="row">
                                      <div className="col-lg-12 grid-margin stretch-card">
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="mt-4">
                                              <div className="accordion accordion-bordered" id="accordion-2" role="tablist">
                                                <div className="card">
                                                  <div className="card-header" role="tab" id="heading-4">
                                                    <h6 className="mb-0">
                                                      <a data-toggle="collapse" href="#collapse-4" aria-expanded="false"
                                                        aria-controls="collapse-4">
                                                        Eduction
                                                      </a>
                                                    </h6>
                                                  </div>
                                                  <div id="collapse-4" className="collapse" role="tabpanel"
                                                    aria-labelledby="heading-4" data-parent="#accordion-2">
                                                    <div className="card-body">
                                                      You can pay for the product you have purchased using credit cards,
                                                      debit cards, or via online banking. We also provide
                                                      cash-on-delivery services for most of our products. You can also
                                                      use your account wallet for payment.
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="card">
                                                  <div className="card-header" role="tab" id="heading-5">
                                                    <h6 className="mb-0">
                                                      <a className="collapsed" data-toggle="collapse" href="#collapse-5"
                                                        aria-expanded="false" aria-controls="collapse-5">
                                                        I can’t sign in to my account
                                                      </a>
                                                    </h6>
                                                  </div>
                                                  <div id="collapse-5" className="collapse" role="tabpanel"
                                                    aria-labelledby="heading-5" data-parent="#accordion-2">
                                                    <div className="card-body">
                                                      <p>
                                                        If while signing in to your account you see an error message,
                                                        you can do the following
                                                      </p>
                                                      <ol className="pl-3">
                                                        <li>Check your network connection and try again</li>
                                                        <li>Make sure your account credentials are correct while signing
                                                          in</li>
                                                        <li>Check whether your account is accessible in your region</li>
                                                      </ol>
                                                      <br/>
                                                      <i className="fa fa-exclamation-triangle-octagon mr-2"></i>If the
                                                      problem persists, you can contact our support.
                                                    </div>
                                                  </div>
                                                </div>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>

                                <div className="tab-pane fade" id="profile-1" role="tabpanel" aria-labelledby="profile-tab">
                                  <div className="media">
                                    <div className="media-body">
                                      <h4 className="mt-0">John Doe</h4>
                                      <p>
                                        Fail most room even gone her end like. Comparison dissimilar unpleasant six
                                        compliment two unpleasing
                                        any add. Ashamed my company thought wishing colonel it prevent he in. Pretended
                                        residence are something
                                        far engrossed old off.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="contact-1" role="tabpanel" aria-labelledby="contact-tab">
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nam, debitis
                                    corrupti ullam doloribus et libero aspernatur laboriosam! Ipsam, suscipit? </p>
                                </div>

                                <div className="tab-pane fade" id="more-1" role="tabpanel" aria-labelledby="contact-tab">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quas? Recusandae
                                    laboriosam minima facere beatae?</p>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      <input type="button" name="next" className="next action-button" value="Next" />
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                      <br/><br/>
                      <h4 style={{textAlign: "left", color: "#5851bb"}}>Platform</h4>
                      <p style={{textAlign: "left", fontSize: "20px"}}>You need to select at least one channel</p>
                      <div className="container-fluid">
                        <div className="row" style={{margin: "0px auto"}}>
                          <div className="col-md-1">
                          </div>
                          <div className="col-md-2">
                            <label className="container2">
                              <input type="checkbox" className="input check-social"/>
                              <span className="d_checkbox"></span>
                              <img src="../img/facebook.png" className="font4566"/>
                            </label>
                          </div>

                          <div className="col-md-2">
                            <label className="container2">
                              <input type="checkbox" className="input check-social"/>
                              <span className="d_checkbox"></span>
                              <img src="../img/insta.png" className="font4566"/>
                            </label>
                          </div>

                          <div className="col-md-2">
                            <label className="container2">
                              <input type="checkbox" className="input check-social"/>
                              <span className="d_checkbox"></span>
                              <img src="../img/googleadd.png" className="font4566"/>
                            </label>
                          </div>

                          <div className="col-md-2">
                            <label className="container2">
                              <input type="checkbox" className="input check-social"/>
                              <span className="d_checkbox"></span>
                              <img src="../img/googlesearch.png" className="font4566"/>
                            </label>
                          </div>
                          <div className="col-md-2">
                            <label className="container2">
                              <input type="checkbox" className="input check-social"/>
                              <span className="d_checkbox"></span>
                              <img src="../img/tiktok.png" className="font4566"/>
                            </label>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="next" className="next action-button" value="Next" />
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>

                  <fieldset>
                      <div className="row">
                        <div className="col-md-5">
                          <br/><br/>
                          <h4 style={{textAlign: "left", color: "#5851bb"}}>Budget</h4>
                          <p style={{textAlign: "left", fontSize: "22px"}}>Payment Summary</p>
                          <div className="row">
                            <div className='col-sm-4'>
                              <span className="pick">Start Date</span>
                              <input type='text' className="form-control inp" id='datetimepicker1'
                                placeholder="12/31/2020 12:04 PM" />
                            </div>
                            <div className='col-sm-4'>
                              <span className="pick">End Date</span>
                              <input type='text' className="form-control inp" id='datetimepicker12'
                                placeholder="12/31/2020 12:04 PM" />
                            </div>
                          </div>
                          <p style={{textAlign: "left"}}>Your add Will run from 01-11-2020 To 10-11-2020</p>
                          <br/>
                          <div className="table-responsive">
                            <table className="table table dark1">
                              <tbody>
                                <tr>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> Total Budget </span>
                                  </td>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <input type="text" className="form-control inp" id="exampleInputUsername1"
                                      placeholder="$ 500 USD" style="margin-bottom: 1px;"/>
                                  </td>
                                </tr>
                                <tr>
                                  <td colspan="2" style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> $ 5000 a day x 10 day </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> Total Amount</span>
                                  </td>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> $ 5050 USD </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="next" className="next action-button" value="Next" />
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="sectionCenter">
                            <div>
                              <img src="https://storage.googleapis.com/janby-production/images/facebook-header.png"
                                width="100%"/>
                            </div>
                            <div className="createPost">
                              <div className="createPost__input">
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/2.jpg)"}}>
                                  <span></span>
                                </div>
                                <div className="createPost__input--post">
                                  What's on your mind, User Name?
                                </div>
                              </div>

                              <div className="createPost__buttons">
                                <span>
                                  <div className="svg">
                                    <img src="svg/live_video.svg" alt="" />
                                  </div>
                                  <h4>Live Video</h4>
                                </span>
                                <span>
                                  <div className="svg">
                                    <img src="svg/photo.svg" alt="" />
                                  </div>
                                  <h4>Photo/Video</h4>
                                </span>
                                <span>
                                  <div className="svg">
                                    <img src="svg/smile.svg" alt="" />
                                  </div>
                                  <h4>Feeling/Activity</h4>
                                </span>
                              </div>
                            </div>
                            <div className="rooms">
                              <div className="rooms__title">
                                <div className="rooms__title--left">
                                  <i className="fas fa-video"></i>
                                  <h3>Rooms</h3>
                                  <p>Video chat with friends</p>
                                  <i className="fas fa-exclamation-circle"></i>
                                </div>
                                <div className="rooms__title--right">
                                  <a href="#">Create Room</a>
                                </div>
                              </div>

                              <div className="rooms__profiles">
                                <div className="globalProfile__circleProfile"
                                  style={{backgroundImage: "url(img/profile.jpg)"}}>
                                  <div className="svg">
                                    <img src="svg/plus.svg" alt="" />
                                  </div>
                                  <span></span>
                                  <div id="spanDark"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/1.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/2.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/3.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/4.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/5.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/6.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/7.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/8.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/9.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/10.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/11.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/12.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/8.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                              </div>
                            </div>
                            <div className="mainPosts">
                              <div className="mainPosts__title">
                                <div className="mainPosts__title--profile">
                                  <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/1.jpg)"}}>
                                    <span></span>
                                  </div>

                                  <div className="mainPosts__title--profile--name">
                                    <a href="#">User Name</a>
                                    <span>1h <i className="fas fa-globe-americas"></i> </span>
                                  </div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                              </div>

                              <div className="mainPosts__description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                              </div>
                              <div className="mainPosts__post" style={{backgroundImage: "url(img/post-1.jpg)"}}></div>
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
                            <div className="mainPosts">
                              <div className="mainPosts__title">
                                <div className="mainPosts__title--profile">
                                  <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/3.jpg)"}}>
                                    <span></span>
                                  </div>

                                  <div className="mainPosts__title--profile--name">
                                    <a href="#">User Name</a>
                                    <span>22h <i className="fas fa-globe-americas"></i> </span>
                                  </div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                              </div>

                              <div className="mainPosts__description">Awesome</div>

                              <div className="mainPosts__post" style={{backgroundImage: "url(img/post-2.jpg)"}}></div>

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
                              <img src="https://storage.googleapis.com/janby-production/images/facebook-footer.png"
                                width="100%"/>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="sectionCenter">
                            <div>
                              <img src="https://storage.googleapis.com/janby-production/images/header-insta.png"
                                width="100%"/>
                            </div>
                            <div className="rooms">
                              <div className="rooms__title">
                                <div className="rooms__title--left">
                                  <i className="fas fa-video"></i>
                                  <h3>Rooms</h3>
                                  <p>Video chat with friends</p>
                                  <i className="fas fa-exclamation-circle"></i>
                                </div>
                                <div className="rooms__title--right">
                                  <a href="#">Create Room</a>
                                </div>
                              </div>

                              <div className="rooms__profiles">
                                <div className="globalProfile__circleProfile"
                                  style={{backgroundImage: "url(img/profile.jpg)"}}>
                                  <div className="svg">
                                    <img src="svg/plus.svg" alt="" />
                                  </div>
                                  <span></span>
                                  <div id="spanDark"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/1.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/2.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/3.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/4.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/5.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/6.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/7.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/8.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/9.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/10.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/11.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/12.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                                <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/8.jpg)"}}>
                                  <span></span>
                                  <div className="active"></div>
                                </div>
                              </div>
                            </div>
                            <div className="mainPosts">
                              <div className="mainPosts__title">
                                <div className="mainPosts__title--profile">
                                  <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/1.jpg)"}}>
                                    <span></span>
                                  </div>

                                  <div className="mainPosts__title--profile--name">
                                    <a href="#">User Name</a>
                                    <span>1h <i className="fas fa-globe-americas"></i> </span>
                                  </div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                              </div>
                              <div className="mainPosts__post" style={{backgroundImage: "url(img/post-3.jpg)"}}></div>

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
                            <div className="mainPosts">
                              <div className="mainPosts__title">
                                <div className="mainPosts__title--profile">
                                  <div className="globalProfile__circleProfile" style={{backgroundImage: "url(img/4.jpg)"}}>
                                    <span></span>
                                  </div>

                                  <div className="mainPosts__title--profile--name">
                                    <a href="#">User Name</a>
                                    <span>22h <i className="fas fa-globe-americas"></i> </span>
                                  </div>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                              </div>
                              <div className="mainPosts__description">Awesome</div>

                              <div className="mainPosts__post" style={{backgroundImage: "url(img/post-4.jpg)"}}></div>

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
                              <img src="https://storage.googleapis.com/janby-production/images/footer-insta.png"
                                width="100%"/>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input type="button" name="next" className="next action-button" value="Next" />
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>

                    <fieldset>
                      <div className="row">
                        <div className="col-md-5">
                          <br/><br/>
                          <h4 style={{textAlign: "left", color: "#5851bb"}}>Forecasting</h4>
                          <p style={{textAlign: "left", fontSize: "22px;"}}>Estimated Daily Results</p>
                          <br/>
                          <div className="table-responsive">
                            <table className="table table dark1">
                              <tbody>
                                <tr>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> People Reached </span>
                                  </td>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> 518 - 15K </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> Link Clicks </span>
                                  </td>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> 20 - 57 </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> Estimated Cost</span>
                                  </td>
                                  <td style={{textAlign: "left", border: "3px solid #888"}}>
                                    <span className="colspanyu"> $ 5050 USD </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="next" className="next action-button" value="Next" />
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>
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
                              <button className="btn btn-info btn-sm mt-3 mb-4">Connect Facebook Page</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="next" className="next action-button" value="Next" />
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                      <br/><br/>
                      <h4 style="text-align: left; color: #5851bb;">Payment</h4>
                      <br/>
                      <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 grid-margin stretch-card">
                          <div className="card">
                            <div className="card-body">
                                <div className="form-group" style={{textAlign: "left"}}>
                                  <label for="exampleInputUsername1" style={{fontSize: "17px"}}>Amount</label>
                                  <input type="text" className="form-control" id="exampleInputUsername1" placeholder="$"/>
                                </div>
                                <button type="button" className="btn btn-info btn-rounded btn-fw"
                                  style="float: left;">Submit Payment</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input type="button" name="previous" className="previous action-button-previous" value="Previous" />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  </div>
    );
}
export default Campaign;
