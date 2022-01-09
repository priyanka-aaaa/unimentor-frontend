import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Index from './Index';
import Footer from './Footer';
import Main from './Main';
class Document extends Component {
    render() {
        return (
            <div id="page-top">


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
                                    <h1 className="h3 mb-0 text-gray-800">Application Documents</h1>
                                    <p>File extensions supported .pdf, .doc, .docx, .jpeg, .jpg, .png</p>

                                    <div className="row">
                                        <div className="col-xl-12 col-lg-7">
                                            <div id="accordion">
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                                        Identity Documents
                                                    </a>
                                                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="form form_doc">
                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <p className="pl-4 pr-4 pt-0 pb-0">Passport <span className="text-danger"> *</span></p>
                                                                    </div>
                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
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
                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                    </div>
                                                                </div>
                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <p className="pl-4 pr-4 pt-0 pb-0">Passport Back <span className="text-danger"> *</span></p>
                                                                    </div>
                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                            </div>
                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                    <input type="file" accept="" />
                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                </span>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                    </div>
                                                                </div>
                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <p className="pl-4 pr-4 pt-0 pb-0">CV <span className="text-danger">
                                                                            *</span></p>
                                                                    </div>
                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                            </div>
                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                    <input type="file" accept="" />
                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                </span>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse2">
                                                        Education Documents
                                                    </a>
                                                    <div id="collapse2" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="form form_doc">
                                                                <div className="form form_doc">
                                                                    <div className="row pl-4 pr-4 mt-3">
                                                                        <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                                                            <p>I haven't completed or pursuing Secondary Education</p>
                                                                            <div className="form form_doc marksheet">
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">10th Marksheet <span className="text-danger"> *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
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
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">12th Marksheet * <span className="text-danger"> *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>

                                                                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                                                                            <label className="switch">
                                                                                <input type="checkbox" />
                                                                                <span className="slider round"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row pl-4 pr-4">
                                                                        <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                                                            <p>I haven't completed or pursuing any UG course</p>
                                                                            <div className="form form_doc degree">
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">UG Degree Certificate<span className="text-danger"> *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
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
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">UG Consolidated Marksheet<span className="text-danger"> *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">UG Marksheet <span className="text-danger">
                                                                                            *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                                                                            <label className="switch2">
                                                                                <input type="checkbox" />
                                                                                <span className="slider2 round2"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className="row pl-4 pr-4">
                                                                        <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                                                            <p>I haven't completed or pursuing any PG course</p>

                                                                            <div className="form form_doc document">
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">PG Degree Certificate<span className="text-danger"> *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
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
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">PG Consolidated Marksheet<span className="text-danger"> *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                                        <p className="pl-4 pr-4 pt-0 pb-0">PG Marksheet<span className="text-danger">
                                                                                            *</span></p>
                                                                                    </div>
                                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                                                        <span className="documentUpload ant-upload-picture-card-wrapper">
                                                                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                                                                            </div>
                                                                                            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                                                <span tabIndex="0" className="ant-upload" role="button">
                                                                                                    <input type="file" accept="" />
                                                                                                    <p>Upload/Drag &amp; Drop here</p>
                                                                                                </span>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                                                                            <label className="switch3">
                                                                                <input type="checkbox" />
                                                                                <span className="slider3 round3"></span>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="card">

                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse3">
                                                        Work Experience Documents
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
                                                                                            <input className="ant-input w-100 form-control" placeholder="Enter Company Name" type="text" defaultValue="" />
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
                                                                                        <span className="cursor_pointer icon_delete">
                                                                                            {/* <i className="fas fa-trash-alt" style="font-size: 24px;"></i> */}
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
                                                                                            <input className="ant-input w-100 form-control" placeholder="Enter Company Name" type="text" defaultValue="" />
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
                                                                                        <span className="cursor_pointer icon_delete">
                                                                                            {/* <i className="fas fa-trash-alt" style="font-size: 24px;"></i> */}
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>


                                                                            {/*
                        <!-- The Modal --> */}
                                                                            <div className="modal" id="workexpModal">
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
                                                                                                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                                                            <div className="form-group">
                                                                                                                <label>Work Status <span className="text-danger">
                                                                                                                    *</span></label><br />
                                                                                                                <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                                                                    <input name="is_current_job_0" type="radio" className="ant-radio-input" defaultValue="1" />
                                                                                                                    <span className="ant-radio-inner"></span></span><span>Ongoing</span></label>
                                                                                                                <label className="ant-radio-wrapper ant-radio-wrapper-checked"><span className="ant-radio ant-radio-checked"><input name="is_current_job_0" type="radio" className="ant-radio-input" defaultValue="0" /><span className="ant-radio-inner"></span></span><span>Completed</span></label>
                                                                                                                <br />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                                                            <div className="form-group"><label>Work Type <span className="text-danger"> *</span></label><select className="form-control" id="work_type" name="work_type">
                                                                                                                <option defaultValue="">Select</option>
                                                                                                                <option defaultValue="Full-time">Full-time</option>
                                                                                                                <option defaultValue="Part-time">Part-time</option>
                                                                                                                <option defaultValue="Internship">Internship</option>
                                                                                                            </select></div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                                                            <div className="form-group"><label>Name of
                                                                                                                Organization <span className="text-danger">
                                                                                                                    *</span></label><input type="text" className="form-control" id="company_name" name="company_name" placeholder="Name of Organization" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Designation</label><input type="text" className="form-control" id="work_designation" name="designation" placeholder="Designation" defaultValue="" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>Job
                                                                                                                Role</label><input type="text" className="form-control" id="role_description" name="role_description" placeholder="Job Role" defaultValue="" /></div>
                                                                                                        </div>
                                                                                                    </div>


                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group">
                                                                                                                <label>Started From</label>
                                                                                                                <input type="date" className="form-control" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group">
                                                                                                                <label>Ended On</label>
                                                                                                                <input type="date" className="form-control" />
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <div className="row">
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <label>Country</label>
                                                                                                            <select className="form-control" id="job_country" name="job_country">
                                                                                                                <option defaultValue="">Select Country</option>
                                                                                                                <option defaultValue="India">India</option>
                                                                                                                <option defaultValue="Afghanistan">Afghanistan</option>
                                                                                                                <option defaultValue="Albania">Albania</option>
                                                                                                                <option defaultValue="Algeria">Algeria</option>
                                                                                                                <option defaultValue="American Samoa">American Samoa</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                                                            <div className="form-group"><label>City/Town</label><input type="text" className="form-control" id="job_city" placeholder="City/Town" name="job_city" defaultValue="" /></div>
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

                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse4">
                                                        English Proficiency Test Document
                                                    </a>

                                                    <div id="collapse4" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
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
                                                            <div className="form form_doc document">
                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                                            <label>Please select English Proficiency Test</label><br />
                                                                            <div role="group" className="doc_choice btn-group">
                                                                                <button type="button" className="selected btn btn-secondary">IELTS</button>
                                                                                <button type="button" className="btn btn-secondary">TOEFL</button>
                                                                                <button type="button" className="btn btn-secondary">PTE</button>
                                                                                <button type="button" className="btn btn-secondary">Duolingo</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto">
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
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse5">
                                                        Extra Curricular Document
                                                    </a>

                                                    <div id="collapse5" className="collapse" data-bs-parent="#accordion">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <label>Search Activity<input list="search" name="cars" type="text" className="form-control" />
                                                                    </label>
                                                                    <datalist id="search">
                                                                        <option>Search Activity</option>
                                                                        <option>Student Government</option>
                                                                        <option>Academic Teams and Clubs</option>
                                                                        <option>The Debate Team students</option>
                                                                        <option>The Arts Team students</option>
                                                                        <option>Internships</option>
                                                                    </datalist>
                                                                </div>
                                                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto">
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
                                                            </div>

                                                            <div className="w-100 text-right row p-0">
                                                                <div className="col-12 pl-2 pb-2 pt-2 pr-0 upload_doc">
                                                                    <div role="group" className="doc_choice btn-group"><button type="button" className="btn btn-secondary">Add more</button></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">

                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse6" aria-expanded="true">
                                                        Recommendation Documents
                                                    </a>
                                                    <div id="collapse6" className="collapse" data-bs-parent="#accordion">
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
                                                <div className="card">
                                                    <a className="card-header" data-bs-toggle="collapse" href="#collapse7" aria-expanded="true">
                                                        Other Documents
                                                    </a>
                                                    <div id="collapse7" className="collapse" data-bs-parent="#accordion" >
                                                        <div className="card-body">
                                                            <div className="form form_doc">
                                                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                                                        <input className="form-control" placeholder="Enter document name to upload" type="text" defaultValue="" />
                                                                    </div>
                                                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
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
                                                                    <div className="col-1">&nbsp;</div>
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