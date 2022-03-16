import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash
} from '@fortawesome/free-solid-svg-icons';

export default function ExtraCurricularDocument() {
const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mymarksheet12, setmymarksheet12] = useState();
    const [myfile, setmyfile] = useState();
    const [activity, setactivity] = useState();
    const [activitytype, setactivitytype] = useState("none");
    const [submitactivity, setsubmitactivity] = useState("none");
    const [textflag, settextflag] = useState("none");
    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [completedHeading, setcompletedHeading] = useState("inline");
    const [loader, setmyloader] = useState("false");
    const [submitError, setsubmitError] = useState("0");
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        function extraCurricularAllDetails() {
            fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
                method: 'get',
                headers: { 'Authorization': mounted },
            })
                .then(response => response.json())
                .then(data => {
                    setactivity(data.studentExtraCurricularDocument.activity)
                    setmyfile(data.studentExtraCurricularDocument.file)
                    setsubmitactivity(data.studentExtraCurricularDocument.activity)
                })
        }
        extraCurricularAllDetails()
    }, [])
    function extraCurricularAll() {
        fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                setactivity(data.studentExtraCurricularDocument.activity)
                setmyfile(data.studentExtraCurricularDocument.file)
                setsubmitactivity(data.studentExtraCurricularDocument.activity)
            })
    }
    function handleChange(e) {
        setactivity(e.target.value)
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
    function onDeletefileHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }
    return (
        <div className="card">
            {loader === "true" ?
                <Loader />
                : null}
            <a className="card-header" data-bs-toggle="collapse" href="#collapsefive">
                <strong>5</strong>  Extra Curricular Document
            </a>
            <div id="collapsefive" className="collapse" data-bs-parent="#accordion">
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
                        setmyloader("true")
                        setshowSweetAlert("0");
                        const obj5 = new FormData();
                        obj5.append("activity", "none");
                        obj5.append("file", "*");
                        fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
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
                                extraCurricularAll()
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
                <div className="card-body">
                    <div className="form form_doc">
                        <div className="row pl-4 pr-4 mt-3">
                            <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                <p style={{ display: completedHeading }}>I haven't done any extra curricular activites</p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                                <label className="switch" title="Show extra curricular activites">
                                    <input type="checkbox" />
                                    <span className="slider round"
                                        onClick={() => ToggleButton()}
                                    ></span>
                                </label>
                            </div>
                        </div>
                        <div style={{ display: textflag }}>
                            <div className="upload_doc d-flex flex-wrap align-items-center row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
                                        <select className="form-control" name="activity" value={activity}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            <option value="">Search Activity</option>
                                            <option value="Student Government">Student Government</option>
                                            <option value="Academic Teams and Clubs">Academic Teams and Clubs</option>
                                            <option value="The Debate Team students">The Debate Team students</option>
                                            <option value="The Arts Team students">The Arts Team students</option>
                                            <option value="Internships">Internships</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto">
                                    {myfile === "" || myfile === "*" || myfile === null || myfile === undefined ?
                                        <Dropzone onDrop={(acceptedFiles) => {
                                            setmyloader("true")
                                            var fileName = acceptedFiles[0].path;
                                            var fileExtension = fileName.split('.').pop();
                                            if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx"
                                                || fileExtension === "jpeg" || fileExtension === "jpg" || fileExtension === "png"
                                            ) {

                                                const obj5 = new FormData();
                                                obj5.append("file", acceptedFiles[0]);
                                                obj5.append("activity", activity);
                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
                                                    method: 'put',
                                                    body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmyloader("false")

                                                        extraCurricularAll()
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
                                            <button title="View activites" type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalExtraDocument">
                                                View
                                            </button>
                                            <button title="Delet Entry" type="button"
                                                onClick={() => onDeletefileHandle("activity")}
                                                className="btn btn-outline-danger">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            <div className="modal" id="myModalExtraDocument">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">file </h4>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                        </div>
                                                        <img src={myfile} alt="marksheet12" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
