import React, { Component } from 'react';

// import ApplicationProfile from './ApplicationProfile';
// import Profile from './Profile';
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
                        <div className="sidebar-brand-text mx-3">University Coursementor </div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}

                    <li className="nav-item">
                        {/* <a className="nav-link" href="personal-profile.html">
                            <i className="fas fa-user"></i>
                            <span>Profile</span></a> */}
                        <Link to={'/UniversityProfile'} className="nav-link" href="personal-profile.html">
                            <i className="fas fa-user"></i>
                            <span>University</span></Link>

                    </li>
                    <li className="nav-item">

                        <Link to={'/UniversityCourses'} className="nav-link" >
                            <i className="fas fa-file-alt"></i>
                            <span>Coures Listing</span></Link>
                    </li>


                    <li className="nav-item ">
                        <Link to={'/UniversitySummary'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Summary Information</span></Link>
                    </li>
                  

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            <i className="fas fa-user-tie"></i>
                            <span>Setting </span>
                        </a>
                        <div id="collapseTen" className="collapse" data-bs-parent="#accordion" data-parent="#accordionSidebar" >
                            <div className="bg-white py-2 collapse-inner rounded">
                                <Link to={'/UniversityPassword'} className="collapse-item" href="#">

                                    <span>Change Password</span></Link>
                                <Link to={'/UniversityIntake'} className="collapse-item" href="#">

                                    <span>Intake</span></Link>


                            </div>
                        </div>
                    </li>

                    <li className="nav-item ">
                        <Link to={'/UniversitySetcommission'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Set Commission</span></Link>
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