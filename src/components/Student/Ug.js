
import React from 'react'

import axios from 'axios';
import DragAndDrop from './DragAndDrop';



class Ug extends React.Component {

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
    }
    ToggleButton() {
        this.setState(
            { textflag: !this.state.textflag }
        );
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
                        {/* <UgDegree /> */}
                        {/* start for 10th marksheet */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">UG Degree Certificate <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {this.renderElementugDegree()}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for 10th marksheet */}

                        {/* start for twelve marksheet */}

                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">UG Consolidated Marksheet <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {this.renderElementugConsolidatedMarksheet()}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for tweleve marksheet */}
                        {/* start for UgMarksheet */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">UG Marksheet <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {this.renderElementugMarksheet()}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for marksheet */}
                    </div>

                </div>

            </div>;
        }
    }
    state = {
        mounted: "",
        files: [
        ],
        data: [],

        myUgDegree: "",
        myugConsolidatedMarksheet: "",
        myugMarksheet: "",
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
        axios.get('/student/educationDocument', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {

                this.setState({
                    myUgDegree: res.data.studentEducationDocument.ugDegree,
                    myugConsolidatedMarksheet: res.data.studentEducationDocument.ugConsolidatedMarksheet,
                    myugMarksheet: res.data.studentEducationDocument.ugMarksheet

                });

                if (res.data.success === true) {
                }
                else {
              
                }
            })
            .catch(error => {
       
            });
    };
    onFileChangeugDegree = eventugDegree => {
        const obj2 = new FormData();

        obj2.append("ugDegree", eventugDegree.target.files[0]);

        axios.put('/student/educationDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                
                }
                else {
                   
                }
            })
            .catch(error => {
            
            });
        //end for call api
    };
    handleDrop = (myfiles) => {
        const obj4 = new FormData();
        obj4.append("ugDegree", myfiles[0]);

        axios.put('/student/educationDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                   
                }
                else {
                    
                }
            })
            .catch(error => {
        
            });
        //end for call api
    }
    renderElementugDegree() {
        if (this.state.myUgDegree === '' || this.state.myUgDegree === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmyUgDegree">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeugDegree} id="uploadmyUgDegree" />
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
                        <p className="pl-4 pr-4 pt-0 pb-0">ugDegree <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#ugModelModal">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="ugModelModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">UG Degree Certificate</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.myUgDegree} alt="ugDegree" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    onFileChangeugConsolidatedMarksheet = eventugConsolidatedMarksheet => {
        const obj2 = new FormData();

        obj2.append("ugConsolidatedMarksheet", eventugConsolidatedMarksheet.target.files[0]);

        axios.put('/student/educationDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                   
                }
                else {
                   
                }
            })
            .catch(error => {
            
            });
        //end for call api
    };
    handleDrop = (myfiles) => {
        const obj4 = new FormData();
        obj4.append("ugConsolidatedMarksheet", myfiles[0]);

        axios.put('/student/educationDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                   
                }
                else {
              
                }
            })
            .catch(error => {
            
            });
        //end for call api
    }
    renderElementugConsolidatedMarksheet() {
        if (this.state.myugConsolidatedMarksheet === '' || this.state.myugConsolidatedMarksheet === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmyugConsolidatedMarksheet">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeugConsolidatedMarksheet} id="uploadmyugConsolidatedMarksheet" />
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
                        <p className="pl-4 pr-4 pt-0 pb-0">ugConsolidatedMarksheet <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#ugConsolidatedModel">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="ugConsolidatedModel">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">UG Consolidated Marksheet</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.myugConsolidatedMarksheet} alt="ugConsolidatedMarksheet" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    onFileChangeugMarksheet = eventugMarksheet => {
        const obj2 = new FormData();

        obj2.append("ugMarksheet", eventugMarksheet.target.files[0]);

        axios.put('/student/educationDocument', obj2, {
            headers: {
                'Authorization': this.state.mounted,
                "Content-Type": "multipart/form-data"
            }
        })
            .then(function (res) {
                if (res.data.success === true) {
                    
                }
                else {
           
                }
            })
            .catch(error => {
              
            });
        //end for call api
    };
    handleDrop = (myfiles) => {
        const obj4 = new FormData();
        obj4.append("ugMarksheet", myfiles[0]);

        axios.put('/student/educationDocument', obj4, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {
                if (res.data.success === true) {
                 
                }
                else {
      
                }
            })
            .catch(error => {
            
            });
        //end for call api
    }
    renderElementugMarksheet() {
        if (this.state.myugMarksheet === '' || this.state.myugMarksheet === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmyugMarksheet">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeugMarksheet} id="uploadmyugMarksheet" />
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
                        <p className="pl-4 pr-4 pt-0 pb-0">ugMarksheet <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#ugMarksheetModel">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="ugMarksheetModel">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">UG Marksheet</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.myugMarksheet} alt="ugMarksheet" />

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
                    <p>I haven't completed or pursuing any UG course</p>
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

export default Ug;