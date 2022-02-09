import React, { useState } from "react";

import logo from './img/logo.png';
// import { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

// import { BrowserRouter as Redirect } from 'react-router-dom';

export default function Universitylogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [redirectToReferrer, setredirectToReferrer] = useState(false);
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState();
    function handleSubmit(event) {
        setemailError("");
        setpasswordError("");
        event.preventDefault();
        if (email === "") {
            setemailError("Please enter email");
        }
        if (password === "") {
            setPassword("Please enter password");
        }
        else {
            const obj = {
                email: email,
                password: password
            };
            var myurl = process.env.REACT_APP_SERVER_URL;
         
            axios.post(myurl + 'university/login', obj)
                .then(result => {
                    
                    let responseJson = result;
                    console.log(responseJson.data.success);
                    if (responseJson.data.success === true) {
                        localStorage.setItem('universityData', JSON.stringify(responseJson));
                        setredirectToReferrer(true)
                    }
                    else {
                        alert("Username or Password is not correct");
                    }
                }
                )
                .catch(error => {
                });
        }
    }
    if (redirectToReferrer === true || localStorage.getItem('universityData')) {
        return (<Redirect to={'/UniversityDashboard'} />)
    }
    return (
        <div>
            <section className="Form-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-centerblock">
                                {/* <a className="logo"><img src={logo} /></a> */}
                                <p className="logo"><img src={logo} alt="logo" /></p>
                                <div className="from-start">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control form-control-lg" id="email"
                                                placeholder="Enter email" name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>{emailError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Password</label>
                                            <input type="text" className="form-control form-control-lg" id="uname"
                                                placeholder="Password" name="name"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}> {passwordError}</span>
                                        <button type="submit" className="btn btn-website">Register</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}