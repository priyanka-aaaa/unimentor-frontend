import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';


const NewIdentityDocument = () => {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mypassport, setmypassport] = useState();
    const [mypassportBack, setmypassportBack] = useState();
    const [mycv, setmycv] = useState();
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
        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                setmypassport(data.studentIdentityDocument.passport)
                setmypassportBack(data.studentIdentityDocument.passportBack)
                setmycv(data.studentIdentityDocument.cv)

            })
        //end for get all newIdeneitiydocument 
    }, [])

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
            <a className="card-header" data-bs-toggle="collapse" href="#collapseOne">
                <strong>1</strong>   Identity Documents
            </a>
            <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
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

                            //start for calling first api
                            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
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
                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                        method: 'get',
                                        //  body: obj5,
                                        headers: { 'Authorization': mounted },
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            setmypassport(data.studentIdentityDocument.passport)
                                            setmypassportBack(data.studentIdentityDocument.passportBack)
                                            setmycv(data.studentIdentityDocument.cv)

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
                    <div className="form form_doc">
                        {/* start for cv */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">Passport Front <span className="text-danger"> *</span></p>
                            </div>

                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {/* //start for cv */}
                                {mypassport === "" || mypassport === "*" || mypassport === null || mypassport === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        const obj5 = new FormData();
                                        obj5.append("passport", acceptedFiles[0]);
                                        //start for calling first api
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                //start for get all newIdeneitiydocument 
                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                    method: 'get',
                                                    //  body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmypassport(data.studentIdentityDocument.passport)
                                                        setmypassportBack(data.studentIdentityDocument.passportBack)
                                                        setmycv(data.studentIdentityDocument.cv)
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
                                                    Upload/Drag & Drop here
                                                </span>
                                            </div>
                                        )}
                                    </Dropzone>
                                    :
                                    <div>
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassport1">
                                            View
                                        </button>
                                        <button type="button"


                                            onClick={() => onDeletePassportHandle("passport")}
                                           
                                            className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                        <div className="modal" id="myModalPassport1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    {/* <!-- Modal Header --> */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Passport </h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    <img src={mypassport} alt="passportback" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                                {/* //end for passport */}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for cv */}
                        {/* start for passport */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">Passport Back Front <span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                <div>{/* This would be the dropzone for the Hero image */}
                                {mypassportBack === "" || mypassportBack === "*" || mypassportBack === null || mypassportBack === undefined ?
                               
                                        <Dropzone onDrop={(acceptedFiles) => {
                                            const obj5 = new FormData();
                                            obj5.append("passportBack", acceptedFiles[0]);
                                            //start for calling first api
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    //start for get all newIdeneitiydocument 
                                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                        method: 'get',
                                                        //  body: obj5,
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setmypassport(data.studentIdentityDocument.passport)
                                                            setmypassportBack(data.studentIdentityDocument.passportBack)
                                                            setmycv(data.studentIdentityDocument.cv)
                                                        })
                                                    //end for get all newIdeneitiydocument 
                                                })
                                            //end for calling first api

                                            setHeroFiles(acceptedFiles.map(file => Object.assign(file, {

                                                preview: URL.createObjectURL(file)


                                            })));
                                        }} name="heroImage" multiple={false}>
                                            {({ getRootProps, getInputProps }) => (
                                                <div {...getRootProps({ className: 'dropzone' })}>
                                                    <input {...getInputProps()} />
                                                    <span style={{ fontSize: ".8rem" }}>
                                                        Upload/Drag & Drop here
                                                    </span>
                                                </div>
                                            )}
                                        </Dropzone>
                                        :
                                        <div>
                                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassportback1">
                                                View
                                            </button>
                                            <button type="button"
                                                onClick={() => onDeletePassportBackHandle("passportBack")}
                                                
                                                className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                            <div className="modal" id="myModalPassportback1">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">

                                                        {/* <!-- Modal Header --> */}
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

                        {/* end for passport */}
                        {/* <Passportback /> */}
                        {/* start for passportback */}
                        <div className="upload_doc d-flex flex-wrap align-items-center row">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className="pl-4 pr-4 pt-0 pb-0">CV<span className="text-danger"> *</span></p>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                {/* //start for passport */}
                                {mycv === "" || mycv === "*" || mycv === null || mycv === undefined ?

                                    <Dropzone onDrop={(acceptedFiles) => {
                                        const obj5 = new FormData();
                                        obj5.append("cv", acceptedFiles[0]);
                                        //start for calling first api
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                //start for get all newIdeneitiydocument 
                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/identityDocument', {
                                                    method: 'get',
                                                    //  body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmypassport(data.studentIdentityDocument.passport)
                                                        setmypassportBack(data.studentIdentityDocument.passportBack)
                                                        setmycv(data.studentIdentityDocument.cv)
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
                                                    Upload/Drag & Drop here
                                                </span>
                                            </div>
                                        )}
                                    </Dropzone>
                                    :
                                    <div>
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalcv1">
                                            View
                                        </button>
                                        <button type="button"
                                            onClick={() => onDeletecvHandle("cv")}
                                            //  onClick={this.onDeletecvHandle} 
                                            className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                        <div className="modal" id="myModalcv1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    {/* <!-- Modal Header --> */}
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
                                {/* //end for cv */}

                            </div>
                            <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                            </div>
                        </div>
                        {/* end for passport back */}
                        {/* <Cv /> */}

                    </div>
                </div>
            </div>
        </div>


    );
}

export default NewIdentityDocument;