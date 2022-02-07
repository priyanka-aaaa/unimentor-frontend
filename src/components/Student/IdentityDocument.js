import React, { Component } from 'react';

import Sidebar from './Sidebar';
import axios from 'axios';
import Topbar from './Topbar';

import Footer from './Footer';
import Main from './Main';



import DragAndDrop from './DragAndDrop';
class IdentityDocument extends Component {
    state = {
        mounted: "",
        files: [
        ],
        data: [],

        mypassport: "",
        mypassportBack: "",
        mycv: "",
        selectedImage: [

        ]
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
    componentDidMount() {    //start for call api
        axios.get(process.env.REACT_APP_SERVER_URL+'student/identityDocument', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {
                this.setState({
                    mypassport: res.data.studentIdentityDocument.passport,
                    mypassportBack: res.data.studentIdentityDocument.passportBack,
                    mycv: res.data.studentIdentityDocument.cv

                });

                if (res.data.success === true) {
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });

           
    };
    onFileChangepassport = eventpassport => {
        const obj2 = new FormData();

        obj2.append("passport", eventpassport.target.files[0]);

        axios.put(process.env.REACT_APP_SERVER_URL+'student/identityDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("Personal Profile passport update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    };
    handleDrop = (myfiles) => {
        const obj4 = new FormData();
        obj4.append("passport", myfiles[0]);

        axios.put(process.env.REACT_APP_SERVER_URL+'student/identityDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("Personal Profile update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    }
    renderElementpassport() {
        if (this.state.mypassport === '' || this.state.mypassport === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmypassport">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangepassport} id="uploadmypassport" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                    <section className="file-upload">
                        <div className="container">
                            <div className="uploads">
                                <div className="drop_lower" id="gallery"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </DragAndDrop>

        }
        else {
            return <div>
                <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="pl-4 pr-4 pt-0 pb-0">Passport <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModal">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Passport</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.mypassport} alt="passport" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    onFileChangepassportBack = eventpassportback => {
        const obj2 = new FormData();
        // obj2.append("passport", );
        obj2.append("passportBack", eventpassportback.target.files[0]);
        // obj2.append("cv", );
        axios.put('/student/identityDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("Personal Profile passport update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    };
    handleDrop = (myfiles) => {
        const obj4 = new FormData();
        obj4.append("passportBack", myfiles[0]);

        axios.put('/student/identityDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("Personal Profile update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    }
    renderElementpassportBack() {
        if (this.state.mypassportBack === '' || this.state.mypassportBack === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmypassportback">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangepassportBack} id="uploadmypassportback" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                    <section className="file-upload">
                        <div className="container">
                            <div className="uploads">
                                <div className="drop_lower" id="gallery"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </DragAndDrop>

        }
        else {
            return <div>
                <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="pl-4 pr-4 pt-0 pb-0">Passport <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        {/* <img src={this.state.mypassportBack} alt="passportback" /> */}
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassportback">
                            View
                        </button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    {/* <!-- The Modal --> */}
                    <div className="modal" id="myModalPassportback">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Passport Back</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <img src={this.state.mypassportBack} alt="passportback" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>;
        }
    }
    onFileChangecv = eventcv => {
        console.log("hhh");
        console.log(eventcv.target.files[0]);
        const obj2 = new FormData();

        obj2.append("cv", eventcv.target.files[0]);
        // obj2.append("cv", );
        axios.put('/student/identityDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted

            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("cv update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    };
    handleDrop = (myfiles) => {
        const obj4 = new FormData();
        obj4.append("cv", myfiles[0]);

        axios.put('/student/identityDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("cv update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    }

    deleteCv() {
        const obj5 = new FormData();
        obj5.append("cv", "");

        axios.put('/student/identityDocument', obj5, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("cv delete successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for call api
    }
    renderElementcv() {
        if (this.state.mycv === '' || this.state.mycv === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmycv">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangecv} id="uploadmycv" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                    <section className="file-upload">
                        <div className="container">
                            <div className="uploads">
                                <div className="drop_lower" id="gallery"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </DragAndDrop>
        }
        else {
            return <div>
                {/* <img src={this.state.mycv} alt="cv" /> */}
                <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalcv">
                            View
                        </button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>

                    {/* <button onClick={this.deleteCv}>
                    delete
                </button> */}

                </div>

                {/* <!-- The Modal --> */}
                <div className="modal" id="myModalcv">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">Cv</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.mycv} alt="cv" />

                        </div>
                    </div>
                </div>


            </div>;
        }
    }
    render() {
        return (
            <div>
                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                        <strong>1</strong>   Identity Documents
                    </a>
                    <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <div className="form form_doc">
                                {/* <Passport /> */}
                                {/* start for passport */}
                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                        <p className="pl-4 pr-4 pt-0 pb-0">Passport Front <span className="text-danger"> *</span></p>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        {this.renderElementpassport()}

                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                    </div>
                                </div>

                                {/* end for passport */}
                                {/* <Passportback /> */}
                                {/* start for passportback */}
                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                        <p className="pl-4 pr-4 pt-0 pb-0">Passport Back Front<span className="text-danger"> *</span></p>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        {this.renderElementpassportBack()}

                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                    </div>
                                </div>
                                {/* end for passport back */}
                                {/* <Cv /> */}
                                {/* start for cv */}
                                <div className="upload_doc d-flex flex-wrap align-items-center row">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                        <p className="pl-4 pr-4 pt-0 pb-0">Cv <span className="text-danger"> *</span></p>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                        {this.renderElementcv()}

                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                    </div>
                                </div>
                                {/* end for cv */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IdentityDocument;