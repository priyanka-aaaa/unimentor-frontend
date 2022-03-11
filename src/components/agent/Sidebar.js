import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div>
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                    {/* <!-- Sidebar - Brand --> */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        {/* <!-- <div className="sidebar-brand-icon rotate-n-15">
<i className="fas fa-graduation-cap"></i>
</div> --> */}
                        <div className="sidebar-brand-text mx-3">Coursementor </div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}


                    <li className="nav-item">

                        <Link to={'/agent/dashboard'} className="nav-link" >
                            <i className="fas fa-file-alt"></i>
                            <span>Partner Team</span></Link>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i className="fas fa-user-tie"></i>
                            <span>my Student </span>
                        </a>
                        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion" data-parent="#accordionSidebar" >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to={'/agent/addStudent'} className="collapse-item">
                                    <span>Add Student</span></Link>
                                <Link to={'/agent/student'} className="collapse-item">
                                    <span>Student</span></Link>
                                <Link to={'/agent/application'} className="collapse-item">
                                    <span>Student Application</span></Link>


                            </div>
                        </div>
                    </li>



                    <li className="nav-item ">
                        <Link to={'/agent/evaluate'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Evaluate Profile</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/agent/commission'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Commissions</span></Link>
                    </li>


                    <li className="nav-item ">
                        <Link to={'/agent/certificate'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Download Certificate</span></Link>
                    </li>
                    {/* <!-- Sidebar Toggler (Sidebar) --> */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                </ul>
                {/* <!-- End of Sidebar --> */}
            </div>
        );
    }
}

export default Sidebar;