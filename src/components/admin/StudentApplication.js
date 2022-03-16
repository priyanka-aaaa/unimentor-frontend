import React, { useState, useEffect } from "react";
import axios from 'axios';
import Loader from '../Home/Loader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from "file-saver";
import JSZipUtils from './zputils.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus, faTrash, faPen, faAngleDown, faAngleUp, faEye, faCloudDownload,
    faCheckCircle, faCheckSquare, faUserCircle, faRedo, faTimesCircle, faCloudUpload

} from '@fortawesome/free-solid-svg-icons';
export default function AdminStudentApplication() {

    // const saveFile = (url) => {
    //     var zip = new JSZip();
    //     var count = 0;
    //     var zipFilename = "zipFilename.zip";
    //     var urls = [
    //         {
    //             link: 'https://cdn.filestackcontent.com/16iECrZSLVefcyXnLTAm',
    //             name: 'image1'
    //         },
    //         {
    //             link: 'https://cdn.filestackcontent.com/16iECrZSLVefcyXnLTAm',
    //             name: 'image2'
    //         },
    //         {
    //             link: 'https://cdn.filestackcontent.com/16iECrZSLVefcyXnLTAm',
    //             name: 'image3'
    //         },

    //     ];

    //     urls.forEach(function (url) {
    //         JSZipUtils.getBinaryContent(url.link, function (err, data) {
    //             if (err) {
    //                 throw err;
    //             }
    //             zip.file(url.name, data, { binary: true });
    //             count++;
    //             if (count == urls.length) {
    //                 zip.generateAsync({ type: 'blob' }).then(function (content) {
    //                     saveAs(content, zipFilename);
    //                     return
    //                 });
    //             }
    //         });
    //     });
    // };

    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [firstviewWidth, setfirstviewWidth] = useState("0px");
    const [loader, setmyloader] = useState("false");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successMessage, setsuccessMessage] = useState("");
    const [viewId, setviewId] = useState("0px");
    const [thirdviewWidth, setthirdviewWidth] = useState("0px");
    const [universityApplication, setuniversityApplication] = useState(
        []
    )
    const [FormStudentApplicationValues, setFormStudentApplicationValues] = useState([]);
    const [viewSingleApplication, setviewSingleApplication] = useState("");
    const [salutation, setsalutation] = useState("");
    const [firstName, setfirstName] = useState("");
    const [middleName, setmiddleName] = useState("");
    const [lastName, setlastName] = useState("");
    const [otherName, setotherName] = useState("");
    const [gender, setgender] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [countryOfBirth, setcountryOfBirth] = useState("");
    const [nationality, setnationality] = useState("");
    const [dualNationality, setdualNationality] = useState("");
    const [maritalStatus, setmaritalStatus] = useState("");
    const [differentlyAble, setdifferentlyAble] = useState("");
    const [passport, setpassport] = useState("");
    const [aadharCard, setaadharCard] = useState("");
    const [firstLanguage, setfirstLanguage] = useState("");
    const [visa, setvisa] = useState("");
    const [refusedVisa, setrefusedVisa] = useState("");
    const [country, setcountry] = useState();
    const [state, setstate] = useState();
    const [city, setcity] = useState();
    const [address, setaddress] = useState();
    const [zipcode, setzipcode] = useState();
    const [communication_address, setcommunication_address] = useState("no");
    const [secondviewWidth, setsecondviewWidth] = useState("0px");
    const [FormFamilyValues, setFormFamilyValues] = useState([{
        relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
        mobile: "", occupation: "", qualification: "", _id: "null"
    }])
    const [formEducationValues, setformEducationValues] = useState([{
        highestEducation: "", status: "", specialization: "", degree: "", gradePercentage: "", marks: "", attendedForm: "",
        institution: "", affiliationUniversity: "", language: "", country: "", state: "", city: "", address: "", zipcode: "",
        _id: "null"
    }])
    const [scoremarks, setscoremarks] = useState();
    const [scoreenglishProficiency, setscoreenglishProficiency] = useState();
    const [scoregre, setscoregre] = useState();
    const [scoresat, setscoresat] = useState();
    const [FormExperienceValues, setFormExperienceValues] = useState([{
        status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
        _id: "null"
    }])
    const [formActivityValues, setformActivityValues] = useState([{
        activityStatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",

        _id: "null"
    }])
    const [FormRecommendationValues, setFormRecommendationValues] = useState([{
        type: "", organization: "", recommenderName: "", email: "", relation: "", designation: "", number: "", address: "", letter: "",

        _id: "null"
    }])
    const [FormValues, setFormValues] = useState([{
        message: "", type: ""
    }])
    const [message, setmessage] = useState();
    useEffect(() => {
        if (localStorage.getItem("adminData")) {
            var a = localStorage.getItem('adminData');
            var mydata = JSON.parse(a);
            var mounted = mydata.data.token;
            var adminId = mydata.data.admin._id;
        }
        setMounted(mounted)
        const url = process.env.REACT_APP_SERVER_URL + 'admin/studentApplications';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.applications)
            })


        axios.get(process.env.REACT_APP_SERVER_URL + 'student/messages', { headers: { 'Authorization': mounted } })
            .then(function (res) {
              if (res.data.success === true) {

                    var myresults = res.data.notifications;

                    if (Object.keys(myresults).length === 0) {

                    }
                    setFormValues(myresults)
                }
            })
            .catch(error => {
            });

    }, [])
    function handleCloseView() {
        setfirstviewWidth("0px");
    }
    function handlesecondCloseView() {
        setthirdviewWidth("0px")
    }
    function handleAppliedView() {
        setsecondviewWidth("1600px");
    }
    function handlesecondView(value) {
        setthirdviewWidth("1800px")
        setfirstviewWidth("0px")
        setsecondviewWidth("0px")
        const url4 = process.env.REACT_APP_SERVER_URL + 'admin/countries/620a48a37cef50e6815393ce';
        fetch(url4, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setuniversityApplication(data.adminCountry.countrySteps)
            })
        const url7 = process.env.REACT_APP_SERVER_URL + 'admin/studentApplications/';
        fetch(url7, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                var myresult =
                {
                    "_id": "6207314ccc02846889d76fb4",
                    "universityID": "61dab27e05671a193cca5f81",
                    "courseID": "61fa28ca9a3b2a20a397f846",
                    "session": "sep 2022",
                    "applicationProgress": "1",
                    "studentID": "61d9176d3ccf1bfc23b1ebee",
                    "studentName": "priyanka",
                    "studentEmail": "priyanka.calinfo500@gmail.com",
                    "studentPhoneNo": "+919050957752",
                    "universityName": "the university of sunderland",
                    "courseName": "mtech",
                    "__v": 0
                }
                setviewSingleApplication(myresult)

            })

    }
    function handleView(value) {
        const myArray = value.split("&&");
        setviewId(myArray[0]);
        setfirstviewWidth("1600px");

        var url8 = process.env.REACT_APP_SERVER_URL + 'admin/studentApplications/' + myArray[1];
        axios.get(url8, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setFormStudentApplicationValues(res.data.applications)

                }
                else {

                }
            })
            .catch(error => {

            });
        var url2 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/personalInformation';
        axios.get(url2, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityCourse = res.data.studentPersonalInformation;

                if (res.data.success === true) {
                    setsalutation(myuniversityCourse.salutation);
                    setfirstName(myuniversityCourse.firstName);
                    setmiddleName(myuniversityCourse.middleName);
                    setlastName(myuniversityCourse.lastName);
                    setotherName(myuniversityCourse.otherName);
                    setgender(myuniversityCourse.gender);
                    setdateOfBirth(myuniversityCourse.dateOfBirth);
                    setcountryOfBirth(myuniversityCourse.countryOfBirth);
                    setnationality(myuniversityCourse.nationality);
                    setdualNationality(myuniversityCourse.dualNationality);
                    setmaritalStatus(myuniversityCourse.maritalStatus);
                    setdifferentlyAble(myuniversityCourse.differentlyAble);
                    setpassport(myuniversityCourse.passport);
                    setaadharCard(myuniversityCourse.aadharCard);
                    setfirstLanguage(myuniversityCourse.firstLanguage);
                    setvisa(myuniversityCourse.visa);
                    setrefusedVisa(myuniversityCourse.refusedVisa);
                }
                else {

                }

            })
            .catch(error => {

            });
        var url3 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/address';
        axios.get(url3, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var studentAddress = res.data.studentAddress;
                if (res.data.success === true) {
                    setcountry(studentAddress.country);
                    setstate(studentAddress.state);
                    setcity(studentAddress.city);
                    setaddress(studentAddress.address);
                    setzipcode(studentAddress.zipcode);
                    setcommunication_address(studentAddress.communication_address);
                }
                else {

                }

            })
            .catch(error => {

            });
        var url3 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/families';
        axios.get(url3, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setFormFamilyValues(res.data.studentFamilies)
                }
                else {

                }

            })
            .catch(error => {

            });
        var url4 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/educations';
        axios.get(url4, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setformEducationValues(res.data.studentEducations)
                }
                else {

                }

            })
            .catch(error => {

            });
        var url5 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/score';
        axios.get(url5, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var resultStudentScore = res.data.studentScore;
                    setscoremarks(resultStudentScore.marks);
                    setscoreenglishProficiency(resultStudentScore.englishProficiency);
                    setscoregre(resultStudentScore.gre);
                    setscoresat(resultStudentScore.sat);
                }
                else {

                }

            })
            .catch(error => {

            });
        var url6 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/experiences';
        axios.get(url6, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {

                    setFormExperienceValues(res.data.studentExperiences)
                }
                else {

                }

            })
            .catch(error => {

            });
        var url6 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/activities';
        axios.get(url6, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {

                    setformActivityValues(res.data.studentActivities)
                }
                else {

                }

            })
            .catch(error => {

            });
        var url7 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/profileRecommendations';
        axios.get(url7, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {

                    setFormRecommendationValues(res.data.studentProfileRecommendations)
                }
                else {

                }

            })
            .catch(error => {

            });
    }


    function downloadPassport() {

        var id = '61d9176d3ccf1bfc23b1ebee';
        var url = process.env.REACT_APP_SERVER_URL + 'admin/students/' + id + '/identityDocument';
        axios.get(url, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    var studentidentityDocument = res.data.studentIdentityDocument;


                    // saveFile(res.data?.studentIdentityDocument?.passportBack, "passportBack");
                    const saveFile = (url) => {
                        var zip = new JSZip();
                        var count = 0;
                        var zipFilename = "IdentityDocuments.zip";
                        var urls = [
                            {
                                link: studentidentityDocument.passport,
                                name: 'passport'
                            },
                            {
                                link: studentidentityDocument.passportBack,
                                name: 'passportBack'
                            },
                            {
                                link: studentidentityDocument.cv,
                                name: 'cv'
                            },

                        ];

                        urls.forEach(function (url) {
                            JSZipUtils.getBinaryContent(url.link, function (err, data) {
                                if (err) {
                                    throw err;
                                }
                                zip.file(url.name, data, { binary: true });
                                count++;
                                if (count == urls.length) {
                                    zip.generateAsync({ type: 'blob' }).then(function (content) {
                                        saveAs(content, zipFilename);
                                        return
                                    });
                                }
                            });
                        });
                    };
                    saveFile();

                }
                else {

                }

            })
            .catch(error => {

            });

    }

    function handleFormSubmit(event) {
        event.preventDefault();
        setmyloader("true")
        const obj = {
            message: message,
            studentID: "61d9176d3ccf1bfc23b1ebee",
            type: 0,

        };
        axios.post(process.env.REACT_APP_SERVER_URL + 'admin/messages/61d9176d3ccf1bfc23b1ebee', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                setmyloader("false")
                if (res.data.success === true) {
                    setsuccessMessage("Message Sent")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    setmessage("")
                    axios.get(process.env.REACT_APP_SERVER_URL + 'student/messages', { headers: { 'Authorization': mounted } })
                        .then(function (res) {
                          
                            
                            if (res.data.success === true) {

                                var myresults = res.data.notifications;

                                if (Object.keys(myresults).length === 0) {

                                }
                                setFormValues(myresults)
                            }
                        })
                        .catch(error => {
                        });

                }
            })
            .catch(error => {

            });

    }
    return (
        <div className="container-fluid admin-dashboard admin-icon" >
            {loader === "true" ?
                <Loader />
                : null}


            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student Application</h1>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-5"> <h5>Application Details</h5> </div>
                                <div className="col-md-4" />
                                <div className="col-md-3">
                                    <div className="search-barc">
                                        <input type="text" className="form-control " placeholder="Search hear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body table-border-style">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Student ID</th>
                                            <th>Student Name</th>
                                            <th>Student Email</th>
                                            <th>Student Phone</th>
                                            <th>Applcation Id</th>
                                            <th>University Name</th>
                                            <th>Course Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((object, i) => {

                                            return (

                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{object.studentID}</td>
                                                    <td>{object.studentName}</td>
                                                    <td>{object.studentEmail}</td>
                                                    <td>{object.studentPhoneNo}</td>
                                                    <td>{object._id}</td>
                                                    <td>{object.universityName}</td>
                                                    <td>{object.courseName}</td>

                                                    <td>


                                                        <button title="View Student Application" className="btn btn-success" onClick={() => handleView(object._id + '&&' + object.studentID)}>

                                                            <FontAwesomeIcon icon={faEye} />

                                                        </button>
                                                    </td>
                                                </tr>

                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ Hover-table ] end */}
            </div>
            {/* start for first sidebar */}

            <div id="mySidenav" className="sidenav" style={{ width: firstviewWidth }}>


                <section className="pcoded-main-containerx ">
                    <a onClick={() => handleCloseView()} className="closebtn" >×</a>
                    <div className="pcoded-content">
                        {/* [ breadcrumb ] start */}
                        <div className="page-header m-t-20">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Student Application Profile </h5>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* [ breadcrumb ] end */}
                        {/* [ Main Content ] start */}
                        <div className="row">
                            {/* [ Hover-table ] start */}
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <h5>Student Application ID <span className="badge badge-info">5540</span></h5>
                                            </div>
                                            <div className="col-md-4">
                                                <span className="badge badge-secondary">Applicaggggggtion Initiated</span>
                                            </div>

                                            <div className="col-md-3 text-right">

                                                <button title="Applied Application" className="btn btn-primary" onClick={() => handleAppliedView()}>   Applied Application <span className="badge badge-light">3</span></button>


                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body ">
                                        <h5>Personal Information</h5>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Salutation </h5>
                                                <p>{salutation}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>First Name</h5>
                                                <p>{firstName}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Middle Name</h5>
                                                <p>{middleName}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Last Name</h5>
                                                <p>{lastName}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-3">
                                                <h5>Other Name</h5>
                                                <p>{otherName}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Gender</h5>
                                                <p>{gender}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Date of Birth</h5>
                                                <p>{dateOfBirth}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Country of Birth</h5>
                                                <p>{countryOfBirth}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-3">
                                                <h5>Nationality</h5>
                                                <p>{nationality}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5> Dual Nationality</h5>
                                                <p>{dualNationality}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Marital Status</h5>
                                                <p>{maritalStatus}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>differently abled</h5>
                                                <p>{differentlyAble}</p>
                                            </div>
                                        </div>
                                        {/* start for new row   */}
                                        <div className="row mt-3">
                                            <div className="col-md-3">
                                                <h5>valid passport</h5>
                                                <p>{passport}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5> valid Aadhar Card</h5>
                                                <p>{aadharCard}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>First Language</h5>
                                                <p>{firstLanguage}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5> valid study visa</h5>
                                                <p>{visa}</p>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-3">
                                                <h5> Refused Visa</h5>
                                                <p>{refusedVisa}</p>
                                            </div>
                                        </div>
                                        {/* end for new row */}
                                        <h5 className="mt-5">Address &amp; Contact</h5>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Country</h5>
                                                <p>{country}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>State/Province</h5>
                                                <p>{state}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>City</h5>
                                                <p>{city}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Address</h5>
                                                <p>{address}</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Zipcode</h5>
                                                <p>{zipcode}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>   Communication Address</h5>
                                                <p>{communication_address}</p>
                                            </div>

                                        </div>
                                        <h5 className="mt-5">Family Information</h5>
                                        <hr />
                                        {FormFamilyValues.map((element, index) => (
                                            <div key={index}>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h5>Relationship</h5>
                                                        <p>{element.relationship}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Full Name</h5>
                                                        <p>{element.salutation}{element.firstName} {element.middleName} {element.lastName}  </p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Email</h5>
                                                        <p>{element.email}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Mobile</h5>
                                                        <p>{element.mobile}</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Occupation</h5>
                                                        <p>{element.occupation}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Highest Qualification</h5>
                                                        <p>{element.qualification}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <h5 className="mt-5">Education</h5>
                                        <hr />
                                        {formEducationValues.map((element, index) => (
                                            <div key={index}>

                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h5>Highest Level of Education</h5>
                                                        <p>{element.highestEducation}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Education Status</h5>
                                                        <p>{element.status}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Specialization</h5>
                                                        <p>{element.specialization}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Degree</h5>
                                                        <p>{element.degree}</p>
                                                    </div>


                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Grade Scheme(GPA/Percentage)</h5>
                                                        <p>{element.gradePercentage}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Grade Average/Marks Obtained</h5>
                                                        <p>{element.marks}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Attended From</h5>
                                                        <p>{element.attendedForm}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Name of Institution</h5>
                                                        <p>{element.institution}</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Affiliating University/Board of Education</h5>
                                                        <p>{element.affiliationUniversity}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Language of Instruction</h5>
                                                        <p>{element.language}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Country</h5>
                                                        <p>{element.country}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>State/Province</h5>
                                                        <p>{element.state}</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>City/Town</h5>
                                                        <p>{element.city}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Address</h5>
                                                        <p>{element.address}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Zipcode</h5>
                                                        <p>{element.zipcode}</p>
                                                    </div>
                                                    {/* <div class="col-md-3">
            
        </div> */}
                                                </div>
                                            </div>
                                        ))}
                                        <h5 className="mt-5">Test Score</h5>
                                        <hr />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <h5>Marks in English in Class 12</h5>
                                                <p>{scoremarks}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Have you taken any English Proficiency Test?</h5>
                                                <p>{scoreenglishProficiency}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Have you taken IELTS/PTE/GRE/GMAT ?</h5>
                                                <p>{scoregre}</p>
                                            </div>
                                            <div className="col-md-3">
                                                <h5>Have you taken SAT/ACT?</h5>
                                                <p>{scoresat}</p>
                                            </div>
                                        </div>
                                        <h5 className="mt-5">Work Experience</h5>
                                        <hr />
                                        {FormExperienceValues.map((element, index) => (
                                            <div key={index}>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h5>Work Status</h5>
                                                        <p>{element.status}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Work Type</h5>
                                                        <p>{element.type}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Name of Organization*</h5>
                                                        <p>{element.organization}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Designation</h5>
                                                        <p>{element.designation}</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Job Role</h5>
                                                        <p>{element.role}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Work Type</h5>
                                                        <p>{element.started}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Started Date</h5>
                                                        <p>{element.type}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>End Date</h5>
                                                        <p>{element.ended}</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Country</h5>
                                                        <p>{element.country}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>City/Town</h5>
                                                        <p>{element.city}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <h5 className="mt-5">Extra Curricular Activities</h5>
                                        <hr />
                                        {formActivityValues.map((element, index) => (
                                            <div key={index}>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <h5>Acitvity Status</h5>
                                                        <p>{element.activityStatus}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Activity</h5>
                                                        <p>{element.activity}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Position/Designation</h5>
                                                        <p>{element.position}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Description</h5>
                                                        <p>{element.description}</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Started Date</h5>
                                                        <p>{element.started}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>End Date</h5>
                                                        <p>{element.ended}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5>Would you be interested in participating in similar activities at university</h5>
                                                        <p>{element.apply}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <h5 className="mt-5">Recommendation</h5>
                                        <hr />
                                        {FormRecommendationValues.map((element, index) => (
                                            <div key={index}>
                                                <div className="row mt-3">
                                                    <div className="col-md-3">
                                                        <h5>Reference Type</h5>
                                                        <p>{element.type}</p>

                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Name of Organisation/Institution</h5>
                                                        <p>{element.organization}</p>

                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Recommender Name</h5>
                                                        <p>{element.recommenderName}</p>

                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Official Email ID</h5>
                                                        <p>{element.email}</p>

                                                    </div>
                                                </div>
                                                <div className="row mt-3">

                                                    <div className="col-md-3">
                                                        <h5>Relation with Recommender</h5>
                                                        <p>{element.relation}</p>

                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Recommender Designation</h5>
                                                        <p>{element.designation}</p>

                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Contact Number</h5>
                                                        <p>{element.number}</p>

                                                    </div>
                                                    <div className="col-md-3">
                                                        <h5>Address of Organisation/Institution</h5>

                                                        <p>{element.address}</p>

                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-6">
                                                        <h5>Do you have letter of recommendation?</h5>
                                                        <p>{element.letter}</p>

                                                    </div>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* [ Hover-table ] end */}
                        </div>
                        {/* [ Main Content ] end */}
                    </div>
                </section>
            </div>
            {/* end for first sidebar */}
            {/* start for second sidebar */}
            <div id="mySidenav" className="sidenav" style={{ width: secondviewWidth }}>


                <div className="row">
                    {/* [ Hover-table ] start */}
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-5"> <h5>Application Details</h5> </div>
                                    <div className="col-md-4" />
                                    <div className="col-md-3">
                                        <div className="search-barc">
                                            <input type="text" className="form-control " placeholder="Search hear" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-border-style">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Student ID</th>
                                                <th>Student Name</th>
                                                <th>Student Email</th>
                                                <th>Student Phone</th>
                                                <th>Applcation Id</th>
                                                <th>University Name</th>
                                                <th>Course Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {FormStudentApplicationValues.map((object, i) => {

                                                return (

                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{object.studentID}</td>
                                                        <td>{object.studentName}</td>
                                                        <td>{object.studentEmail}</td>
                                                        <td>{object.studentPhoneNo}</td>
                                                        <td>{object._id}</td>
                                                        <td>{object.universityName}</td>
                                                        <td>{object.courseName}</td>

                                                        <td>


                                                            <button title="View Application Detail" className="btn btn-success" onClick={() => handlesecondView(object._id)}>

                                                                <FontAwesomeIcon icon={faEye} />

                                                            </button>
                                                        </td>
                                                    </tr>

                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* [ Hover-table ] end */}
                </div>

            </div>
            {/* end for second sidebar */}
            {/* start for third sidebar */}

            <div id="mySidenav" className="sidenav" style={{ width: thirdviewWidth }}>


                <section className="pcoded-main-containerx">
                    <a onClick={() => handlesecondCloseView()} className="closebtn" >×</a>

                    <div className="pcoded-content">
                        {/* [ breadcrumb ] start */}
                        <div className="page-header">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Students Application </h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html"><i className="feather icon-home" /></a>
                                            </li>
                                            <li className="breadcrumb-item"><a href="#!">Student Application Applied</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* [ breadcrumb ] end */}
                        {/* [ Main Content ] start */}
                        <div className="row">
                            {/* [ Hover-table ] start */}
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header app">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h5>Application ID <span className="badge badge-info">5540</span></h5>
                                            </div>
                                            <div className="col-md-4 text-center">
                                                <div className="btn-block"><button type="button" className="btn btn-success">Application
                                                    Initiated</button></div>
                                            </div>
                                            {submitSuccess === 1 ? <div className="Show_success_message">
                                                <strong>Success!</strong> {successMessage}
                                            </div> : null}

                                            <div className="col-md-4 text-right">
                                                <div className="btn-block "><button type="button" className="btn btn-outline-primary btn-download"><span>


                                                    <FontAwesomeIcon icon={faCloudDownload} />

                                                </span>Download</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-border-style">
                                        <div className="row">
                                            {/* Area Chart */}
                                            <div className="col-xl-8 col-lg-7">
                                                <div className="card  mb-4">
                                                    {/* Card Header - Dropdown */}
                                                    <div className="card mb-4">
                                                        <div id="accordion">
                                                            <div className="card">
                                                                <div id="collapseOne" className="collapse show" data-bs-parent="#accordion" style={{}}>
                                                                    <div className="card-body">
                                                                        <div className="table-format">
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Student ID</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format"><span className="badge bg-success">{viewId}</span></span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Student Name</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">{viewSingleApplication.studentName}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Application ID</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">{viewSingleApplication._id}</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Email</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format" >{viewSingleApplication.studentEmail}</span>

                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Program Title</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">Accounting &amp; Payroll
                                                                                        Administrator</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Fees</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">11000</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Intake</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">January</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">English Test</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">I don't have this</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">English 12Th
                                                                                        Marks</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">71</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Education</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format"><span className="badge bg-secondary">Year
                                                                                        2019</span>
                                                                                        <span className="badge bg-secondary">71%</span>
                                                                                        <span className="badge bg-secondary">M 50</span>
                                                                                        <span className="badge bg-secondary">E 71</span>
                                                                                        XII
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Board/University</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">Central Board of
                                                                                        Secondary Education</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Applied On</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Application Level</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">1-Year Post-Secondary
                                                                                        Certificate</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Institute</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">Academy of
                                                                                        Learning</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Duration</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">1 year</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <span className="th-format">Pendency</span>
                                                                                </div>
                                                                                <div className="col-sm-6">
                                                                                    <span className="td-format">71</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* Card Body */}
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div className="card mb-4">
                                                    <div className="profile-main">
                                                        <div className="profile-box-main">
                                                            <span className="ant-avatar ant-avatar-circle"><span className="ant-avatar-string">R</span>
                                                            </span>
                                                        </div>
                                                        <div className="profile-box-inner">
                                                            <h5>{viewSingleApplication.studentName}</h5>
                                                            <p>Accounting &amp; Payroll Administrator</p>
                                                            <p>1 year</p>
                                                            <p>Academy of Learning</p>
                                                        </div>
                                                        <div className="application-current-status">
                                                            <h5>Application Current Status</h5>
                                                            <ul>

                                                                {universityApplication.map((object, i) => {

                                                                    return (

                                                                        <div key={i}>

                                                                            <li className="statusBox ">{object}<span>



                                                                                <FontAwesomeIcon icon={faCheckCircle} />

                                                                            </span></li>


                                                                        </div>

                                                                    )
                                                                })}

                                                            </ul>
                                                        </div>
                                                        <div className="current-status">
                                                            <h5>Application current-status</h5>
                                                            <ul>
                                                                {universityApplication.map((object, i) => {

                                                                    return (

                                                                        <div key={i}>
                                                                            <li className="state-comp"><input type="checkbox" defaultChecked />{object}
                                                                            </li>
                                                                        </div>

                                                                    )
                                                                })}

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="activite">
                                            <div className="row">
                                                <div className="cardx mb-4">
                                                    <div className="act-note">
                                                        <ul className="nav nav-tabs" role="tablist">
                                                            <li className="nav-item">
                                                                <a className="nav-link active" data-bs-toggle="tab" href="#home">Activity</a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link" data-bs-toggle="tab" href="#menu1">Notes</a>
                                                            </li>
                                                        </ul>
                                                        {/* Tab panes */}
                                                        <div className="tab-content">
                                                            <div id="home" className=" tab-pane active"><br />
                                                                <div className="card-body">
                                                                    <div className="application-activity">
                                                                        <ul>
                                                                            <li>
                                                                                <div className="date"><span> 22.12.2021<br />01:36
                                                                                    pm</span>
                                                                                </div>
                                                                                <div className="content"><label>Student Added</label>
                                                                                    <div className="actBy"> by Satnam singh</div>
                                                                                    <div style={{ marginLeft: '25px' }} />
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="date"><span> 13.01.2022<br />04:50
                                                                                    pm</span>
                                                                                </div>
                                                                                <div className="content"><label>Application
                                                                                    Opened</label>
                                                                                    <div className="actBy"> by Satnam singh</div>
                                                                                    <div style={{ marginLeft: '25px' }}>Offer Received
                                                                                        assigned to Khushi</div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="menu1" className=" tab-pane fade"><br />
                                                                <div className="note">
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <span>

                                                                                <FontAwesomeIcon icon={faCheckSquare} />

                                                                            </span>
                                                                            <div className="con-info">
                                                                                <h6>Note</h6>
                                                                                <p><strong>@Khushi</strong> Dear Sir, Kindly Provide
                                                                                    Student's english profiency test . Thanks!</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="dat-time text-right">13.01.2022,5:31 PM
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="chat-msg">
                                                                        <h6><span>

                                                                            <FontAwesomeIcon icon={faUserCircle} />

                                                                            Khushi left a
                                                                            note.</span></h6>
                                                                        <div className="msg-content">
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <span>

                                                                                        <FontAwesomeIcon icon={faCheckSquare} />

                                                                                    </span>
                                                                                    <div className="con-info">
                                                                                        <h6>@Satnam singh</h6>
                                                                                        <p>Please ignore. It is by mistake. Sorry
                                                                                            for
                                                                                            that.</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="dat-time text-right">16.01.2022,1:44
                                                                                        PM
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row text-right">
                                                                                <div className="col-md-12">
                                                                                    <button type="button" className="btn btn-success" onclick="opencoment()"><span>


                                                                                        <FontAwesomeIcon icon={faPlus} />

                                                                                    </span>Add
                                                                                        Comment</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {/*--comment-*/}
                                                                    {/* <div class="card-body comment" id="mycomment">
        
        <div class="student-view" >
            <div class="row">
                <div class="col-md-6">
                <h6 class="mt-2 font-weight-bold text-primary">Comment</h6>
                </div>
                <div class="col-md-6">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>                        
                </div>
            </div>
            <div class="row mt-3">
                <form>                                  


                     <div class="col-md-12 mt-3">
                        <label class="form-label">Comment </label>                                      
                       <textarea class="form-control" row="3" col="5"></textarea>
                     </div>
                     <div class="col-md-12">
                     <button type="button" class="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#adduserModal">Submit</button>
                  </div>

                </form>
            </div>  
       </div>
    </div> */}
                                                                    {/*-end-comment-*/}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="applic-document">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h4>Documents</h4>
                                                </div>
                                                <div className="col-md-6 text-right"><button type="button" className="btn btn-success" onclick="openNav()"><span>

                                                    <FontAwesomeIcon icon={faEye} />

                                                </span>All
                                                    Document</button></div>
                                            </div>
                                            <button onClick={downloadPassport} >download download</button>
                                            <ul>
                                                <li onClick={downloadPassport}>PASSPORT <span>
                                                    <FontAwesomeIcon icon={faEye} />

                                                </span></li>
                                                <li>10TH<span>
                                                    <FontAwesomeIcon icon={faEye} />


                                                </span></li>
                                                <li>12TH<span></span></li>
                                                <li>MEDIUM OF INSTRUCTION<span>

                                                    <FontAwesomeIcon icon={faEye} />


                                                </span></li>
                                                <li>LETTER OF RECOMMENDATION<span>

                                                    <FontAwesomeIcon icon={faEye} />

                                                </span></li>
                                                <li>OFFER LETTER<span>

                                                    <FontAwesomeIcon icon={faEye} />

                                                </span></li>
                                            </ul>
                                        </div>
                                        <div className="card-body sidenav" id="mySidenav">
                                            <div className="row">
                                                {/* [ Hover-table ] start */}
                                                <div className="col-md-12">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <div className="row">
                                                                <div className="col-md-5">
                                                                    <h5>Student Document Details</h5>
                                                                </div>
                                                                <div className="col-md-4" />
                                                                <div className="col-md-3">
                                                                    <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-body ">
                                                            <h5>Identity Documents</h5>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <h5>Passport</h5>
                                                                    <p><img src="assets/images/passport.png" alt="pas" /></p>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <h5>Passport Back</h5>
                                                                    <p><img src="assets/images/passport.png" alt="pas" /></p>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <h5>CV</h5>
                                                                    <p><img src="assets/images/cv.png" alt="cv" /></p>
                                                                </div>
                                                            </div>
                                                            <h5> Education Documents</h5>
                                                            <hr />
                                                            <div className="row mt-3">
                                                                <div className="col-md-6">
                                                                    <h5>Degree</h5>
                                                                    <p>pict</p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <h5>Secondary Education</h5>
                                                                    <p>pict</p>
                                                                </div>
                                                            </div>
                                                            <h5 className="mt-5">Work Experience Documents</h5>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h5>Work Experience</h5>
                                                                    <p>Experience PICt</p>
                                                                </div>
                                                            </div>
                                                            <h5 className="mt-5"> English Proficiency Test Document</h5>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h5>Work Experience</h5>
                                                                    <p>Experience PICt</p>
                                                                </div>
                                                            </div>
                                                            <h5 className="mt-5"> Extra Curricular Document</h5>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h5>Work Experience</h5>
                                                                    <p>Experience Pict</p>
                                                                </div>
                                                            </div>
                                                            <h5 className="mt-5"> Recommendation Documents</h5>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h5> Recommendation</h5>
                                                                    <p>Documents Pict</p>
                                                                </div>
                                                            </div>
                                                            <h5 className="mt-5">Other Documents</h5>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <h5> Documents</h5>
                                                                    <p>Documents Pict</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* [ Hover-table ] end */}
                                            </div>
                                        </div>
                                        {/* start for msg */}
                                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                            <h1 className="h3 mb-0 text-gray-800">Message</h1>
                                        </div>
                                        {/* Content Row */}
                                        <div className="row">
                                            {/* Area Chart */}
                                            <div className="col-xl-12 col-lg-7">
                                                <div className="card shadow mb-4">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="chat-message msg_list">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        {/* start for message  */}
                                                                        {FormValues.map((element, index) => {
                                                                            return (

                                                                                <div className="anw-block" key={index}>

                                                                                    {element.type === 0 ?


                                                                                        <div className="anw-block">
                                                                                            <div className="row">
                                                                                                <div className="col-md-1">
                                                                                                    <div className="us-img us-letter">
                                                                                                        <h6>S</h6>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-md-11">
                                                                                                    <div className="anw-content-rightblock  light-greenish">
                                                                                                        <div className="des-title">
                                                                                                            <h6><strong>Student:</strong> (Parveen) Sent a Message</h6><span className="date-block">Apr 8, 2021, 4:03 PM</span>
                                                                                                        </div>
                                                                                                        <div className="reply-content ">
                                                                                                            <p>{element.message}</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        :

                                                                                        <div className="row">
                                                                                            <div className="col-md-1">
                                                                                                <div className="us-img us-letter">
                                                                                                    <h6>A</h6>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-md-11">
                                                                                                <div className="anw-content-rightblock  drak-blue">
                                                                                                    <div className="des-title">
                                                                                                        <h6><strong>Visa Team:</strong>(admin) Sent a Message </h6><span className="date-block">Sep 25, 2020, 10:31 PM</span>
                                                                                                    </div>
                                                                                                    <div className="reply-content ">
                                                                                                        <p>{element.message}</p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })}
                                                                        {/* end for message */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="msg-form">
                                                                <form onSubmit={handleFormSubmit}>

                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label className="form-label">Message
                                                                                    <span className="req-star">*</span></label>
                                                                                <textarea rows={5} cols={7} className="form-control" value={message}
                                                                                    onChange={(e) => setmessage(e.target.value)} />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button type="submit" className="btn-send-msg"><i className="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: '6px' }} /> Send</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end for msg */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}