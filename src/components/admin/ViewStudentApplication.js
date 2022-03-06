import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Footer from './Footer';

export default function AdminStudentApplication() {

  const [mounted, setMounted] = useState();
  const [data, setdata] = useState([]);
  const [viewWidth, setviewWidth] = useState("0px");
  const [viewId, setviewId] = useState("0px");

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
  const [appliedWidth, setappliedWidth] = useState("0px");
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

  }, [])
  function handleCloseView() {
    setviewWidth("0px");
  }
  function handleAppliedView() {
    setappliedWidth("1600px");
  }
  function handleView(value) {
    const myArray = value.split("&&");
    setviewId(myArray[0]);
    setviewWidth("1600px");

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




            <section className="pcoded-main-container">
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
                          <div className="col-md-4">
                            <div className="btn-block"><button type="button" className="btn btn-outline-primary btn-download"><span><i className="fas fa-cloud-download-alt" /></span>Download</button></div>
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
                                              <span className="td-format"><span className="badge bg-success">4325</span></span>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-6">
                                              <span className="th-format">Student Name</span>
                                            </div>
                                            <div className="col-sm-6">
                                              <span className="td-format">Rishik</span>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-6">
                                              <span className="th-format">Application ID</span>
                                            </div>
                                            <div className="col-sm-6">
                                              <span className="td-format">15947</span>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-6">
                                              <span className="th-format">Email</span>
                                            </div>
                                            <div className="col-sm-6">
                                              <span className="td-format" />
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
                                  <h5>RISHIK</h5>
                                  <p>Accounting &amp; Payroll Administrator</p>
                                  <p>1 year</p>
                                  <p>Academy of Learning</p>
                                </div>
                                <div className="application-current-status">
                                  <h5>Application Current Status</h5>
                                  <ul>
                                    <li className="statusBox ">New Student<span><i className="fas fa-check-circle" /></span></li>
                                    <li className="statusBox ">Waiting To Apply<span><i className="fas fa-check-circle" /></span></li>
                                    <li className="statusBox ">Offer Applied<span><i className="fas fa-check-circle" /></span></li>
                                    <li className="statusBox bgTheme">Offer Received</li>
                                    <li className="statusBox ">Tuition Fee Paid &amp; TT Received</li>
                                    <li className="statusBox ">LOA/Fee Receipt Issued</li>
                                    <li className="statusBox ">Visa File Submitted</li>
                                    <li className="statusBox ">Visa Approved</li>
                                    <li className="statusBox ">Visa Rejected</li>
                                    <li className="statusBox ">Visa Refund Applied</li>
                                    <li className="statusBox ">Case Close</li>
                                  </ul>
                                </div>
                                <div className="current-status">
                                  <h5>Application current-status</h5>
                                  <ul>
                                    <li className="state-comp"><input type="checkbox" defaultChecked />New Student
                                    </li>
                                    <li className="state-comp"><input type="checkbox" defaultChecked />Waiting to
                                      Apply</li>
                                    <li><input type="checkbox" />Offer Applied</li>
                                    <li><input type="checkbox" />Offer Received</li>
                                    <li><input type="checkbox" />Tuition Fee Paid &amp; TT Received</li>
                                    <li><input type="checkbox" />LOA/Fee Receipt Issued</li>
                                    <li><input type="checkbox" />Visa File Submitted</li>
                                    <li><input type="checkbox" />Visa Approved</li>
                                    <li><input type="checkbox" />Visa Rejected</li>
                                    <li><input type="checkbox" />Visa Refund Applied</li>
                                    <li><input type="checkbox" />Case Close</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="activite">
                          <div className="row">
                            <div className="card mb-4">
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
                                          <span><i className="fas fa-check-square" /></span>
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
                                        <h6><span><i className="fas fa-user-circle" /> Khushi left a
                                          note.</span></h6>
                                        <div className="msg-content">
                                          <div className="row">
                                            <div className="col-md-6">
                                              <span><i className="fas fa-check-square" /></span>
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
                                              <button type="button" className="btn btn-success" onclick="opencoment()"><span><i className="fas fa-plus" /></span>Add
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
                            <div className="col-md-6 text-right"><button type="button" className="btn btn-success" onclick="openNav()"><span><i className="fas fa-eye" /></span>All
                              Document</button></div>
                          </div>
                          <ul>
                            <li>PASSPORT <span><i className="fas fa-eye" /></span></li>
                            <li>10TH<span><i className="fas fa-eye" /></span></li>
                            <li>12TH<span><i className="fas fa-eye" /></span></li>
                            <li>MEDIUM OF INSTRUCTION<span><i className="fas fa-eye" /></span></li>
                            <li>LETTER OF RECOMMENDATION<span><i className="fas fa-eye" /></span></li>
                            <li>OFFER LETTER<span><i className="fas fa-eye" /></span></li>
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
                        <div className="chat-message msg_list">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="anw-block">
                                <div className="row">
                                  <div className="col-md-1">
                                    <div className="us-img us-letter">
                                      <h6>A</h6>
                                    </div>
                                  </div>
                                  <div className="col-md-11">
                                    <div className="anw-content-rightblock  border-gray">
                                      <div className="des-title">
                                        <h6><strong>Agent:</strong> (Satnam Singh)
                                          You Sent a Message </h6>
                                        <span className="date-block">Sep 23, 2020, 9:37 PM</span>
                                      </div>
                                      <div className="reply-content ">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Mauris condimentum sem non augue gravida sodales.
                                          Maecenas ullamcorper, erat at consectetur tristique,
                                          quam diam ultrices lacus, et maximus mi urna id dolor.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="anw-block">
                                <div className="row">
                                  <div className="col-md-1">
                                    <div className="us-img us-letter">
                                      <h6>VFO</h6>
                                    </div>
                                  </div>
                                  <div className="col-md-11">
                                    <div className="anw-content-rightblock  light-blue">
                                      <div className="des-title">
                                        <h6><strong>Visa Filling officer:</strong> (Aman) Sent a
                                          Message </h6>
                                        <span className="date-block">Sep 25, 2020, 10:31 PM</span>
                                      </div>
                                      <div className="reply-content ">
                                        <p>Sed consectetur rutrum nunc, sed iaculis nibh tristique
                                          eu. Nulla arcu lacus, euismod vitae magna eu, porttitor
                                          luctus libero. Phasellus eleifend finibus velit nec
                                          mollis.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="anw-block">
                                <div className="row">
                                  <div className="col-md-1">
                                    <div className="us-img us-letter">
                                      <h6>A</h6>
                                    </div>
                                  </div>
                                  <div className="col-md-11">
                                    <div className="anw-content-rightblock  drak-blue">
                                      <div className="des-title">
                                        <h6><strong>Visa Team:</strong>
                                          (admin) Sent a Message </h6>
                                        <span className="date-block">Sep 25, 2020, 10:31 PM</span>
                                      </div>
                                      <div className="reply-content ">
                                        <p>In eget tortor eget tellus varius consectetur ut vel
                                          ipsum. Aliquam ullamcorper lectus vel pulvinar lobortis.
                                          Morbi faucibus lacus eget venenatis vestibulum.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
                                        <h6>
                                          <strong>Student:</strong> (Parveen) Sent a Message
                                        </h6>
                                        <span className="date-block">Apr 8, 2021, 4:03 PM</span>
                                      </div>
                                      <div className="reply-content ">
                                        <p>Aliquam molestie gravida feugiat. Praesent a nisl mi.
                                          Vivamus eget metus nunc. Nunc maximus elit iaculis ex
                                          suscipit, faucibus pharetra nulla lacinia. Nunc nibh
                                          diam, accumsan eget vehicula sollicitudin, volutpat sed
                                          odio.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-12">
                            <div className="refresh-sednmsg refresh-sednmsg2">
                              <span style={{ cursor: 'pointer' }} onclick="window.location.reload();" className="btn-refersh" title="Reload the Chat conversation"><i className="fas fa-redo" aria-hidden="true" />Refresh</span>
                              <a href="javascript:void(0)" id="send_reply" className="btn-send-msg" title="chat conversation"><span><i className="far fa-comments" /></span>Chat
                                Conversation</a>
                              <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t\t\t\t\t\t\t\t#sendmsg {\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: none;\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t" }} />
                              <div className="btn-accept-reject">
                                <button title="Accept solution" className="accept"><span><i className="fas fa-check-circle" aria-hidden="true" /></span>Accept</button>
                                <button title="Reject solution" id="reject_solution" className="reject"><span><i className="fas fa-times-circle" aria-hidden="true" /></span>Reject</button>
                              </div>
                              {/* accept solution form*/}
                              <div className="send-msg-block" style={{ display: 'none' }}>
                                <form id="accept_feedback">
                                  <input type="hidden" name="_token" defaultValue="YhnyhUkzshfSXKpJJmkYlYdaePFBlnJ0p6pQBTMm" /> <input type="hidden" id="order_id" name="order_id" defaultValue="CA-5559-4" />
                                  <input type="hidden" id="expert_id" name="expert_id" defaultValue={0} />
                                  <span id="feedback_cdt" />
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="outer-border">
                                        <div className="form-group">
                                          <textarea className="form-control" id="feedback_msg" name="feedback_msg" rows={2} col={2} required placeholder="Type Your Message Here.." defaultValue={""} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="posted-check text-left">
                                        <label htmlFor="msg">Leave Star Rating:</label>
                                        <select id="sol_rating" name="sol_rating">
                                          <option>5</option>
                                          <option>4</option>
                                          <option>3</option>
                                          <option>2</option>
                                          <option>1</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group btn-send sndmsgs-btn ">
                                        <button style={{ cursor: 'pointer' }} name="send_feedback" id="send_feedback" value="submit" className="btn-send-msg pull-right end-button">
                                          <i className="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: '6px' }} />Submit
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                                {/* reject solution form*/}
                                <form id="reject_sol" method="post" action="#" className="mt-3" style={{ display: 'none' }}>
                                  <input type="hidden" name="_token" defaultValue="YhnyhUkzshfSXKpJJmkYlYdaePFBlnJ0p6pQBTMm" /> <input type="hidden" id="order_id" name="order_id" defaultValue="CA-5559-4" />
                                  <span id="reject_cdt" />
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="outer-border">
                                        <div className="form-group">
                                          <textarea className="form-control" id="reject_reason" name="reject_reason" rows={2} col={2} required placeholder="Type Your Reject Message Here.." defaultValue={""} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mb-5">
                                    <div className="col-md-12">
                                      <div className="form-group btn-send sndmsgs-btn ">
                                        <button style={{ cursor: 'pointer' }} name="send_feedback" id="send_feedback" value="submit" className="btn-send-msg">
                                          <i className="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: '6px' }} />Send
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="msg-form">
                              <form>
                                <div className="form-group">
                                  <label>Send Message</label>
                                  <textarea rows={5} cols={7} className="form-control" defaultValue={""} />
                                </div>
                                <div className="form-group">
                                  <div className="dr-section" id="drop_section">
                                    <input type="file" name="file[]" id="files" multiple onchange="get_files(this.files);" />
                                    <div id="drag" className="drop_upper">
                                      <div className="row">
                                        <div className="col-md-12">
                                          <label className="open" htmlFor="files">
                                            <div className="droped_data">
                                              <div className="drop_img"><i className="fas fa-cloud-upload-alt" />
                                              </div>
                                              <div className="drag_dropsection">
                                                <div id="drag_h3" className="drop_text">
                                                  <p> Drop Files Here Or Click to Upload
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="drop_lower" id="gallery">
                                      </div>
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
                </div>
                {/* [ Hover-table ] end */}
              </div>
            </section>

            {/* end for second sidenav */}
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