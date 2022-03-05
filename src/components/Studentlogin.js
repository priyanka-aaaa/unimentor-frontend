import React, { useState } from "react";
import logo from '../img/logo.png';
import axios from 'axios';
import Footer from './Home/Footer'
import Header from './Home/Header'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function Studentlogin() {
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
            axios.post(process.env.REACT_APP_SERVER_URL + 'student/login', obj)
                .then(result => {
                    let responseJson = result;

                    if (responseJson.data.success === true) {
                        localStorage.setItem('userData', JSON.stringify(responseJson));
                        setredirectToReferrer(true)
                    }
                    else {

                    }
                }
                )
                .catch(error => {
                });
        }
    }

    if (redirectToReferrer === true || localStorage.getItem('userData')) {
        return (<Redirect to={'/Dashboard'} />)
    }
    return (
        <div>
            <div className="main-content">
                {/*Full width header Start*/}
                <div className="full-width-header">
                    <Header />
                    <section className="Form-block">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                <img src={images["login.png"]} alt="login" />
                                
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-centerblock">
                                        <h2>Students Login</h2>
                               
                                        <div className="from-start">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3 mt-3">
                                                    <label className="form-label">Email </label>
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
                                                <button type="submit" className="btn btn-website">Login</button>
                                            </form>
                                            <p>Don't have an account? Click here to
                                        <Link to={'/Studentregister'} className="" href="#">
                                            Register</Link></p>
                                             
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />

                </div>
            </div>
        </div>
    );
}