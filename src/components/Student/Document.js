import React, { Component } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Topbar from './Topbar';

import Footer from './Footer';
import Main from './Main';




import EducationDocument from './EducationDocument';
import ExtraCurricular from './ExtraCurricular';
import WorkExperience from './WorkExperience';
import OtherDocument from './OtherDocument';
import EnglishProficiency from './EnglishProficiency';
import IdentityDocument from './IdentityDocument';
class Document extends Component {
    state = {
        mounted: "",
    }
    componentWillMount() {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.student.email;
            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken });
        }
    }
    render() {
        var i = 0;

        return (
            <div id="page-top">
                {/* {this.state.files.map((file, index) => (
                    <h2 key={index}>{file}</h2>
                ))} */}


                {/*
    <!-- Page Wrapper --> */}
                <div id="wrapper">
                    <Sidebar />
                    {/* there will be come sidebar */}

                    {/*
        <!-- Content Wrapper --> */}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*
            <!-- Main Content --> */}
                        <div id="content">

                            {/* topbar will be come there */}
                            <Topbar />
                            {/*
                <!-- Begin Page Content --> */}
                            {/* the content of each page will be come there */}
                            {/*
                <Document /> */}
                            {/* there will be come document page */}
                            <div className="container">

                                <div className=" align-items-center justify-content-between mb-4">

                                    <i className="fa fa-trash-alt"></i>
                                    <i className="fa fa-sun-o" />
                                    <i class="fas fa-pen"></i>
                                    <h1 className="h3 mb-0 text-gray-800">Application Documents</h1>
                                    <p>File extensions supported .pdf, .doc, .docx, .jpeg, .jpg, .png</p>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-7">
                                            <div id="accordion">
                                                <IdentityDocument/>
                                                {/* start for identity document */}
                                                {/* <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                        <strong>1</strong>   Identity Documents
                                                    </a>
                                                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="form form_doc">
                                                                <Passport />

                                                                <Passportback />
                                                                <Cv />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}



                                                <EducationDocument />
                                                <div className="card">

                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse3">
                                                        <strong>3</strong> Work Experience Documents
                                                    </a>
                                                    <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="form form_doc">
                                                                <div className="row">
                                                                    <div className="col-md-8">
                                                                        <p>I don't have any work experience</p>
                                                                    </div>
                                                                    <div className="col-md-4 text-right">
                                                                        <label className="switch3">
                                                                            <input type="checkbox" />
                                                                            <span className="slider3 round3"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="row ">
                                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">


                                                                        <div className="form form_doc document">
                                                                            <div className="add-more">
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row ">
                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">Comapny Name</div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">Have Document?</div>
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">Action</div>
                                                                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1">&nbsp;</div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                                                            <input className="ant-input w-100 form-control" placeholder="Enter Company Name" type="text" value="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                                                                        <div role="group" className="doc_choice btn-group">
                                                                                            <button type="button" className="selected btn btn-secondary" data-bs-toggle="modal" data-bs-target="#workexpModal">Yes</button>
                                                                                            <button type="button" className="btn btn-secondary">No</button>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 text-left">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>
                                                                                                        Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 text-center">
                                                                                        <span className="cursor_pointer icon_delete"><i className="fas fa-trash-alt"></i>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="add-more">
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row ">
                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">Comapny Name</div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">Have Document?</div>
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">Action</div>
                                                                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1">&nbsp;</div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                                                            <input className="ant-input w-100 form-control" placeholder="Enter Company Name" type="text" value="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                                                                        <div role="group" className="doc_choice btn-group">
                                                                                            <button type="button" className="selected btn btn-secondary" data-bs-toggle="modal" data-bs-target="#workexpModal">Yes</button>
                                                                                            <button type="button" className="btn btn-secondary">No</button>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 text-left">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>
                                                                                                        Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 text-center">
                                                                                        <span className="cursor_pointer icon_delete"><i className="fas fa-trash-alt" ></i>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                            {/* <!-- The Modal --> */}
                                                                            <div className="modal" id="workexpModal">
                                                                                <div className="modal-dialog modal-lg">
                                                                                    <div className="modal-content">

                                                                                        {/* <!-- Modal Header --> */}
                                                                                        <div className="modal-header">
                                                                                            <h4 className="modal-title">Add Work Experience Details</h4>
                                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                                        </div>

                                                                                        {/* <!-- Modal body --> */}
                                                                                        <div className="modal-body">
                                                                                            <div className="form-block">
                                                                                                <form>
                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                                                            <div className="form-group">
                                                                                                                <label>Work Status <span className="text-danger">
                                                                                                                    *</span></label><br />
                                                                                                                <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                                                                    <input name="is_current_job_0" type="radio" className="ant-radio-input" value="1" />
                                                                                                                    <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                                                                                                <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input name="is_current_job_0" type="radio" className="ant-radio-input" value="0" checked="" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                                                                                                <br />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                                                            <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select className="form-control" id="work_type" name="work_type">
                                                                                                                <option value="">Select</option>
                                                                                                                <option value="Full-time">Full-time</option>
                                                                                                                <option value="Part-time">Part-time</option>
                                                                                                                <option value="Internship">Internship</option>
                                                                                                            </select></div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                                                            <div className="form-group"><label htmlFor="company_name">Name of
                                                                                                                Organization <span className="text-danger">
                                                                                                                    *</span></label><input type="text" className="form-control" id="company_name" name="company_name" placeholder="Name of Organization" value="" /></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label htmlFor="work_designation">Designation</label><input type="text" className="form-control" id="work_designation" name="designation" placeholder="Designation" value="" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label htmlFor="role_description">Job
                                                                                                                Role</label><input type="text" className="form-control" id="role_description" name="role_description" placeholder="Job Role" value="" /></div>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group">
                                                                                                                <label htmlFor="start_from">Started From</label>
                                                                                                                <input type="date" className="form-control" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group">
                                                                                                                <label htmlFor="start_from">Ended On</label>
                                                                                                                <input type="date" className="form-control" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <label>Country</label>
                                                                                                            <select className="form-control" id="job_country" name="job_country">
                                                                                                                <option value="">Select Country</option>
                                                                                                                <option value="India">India</option>
                                                                                                                <option value="Afghanistan">Afghanistan</option>
                                                                                                                <option value="Albania">Albania</option>
                                                                                                                <option value="Algeria">Algeria</option>
                                                                                                                <option value="American Samoa">American Samoa</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label htmlFor="job_city">City/Town</label><input type="text" className="form-control" id="job_city" placeholder="City/Town" name="job_city" value="" /></div>
                                                                                                        </div>

                                                                                                    </div>
                                                                                                    <div className="mb-3">
                                                                                                        <div className="row">
                                                                                                            <div className="col-md-6"></div>
                                                                                                            <div className="col-md-6 text-right">



                                                                                                            </div>

                                                                                                        </div>

                                                                                                    </div>
                                                                                                </form>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* <!-- Modal footer --> */}
                                                                                        <div className="modal-footer">
                                                                                            <button type="button" className="btn  btn-success">Save
                                                                                            </button>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="w-100 text-right row p-0">
                                                                                <div className="col-12 pl-2 pb-2 pt-2 pr-0 upload_doc">
                                                                                    <div role="group" className="doc_choice btn-group"><button type="button" className="btn btn-success">Add more</button></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <WorkExperience />
                                                <EnglishProficiency />

                                                <ExtraCurricular />



                                                <div className="card">

                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse6" aria-expanded="true">
                                                        Recommendation Documents
                                                    </a>
                                                    <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="form form_doc">
                                                                <div className="row">
                                                                    <div className="col-md-8">
                                                                        <p>I don't have any recommender</p>
                                                                    </div>
                                                                    <div className="col-md-4 text-right">
                                                                        <label className="switch3">
                                                                            <input type="checkbox" />
                                                                            <span className="slider3 round3"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="row ">
                                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">


                                                                        <div className="form form_doc document" style={{ display: 'none' }} >
                                                                            <div className="add-more">
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row ">
                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">Recommender's Name</div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">Have Document?</div>
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">Action</div>
                                                                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1">&nbsp;</div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                                                            <input className="ant-input w-100 form-control" placeholder="Enter Company Name" type="text" defaultValue="" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                                                                        <div role="group" className="doc_choice btn-group">
                                                                                            <button type="button" className="selected btn btn-secondary" data-bs-toggle="modal" data-bs-target="#recomModal">Yes</button>
                                                                                            <button type="button" className="btn btn-secondary">No</button>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 text-left">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>
                                                                                                        Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-1 col-sm-1 col-md-1 col-lg-1 text-center">
                                                                                        <span className="cursor_pointer icon_delete">
                                                                                            {/* <i className="fas fa-trash-alt" style={{ font-size: 24px }} ></i> */}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                            {/*
                        <!-- The Modal --> */}
                                                                            <div className="modal" id="recomModal">
                                                                                <div className="modal-dialog modal-lg">
                                                                                    <div className="modal-content">

                                                                                        {/*
                                    <!-- Modal Header --> */}
                                                                                        <div className="modal-header">
                                                                                            <h4 className="modal-title">Add Work Experience Details</h4>
                                                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                                        </div>

                                                                                        {/*
                                    <!-- Modal body --> */}
                                                                                        <div className="modal-body">
                                                                                            <div className="form-block">
                                                                                                <form>
                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Reference Type <span className="text-danger"> *</span></label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Professional" /><span className="ant-radio-inner"></span></span><span>Professional</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input name="reference_type_0" type="radio" className="ant-radio-input" defaultValue="Academic" /><span className="ant-radio-inner"></span></span><span>Academic</span></label>
                                                                                                                <br />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Name
                                                                                                                of Organisation/Institution <span className="text-danger">
                                                                                                                    *</span></label><input type="text" className="form-control" id="Name_of_organisation" name="Name_of_organisation" placeholder="Name of Organisation/Institution" defaultValue="" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Recommender Name <span className="text-danger"> *</span></label><input type="text" className="form-control" id="recommender_name" name="recommender_name" placeholder="Recommender Name" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Official
                                                                                                                Email ID <span className="text-danger">
                                                                                                                    *</span></label><input type="text" className="form-control" id="official_email_id" name="official_email_id" placeholder="Email" defaultValue="" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Relation with Recommender</label><input type="text" className="form-control" id="relation_with_applicant" name="relation_with_applicant" placeholder="Relation with recommender" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Recommender Designation</label><input type="text" className="form-control" id="recommender_designation" name="recommender_designation" placeholder="Recommender Designation" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Contact Number</label><input type="number" className="form-control" id="contact_number" name="contact_number" placeholder="Contact Number" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Address of Organisation/Institution</label><input type="text" className="form-control" id="address_of_organisation" name="address_of_organisation" placeholder="Address of Organisation/Institution" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Do you have letter of recommendation?</label><br /><label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input name="has_lor_0" type="radio" className="ant-radio-input" defaultValue="1" /><span className="ant-radio-inner"></span></span><span>Yes</span></label><label className="ant-radio-wrapper"><span className="ant-radio"><input name="has_lor_0" type="radio" className="ant-radio-input" defaultValue="0" /><span className="ant-radio-inner"></span></span><span>No</span></label> <br /></div>
                                                                                                        </div>
                                                                                                    </div>




                                                                                                </form>
                                                                                            </div>
                                                                                        </div>

                                                                                        {/*
                                    <!-- Modal footer --> */}
                                                                                        <div className="modal-footer">
                                                                                            <button type="button" className="btn  btn-success">Save
                                                                                            </button>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="w-100 text-right row p-0">
                                                                                <div className="col-12 pl-2 pb-2 pt-2 pr-0 upload_doc">
                                                                                    <div role="group" className="doc_choice btn-group"><button type="button" className="btn btn-success">Add more</button></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <OtherDocument />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/*
                <!-- /.container-fluid --> */}

                        </div>
                        {/*
            <!-- End of Main Content --> */}

                        {/*
            <!-- Footer --> */}
                        <Footer />
                        {/*
            <!-- End of Footer --> */}

                    </div>
                    {/*
        <!-- End of Content Wrapper --> */}

                </div>
                {/*
    <!-- End of Page Wrapper --> */}

                {/*
    <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    {/* <i className="fas fa-angle-up"></i> */}
                </a>


            </div>



        );
    }
}

export default Document;