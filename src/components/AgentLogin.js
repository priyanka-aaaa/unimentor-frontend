import React, { useState } from "react";

import logo from '../img/logo.png';
import Footer from './Home/Footer'
import Header from './Home/Header'
import axios from 'axios';

import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';
import LoaderFrontend from './Home/LoaderFrontend';
import SweetAlert from 'react-bootstrap-sweetalert';

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
    const [loader, setmyloader] = useState("false");
    const [wrongPassword, setwrongPassword] = useState("");
    const [wrongUsername, setwrongUsername] = useState("")
    const [resetEmail, setresetEmail] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    function handleSubmit(event) {
        setemailError("");
        setpasswordError("");
        setwrongUsername("")
        setwrongPassword("")
        event.preventDefault();
        if (email === "") {
            setemailError("Please enter email");
        }
        if (password === "") {
            setPassword("Please enter password");
        }
        else {
            setmyloader("true")

            const obj = {
                email: email,
                password: password
            };
            axios.post(process.env.REACT_APP_SERVER_URL+'agent/login', obj)
                .then(result => {
                    setmyloader("false")

                    let responseJson = result;
                
                    if (responseJson.data.success === true) {
                        
                        localStorage.setItem('agentData', JSON.stringify(responseJson));
                        setredirectToReferrer(true)
                    }
                    else{
                        if (responseJson.data.message === "Password not matched") {
                            setwrongPassword(" Please enter a correct password")
                           
                        }
                        else {
                          
                            setwrongUsername("Please enter a correct email")
                        }

                    }
                }
                )
                .catch(error => {
                });
        }
    }
    if (redirectToReferrer === true || localStorage.getItem('agentData')) {
        return (<Redirect to={'/agent/dashboard'} />)
    }
    function onChangeresetEmail(e) {
        setresetEmail(e)
    }
    function handleforgotPasswordSubmit(event) {
        event.preventDefault();
        const obj1 = new FormData();
        obj1.append("email", resetEmail);
        const url4 = process.env.REACT_APP_SERVER_URL + 'agent/forgotPassword';
        fetch(url4, {
            method: 'POST',
            body: obj1
        })
            .then(response => response.json())
            .then(data => {
                console.log("data");
                if (data.success === true) {
                    setshowSweetAlert("1")

                }

            })
    }
    return (
        <div>
              {loader === "true" ?
                <LoaderFrontend />
                : null}
                   {showSweetAlert === "1" ?

<SweetAlert
    success
    title="Send Link For Reset Password!"
    onConfirm={(value) => {
        setshowSweetAlert("0")
    }}
>
  A link is send on your mail for reset password.
</SweetAlert>
: null
}
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
                                        <h2>Recuiter Login</h2>
                               
                                        <div className="from-start">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3 mt-3">
                                                    <label className="form-label">Email </label>
                                                    <input type="email" className="form-control form-control-lg" id="email"
                                                        placeholder="Enter email" name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                     <div style={{ color: "red" }}> {wrongUsername}</div>

                                                </div>
                                                <span style={{ color: "red" }}>{emailError}</span>
                                                <div className="mb-3 mt-3">
                                                    <label className="form-label">Password</label>
                                                    <input type="password" className="form-control form-control-lg" id="uname"
                                                        placeholder="Password" name="name"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                      <div style={{ color: "red" }}> {wrongPassword}</div>

                                                </div>
                                                <span style={{ color: "red" }}> {passwordError}</span>
                                                <button type="submit" className="btn btn-website">Login</button>
                                            </form>
                                            <p data-bs-toggle="modal" data-bs-target="#forgotStudentModal">
                                                Forgot your Password?
                                            </p>
                                            <p>Don't have an account? Click here to
                                        <Link to={'/AgentRegister'} className="" >
                                            Register</Link></p>
                                             
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                    <div class="modal" id="forgotStudentModal">
                        <div class="modal-dialog">
                            <div class="modal-content">


                                <div class="modal-header">
                                    <h4 class="modal-title">Forgot Password</h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>


                                <div class="modal-body">
                                    <form onSubmit={handleforgotPasswordSubmit}>

                                        <div class="mb-3 mt-3">
                                            <label for="email">Email Address:</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"
                                                value={resetEmail}
                                                onChange={(e) => onChangeresetEmail(e.target.value)}
                                                required
                                            />
                                        </div>


                                        <button type="submit" class="btn btn-primary" >Send Password Reset Link</button>
                                    </form>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}