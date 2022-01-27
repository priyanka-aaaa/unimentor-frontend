import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../css/style.css';
import '../css/dashboard.css';
import '../css/fontawesome.min.css';
import '../css/frontend.css';

// start for personal information
export default function FrontendFooter() {
    let { id } = useParams();
    // console.log(id);
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
            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
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
            <footer id="rs-footer" className="rs-footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
                                    <div className="footer-logo mb-30">
                                        <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                                    </div>
                                    <div className="textwidget pb-30">
                                        <p>Coursementor.com is a 24*7 Online Tutoring Platform. Get online tutoring on-demand on
                                            hundreds of subjects or topics, whenever you need it.</p>
                                    </div>
                                    <ul className="footer-social md-mb-30">
                                        <li>
                                            <a href="#" target="_blank"><span><i className="fa fa-facebook"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="# " target="_blank"><span><i className="fa fa-twitter"></i></span></a>
                                        </li>

                                        <li>
                                            <a href="# " target="_blank"><span><i className="fa fa-pinterest-p"></i></span></a>
                                        </li>
                                        <li>
                                            <a href="# " target="_blank"><span><i className="fa fa-instagram"></i></span></a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
                                    <h3 className="widget-title">Policy</h3>
                                    <ul className="site-map">
                                        <li><a href="#">Terms and Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Honor Code</a></li>
                                        <li><a href="#">Mentors</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
                                    <h3 className="widget-title">Contact Info</h3>
                                    <ul className="address-widget">
                                        <li>
                                            <i className="flaticon-location"></i>
                                            <div className="desc">#211 P,Sector7 Kurukshetra,haryana 136118</div>
                                        </li>
                                        <li>
                                            <i className="flaticon-call"></i>
                                            <div className="desc">
                                                <a href="tel:1800-890-6477">1800-890-6477</a>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="flaticon-email"></i>
                                            <div className="desc">
                                                <a href="mailto:hello@coursementor.com">hello@coursementor.com</a>
                                            </div>
                                        </li>
                                        <li>
                                            <i className="flaticon-clock-1"></i>
                                            <div className="desc">
                                                Our Mentors are ready to help 24/7
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <h3 className="widget-title">Exploring</h3>
                                    <ul className="site-map">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>

                                    </ul>


                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row y-middle">

                                <div className="col-lg-6">
                                    <div className="copyright">
                                        <p>&copy;Copyright 2018 - 2022<a href="http://Coursementor.com/">Coursementor.com</a> All
                                            rights reserved.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </footer>









        </div>


    );
};


