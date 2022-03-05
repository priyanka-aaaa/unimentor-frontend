import React, { useState, useEffect } from "react";
import logo from '../img/logo.png';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function Universitylogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
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

                    if (responseJson.data.success === true) {

                        localStorage.setItem('universityData', JSON.stringify(responseJson));


                        localStorage.setItem('universityId', responseJson.data.university._id);
                        localStorage.setItem('universityToken', responseJson.data.token);
                        localStorage.setItem('universityName', responseJson.data.university.name);
                        localStorage.setItem('universityEmail', responseJson.data.university.email);




                        setredirectToReferrer(true)
                    }
                    else {

                        setsuccessMessage("Username or Password is incorrect")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)
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
                        {submitSuccess === 1 ? <div className="Show_success_message">
                            <strong>Danger!</strong> {successMessage}
                        </div> : null}

                        <div className="col-lg-6">
                        <div className="col-lg-6">
                                <img src={images["login.png"]} alt="login" />
                                
                                </div>
                        </div>
                        <div className="col-lg-6">

                            <div className="form-centerblock">
                                {/* <a className="logo"><img src={logo} /></a> */}
                                <p className="logo"><img src={logo} alt="logo" /></p>
                                <div className="from-start">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control " id="email"
                                                placeholder="Enter email" name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>{emailError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Password</label>
                                            <input type="text" className="form-control " id="uname"
                                                placeholder="Password" name="name"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}> {passwordError}</span>
                                        <button type="submit" className="btn btn-website">Login</button>
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