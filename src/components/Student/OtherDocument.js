import React, { Component } from 'react';

import Sidebar from './Sidebar';
import axios from 'axios';
import Topbar from './Topbar';

import Footer from './Footer';
import Main from './Main';
import DragAndDrop from './DragAndDrop';
import DragAndDroptwo from './DragAndDroptwo';
import DragAndDropthree from './DragAndDropthree';


class OtherDocument extends Component {
    constructor(props) {
        super(props);

        this.onChangesalutation = this.onChangesalutation.bind(this);
    }
    state = {
        salutation: '',
        mounted: "",
        files: [
        ],
        myname: "",
        data: [],

        // mypassport: "",
        file: "",
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
        axios.get('/student/otherDocument', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {

                this.setState({
                    // mypassport: res.data.studentIdentityDocument.passport,
                    myotherdocument: res.data.studentOtherDocument.file,
                    myname: res.data.studentOtherDocument.name,

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
    onFileChangeTen = eventpassport => {

        const obj2 = new FormData();


        obj2.append("name", this.state.salutation);
        obj2.append("file", eventpassport.target.files[0]);

        axios.put('/student/otherDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("otherDocument update successfully");
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
        obj4.append("file", myfiles[0]);
        obj4.append("name", this.state.salutation);

        axios.put('/student/otherDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("otherDocument update successfully");
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
    renderElementTenMarksheet() {
        if (this.state.myotherdocument === '' || this.state.myotherdocument === undefined) {
            return <div className="upload_doc d-flex flex-wrap align-items-center row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">


                    <input className="form-control"

                        value={this.state.salutation}
                        onChange={this.onChangesalutation}
                        placeholder="Enter document name to upload" type="text" />


                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                    <DragAndDrop handleDrop={this.handleDrop}>
                        <section className="drag-and-drop-new-section">
                            <div className="containerx" id="drop_section">
                                <label htmlFor="files">
                                    <div id="drag" className="drag-and-drop-new class_add">
                                        <div className="row">
                                            <div className="col-md-12 email-con">
                                                <label htmlFor="uploadmyotherdocument">
                                                    <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                                    <input type="file" onChange={this.onFileChangeTen} id="uploadmyotherdocument" />
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
                </div>
            </div>
        }
        else {
            return <div className="upload_doc d-flex flex-wrap align-items-center row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">


                    {this.state.myname}


                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                    <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                        {/* <div  className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p  className="pl-4 pr-4 pt-0 pb-0">Passport <span  className="text-danger"> *</span></p>
                    </div> */}
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">

                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#TenMarksheetModel">View</button>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                            <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                    </div>


                    {/* <!-- The Modal --> */}
                    <div className="modal" id="TenMarksheetModel">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Other Document</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <img src={this.state.myotherdocument} alt="passport" />

                            </div>
                        </div>
                    </div>
                </div>
            </div >;
        }
    }
    onChangesalutation(e) {
        this.setState({
            salutation: e.target.value
        });
    }
    render() {
        return (
            <div>
                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapse7" aria-expanded="true">
                        <strong>7</strong> Other Documents
                    </a>
                    <div id="collapse7" className="collapse" data-bs-parent="#accordion" >
                        <div className="card-body">
                            <div className="form form_doc"></div>
                            <div className="upload_doc d-flex flex-wrap align-items-center row">
                                {this.renderElementTenMarksheet()}

                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OtherDocument;