import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';
import Comman from './includes/Comman';
import queryString from 'query-string';
class ViewCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        campaignDetail: [],
    }
    
  }
  componentDidMount() {
    var api_Path = process.env.REACT_APP_API_PATH;
    var sessioData = JSON.parse(sessionStorage.getItem('userData'));
    const userData = {
      user_type: sessioData.data.user_type,
      user_id: sessioData.data.id,
      campaigne_id:64
    }
    console.log(userData);
    const tokenBlob = new Blob([JSON.stringify({userData}, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body:tokenBlob,
      mode: 'cors',
      cache: 'default',
      headers:{
        'x-access-token':sessioData.token
      }
  };
  fetch(api_Path+'user/ViewCampaigneDetails', options).then(r => {
        r.json().then(campaigneData => {
          this.setState({
            campaignDetail: campaigneData
          })
        });
    })
    
  }

  render() {
    // const search = window.location.search;
    // const params = new URLSearchParams(search);
    // const foo = params.get('campaign_id');
    // console.log(params);
    console.log(this.state.campaignDetail);
    return(
      <div className="container-scroller">
        <Comman /> 
    <Header />
    <div className="container-fluid page-body-wrapper">
    <Sidebar />
<div className="main-panel">
  <div className="content-wrapper">
    <div className="page-header">
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title tatile2" style={{borderBottom: '1px solid #eee', paddingBottom: '10px'}}>Campaign Details</h4>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <div id="order-listing_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                      <div className="emp-profile">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="profile-head">
                                                <h5>
                                                    User Name
                                                </h5>
                                                <h6>
                                                    Web Developer and Designer
                                                </h6>
                                                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profile-work">
                                        <p>WORK LINK</p>
                                        <a href="">Website Link</a><br/>
                                        <a href="">Bootsnipp Profile</a><br/>
                                        <a href="">Bootply Profile</a>
                                        <p>SKILLS</p>
                                        <a href="">Web Designer</a><br/>
                                        <a href="">Web Developer</a><br/>
                                        <a href="">WordPress</a><br/>
                                        <a href="">WooCommerce</a><br/>
                                        <a href="">PHP, .Net</a><br/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="tab-content profile-tab" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>User Id</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Kshiti123</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Name</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Kshiti Ghelani</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Email</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>kshitighelani@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Phone</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>123 456 7890</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Profession</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Web Developer and Designer</p>
                                                        </div>
                                                    </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Experience</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Hourly Rate</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>10$/hr</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Total Projects</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>230</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>English Level</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Availability</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>6 months</p>
                                                        </div>
                                                    </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <label>Your Bio</label><br/>
                                                    <p>Your detail description</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Footer />
  </div>
    );
}
}
// Exporting the component 
export default ViewCampaign; 