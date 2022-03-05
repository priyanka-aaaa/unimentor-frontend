import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Home/Footer'
import Header from './Home/Header'

import logo from '../img/logo.png';

import axios from 'axios';

import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import SweetAlert from 'react-bootstrap-sweetalert';
import AgentRegisterForm from './AgentRegisterForm'
function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg|webp)$/));
export default function AgentRegister() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nameError, setnameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
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
            axios.post(process.env.REACT_APP_SERVER_URL+'agent/register', obj)
                .then(function (res) {
                 
                    if (res.data.success === true) {
                        setshowSweetAlert("1")
                       
                        setName("");
                        setEmail("");
                        setPhone("");

                    }
                    else if (res.data.message === "agent already exist") {
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
        <div className="main-content">

            {showSweetAlert === "1" ?

                <SweetAlert
                    success
                    title="Success!"
                    onConfirm={(value) => {
                        setshowSweetAlert("0")
                    }}
                >
                    You Are Register Successfully. Please Check Your Mail For Password
                </SweetAlert>
                : null
            }
            {/*Full width header Start*/}
            <div className="full-width-header">
                {/*Header Start*/}
                <Header />
                <section className="Form-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={images["login.png"]} alt="login" />

                            </div>
                            <div className="col-lg-6">
                                {/* start for student register form */}
                                <AgentRegisterForm/>
                                {/* end for student register form */}
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <Footer />
        </div>
    );
}