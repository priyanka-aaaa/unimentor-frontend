import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

class Sidebar extends Component {
    render() {
        return (
            <div>
                {/* <!-- Sidebar --> */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <div class="sidebar-brand-icon ">
                    CM
                </div>
                    {/* <!-- Sidebar - Brand --> */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        {/* <!-- <div className="sidebar-brand-icon rotate-n-15">
<i className="fas fa-graduation-cap"></i>
</div> --> */}
                        <div className="sidebar-brand-text mx-3"> <Link to={'/UniversityDashboard'}  >
                    <img src={images["dash-logo.png"]} alt="" />
                       </Link> </div>
                    </a>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider my-0" />

                    {/* <!-- Nav Item - Dashboar
                   
                    d --> */}
                       <li className="nav-item ">
                        <Link to={'/admin/dashboard'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Dashboard</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/admin/studentApplication'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>New Application</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/admin/studentApplication'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Old Application</span></Link>
                    </li>
                 
                    <li className="nav-item">

                        <Link to={'/admin/student'} className="nav-link" >
                            <i className="fas fa-file-alt"></i>
                            <span>Student</span></Link>
                    </li>


                    <li className="nav-item ">
                        <Link to={'/admin/agent'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Agent</span></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to={'/admin/university'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>University</span></Link>
                    </li>
                 
                    <li className="nav-item ">
                        <Link to={'/admin/applicationStep'} className="nav-link" href="#">
                            <i className="fas fa-file-upload"></i>
                            <span>Application Step</span></Link>
                    </li>
                 
                    {/* <!-- Sidebar Toggler (Sidebar) --> */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>

                </ul>
            
            </div>
        );
    }
}

export default Sidebar;

