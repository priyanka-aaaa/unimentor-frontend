import React, { useState, useEffect } from "react";
import ApplicationProfile from './ApplicationProfile';
import Profile from './Profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
function Sidebar(props) {
    const [width, setwidth] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    function handletoogleClick() {
        if (width === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setwidth("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled")
        }
        else {
            setwidth("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    }
    return (
        <ul className={width} id="accordionSidebar">
            <div className="sidebar-brand-icon ">
                CM
            </div>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-text mx-3"> <Link to={'/UniversityDashboard'}  >
                    <img src={images["dash-logo.png"]} alt="" />
                </Link> </div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link to={'/Dashboard'} className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>
            <li className="nav-item">
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
                <Link to={'/Bookmark'} className="nav-link" href="#">
                    <i className="fas fa-bookmark"></i>
                    <span>Bookmark</span></Link>
            </li>
            <li className="nav-item ">
                <Link to={'/StudentSetting'} className="nav-link" href="#">
                    <i className="fas fa-bookmark"></i>
                    <span>Settings</span></Link>
            </li>
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => handletoogleClick()}>
                    <i className="fa-solid fa-arrow-right"></i>
                    <FontAwesomeIcon icon={faAngleLeft} style={{
                        fontWeight: 900,
                        marginRight: "0.1rem",
                        color: "rgba(255, 255, 255, 0.5)"
                    }} />
                </button>
            </div>
        </ul>
    );
}

export default Sidebar;