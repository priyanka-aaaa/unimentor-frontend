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
                        <div className="sidebar-brand-text mx-3">Coursementor </div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboard --> */}

                    <li className="nav-item">
                        {/* <a className="nav-link" href="personal-profile.html">
                            <i className="fas fa-user"></i>
                            <span>Profile</span></a> */}
                        <Link to={'/AdminDashboard'} className="nav-link" href="personal-profile.html">
                            <i className="fas fa-user"></i>
                            <span>University</span></Link>

                    </li>
                    <li className="nav-item">

                        <Link to={'/AdminStudent'} className="nav-link" >
                            <i className="fas fa-file-alt"></i>
                            <span>Student</span></Link>
                    </li>


                    <li className="nav-item ">
                        <Link to={'/AdminAgent'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Agent</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AdminUniversity'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>University</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AdminCountry'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Country</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AdminStudy'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Field Of Study</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AdminApplication'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Application</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AdminDocument'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Document</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/AdminScholarship'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Scholarship</span></Link>
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