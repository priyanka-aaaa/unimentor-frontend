import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';


// start for personal information
export default function FrontendTopbar() {
    let { id } = useParams();

    const [mounted, setMounted] = useState();


    const [data, setdata] = useState([]);

    const [foundedYear, setfoundedYear] = useState("");
    const [formValues, setFormValues] = useState([{
        name: ""
    }])
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
          
            var mytoken = mydata.data.token;

        }
        setMounted(mytoken)


        // start for fetch university

        const url = "universities";

        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {

                setdata(data.universities);
                setFormValues(data.universities)
                // this.setState({ data: data.universityCourses })
            })




    }, [])



    return (
        <div>
             {/* <!--Full width header Start--> */}
             <div className="full-width-header">
                        {/* <!--Header Start--> */}
                        <header id="rs-header" className="rs-header style3 modify1 ">
                            <div className="menu-area menu-sticky">
                                <div className="container-fluid">
                                    <div className="row align-items-center">
                                        <div className="col-lg-2">
                                            <div className="logo-part">
                                                <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                            </div>
                                            <div className="mobile-menu">
                                                <a href="#" className="rs-menu-toggle rs-menu-toggle-close secondary">
                                                    <i className="fa fa-bars"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-10 text-right">
                                            <div className="rs-menu-area">
                                                <div className="main-menu">
                                                    <nav className="rs-menu pr-86 lg-pr-50 md-pr-0 rs-menu-close" >
                                                        <ul className="nav-menu">
                                                            <li className="rs-mega-menu menu-item-has-children current-menu-item"> <a
                                                                href="#">Home</a>

                                                                <span className="rs-menu-parent"><i className="fa fa-angle-down"
                                                                    aria-hidden="true"></i></span><span
                                                                        className="rs-menu-parent"><i className="fa fa-angle-down"
                                                                            aria-hidden="true"></i></span><span
                                                                                className="rs-menu-parent"><i className="fa fa-angle-down"
                                                                                    aria-hidden="true"></i></span><span
                                                                                        className="rs-menu-parent"><i className="fa fa-angle-down"
                                                                                            aria-hidden="true"></i></span>
                                                            </li>
                                                            <li>
                                                                <a href="about.html">About</a>
                                                            </li>
                                                            <li className="menu-item-has-children">
                                                                <a href="#">Services</a>
                                                                <span className="rs-menu-parent"><i className="fa fa-angle-down"
                                                                    aria-hidden="true"></i></span><span
                                                                        className="rs-menu-parent"><i className="fa fa-angle-down"
                                                                            aria-hidden="true"></i></span>
                                                            </li>

                                                            <li>
                                                                <a href="contact.html">Contact</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                                <div className="expand-btn-inner search-icon hidden-md">
                                                    <ul>
                                                        <li className="sidebarmenu-search">
                                                            <a className="hidden-xs rs-search" data-target=".search-modal"
                                                                data-toggle="modal" href="#">
                                                                <i className="flaticon-search"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a id="nav-expander" className="humburger nav-expander" href="#">
                                                                <span className="dot1"></span>
                                                                <span className="dot2"></span>
                                                                <span className="dot3"></span>
                                                                <span className="dot4"></span>
                                                                <span className="dot5"></span>
                                                                <span className="dot6"></span>
                                                                <span className="dot7"></span>
                                                                <span className="dot8"></span>
                                                                <span className="dot9"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </header>
                    </div>









        </div>


    );
};


