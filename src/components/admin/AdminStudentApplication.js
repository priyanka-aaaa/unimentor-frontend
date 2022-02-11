import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Footer';

export default function AdminStudentApplication() {
    // start for personal information
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [viewWidth, setviewWidth] = useState("0px");
    const [viewId, setviewId] = useState("0px");


    //start for personal information
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

    //end for personal information

    //start for address
    const [country, setcountry] = useState();
    const [state, setstate] = useState();
    const [city, setcity] = useState();
    const [address, setaddress] = useState();
    const [zipcode, setzipcode] = useState();
    const [communication_address, setcommunication_address] = useState("no");
    //end for address

    //start for family
    const [FormFamilyValues, setFormFamilyValues] = useState([{
        relationship: "", salutation: "", firstName: "", middleName: "", lastName: "", email: "",
        mobile: "", occupation: "", qualification: "", _id: "null"
    }])
    //end for familty
    //start for education
    const [formEducationValues, setformEducationValues] = useState([{
        highestEducation: "", status: "", specialization: "", degree: "", gradePercentage: "", marks: "", attendedForm: "",
        institution: "", affiliationUniversity: "", language: "", country: "", state: "", city: "", address: "", zipcode: "",
        _id: "null"
    }])
    //end for education
    
    //start for score
    const [scoremarks, setscoremarks] = useState();
    const [scoreenglishProficiency, setscoreenglishProficiency] = useState();
    const [scoregre, setscoregre] = useState();
    const [scoresat, setscoresat] = useState();
    // end for score
    //start for work experience
    const [FormExperienceValues, setFormExperienceValues] = useState([{
        status: '', type: "", organization: "", designation: "", role: "", started: '', ended: "", country: "", city: "",
        _id: "null"
    }])
    //end for work experience
    //start for extra curricultar Activity
    const [formActivityValues, setformActivityValues] = useState([{
        activityStatus: "", activity: "", position: "", description: "", started: "", ended: "", apply: "",

        _id: "null"
    }])
     //end for extra curricultar Activity
     //start for recommendation
     const [FormRecommendationValues, setFormRecommendationValues] = useState([{
        type: "", organization: "", recommenderName: "", email: "", relation: "", designation: "", number: "", address: "", letter: "",

        _id: "null"
    }])
     //end for recommendation
    useEffect(() => {
        if (localStorage.getItem("adminData")) {
            var a = localStorage.getItem('adminData');
            var mydata = JSON.parse(a);
            var mounted = mydata.data.token;
            var adminId = mydata.data.admin._id;
            // setAdminId(adminId)
        }
        setMounted(mounted)
        // setuniversityId(universityId)



        // start for fetching course
        const url = process.env.REACT_APP_SERVER_URL + 'admin/studentApplications';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mounted }
        })
            .then(response => response.json())
            .then(data => {
                setdata(data.applications)
            })
        // end for fetching course
    }, [])
    function handleCloseView() {
        setviewWidth("0px");
    }
    function handleView(value) {
        const myArray = value.split("&&");
        setviewId(myArray[0]);
        setviewWidth("1600px");
        //start for personal information
        var url2 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/personalInformation';
        axios.get(url2, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityCourse = res.data.studentPersonalInformation;
                console.log("myuniversityCourse")
                console.log(myuniversityCourse)
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
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for personal information
        //start for address
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
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for address
        //start for family information

        var url3 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/families';
        axios.get(url3, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setFormFamilyValues(res.data.studentFamilies)
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for family information

        //start for education
        var url4 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/educations';
        axios.get(url4, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    setformEducationValues(res.data.studentEducations)
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for education
              //start for score
              var url5 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/score';
              axios.get(url5, { headers: { 'Authorization': mounted } })
              .then(function (res) {
                  console.log(res.data);
                  if (res.data.success === true) {
                      var resultStudentScore = res.data.studentScore;
                      setscoremarks(resultStudentScore.marks);
                      setscoreenglishProficiency(resultStudentScore.englishProficiency);
                      setscoregre(resultStudentScore.gre);
                      setscoresat(resultStudentScore.sat);
                  }
                  else {
                      alert("error");
                  }
  
              })
              .catch(error => {
                  console.log(error.response)
              });
          //end for score
            //start for work experience

        var url6 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/experiences';
        axios.get(url6, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    console.log("res.data.studentExperiences");
                    console.log(res.data.studentExperiences[0].status)
                    setFormExperienceValues(res.data.studentExperiences)
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
        //end for work experience
         //start for extra curricultar activity

         var url6 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/activities';
         axios.get(url6, { headers: { 'Authorization': mounted } })
             .then(function (res) {
                 if (res.data.success === true) {
                 
                     setformActivityValues(res.data.studentActivities)
                 }
                 else {
                     alert("error");
                 }
 
             })
             .catch(error => {
                 console.log(error.response)
             });
         //end for extra curricultar activity
         //start for recommendation
         var url7 = process.env.REACT_APP_SERVER_URL + 'admin/students/' + myArray[1] + '/profileRecommendations';
         axios.get(url7, { headers: { 'Authorization': mounted } })
             .then(function (res) {
                 if (res.data.success === true) {
                 
                    setFormRecommendationValues(res.data.studentProfileRecommendations)
                 }
                 else {
                     alert("error");
                 }
 
             })
             .catch(error => {
                 console.log(error.response)
             });
         //end for recommendation
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


                        {/* <!-- Page Heading --> */}
                        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 class="h3 mb-0 text-gray-800">Student Application</h1>


                        </div>


                        {/* <!-- Content Row --> */}



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

                                                                    {/* <button className="btn" onClick={() => handleDelete(object._id)}><i className="fas fa-trash-alt"></i></button>
                                                                    <button className="btn" onClick={() => handleClick(object._id)}><i className="fas fa-pen "></i></button> */}
                                                                    <button className="btn" onClick={() => handleView(object._id + '&&' + object.studentID)}><i className="fas fa-eye"></i></button>
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
                        {/* start for sidebar */}

                        <div className="sidenav" style={{ width: viewWidth }}>

                            <a onClick={() => handleCloseView()} className="closebtn" >×</a>
                            <section className="pcoded-main-containerx">
                                <div className="pcoded-content">
                                    {/* [ breadcrumb ] start */}
                                    <div className="page-header">
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
                                                            <span className="badge badge-secondary">Application Initiated</span>
                                                        </div>
                                                        <div className="col-md-3 text-right">
                                                            <a href="student-application-applied.html"><button type="button" className="btn btn-primary">
                                                                Applied Application <span className="badge badge-light">3</span>
                                                            </button>
                                                            </a>
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
                                                            <p>{ scoremarks}</p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h5>Have you taken any English Proficiency Test?</h5>
                                                            <p>{ scoreenglishProficiency}</p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h5>Have you taken IELTS/PTE/GRE/GMAT ?</h5>
                                                            <p>{ scoregre}</p>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <h5>Have you taken SAT/ACT?</h5>
                                                            <p>{ scoresat}</p>
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

                        {/* end for sidebar */}
                        {/* <!-- Card Body --> */}


                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer />
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div >

            {/* <!-- End of Page Wrapper --> */}






            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}