import React, { Component } from 'react';

import ApplicationProfile from './ApplicationProfile';
import Profile from './Profile';
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
                    <li className="nav-item active">

                        <Link to={'/Dashboard'} className="nav-link" >
                            <i className="fas fa-fw fa-tachometer-alt"></i>

                            <span>Dashboard</span></Link>


                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="personal-profile.html">
                            <i className="fas fa-user"></i>
                            <span>Profile</span></a> */}
                        <Link to={'/Profile'} className="nav-link" href="personal-profile.html">
                            <i className="fas fa-user"></i>
                            <span>Profile</span></Link>

                    </li>
                    <li className="nav-item">

                        <Link to={'/ApplicationProfile'} className="nav-link" >
                            <i className="fas fa-file-alt"></i>
                            <span>Application Profile</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/Document'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>My Documents</span></Link>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">
                            <i className="fas fa-bookmark"></i>
                            <span>My Book Mark</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">
                            <i className="far fa-address-card"></i>
                            <span>My Admits</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">
                            <i className="fas fa-edit"></i>
                            <span>My Essays</span></a>
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