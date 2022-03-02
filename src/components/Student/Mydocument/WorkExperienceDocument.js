import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import SweetAlert from 'react-bootstrap-sweetalert';



function WorkExperienceDocument(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [companyName, setcompanyName] = useState("");
    const [mydocument, setmydocument] = useState();
    const [textflag, settextflag] = useState("none");
    const [deleteId, setdeleteId] = useState();

    const [submitcompanyName, setsubmitcompanyName] = useState("none");
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [viewDetail, setviewDetail] = useState("none");
    const [document, setdocument] = useState("inline");

    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [completedHeading, setcompletedHeading] = useState("inline");

    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);

            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
        //start for get all newIdeneitiydocument 
        fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                setcompanyName(data.studentExperienceDocument.companyName)
                setmydocument(data.studentExperienceDocument.document)
                setsubmitcompanyName(data.studentExperienceDocument.companyName)


            })
        //end for get all newIdeneitiydocument 

    }, [])



    function onDeletefileHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }

    function ToggleButton() {
        if (textflag == "none") {
            settextflag("inline")
            setcompletedHeading("none")

        }
        else {
            settextflag("none")
            setcompletedHeading("inline")

        }
    }
    return (
        <div className="card">

            <a className="card-header" data-bs-toggle="collapse" href="#collapse3">
                <strong>3</strong> Work Experience Documents
            </a>
            <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                {submitSuccess === 1 ? <div className="Show_success_message">
                    <strong></strong> {successMessage}
                </div> : null}
                {showSweetAlert === "1" ? <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"

                    title="Are you sure?"
                    onConfirm={(value) => {
                        setshowSweetAlert("0");
                        console.log("setdeleteId");
                        console.log(deleteId)
                        // start for delete
                        const obj5 = new FormData();
                        obj5.append(deleteId, "*");
                        obj5.append("companyName", " ");
                        //start for calling first api
                        fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                            method: 'put',
                            body: obj5,
                            headers: { 'Authorization': mounted },
                        })
                            .then(response => response.json())
                            .then(data => {
                                setsuccessMessage("Deleted Successfully")

                                setTimeout(() => setsubmitSuccess(""), 3000);
                                setsubmitSuccess(1)

                                //start for get all newIdeneitiydocument 
                                fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                                    method: 'get',
                                    headers: { 'Authorization': mounted },
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        setcompanyName(data.studentExperienceDocument.companyName)
                                        setmydocument(data.studentExperienceDocument.document)
                                        setsubmitcompanyName(data.studentExperienceDocument.companyName)


                                    })
                                //end for get all newIdeneitiydocument 
                            })
                        // end for delete





                    }}
                    onCancel={() =>
                        setshowSweetAlert("0")

                    }
                    focusCancelBtn
                >

                </SweetAlert>
                    : null
                }
                <div className="card-body">
                    <div className="form form_doc">
                        <div className="row">
                            <div className="col-md-8">
                                <p style={{ display: completedHeading }}>I don't have any work experience</p>
                            </div>
                            <div className="col-md-4 text-right">
                                <label className="switch3">
                                    <input type="checkbox" />
                                    <span className="slider round"
                                        onClick={() => ToggleButton()}

                                    ></span>
                                </label>
                            </div>
                        </div>
                        <div style={{ display: textflag }}>
                            <div className="row ">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">


                                    <div className="form form_doc document">
                                        <div className="add-more">
                                            <div className="upload_doc d-flex flex-wrap align-items-center row ">
                                                <div className="col-3 col-sm-3 col-md-3 col-lg-3">Comapny Name</div>


                                                <div className="col-1 col-sm-1 col-md-1 col-lg-1">&nbsp;</div>
                                            </div>
                                            <div className="upload_doc d-flex flex-wrap align-items-center row">
                                                <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                        <input className="ant-input w-100 form-control"
                                                            value={companyName}
                                                            onChange={(e) => setcompanyName(e.target.value)}
                                                            placeholder="Enter Company Name" type="text"
                                                        />
                                                    </div>
                                                </div>


                                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 text-left">
<p>Upload Document</p>

                                                    {/* //start for cv */}
                                                    {mydocument === "" || mydocument === "*" || mydocument === null || mydocument === undefined ?
                                                        <div>

                                                            <Dropzone   onDrop={(acceptedFiles) => {
                                                                const obj5 = new FormData();
                                                                obj5.append("document", acceptedFiles[0]);
                                                                obj5.append("companyName", companyName);
                                                                //start for calling first api
                                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                                                                    method: 'put',
                                                                    body: obj5,
                                                                    headers: { 'Authorization': mounted },
                                                                })
                                                                    .then(response => response.json())
                                                                    .then(data => {
                                                                        //start for get all newIdeneitiydocument 
                                                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
                                                                            method: 'get',
                                                                            //  body: obj5,
                                                                            headers: { 'Authorization': mounted },
                                                                        })
                                                                            .then(response => response.json())
                                                                            .then(data => {
                                                                                setcompanyName(data.studentExperienceDocument.companyName)
                                                                                setsubmitcompanyName(data.studentExperienceDocument.companyName)

                                                                                setmydocument(data.studentExperienceDocument.document)


                                                                            })
                                                                        //end for get all newIdeneitiydocument 
                                                                    })
                                                                //end for calling first api

                                                                setThumbnailFiles(acceptedFiles.map(file => Object.assign(file, {

                                                                    preview: URL.createObjectURL(file)


                                                                })));
                                                            }} name="heroImage" multiple={false}>
                                                                {({ getRootProps, getInputProps }) => (
                                                                    <div {...getRootProps({ className: 'dropzone' })}>
                                                                        <input {...getInputProps()} />
                                                                        <div style={{ fontSize: ".8rem" }}>
                                                                            Upload/Drag & Drop here
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </Dropzone>
                                                        </div>
                                                        :
                                                        <div>

                                                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalWorkExperience">
                                                                View
                                                            </button>
                                                            <button type="button"
                                                                onClick={() => onDeletefileHandle("document")}
                                                                //  onClick={this.onDeletecvHandle} 
                                                                className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>



                                                        </div>
                                                    }
                                                    {/* //end for file */}

                                                </div>

                                            </div>
                                        </div>

                                        <div className="modal" id="myModalWorkExperience">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    {/* <!-- Modal Header --> */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">file </h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    <img src={mydocument} alt="marksheet12" />

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


        </div>
    );
}

export default WorkExperienceDocument;