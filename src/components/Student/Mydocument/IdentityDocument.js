import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function IdentityDocument() {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mypassport, setmypassport] = useState();
    const [mypassportBack, setmypassportBack] = useState();
    const [mycv, setmycv] = useState();
    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [submitError, setsubmitError] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [loader, setmyloader] = useState("false");
    const [passportExtenstion, setpassportExtenstion] = useState(".jpg");
    const [myDocx, setmyDocx] = useState("0");

    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        function identityDocumentAllDetails() {
            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                method: 'get',
                headers: { 'Authorization': mounted },
            })
                .then(response => response.json())
                .then(data => {
                    setmypassport(data.studentIdentityDocument.passport)
                    var fetchPassport = data.studentIdentityDocument.passport
                    var completePassport = fetchPassport.split(".")
                    setpassportExtenstion(completePassport[3]);
                    setmypassportBack(data.studentIdentityDocument.passportBack)
                    setmycv(data.studentIdentityDocument.cv)
                })
        }
        identityDocumentAllDetails()
    }, [])
    function viewMyDocument() {
        setmyDocx("1")
  
    }
    function identityDocumentAll() {
        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                setmypassport(data.studentIdentityDocument.passport)
                var fetchPassport = data.studentIdentityDocument.passport
                var completePassport = fetchPassport.split(".")
                setpassportExtenstion(completePassport[3]);
                setmypassportBack(data.studentIdentityDocument.passportBack)
                setmycv(data.studentIdentityDocument.cv)
            })
    }
    function onDeletePassportHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletecvHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    function onDeletePassportBackHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    return (
        <div className="card">
            {loader === "true" ?
                <Loader />
                : null}
            <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                <strong>1</strong>   Identity Documents
            </a>
            <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
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
                            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
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

                                    identityDocumentAll()
                                })
                        }}
                        onCancel={() =>
                            setshowSweetAlert("0")
                        }
                        focusCancelBtn
                    >
                    </SweetAlert>
                        : null
                    }
                    <div className="form form_doc">
                        <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">Passport Front <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {mypassport === "" || mypassport === "*" || mypassport === null || mypassport === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        setmyloader("true")
                                        var fileName = acceptedFiles[0].path;
                                        var fileExtension = fileName.split('.').pop();
                                        if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                            || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                        ) {
                                            const obj5 = new FormData();
                                            obj5.append("passport", acceptedFiles[0]);
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmyloader("false")
                                                    identityDocumentAll()
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
                                        <button onClick={() => viewMyDocument()} title="Passport View" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassport1">
                                            View
                                        </button>
                                        <button title="Delet Entry" type="button"
                                            onClick={() => onDeletePassportHandle("passport")}
                                            className="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <div className="modal" id="myModalPassport1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Passport </h4>

                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>



                                                    {myDocx === "1" && (passportExtenstion === "doc" ||passportExtenstion === "docx") ?
                                                        <iframe src={mypassport} width="100%" height="500px"></iframe>
                                                        : null}


                                                    {passportExtenstion === "jpeg" || passportExtenstion === "jpg" || passportExtenstion === "png" ?
                                                        <img src={mypassport} alt="passportback" />
                                                        : passportExtenstion === "pdf" ?
                                                            <div>
                                                                <iframe src={mypassport} width="100%" height="500px"></iframe>
                                                            </div>
                                                            : null
                                                    }

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
                                <p className="pl-4 pr-4 pt-0 pb-0">Passport Back Front <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                <div>
                                    {mypassportBack === "" || mypassportBack === "*" || mypassportBack === null || mypassportBack === undefined ?

                                        <Dropzone onDrop={(acceptedFiles) => {
                                            setmyloader("true")
                                            var fileName = acceptedFiles[0].path;
                                            var fileExtension = fileName.split('.').pop();
                                            if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                                || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                            ) {
                                                const obj5 = new FormData();
                                                obj5.append("passportBack", acceptedFiles[0]);
                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                    method: 'put',
                                                    body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmyloader("false")
                                                        identityDocumentAll()
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
                                            <button title="Passport Back View" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassportback1">
                                                View
                                            </button>
                                            <button title="Delet Entry" type="button"
                                                onClick={() => onDeletePassportBackHandle("passportBack")}
                                                className="btn btn-outline-danger">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            <div className="modal" id="myModalPassportback1">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Passport Back</h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <img src={mypassportBack} alt="passportback" />

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
                        <div className="upload_doc d-flex flex-wrap align-items-center row mt-3">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">CV<span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {mycv === "" || mycv === "*" || mycv === null || mycv === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        setmyloader("true")
                                        var fileName = acceptedFiles[0].path;
                                        var fileExtension = fileName.split('.').pop();
                                        if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                            || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                        ) {
                                            const obj5 = new FormData();
                                            obj5.append("cv", acceptedFiles[0]);
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmyloader("false")
                                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                        method: 'get',
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setmypassport(data.studentIdentityDocument.passport)
                                                            var fetchPassport = data.studentIdentityDocument.passport
                                                            var completePassport = fetchPassport.split(".")
                                                            setpassportExtenstion(completePassport[3]);
                                                            setmypassportBack(data.studentIdentityDocument.passportBack)
                                                            setmycv(data.studentIdentityDocument.cv)

                                                        })
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
                                        <button title="View CV" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalcv1">
                                            View
                                        </button>
                                        <button title="Delet Entry" type="button"
                                            onClick={() => onDeletecvHandle("cv")}
                                            className="btn btn-outline-danger">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <div className="modal" id="myModalcv1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Cv</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>
                                                    <img src={mycv} alt="passportback" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}