
import React from 'react'

import axios from 'axios';
import DragAndDrop from './DragAndDrop';



class Pg extends React.Component {

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

                        {/* <PgDegree /> */}
                        {/* start for pgdegree */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">PG Degree Certificate <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {this.renderElementpassport()}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for pgdegree */}
                     {/* start for pg Makrsheet */}
                     <div className="upload_doc d-flex flex-wrap align-items-center row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="pl-4 pr-4 pt-0 pb-0">PG Marksheet <span className="text-danger"> *</span></p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        {this.renderElementpassport()}

                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                    </div>
                </div>
             {/* start for pg consolidated */}
             <div className="upload_doc d-flex flex-wrap align-items-center row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="pl-4 pr-4 pt-0 pb-0">PG Consolidated Marksheet <span className="text-danger"> *</span></p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        {this.renderElementpassport()}

                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                    </div>
                </div>
                {/* end for pgconsolidated */}
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

        mypgdegree: "",
        mypgmarksheet: "",
        mypgconsolidated:"",
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
                    mypgdegree: res.data.studentEducationDocument.pgDegree,
                    mypgmarksheet: res.data.studentEducationDocument.pgMarksheet,
                    mypgconsolidated: res.data.studentEducationDocument.pgDegreeConsolidatedMarksheet
                });

                if (res.data.success === true) {
                }
                else {
         
                }
            })
            .catch(error => {
            
            });
    };
    onFileChangepassport = eventpassport => {
        const obj2 = new FormData();

        obj2.append("pgDegree", eventpassport.target.files[0]);

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
        obj4.append("pgDegree", myfiles[0]);

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
    renderElementpassport() {
        if (this.state.mypgdegree === '' || this.state.mypgdegree === undefined) {
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
                        <p className="pl-4 pr-4 pt-0 pb-0">PgDegree <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#pgDegreeModal">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="pgDegreeModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">PG Degree Certificate</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.mypgdegree} alt="pgdegree" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    onFileChangePgMarksheet = eventpassport => {
        const obj2 = new FormData();

        obj2.append("pgMarksheet", eventpassport.target.files[0]);

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
        obj4.append("pgMarksheet", myfiles[0]);

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
    renderElementpassport() {
        if (this.state.mypgmarksheet === '' ||  this.state.mypgmarksheet === undefined) {
            return <DragAndDrop handleDrop={this.handleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadmypgmarksheet">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangePgMarksheet} id="uploadmypgmarksheet" />
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

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#pgMarksheetModel">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                  
                  
                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="pgMarksheetModel">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">PG Marksheet</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.mypgmarksheet} alt="passport" />

                        </div>
                    </div>
                </div>
            </div>;
        }
    }
    onFileChangepassport = eventpassport => {
        const obj2 = new FormData();

        obj2.append("pgDegreeConsolidatedMarksheet", eventpassport.target.files[0]);

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
        obj4.append("pgDegreeConsolidatedMarksheet", myfiles[0]);

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
    renderElementpassport() {
        if (this.state.mypgconsolidated === '' ||  this.state.mypgconsolidated === undefined) {
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

                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#pgConsolidatedModel">View</button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                  
                  
                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>


                {/* <!-- The Modal --> */}
                <div className="modal" id="pgConsolidatedModel">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                                <h4 className="modal-title">PG Consolidated Marksheet</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <img src={this.state.mypgconsolidated} alt="passport" />

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
                    <p>I haven't completed or pursuing any PG course</p>
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

export default Pg;