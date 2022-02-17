import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import Footer from './Footer';
export default function Studentregister() {
    const [mounted, setMounted] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    //start for pesonal profile
    const [aboutMe, setaboutMe] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [citizenship, setcitizenship] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [country, setcountry] = useState("");
    const [mobile, setmobile] = useState("");
    const [gender, setgender] = useState("");
    const [picture, setpicture] = useState("");
    //end for personal profile
    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
   
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
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
    function personalDetails(event) {

        event.preventDefault();

        const obj = {
            picture: picture,
            aboutMe: aboutMe,
            email: email,
            location: location,
            state: state,
            city: city,
            country: citizenship,
            dateOfBirth: dateOfBirth,
            countryCode: country,
            phone: mobile,
            gender: gender
        };
        axios.put('/student/personalDetails', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
          
                if (res.data.success === true) {
             
                }
                else {
          
                }
            })
            .catch(error => {
             
            });

    }

    return (
        <div id="page-top">


            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                <Sidebar />
                {/* there will be come sidebar */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* topbar will be come there */}
                        <Topbar />
                        {/* <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/* <ApplicationProfile /> */}
                        {/* profile content come here */}
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Profile</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card shadow mb-4">
                                            <div id="accordion">
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                        Personal Details
                                                    </a>
                                                    <a href="#" className="btn btn-success edit ">
                                                        <i className="fas fa-check"></i>Edit
                                                    </a>

                                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                        <div className="card-body">

                                                            <div className="from-block">
                                                                <form onSubmit={personalDetails}>

                                                                    <div className="mb-3">
                                                                        <label htmlFor="upprofile" className="form-label">Upload Your
                                                                            Profile Picture</label>
                                                                        <div className="drag-drop">
                                                                            <label htmlFor="profile-picture" className="uploader"><input
                                                                                type="file" id="profile-picture"
                                                                                value={picture}
                                                                                onChange={(e) => setpicture(e.target.value)}
                                                                            />
                                                                                <img
                                                                                    src=""
                                                                                    className="dummy-img" alt="">
                                                                                </img></label>
                                                                        </div>
                                                                        {/* <!-- <input type="file" className="form-control" id="upload" placeholder="Upload Your Profile Picture" name="upload"/> --> */}
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <label htmlFor="msg">About Me</label>
                                                                        <textarea
                                                                            value={aboutMe}
                                                                            onChange={(e) => setaboutMe(e.target.value)}
                                                                            className="form-control" rows="5" id="comment"
                                                                            name="text"
                                                                            placeholder="Tell us about yourself"></textarea>
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label htmlFor="fname" className="form-label">First
                                                                                    Name</label>
                                                                                <input
                                                                                    //   value={confirmpassword}
                                                                                    //   onChange={(e) => setconfirmpassword(e.target.value)}
                                                                                    type="text" className="form-control"
                                                                                    placeholder="" name="fname" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="lname" className="form-label">Last
                                                                                    Name</label>
                                                                                <input type="text"
                                                                                    //   value={confirmpassword}
                                                                                    //   onChange={(e) => setconfirmpassword(e.target.value)}
                                                                                    className="form-control"
                                                                                    placeholder="" name="lname" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label htmlFor="email"
                                                                                    className="form-label">Email</label>
                                                                                <input type="email"
                                                                                    value={email}
                                                                                    onChange={(e) => setemail(e.target.value)}
                                                                                    className="form-control"
                                                                                    id="email" placeholder="" name="email" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="clocation"
                                                                                    className="form-label">Current Location</label>
                                                                                <input
                                                                                    value={location}
                                                                                    onChange={(e) => setlocation(e.target.value)}
                                                                                    type="text" className="form-control"
                                                                                    placeholder="" name="lname" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label htmlFor="state"
                                                                                    className="form-label">State</label>
                                                                                <input
                                                                                    value={state}
                                                                                    onChange={(e) => setstate(e.target.value)}
                                                                                    name="state" className="form-control"
                                                                                    type="input" id="state" value="" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="city"
                                                                                    className="form-label">City</label>
                                                                                <input
                                                                                    value={city}
                                                                                    onChange={(e) => setcity(e.target.value)}
                                                                                    name="city" className="form-control"
                                                                                    type="input" id="city" value="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label htmlFor="state" className="form-label">Country of
                                                                                    citizenship</label>
                                                                                <select
                                                                                    value={citizenship}
                                                                                    onChange={(e) => setcitizenship(e.target.value)}
                                                                                    className="form-select "
                                                                                    aria-label=".form-select-sm example">
                                                                                    <option selected></option>
                                                                                    <option value="1">India</option>
                                                                                    <option value="2">Afghanistan</option>
                                                                                    <option value="3">Albania</option>
                                                                                    <option value="4">Algeria</option>
                                                                                    <option value="5">American Samoa</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="city" className="form-label">Date of
                                                                                    birth</label>
                                                                                <input max="2012-01-03" name="user_dob"
                                                                                    value={dateOfBirth}
                                                                                    onChange={(e) => setdateOfBirth(e.target.value)}
                                                                                    className="form-control" type="date" id="dob"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label htmlFor="state" className="form-label">Country
                                                                                    Code</label>
                                                                                <select
                                                                                    value={country}
                                                                                    onChange={(e) => setcountry(e.target.value)}
                                                                                    className="form-select "
                                                                                    aria-label=".form-select-sm example">
                                                                                    <option selected></option>
                                                                                    <option value="1">91 India</option>
                                                                                    <option value="2">93 Afghanistan</option>
                                                                                    <option value="3">355 Albania</option>
                                                                                    <option value="3">213 Algeria</option>
                                                                                    <option value="3">1684 American Samoa
                                                                                    </option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="city" className="form-label">Mobile
                                                                                    Number</label>
                                                                                <input
                                                                                    value={mobile}
                                                                                    onChange={(e) => setmobile(e.target.value)}
                                                                                    name="mobile" className="form-control"
                                                                                    type="tel" id="mobile" value="7355336105" />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            <div className="col">
                                                                                <label htmlFor="Gender"
                                                                                    className="form-label">Gender</label><br />
                                                                                <div className="form-check form-check-inline">
                                                                                    <input
                                                                                        value={gender}
                                                                                        onChange={(e) => setgender(e.target.value)}
                                                                                        className="form-check-input" type="radio"
                                                                                        name="flexRadioDefault"
                                                                                        id="flexRadioDefault1" />
                                                                                    <label className="form-check-label"
                                                                                        htmlFor="flexRadioDefault1">
                                                                                        Male
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check form-check-inline">
                                                                                    <input
                                                                                        value={gender}
                                                                                        onChange={(e) => setgender(e.target.value)}
                                                                                        className="form-check-input" type="radio"
                                                                                        name="flexRadioDefault"
                                                                                        id="flexRadioDefault2" checked />
                                                                                    <label className="form-check-label"
                                                                                        htmlFor="flexRadioDefault2">
                                                                                        Female
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check form-check-inline">
                                                                                    <input
                                                                                        value={gender}
                                                                                        onChange={(e) => setgender(e.target.value)}
                                                                                        className="form-check-input" type="radio"
                                                                                        name="flexRadioDefault"
                                                                                        id="flexRadioDefault3" />
                                                                                    <label className="form-check-label"
                                                                                        htmlFor="flexRadioDefault3">
                                                                                        Other
                                                                                    </label>
                                                                                </div>


                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="mb-3">
                                                                        <button type="submit"
                                                                            className="btn btn-success btn-lg">Save Changes</button>
                                                                    </div>
                                                                </form>
                                                            </div>




                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseTwo">
                                                        Account Settings

                                                    </a>
                                                    <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
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
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!-- Card Body --> */}

                                    </div>
                                </div>


                            </div>


                        </div>


                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer />
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >




    );
}