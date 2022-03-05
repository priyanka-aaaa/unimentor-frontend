import React, { useState } from "react";

import Footer from './Home/Footer'
import Header from './Home/Header'
import logo from '../img/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';

import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'

export default function Universityregister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    function handleSubmit(event) {
        setnameError("");
        setemailError("");
        setphoneError("");
        event.preventDefault();
        if (name === "") {
            setnameError("Please enter name");
        }
        if (email === "") {
            setemailError("Please enter email");
        }
        if (phone === "") {
            setphoneError("Please enter phone number");
        }
        if (isValidPhoneNumber(phone) === false) {
            setphoneError("Please enter correct phone number");
        }
        else {
            const obj = {
                name: name,
                email: email,
                phone: phone

            };
            axios.post(process.env.REACT_APP_SERVER_URL+'university/register', obj)
                .then(function (res) {
             
                    if (res.data.success === true) {
                        setsuccessMessage("Register")
                        setTimeout(() => setsubmitSuccess(""), 3000);
                        setsubmitSuccess(1)

                        setName("");
                        setEmail("");
                        setPhone("");

                    }
                    else if (res.data.message === "university already exist") {
                        setemailError("Email already exist");
                    }
                    else {

                    }
                })
                .catch(error => {
                 
                });
        }

    }
    return (
        <div>
        {/* // <div className="main-content">
        // {/*Full width header Start*/}
       
            <section className="Form-block">
                <div className="container">
                    <div className="row">
                    {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
                        <div className="col-lg-12">
                            <div className="form-centerblock">
                                <h2>School Registration</h2>

                                <div className="from-start">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Name</label>
                                            <input required type="text" className="form-control " id="uname"
                                                placeholder="Full Name" name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}> {nameError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Email</label>
                                            <input required type="email" className="form-control " id="email"
                                                placeholder="Enter email" name="email"

                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                        </div>
                                        <span style={{ color: "red" }}>{emailError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Phone</label>

                                            <PhoneInput
                                                placeholder="Enter phone number"
                                                required
                                                value={phone}
                                                onChange={setPhone} />

                                            <span style={{ color: "red" }}> {phoneError}</span>
                                        </div>
                                        <button type="submit" className="btn btn-website">Register</button>
                                    </form>
                                   <p> Already have an account? Click here to 
                                    <Link to={'/Universitylogin'} className="" >                         

                            Login</Link></p>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
         
        </div>

    );
}