import React, { Component } from 'react';

import Sidebar from './Sidebar';
import axios from 'axios';
import Topbar from './Topbar';

import Footer from './Footer';
import Main from './Main';
import DragAndDrop from './DragAndDrop';
import DragAndDroptwo from './DragAndDroptwo';
import DragAndDropthree from './DragAndDropthree';


class TenMarksheet extends Component {
    constructor(props) {
        super(props);

        this.onChangeIelts = this.onChangeIelts.bind(this);
        this.onChangeToefl = this.onChangeToefl.bind(this);
        this.onChangePte = this.onChangePte.bind(this);
        this.onChangeDuolingo = this.onChangeDuolingo.bind(this);

    }
    state = {
        mounted: "",
        files: [
        ],
        mytest: "",
        data: [],
        salutation: "",
        // mypassport: "",
        selectEnglish: "",
        selectedImage: [

        ],

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
        axios.get('/student/englishProficiencyDocument', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {
                this.setState({
                    // mypassport: res.data.studentIdentityDocument.passport,
                    selectEnglish: res.data.studentEnglishProficiencyDocument.file,

                    mytest: res.data.studentEnglishProficiencyDocument.test

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
    onFileSelectEnglish = eventpassport => {

        const obj2 = new FormData();

        obj2.append("file", eventpassport.target.files[0]);
        obj2.append("test", this.state.salutation);
        axios.put('/student/englishProficiencyDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("10 marksheet update successfully");
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
        obj4.append("test", this.state.salutation);
        axios.put('/student/englishProficiencyDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("10 marksheet update successfully");
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
        if (this.state.selectEnglish === '' || this.state.selectEnglish === undefined) {
            return <div className="upload_doc d-flex flex-wrap align-items-center row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <label>Please select English Proficiency Test</label><br />
                        <div role="group" className="doc_choice btn-group">
                            <input type="hidden" />
                            <button type="button" onClick={this.onChangeIelts} className="selected btn btn-secondary">IELTS</button>
                            <button type="button" onClick={this.onChangeToefl} className="btn btn-secondary">TOEFL</button>
                            <button type="button" onClick={this.onChangePte} className="btn btn-secondary">PTE</button>
                            <button type="button" onClick={this.onChangeDuolingo} className="btn btn-secondary">Duolingo</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto"><DragAndDrop handleDrop={this.handleDrop}>
                    <section className="drag-and-drop-new-section">
                        <div className="containerx" id="drop_section">
                            <label htmlFor="files">
                                <div id="drag" className="drag-and-drop-new class_add">
                                    <div className="row">
                                        <div className="col-md-12 email-con">
                                            <label htmlFor="uploadselectEnglish">
                                                <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                                <input type="file" onChange={this.onFileSelectEnglish} id="uploadselectEnglish" />
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
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        {this.state.mytest}

                    </div>





                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto">
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
                                    <h4 className="modal-title">English Proficiency Test</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <img src={this.state.selectEnglish} alt="passport" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    onChangeIelts(e) {

        this.setState({
            salutation: "IELTS"
        });
    }
    onChangeToefl(e) {

        this.setState({
            salutation: "TOEFL"
        });
    }
    onChangePte(e) {

        this.setState({
            salutation: "PTE"
        });
    }
    onChangeDuolingo(e) {

        this.setState({
            salutation: "Duolingo"
        });
    }
    render() {
        return (

            <div className="upload_doc d-flex flex-wrap align-items-center row">

                {this.renderElementTenMarksheet()}

            </div>

        );
    }
}

export default TenMarksheet;