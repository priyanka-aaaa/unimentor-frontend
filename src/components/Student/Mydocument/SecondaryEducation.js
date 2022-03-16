import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function SecondaryEducation() {
 const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mymarksheet10, setmymarksheet10] = useState();
    const [mymarksheet12, setmymarksheet12] = useState();
    const [textflag, settextflag] = useState("none");
    const [completedHeading, setcompletedHeading] = useState("inline");
    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [loader, setmyloader] = useState("false");
    const [submitError, setsubmitError] = useState("0");
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        function secondaryEducationAllDetails() {
            fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                method: 'get',
                headers: { 'Authorization': mounted },
            })
                .then(response => response.json())
                .then(data => {
                    setmymarksheet10(data.studentEducationDocument.marksheet10)
                    setmymarksheet12(data.studentEducationDocument.marksheet12)
                })
        }
        secondaryEducationAllDetails();
    }, [])
    function secondaryEducationAll() {
        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                setmymarksheet10(data.studentEducationDocument.marksheet10)
                setmymarksheet12(data.studentEducationDocument.marksheet12)
            })
    }
    function onDeletemarksheet10Handle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletemarksheet12Handle(value) {
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
        <div className="card-body">
            {loader === "true" ?
                <Loader />

                : null}
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong></strong> {successMessage}
            </div> : null}
            {submitError === 1 ? <div className="Show_error_message">
                <strong></strong> File extension not supported
            </div> : null}
            {showSweetAlert === "1" ? <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Are you sure?"
                onConfirm={(value) => {
                    setshowSweetAlert("0");
                    setmyloader("true")
                    const obj5 = new FormData();
                    obj5.append(deleteId, "*");
                    fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                        method: 'put',
                        body: obj5,
                        headers: { 'Authorization': mounted },
                    })
                        .then(response => response.json())
                        .then(data => {
                            setmyloader("false")
                            setsuccessMessage("Deleted Successfully")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                            secondaryEducationAll()
                        })
                }}
                onCancel={() =>
                    setshowSweetAlert("0")
                }
                focusCancelBtn >
            </SweetAlert>
                : null
            }
            <div className="form form_doc">
                <div className="row pl-4 pr-4 mt-3">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-10" >
                        <p style={{ display: completedHeading }} >I haven't completed or pursuing Secondary Education</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                        <label className="switch" title="Secondary Education Document">
                            <input type="checkbox" />
                            <span className="slider round"
                                onClick={() => ToggleButton()}  ></span>
                        </label>
                    </div>
                </div>
                <div style={{ display: textflag }}>
                    <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">marksheet 10th Front <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            {mymarksheet10 === "" || mymarksheet10 === "*" || mymarksheet10 === null || mymarksheet10 === undefined ?
                                <Dropzone onDrop={(acceptedFiles) => {
                                    setmyloader("true")
                                    var fileName = acceptedFiles[0].path;
                                    var fileExtension = fileName.split('.').pop();
                                    if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                        || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                    ) {
                                        const obj5 = new FormData();
                                        obj5.append("marksheet10", acceptedFiles[0]);
                                        //start for calling first api
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                setmyloader("false")

                                                secondaryEducationAll();
                                            })
                                    }
                                    else {
                                        setmyloader("false")
                                        setTimeout(() => setsubmitError(""), 3000);
                                        setsubmitError(1)
                                    }
                                    setThumbnailFiles(acceptedFiles.map(file => Object.assign(file, {
                                        preview: URL.createObjectURL(file)
                                    })));
                                }
                                } name="heroImage" multiple={false}>
                                    {({ getRootProps, getInputProps }) => (
                                        <div {...getRootProps({ className: 'dropzone' })}>
                                            <input {...getInputProps()} />
                                            <div style={{ fontSize: ".8rem" }}>
                                                Upload/Drag & Drop here
                                            </div>
                                        </div>
                                    )}
                                </Dropzone>
                                :
                                <div>
                                    <button title="View Mark sheet" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalmarksheet101">
                                        View
                                    </button>
                                    <button title="Entry Delet" type="button"
                                        onClick={() => onDeletemarksheet10Handle("marksheet10")}
                                        className="btn btn-outline-danger">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <div className="modal" id="myModalmarksheet101">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">marksheet 10th </h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <img src={mymarksheet10} alt="marksheet12" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                        </div>
                    </div>
                    <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">marksheet 10th Back <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div>
                                {mymarksheet12 === "" || mymarksheet12 === "*" || mymarksheet12 === null || mymarksheet12 === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        setmyloader("true")
                                        var fileName = acceptedFiles[0].path;
                                        var fileExtension = fileName.split('.').pop();
                                        if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                            || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                        ) {
                                            const obj5 = new FormData();
                                            obj5.append("marksheet12", acceptedFiles[0]);
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmyloader("false")
                                                    secondaryEducationAll()
                                                })
                                        }
                                        else {
                                            setmyloader("false")
                                            setTimeout(() => setsubmitError(""), 3000);
                                            setsubmitError(1)
                                        }
                                        setHeroFiles(acceptedFiles.map(file => Object.assign(file, {
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
                                    :
                                    <div>
                                        <button title="View Narksheet" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalmarksheet121">
                                            View
                                        </button>
                                        <button title="Delet Entry" type="button"
                                            onClick={() => onDeletemarksheet12Handle("marksheet12")}
                                            className="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <div className="modal" id="myModalmarksheet121">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">marksheet 10th Back</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <img src={mymarksheet12} alt="marksheet12" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}