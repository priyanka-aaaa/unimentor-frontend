
import React from 'react'




import axios from 'axios';
import DragAndDrop from './DragAndDrop';
class SecondaryEducation extends React.Component {
    render() {
        return (
            <div className="row pl-4 pr-4 mt-3">
                <Button text="Hello from GFG"> </Button>
            </div>
        )
    }
}

class Button extends React.Component {
    state = {
        textflag: false,
        mounted: "",
        files: [
        ],
        data: [],

        // mypassport: "",
        marksheet10: "",
        myTwelve: "",
        selectedImage: [

        ]
    }
    ToggleButton() {
        this.setState(
            { textflag: !this.state.textflag }
        );
    }
    // state = {
    //     mounted: "",
    //     files: [
    //     ],
    //     data: [],

    //     // mypassport: "",
    //     marksheet10: "",
    //     selectedImage: [

    //     ]
    // }
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
        axios.get('/student/educationDocument', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {
                this.setState({
                    // mypassport: res.data.studentIdentityDocument.passport,
                    marksheet10: res.data.studentEducationDocument.marksheet10,
                    myTwelve: res.data.studentEducationDocument.marksheet12
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
        console.log("hlo");
        const obj2 = new FormData();

        obj2.append("marksheet10", eventpassport.target.files[0]);

        axios.put('/student/educationDocument', obj2, {
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
        obj4.append("marksheet10", myfiles[0]);

        axios.put('/student/educationDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
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
        if (this.state.marksheet10 === '' || this.state.marksheet10 === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmarksheet10">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeTen} id="uploadmarksheet10" />
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
                                <h4 className="modal-title">10th Marksheet</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.marksheet10} alt="passport" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    renderElementcounter() {
        if (!this.state.textflag) {
            return <div className="row pl-4 pr-4 mt-3">
            </div>;
        }
        else {
            return <div className="row pl-4 pr-4 mt-3">

                <div className="col-8 col-sm-8 col-md-8 col-lg-10">

                    <div className="form form_doc marksheet">

                        {/* <TenMarksheet /> */}
                        {/* start for ten */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">10th Marksheet <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {this.renderElementTenMarksheet()}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for ten */}
                        {/* <TwelveMarksheet /> */}
                        {/* start for twelve marksheet */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">12th Marksheet <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {this.renderElementpassport()}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for tweleve marksheet */}
                    </div>

                </div>

            </div>;
        }
    }
    onFileChangeTwelveMarksheet = eventpassport => {
        const obj2 = new FormData();

        obj2.append("marksheet12", eventpassport.target.files[0]);

        axios.put('/student/educationDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("12 marksheet update successfully");
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
        obj4.append("marksheet12", myfiles[0]);

        axios.put('/student/educationDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                    alert("12 marksheet update successfully");
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
        if (this.state.myTwelve === '' || this.state.myTwelve === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmyTwelve">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeTwelveMarksheet} id="uploadmyTwelve" />
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

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#TwelveMakrsheetModal">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="TwelveMakrsheetModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">12th Marksheet</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.myTwelve} alt="passport" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    render() {
        return (


            <div className="row pl-4 pr-4 mt-3">
                <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                    <p>I haven't completed or pursuing Secondary Education</p>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" onClick={() => this.ToggleButton()}></span>
                    </label>

                </div>
                {this.renderElementcounter()}
            </div>
        )
    }
}

export default SecondaryEducation;