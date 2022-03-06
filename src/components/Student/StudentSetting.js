import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function StudentSetting() {
    const [mounted, setMounted] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [confirmpasswordError, setconfirmpasswordError] = useState("");

    // const [aboutMe, setaboutMe] = useState("");
    // const [email, setemail] = useState("");
    // const [location, setlocation] = useState("");
    // const [state, setstate] = useState("");
    // const [city, setcity] = useState("");
    // const [citizenship, setcitizenship] = useState("");
    // const [dateOfBirth, setdateOfBirth] = useState("");
    // const [country, setcountry] = useState("");
    // const [mobile, setmobile] = useState("");
    // const [gender, setgender] = useState("");
    // const [picture, setpicture] = useState("");

    useEffect(() => {

        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
    }, [])
    function change_password(event) {
        setconfirmpasswordError("");
        event.preventDefault();
        if (password !== confirmpassword) {
            setconfirmpasswordError("confirm password is not match");
        }
        else {
            const obj = {
                password: password
            };
            axios.post('/student/changePassword', obj, { headers: { 'Authorization': mounted } })
                .then(function (res) {

                    if (res.data.success === true) {

                    }
                    else {

                    }
                })
                .catch(error => {

                });
        }
    }


    return (
        <div id="page-top">



        <div id="wrapper">
            <Sidebar />
        
            <div id="content-wrapper" className="d-flex flex-column">
        
                <div id="content">
                    <Topbar />
                    <div className="container">
        
        
        
                        <div className="row">
        
                            {/* <!-- Area Chart --> */}
                            <div className="col-xl-12 col-lg-7">
                            <h3> Account Settings</h3>
                                <div className="card shadow mb-4">
                                    {/* <!-- Card Header - Dropdown --> */}
                                 
                                    <div className="card shadow mb-4">
                                        <div id="accordion">
                                           
                                               
                                                
                                                        <div className="form-block">
                                                            <div className="col-sm-12">
                                                                <h3 className="h-title">Change Password</h3>
                                                                <p className="p-desc">Choose a unique password to protect your account</p>
                                                                <div className="row">
                                                                    <div className="col-sm-12">
                                                                        <hr />
                                                                        <form onSubmit={change_password}>
                                                                            <div className="row">
                                                                                <div className="col-sm-12">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="password">Enter Password</label>
                                                                                        <input required=""
                                                                                            value={password}
                                                                                            onChange={(e) => setpassword(e.target.value)}
                                                                                            name="password" type="password" id="password" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-sm-12">
                                                                                    <div className="form-group">
                                                                                        <label htmlFor="c_password">Confirm Password</label>
                                                                                        <input
                                                                                            value={confirmpassword}
                                                                                            onChange={(e) => setconfirmpassword(e.target.value)}
                                                                                            required="" name="c_password" type="password" id="c_password" className="form-control" />
        
                                                                                    </div>
                                                                                    <span style={{ color: "red" }}> {confirmpasswordError}</span>
                                                                                </div>
                                                                                <div className="col-sm-12 text-danger"></div>
                                                                                <div className="col-sm-12"><button type="submit" className="btn btn-success">Save</button></div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                   
                                           
        
        
                                        </div>
                                    </div>
                                    {/* <!-- Card Body --> */}
        
                                </div>
                            </div>
        
        
                        </div>
        
        
                    </div>
                </div>
        
        
            </div>
        
        
        </div>
        
        
        </div >




    );
}