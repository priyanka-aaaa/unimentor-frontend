import React, { useState } from "react";
import './css/style.css';

import logo from './img/logo.png';

import axios from 'axios';
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


export default function Universityregister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [phoneError, setphoneError] = useState("");
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
            axios.post('/university/register', obj)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.success === true) {
                        alert("University successfully");
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
                    console.log(error.response)
                });
        }

    }
    return (
        <div>
            <section className="Form-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-centerblock">
                                <p className="logo"><img src={logo} alt="logo" /></p>

                                <div className="from-start">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Name</label>
                                            <input required type="text" className="form-control form-control-lg" id="uname"
                                                placeholder="Full Name" name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <span style={{ color: "red" }}> {nameError}</span>
                                        <div className="mb-3 mt-3">
                                            <label className="form-label">Email</label>
                                            <input required type="email" className="form-control form-control-lg" id="email"
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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}