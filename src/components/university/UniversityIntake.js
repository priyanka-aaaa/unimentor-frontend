import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';
export default function UniversityPassword() {
    // start for personal information

    return (

        <div id="page-top">
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                <Sidebar />
                {/* there will be come sidebar */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* topbar will be come there */}
                        <Topbar />
                        {/* <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/* <ApplicationProfile /> */}
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Student</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <p>Admin Application</p>
                            {/* <form onSubmit={handleSubmit}> */}
                            <form>
                                <div className="card-body" >

                                    <div className="from-block" >


                                        <div className="row" >

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Address
                                                    *</label>
                                                <input type="text" className="form-control"
                                                    placeholder="Address" name="Address"

                                                    // value={address}
                                                    // onChange={(e) => setaddress(e.target.value)}
                                                    required />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="form-label">Address
                                                    *</label>
                                                <input type="text" className="form-control"
                                                    placeholder="Address" name="Address"

                                                    // value={address}
                                                    // onChange={(e) => setaddress(e.target.value)}
                                                    required />
                                            </div>
                                        </div>





                                            {/* <div className="mb-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <label className="form-label">application
                                                            *</label>
                                                        <input type="text" className="form-control"
                                                            placeholder="application" name="application"
                                                        // value={element.application || ""} onChange={e => handleChange(index, e)}

                                                        // value={courseName}
                                                        // onChange={(e) => setcourseName(e.target.value)}
                                                        />
                                                    </div>


                                                </div>
                                            </div> */}



                                        </div>


                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6 text-right">

                                                    <button className="button add" type="button" className="btn btn-success "
                                                    // onClick={() => addFormFields()}
                                                    >Add New</button>

                                                    <button type="submit" className="btn btn-secondary">Save
                                                    </button>
                                                    <button type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                                        Next</button>
                                                </div>

                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </form>
                            {/* <!-- Card Body --> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer />
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}