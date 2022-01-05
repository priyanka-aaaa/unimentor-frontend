
import './css/style.css';
import React from 'react';
import logo from './img/logo.png';
import { Component } from 'react';
import axios from 'axios';

class Studentregister extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {},

        }
    }
    handleValidation() {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Please enter name";
        }


        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter a email";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Please enter a phone";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }





    onSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {


            const obj = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone

            };

            axios.post('https://uni-mentor-backend.vercel.app/student/register', obj)
                .then(res => console.log(res.data))
                .catch(error => {
                    console.log(error.response)
                });
            this.setState({
                name: '',
                email: '',
                phone: ''


            })
            alert("register successfully");
        }



        const obj = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,


        };

    }
    render() {
        return (
            <div >


                <section className="Form-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-centerblock">
                                    <a href="#" className="logo"><img src={logo} /></a>
                                    <div className="from-start">
                                        <form>
                                            <div className="mb-3 mt-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control form-control-lg" id="uname"
                                                    placeholder="Full Name" name="name"
                                                    value={this.state.name}
                                                    onChange={this.onChangeName}
                                                />

                                            </div>

                                            <span style={{ color: "red" }}>{this.state.errors["name"]}</span>

                                            <div className="mb-3 mt-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control form-control-lg" id="email"
                                                    placeholder="Enter email" name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                />
                                            </div>

                                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                            <div className="mb-3 mt-3">
                                                <label className="form-label">Phone</label>
                                                <input type="tel" className="form-control form-control-lg" id="tel"
                                                    placeholder="Phone No" name="phone"
                                                    value={this.state.phone}
                                                    onChange={this.onChangePhone}
                                                />
                                            </div>

                                            <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>


                                            <button type="submit" onClick={this.onSubmit} className="btn btn-website">Register</button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div >
        );
    }
}


export default Studentregister;
