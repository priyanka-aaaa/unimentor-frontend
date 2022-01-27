import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
class AdminDashboard extends Component {

    render() {





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
                            {/* <Index /> */}
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






            </div>
        );
    }
}

export default AdminDashboard;