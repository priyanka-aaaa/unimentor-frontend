import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';


const EnglishProficiencyDocument = () => {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();

    const [mymarksheet12, setmymarksheet12] = useState();

    const [myfile, setmyfile] = useState();
    const [test, settest] = useState();

    const [testtype, settesttype] = useState("none");
    const [submittest, setsubmittest] = useState("none");

    const [textflag, settextflag] = useState("none");

    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");




    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)

        //start for get all newIdeneitiydocument 
        fetch(process.env.REACT_APP_SERVER_URL + 'student/englishProficiencyDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                settest(data.studentEnglishProficiencyDocument.test)
                setmyfile(data.studentEnglishProficiencyDocument.file)
                setsubmittest(data.studentEnglishProficiencyDocument.test)


            })
        //end for get all newIdeneitiydocument 
    }, [])

    function onChangeIelts(e) {

        settest(e)
    }
    function onChangeToefl(e) {
        settest(e)
    }
    function onChangePte(e) {
        settest(e)
    }
    function onChangeDuolingo(e) {

        settest(e)
    }
    function ToggleButton() {
        if (textflag == "none") {
            settextflag("inline")
        }
        else {
            settextflag("none")
        }
    }

    function onDeletefileHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")
    }

    return (
        <div className="card">
            <a className="card-header" data-bs-toggle="collapse" href="#collapsefour">
                <strong>4</strong>  English Proficiency Test Document
            </a>
            <div id="collapsefour" className="collapse" data-bs-parent="#accordion">
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
                  
                        // start for delete
                        const obj5 = new FormData();
                        obj5.append("test", "none");
                        obj5.append("file", "*");

                        //start for calling first api
                        fetch(process.env.REACT_APP_SERVER_URL + 'student/englishProficiencyDocument', {
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
                                fetch(process.env.REACT_APP_SERVER_URL + 'student/englishProficiencyDocument', {
                                    method: 'get',
                                    //  body: obj5,
                                    headers: { 'Authorization': mounted },
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        settest(data.studentEnglishProficiencyDocument.test)
                                        setmyfile(data.studentEnglishProficiencyDocument.file)
                                        setsubmittest(data.studentEnglishProficiencyDocument.test)
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
                        <div className="row pl-4 pr-4 mt-3">
                            <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                <p>I haven't taken any English Proficiency Test</p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"
                                        onClick={() => ToggleButton()}

                                    ></span>
                                </label>

                            </div>
                            {/* start after toogle contact will come */}

                            {/* start after toogle contact will come */}

                        </div>
                        <div style={{ display: textflag }}>
                            {/* start for cv */}
                            <div className="upload_doc d-flex flex-wrap align-items-center row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12" >


                                        {submittest === "" || submittest === undefined || submittest === "none" ?
                                            <div>
                                                <label>Please select English Proficiency Test</label><br />
                                                <div role="group" className="doc_choice btn-group" >
                                                    <input type="hidden" />
                                                    <button type="button"
                                                        onClick={() => onChangeIelts("IELTS")}

                                                        className="selected btn btn-secondary">IELTS</button>
                                                    <button type="button" onClick={() => onChangeToefl("TOEFL")} className="btn btn-secondary">TOEFL</button>
                                                    <button type="button" onClick={() => onChangePte("PTE")} className="btn btn-secondary">PTE</button>
                                                    <button type="button" onClick={() => onChangeDuolingo("Duolingo")} className="btn btn-secondary">Duolingo</button>
                                                </div>
                                            </div>

                                            : test + " Score Card"}
                                    </div>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto">
                                    {/* //start for cv */}
                                    {myfile === "" || myfile === "*" || myfile === null || myfile === undefined ?
                                        <Dropzone onDrop={(acceptedFiles) => {
                                            const obj5 = new FormData();
                                            obj5.append("file", acceptedFiles[0]);
                                            obj5.append("test", test);
                                            //start for calling first api
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/englishProficiencyDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    //start for get all newIdeneitiydocument 
                                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/englishProficiencyDocument', {
                                                        method: 'get',
                                                        //  body: obj5,
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            settest(data.studentEnglishProficiencyDocument.test)
                                                            setsubmittest(data.studentEnglishProficiencyDocument.test)

                                                            setmyfile(data.studentEnglishProficiencyDocument.file)


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
                                                    <span style={{ fontSize: ".8rem" }}>
                                                        Drop hero image here, or click to select file
                                                    </span>
                                                </div>
                                            )}
                                        </Dropzone>
                                        :
                                        <div>
                                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalEnglishProficiecny">
                                                View
                                            </button>
                                            <button type="button"
                                                onClick={() => onDeletefileHandle("file")}

                                                className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                            <div className="modal" id="myModalEnglishProficiecny">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
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
                                    {/* //end for file */}
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

export default EnglishProficiencyDocument;