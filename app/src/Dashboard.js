import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';
import Comman from './includes/Comman';
function Dashboard () {

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
          <div className="col-md-6 grid-margin1">
            <h5 className="page-title tatile2">
            Campaign Results
            </h5>
          </div>
          <div className="col-md-3 grid-margin1">
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect2">
                <option>All Campaigns</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
                <option>Lorem ipsum dolor sit amet.</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 grid-margin1">
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect2">
                <option>11/20/2020 - 111/27/2020</option>
                <option>11/20/2020 - 111/27/2020</option>
                <option>11/20/2020 - 111/27/2020</option>
                <option>11/20/2020 - 111/27/2020</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Impressions</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                      <h2 className="mb-0" style={{fontSize: "1.25rem"}}>$0</h2>
                    </div>
                  </div>
                  <div className="d-inline-block"> <i className="fa fa-eye text-info icon-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Clicks</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                      <h2 className="mb-0" style={{fontSize: "1.25rem"}}>$0</h2>
                    </div>
                  </div>
                  <div className="d-inline-block"> <i className="fa fa-bullseye text-info icon-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Cost</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                      <h2 className="mb-0" style={{fontSize: "1.25rem"}}>$0.00 AED</h2>
                    </div>
                  </div>
                  <div className="d-inline-block"> <i className="fa fa-usd text-info icon-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-0">Conversions</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                      <h2 className="mb-0" style={{fontSize: "1.25rem"}}>$0</h2>
                    </div>
                  </div>
                  <div className="d-inline-block"> <i className="fa fa-refresh text-info icon-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title title1">
                <i className="fas fa-gift"></i>
                Performance
                </h4>
                <canvas id="orders-chart"></canvas>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title title1">
                <i className="fas fa-table"></i>
                Cost Per Channel
                </h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Channel</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">Google Display</td>
                        <td className="text-muted">0.00 AED</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Google Search</td>
                        <td className="text-muted">0.00 AED</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Facebook</td>
                        <td className="text-muted">0.00 AED</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Instagram</td>
                        <td className="text-muted">0.00 AED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <h5 className="page-title tatile2">
            Campaign Performance
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <div id="order-listing_wrapper"
                        className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="dataTables_length" id="order-listing_length">
                              <label>Show
                                <select name="order-listing_length" aria-controls="order-listing"
                                  className="form-control">
                                  <option value="5">5</option>
                                  <option value="10">10</option>
                                  <option value="15">15</option>
                                  <option value="-1">All</option>
                                </select>entries</label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div id="order-listing_filter" className="dataTables_filter">
                                <label>
                                  <input type="search" className="form-control" placeholder="Search"
                                  aria-controls="order-listing"/>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12">
                              <table id="order-listing" className="table dataTable no-footer" role="grid"
                                aria-describedby="order-listing_info">
                                <thead>
                                  <tr role="row" style={{backgroundColor: "#f4f5f9"}}>
                                    <th className="sorting_asc">Campalgn Name</th>
                                    <th className="sorting_asc">Status</th>
                                    <th className="sorting_asc">Impressions</th>
                                    <th className="sorting_asc">Clicks</th>
                                    <th className="sorting_asc">CTR</th>
                                    <th className="sorting_asc">Cost</th>
                                    <th className="sorting_asc">Website Visits</th>
                                    <th className="sorting_asc">Messages</th>
                                    <th className="sorting_asc">Phone Calls</th>
                                    <th className="sorting_asc">Store Visits</th>
                                    <th className="sorting_asc">Leads</th>
																		</tr>
                                  </thead>
                                  <tbody>
                                    <tr role="row" className="odd">
                                      <td className="sorting_1">Lorem ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>$1500</td>
                                      <td>$3200</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                    </tr>
                                    <tr role="row" className="even">
                                      <td className="sorting_1">Lorem ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>$1500</td>
                                      <td>$3200</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                      <td>Lorem, ipsum dolor.</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 col-md-5">
                                <div className="dataTables_info" id="order-listing_info" role="status" aria-live="polite">
                                Showing 1 to 10 of 25 entries</div>
                              </div>
                              <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers" id="order-listing_paginate">
                                  <ul className="pagination">
                                    <li className="paginate_button page-item previous disabled" id="order-listing_previous"><a
                                      href="#" aria-controls="order-listing" data-dt-idx="0" tabIndex="0"
                                    className="page-link">Previous</a>
                                  </li>
                                  <li className="paginate_button page-item active"><a href="#" aria-controls="order-listing"
                                  data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                </li>
                                <li className="paginate_button page-item next disabled" id="order-listing_next"><a
                                  href="#" aria-controls="order-listing" data-dt-idx="2" tabIndex="0"
                                className="page-link">Next</a>
                              </li>
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
      <div style={{marginTop: "15px"}}></div>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <h5 className="page-title tatile2">
          Ads Performance
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <div id="order-listing_wrapper"
                      className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div className="dataTables_length" id="order-listing_length">
                            <label>Show
                              <select name="order-listing_length" aria-controls="order-listing"
                                className="form-control">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="-1">All</option>
                              </select>entries</label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div id="order-listing_filter" className="dataTables_filter">
                              <label>
                                <input type="search" className="form-control" placeholder="Search"
                                aria-controls="order-listing"/>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <table id="order-listing" className="table dataTable no-footer" role="grid"
                              aria-describedby="order-listing_info">
                              <thead>
                                <tr role="row" style={{backgroundColor: "#f4f5f9"}}>
                                  <th className="sorting_asc">Add</th>
                                  <th className="sorting_asc">Channel</th>
                                  <th className="sorting_asc">Impressions</th>
                                  <th className="sorting_asc">Clicks</th>
                                  <th className="sorting_asc">CTR</th>
                                  <th className="sorting_asc">Cost</th>
                                  <th className="sorting_asc">Website Visits</th>
                                  <th className="sorting_asc">Messages</th>
                                  <th className="sorting_asc">Phone Calls</th>
                                  <th className="sorting_asc">Store Visits</th>
                                  <th className="sorting_asc">Leads</th>
																	</tr>
                                </thead>
                                <tbody>
                                  <tr role="row" className="odd">
                                    <td className="sorting_1">Lorem ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>$1500</td>
                                    <td>$3200</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                  </tr>
                                  <tr role="row" className="even">
                                    <td className="sorting_1">Lorem ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>$1500</td>
                                    <td>$3200</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                    <td>Lorem, ipsum dolor.</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div className="dataTables_info" id="order-listing_info" role="status" aria-live="polite">
                              Showing 1 to 10 of 25 entries</div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div className="dataTables_paginate paging_simple_numbers" id="order-listing_paginate">
                                <ul className="pagination">
                                  <li className="paginate_button page-item previous disabled" id="order-listing_previous"><a
                                    href="#" aria-controls="order-listing" data-dt-idx="0" tabIndex="0"
                                  className="page-link">Previous</a>
                                </li>
                                <li className="paginate_button page-item active"><a href="#" aria-controls="order-listing"
                                data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                              </li>
                              <li className="paginate_button page-item next disabled" id="order-listing_next"><a
                                href="#" aria-controls="order-listing" data-dt-idx="2" tabIndex="0"
                              className="page-link">Next</a>
                            </li>
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
export default Dashboard;