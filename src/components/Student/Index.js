import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    {/* <!-- Page Heading --> */}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>

                    </div>



                    {/* <!-- Content Row --> */}

                    {/* <!-- Content Row --> */}
                    <div className="row">

                        {/* <!-- Content Column --> */}
                        <div className="col-lg-6 mb-4">

                            {/* <!-- Project Card Example --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">To Do List</h6>
                                </div>
                                <div className="card-body">
                                    <h4 className="small font-weight-bold">1 Visit our Facebook Profile <a href="#"
                                        className="float-right">Visit</a></h4>

                                    <h4 className="small font-weight-bold">2 Download our latest E-book <a href="#"
                                        className="float-right">Download</a></h4>

                                    <h4 className="small font-weight-bold">3 Link your Facebook profile <a href="#"
                                        className="float-right">Update</a></h4>

                                    <h4 className="small font-weight-bold">4 Link your LinkedIn profile <a href="#"
                                        className="float-right">Update</a></h4>

                                    <h4 className="small font-weight-bold">5 Write a short introduction about yourself <a
                                        href="#" className="float-right">Write</a></h4>

                                </div>
                            </div>



                        </div>

                        <div className="col-lg-6 mb-4">

                            {/* <!-- Illustrations --> */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Important Dates</h6>
                                </div>
                                <div className="card-body">
                                    <a className=" d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            o4<br /> April
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncatex">Hi there! I am wondering if you can help me with
                                                a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">01 : 00 AM - 06 : 00 PM</div>
                                        </div>
                                    </a>

                                    <a className=" d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            o1<br /> JAN
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncatex">Hi there! I am wondering if you can help me with
                                                a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">03 : 00 pm - 05 : 00 PM</div>
                                        </div>
                                    </a>


                                    <a className=" d-flex align-items-center" href="#">
                                        <div className="dropdown-list-image mr-3">
                                            o4<br /> April
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncatex">Hi there! I am wondering if you can help me with
                                                a
                                                problem I've been having.</div>
                                            <div className="small text-gray-500">10 : 00 AM - 04 : 00 PM</div>
                                        </div>
                                    </a>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Index;