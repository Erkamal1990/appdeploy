import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import Sidebar from './includes/Sidebar';
import Comman from './includes/Comman';
function Billing (){
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
        <div className="col-md-6 grid-margin">
            <h5 className="page-title tatile2">
            Billing Summary
            </h5>
        </div>
        </div>
        <div className="row rowbg">
        <div className="col-md-4 grid-margin">
            <div className="card bgshadow">
            <div className="card-body">
                <span className="bill1">TOTAL SPEND</span>
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                    <h2 className="mb-0" style={{fontSize: "1.25rem"}}>0 USD</h2>
                    </div>
                </div>
                <div className="d-inline-block">
                    <i className="fa fa-money text-info icon-lg"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-md-4 grid-margin">
            <div className="card bgshadow">
            <div className="card-body">
                <span className="bill2"> BALANCE</span>
                <h4 className="card-title mb-0"></h4>
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                    <h2 className="mb-0" style={{fontSize: "1.25rem"}}>$0</h2>
                    </div>
                </div>
                <div className="d-inline-block">
                    <i className="fa fa-usd text-info icon-lg"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="col-md-4 grid-margin">
            <div className="card bgshadow">
            <div className="card-body">
                <span className="bill3">OUTSTANDING</span>
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-inline-block pt-3">
                    <div className="d-md-flex">
                    <h2 className="mb-0" style={{fontSize: "1.25rem"}}>$0.00 AED</h2>
                    </div>
                </div>
                <div className="d-inline-block">
                    <i className="fa fa-money text-info icon-lg"></i>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="row">
        <div className="col-md-12 grid-margin">
            <h5 className="page-title tatile2">
            All Transactions
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
                                <tr role="row" style={{backgroundColor: "#f4f5f9"}}>
                                <th className="sorting_asc">Date Billed</th>
                                <th className="sorting_asc">Payment ID</th>
                                <th className="sorting_asc">Payment Method</th>
                                <th className="sorting_asc">Amount Billed</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">20/06/2020</td>
                                    <td>XSDFR35216</td>
                                    <td>Lorem, ipsum </td>
                                    <td>5050 USD</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">20/06/2020</td>
                                    <td>XSDFR35216</td>
                                    <td>Lorem, ipsum </td>
                                    <td>5050 USD</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">20/06/2020</td>
                                    <td>XSDFR35216</td>
                                    <td>Lorem, ipsum </td>
                                    <td>5050 USD</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">20/06/2020</td>
                                    <td>XSDFR35216</td>
                                    <td>Lorem, ipsum </td>
                                    <td>5050 USD</td>
                                </tr>
                                <tr role="row" className="odd">
                                    <td className="sorting_1">20/06/2020</td>
                                    <td>XSDFR35216</td>
                                    <td>Lorem, ipsum </td>
                                    <td>5050 USD</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info" id="order-listing_info" role="status" aria-live="polite">Showing 1 to 10 of 25 entries</div>
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
export default Billing;