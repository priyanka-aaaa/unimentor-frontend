import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Loader from '../Home/Loader';

export default function Studentregister() {
    const [mounted, setMounted] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [citizenship, setcitizenship] = useState("");
    const [aboutMe, setaboutMe] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [countryCode, setcountryCode] = useState("");
    const [mobile, setmobile] = useState("");
    const [gender, setgender] = useState("");
    const [picture, setpicture] = useState("");
    const [loader, setmyloader] = useState("false");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successMessage, setsuccessMessage] = useState("");

    const [countries, setcountries] = useState([{
        country_name: ""
    }]);
    const [states, setstates] = useState([{
        state_name: ""
    }])
    const [cities, setcities] = useState([{
        city_name: ""
    }])
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
        axios.get(process.env.REACT_APP_SERVER_URL + 'student/personalDetails', { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var student_personal = res.data.studentPersonalDetails;
                    setpicture(student_personal.picture);


                    setaboutMe(student_personal.aboutMe);
                    setemail(student_personal.email);
                    setlocation(student_personal.location);
                    setstate(student_personal.state);
                    setcity(student_personal.city);
                    setcountry(student_personal.country);
                    setdateOfBirth(student_personal.dateOfBirth);
                    setcountryCode(student_personal.countryCode);
                    setmobile(student_personal.phone);
                    setgender(student_personal.gender);
                }
            })
            .catch(error => {
            });
        axios.get(process.env.REACT_APP_SERVER_URL + 'countries/')
            .then(function (res) {
                if (res.data.success === true) {
                    setcountries(res.data.result);
                }
            })
            .catch(error => {
            });
        axios.get(process.env.REACT_APP_SERVER_URL + 'states/india')
            .then(function (res) {
                if (res.data.success === true) {
                }
            })
            .catch(error => {
            });
    }, [])
    function personalDetails(event) {
        setmyloader("true")
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
        axios.put(process.env.REACT_APP_SERVER_URL + 'student/personalDetails', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setmyloader("false")

                if (res.data.success === true) {
                    setsuccessMessage("Profile Updated")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                }
            })
            .catch(error => {
            });
    }
    function handlecountry(e) {
        setcitizenship(e)
        axios.get(process.env.REACT_APP_SERVER_URL + 'states/' + e + '/')
            .then(function (res) {
                if (res.data.success === true) {
                    setstates(res.data.result);
                }
            })
            .catch(error => {
            });
    }
    function handlestate(e) {
        setstate(e)
        axios.get(process.env.REACT_APP_SERVER_URL + 'cities/' + e + '/')
            .then(function (res) {
                if (res.data.success === true) {
                    setcities(res.data.result);
                }
            })
            .catch(error => {
            });
    }
    function setstudentGender(value) {
        setgender(value);

    }


    return (
        <div id="page-top">

            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Personal Details</h1>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        <div className="card shadow mb-4">
                                            <div id="accordion">
                                                <div className="card">
                                                    {loader === "true" ?
                                                        <Loader />
                                                        : null}
                                                    {submitSuccess === 1 ? <div className="Show_success_message">
                                                        <strong>Success!</strong> {successMessage}
                                                    </div> : null}
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                        Personal Details
                                                    </a>
                                                    <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="from-block">
                                                                <form onSubmit={personalDetails}>

                                                                    <div className="mb-3">
                                                                        <div className="row">
                                                                            
                                                                        <div className="col-md-6">

                                                                        <div className="drag-drop">
                                                                            <h6>Profile Pict</h6>
                                                                            <label htmlFor="profile-picture" className="uploader"><input

                                                                            />

                                                                                <img src={picture} alt="picture" className="dummy-img" />

                                                                            </label>
                                                                        </div>
                                                                        </div>
                                                                            <div className="col-md-6">
                                                                                <label> Profile Picture Edit</label>
                                                                                <Dropzone onDrop={(acceptedFiles) => {
                                                                                    setpicture(acceptedFiles[0])
                                                                                    var fileName = acceptedFiles[0].path;
                                                                                    var fileExtension = fileName.split('.').pop();

                                                                                    setThumbnailFiles(acceptedFiles.map(file => Object.assign(file, {
                                                                                        preview: URL.createObjectURL(file)
                                                                                    })));
                                                                                }} name="heroImage" multiple={false}>
                                                                                    {({ getRootProps, getInputProps }) => (
                                                                                        <div {...getRootProps({ className: 'dropzone' })}>
                                                                                            <input {...getInputProps()} />
                                                                                            <div style={{ fontSize: ".8rem" }}>
                                                                                                Upload/Drag & Drop Profile Picture
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </Dropzone>

                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-3 mt-5">
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
                                                                                    type="text" className="form-control"
                                                                                    placeholder="" name="fname" />
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="lname" className="form-label">Last
                                                                                    Name</label>
                                                                                <input type="text"

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
                                                                                    readonly
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
                                                                                <select
                                                                                    value={state}
                                                                                    onChange={(e) => handlestate(e.target.value)}
                                                                                    className="form-control" name="state" required>
                                                                                    <option value={state}>{state}</option>
                                                                                    {states.map((element, index) => {
                                                                                        if (element.state_name !== state) {
                                                                                            return (
                                                                                                <option
                                                                                                    value={element.state_name} key={index}>{element.state_name}</option>
                                                                                            )
                                                                                        }
                                                                                    })}
                                                                                </select>
                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="city"
                                                                                    className="form-label">City</label>
                                                                                <select
                                                                                    value={city}
                                                                                    onChange={(e) => setcity(e.target.value)}
                                                                                    className="form-control" name="city" required>
                                                                                    <option value={city}>{city}</option>
                                                                                    {cities.map((element, index) => {
                                                                                        if (element.city_name !== city) {
                                                                                            return (
                                                                                                <option
                                                                                                    value={element.city_name} key={index}>{element.city_name}</option>
                                                                                            )
                                                                                        }
                                                                                    })}
                                                                                </select>
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
                                                                                    onChange={(e) => handlecountry(e.target.value)}
                                                                                    className="form-control" name="country" required>
                                                                                    {countries.map((element, index) => {
                                                                                        return (
                                                                                            <option
                                                                                                value={element.country_name} key={index}>{element.country_name}</option>
                                                                                        )
                                                                                    })}
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
                                                                                <input name="countryCode"
                                                                                    value={countryCode}
                                                                                    onChange={(e) => setcountryCode(e.target.value)}
                                                                                    className="form-control" type="number"
                                                                                />

                                                                            </div>
                                                                            <div className="col">
                                                                                <label htmlFor="city" className="form-label">Mobile
                                                                                    Number</label>
                                                                                <input
                                                                                    value={mobile}
                                                                                    onChange={(e) => setmobile(e.target.value)}
                                                                                    name="mobile" className="form-control"
                                                                                    type="tel" id="mobile" />
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
                                                                                        checked={gender === "male"}
                                                                                        onChange={(e) => setstudentGender("male")}

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
                                                                                        checked={gender === "female"}
                                                                                        onChange={(e) => setstudentGender("female")}
                                                                                        className="form-check-input" type="radio"
                                                                                        name="flexRadioDefault"
                                                                                        id="flexRadioDefault2" />
                                                                                    <label className="form-check-label"
                                                                                        htmlFor="flexRadioDefault2">
                                                                                        Female
                                                                                    </label>
                                                                                </div>
                                                                                <div className="form-check form-check-inline">
                                                                                    <input
                                                                                        checked={gender === "other"}
                                                                                        onChange={(e) => setstudentGender("other")}


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
                                                                            className="btn btn-success " title="Save Changes">Save Changes</button>
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
                        </div>
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
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