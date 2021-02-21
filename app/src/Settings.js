import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';
import Comman from './includes/Comman';
function Settings (){
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
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="mt-4">
              <div className="accordion accordion-bordered" id="accordion-2" role="tablist">
                <div className="card">
                  <div className="card-header" role="tab" id="heading-4">
                    <h6 className="mb-0">
                    <a data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4" className="collapsed">
                      <i className="fa fa-user-circle menu-icon" style={{fontSize:"21px"}}></i> &nbsp; User Information
                    </a>
                    </h6>
                  </div>
                  <div id="collapse-4" className="collapse" role="tabpanel" aria-labelledby="heading-4" data-parent="#accordion-2" >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-3">
                          <form className="forms-sample">
                            <div className="form-group">
                              <label htmlFor="exampleInputUsername1">Old Password</label>
                              <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Old Password" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">New Password</label>
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="New Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="heading-5">
                    <h6 className="mb-0">
                    <a className="collapsed" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                      <i className="fa fa-credit-card menu-icon" style={{fontSize: "21px"}}></i> &nbsp; Payment Method
                    </a>
                    </h6>
                  </div>
                  <div id="collapse-5" className="collapse" role="tabpanel" aria-labelledby="heading-5" data-parent="#accordion-2" >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-3">
                          <form className="forms-sample">
                            <div className="form-group">
                              <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Card Number"/>
                            </div>
                            <div className="form-group">
                              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Name Of Card"/>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">Add Card</button>
                          </form>
                        </div>
                        <div className="col-md-3"></div>
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
export default Settings;