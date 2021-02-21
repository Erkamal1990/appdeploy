import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';
import Comman from './includes/Comman';
class Campaigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCampaign: [],
    }
  }

  
  componentDidMount() {
    var api_Path = process.env.REACT_APP_API_PATH;
    var sessioData = JSON.parse(sessionStorage.getItem('userData'));
    const userData = {
      user_type: sessioData.data.user_type,
      user_id: sessioData.data.id,
    }
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
  fetch(api_Path+'user/CampaigneList', options).then(r => {
        r.json().then(campaigneData => {
          this.setState({
            allCampaign: campaigneData.data
          })
        });
    })
    
  }
  
  render() {
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
            <h4 className="card-title tatile2" style={{borderBottom: '1px solid #eee', paddingBottom: '10px'}}>Campaign List</h4>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <div id="order-listing_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length" id="order-listing_length">
                          <label>
                            Show
                            <select name="order-listing_length" aria-controls="order-listing" className="form-control">
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="15">15</option>
                              <option value="-1">All</option>
                            </select>
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div id="order-listing_filter" className="dataTables_filter"><label>
                            <input type="search" className="form-control" placeholder="Search" aria-controls="order-listing"/></label></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table id="order-listing" className="table dataTable no-footer" role="grid" aria-describedby="order-listing_info">
                          <thead>
                            <tr role="row" style={{backgroundColor:"#f4f5f9"}}>
                            <th className="sorting_asc">User Name</th>
                              <th className="sorting_asc">Channels</th>
                              <th className="sorting_asc">Start Date</th>
                              <th className="sorting_asc">End Date</th>
                              <th className="sorting_asc">Dally Budget</th>
                              <th className="sorting_asc">Status</th>
                              <th className="sorting_asc">Action</th>
                              </tr>
                            </thead>
                            <tbody>
            
                          {this.state.allCampaign.map(function(object, i){
                                return ( 
                                    <tr role="row" className="odd">
                                      <td className="sorting_1">{object.frist_name} {object.last_name}</td>
                                      <td className="sorting_1">{object.channel}</td>
                                      <td>{object.start_date}</td>
                                      <td>{object.end_date}</td>
                                      <td>${object.total_budget}</td>
                                      <td>
                                        <label className="switch">
                                          <input type="checkbox"/>
                                          <span className="slider round"></span>
                                        </label>
                                      </td>
                                      {/* <td><Link to={'/ViewCampaign/'+object.campaign_id}  className="btn btn-info btn-rounded btn-fw btn btn-primary">View Details</Link></td> */}
                                      <td><Link  className="btn btn-info btn-rounded btn-fw btn btn-primary">View Details</Link></td>
                                     
                                      
                                    </tr>
                              );})}
                              </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          {/* <div className="dataTables_info" id="order-listing_info" role="status" aria-live="polite">Showing 1 to 10 of 25 entries</div> */}
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div className="dataTables_paginate paging_simple_numbers" id="order-listing_paginate">
                            <ul className="pagination">
                              <li className="paginate_button page-item previous disabled" id="order-listing_previous"><a href="#" aria-controls="order-listing" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a></li>
                              <li className="paginate_button page-item active"><a href="#" aria-controls="order-listing" data-dt-idx="1" tabIndex="0" className="page-link">1</a></li>
                              <li className="paginate_button page-item next disabled" id="order-listing_next"><a href="#" aria-controls="order-listing" data-dt-idx="2" tabIndex="0" className="page-link">Next</a></li>
                            </ul>
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
export default Campaigns; 