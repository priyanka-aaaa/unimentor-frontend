import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';


const NewIdentityDocument = () => {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mypgDegree, setmypgDegree] = useState();
    const [mypgDegreeConsolidatedMarksheet, setmypgDegreeConsolidatedMarksheet] = useState();
    const [mypgMarksheet, setmypgMarksheet] = useState();

    const [textflag, settextflag] = useState("none");



    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)
        //start for get all newIdeneitiydocument 
        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                setmypgDegree(data.studentEducationDocument.pgDegree)
                setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                setmypgMarksheet(data.studentEducationDocument.pgMarksheet)

            })
        //end for get all newIdeneitiydocument 
    }, [])

    function onDeletepgDegreeHandle() {
        const obj5 = new FormData();
        obj5.append("pgDegree", "*");
        //start for calling first api
        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
            method: 'put',
            body: obj5,
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                //start for get all newIdeneitiydocument 
                fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                    method: 'get',
                    //  body: obj5,
                    headers: { 'Authorization': mounted },
                })
                    .then(response => response.json())
                    .then(data => {
                        setmypgDegree(data.studentEducationDocument.pgDegree)
                        setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                        setmypgMarksheet(data.studentEducationDocument.pgMarksheet)

                    })
                //end for get all newIdeneitiydocument 
            })
    }

    function onDeletepgDegreeConsolidatedMarksheetHandle() {
        const obj5 = new FormData();
        obj5.append("pgDegreeConsolidatedMarksheet", "*");
        //start for calling first api
        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
            method: 'put',
            body: obj5,
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                //start for get all newIdeneitiydocument 
                fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                    method: 'get',
                    //  body: obj5,
                    headers: { 'Authorization': mounted },
                })
                    .then(response => response.json())
                    .then(data => {
                        setmypgDegree(data.studentEducationDocument.pgDegree)
                        setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                        setmypgMarksheet(data.studentEducationDocument.pgMarksheet)

                    })
                //end for get all newIdeneitiydocument 
            })
    }
    function onDeletepgMarksheetConsolidateHandle() {
        const obj5 = new FormData();
        obj5.append("pgMarksheet", "*");
        //start for calling first api
        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
            method: 'put',
            body: obj5,
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {
                //start for get all newIdeneitiydocument 
                fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                    method: 'get',
                    //  body: obj5,
                    headers: { 'Authorization': mounted },
                })
                    .then(response => response.json())
                    .then(data => {
                        setmypgDegree(data.studentEducationDocument.pgDegree)
                        setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                        setmypgMarksheet(data.studentEducationDocument.pgMarksheet)
                    })
                //end for get all newIdeneitiydocument 
            })
    }
    function ToggleButton() {
        if (textflag == "none") {
            settextflag("inline")
        }
        else {
            settextflag("none")
        }
    }
    return (

        <div className="card-body">
            <div className="form form_doc">
                <div className="row pl-4 pr-4 mt-3">
                    <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                        <p>I haven't completed or pursuing any PG course</p>
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
                            <p className="pl-4 pr-4 pt-0 pb-0">PG Degree Certificate <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            {/* //start for cv */}
                            {mypgDegree === "" || mypgDegree === "*" || mypgDegree === null || mypgDegree === undefined ?
                                <Dropzone onDrop={(acceptedFiles) => {
                                    const obj5 = new FormData();
                                    obj5.append("pgDegree", acceptedFiles[0]);
                                    //start for calling first api
                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                        method: 'put',
                                        body: obj5,
                                        headers: { 'Authorization': mounted },
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            //start for get all newIdeneitiydocument 
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                                method: 'get',
                                                //  body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmypgDegree(data.studentEducationDocument.pgDegree)
                                                    setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                                                    setmypgMarksheet(data.studentEducationDocument.pgMarksheet)
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
                                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalpgDegree1">
                                        View
                                    </button>
                                    <button type="button"
                                        onClick={() => onDeletepgDegreeHandle()}
                                        //  onClick={this.onDeletecvHandle} 
                                        className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                    <div className="modal" id="myModalpgDegree1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">PG Degree Certificate </h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                <img src={mypgDegree} alt="pgDegreeConsolidatedMarksheet" />

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                            {/* //end for pgDegree */}

                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                        </div>
                    </div>
                    {/* end for cv */}
                    {/* start for PG Consolidated Marksheet */}
                    <div className="upload_doc d-flex flex-wrap align-items-center row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">PG Consolidated Marksheet <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div>{/* This would be the dropzone for the Hero image */}
                            

                                {mypgDegreeConsolidatedMarksheet === "" || mypgDegreeConsolidatedMarksheet === "*" || mypgDegree === null || mypgDegreeConsolidatedMarksheet === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        const obj5 = new FormData();
                                        obj5.append("pgDegreeConsolidatedMarksheet", acceptedFiles[0]);
                                        //start for calling first api
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                //start for get all newIdeneitiydocument 
                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                                    method: 'get',
                                                    //  body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmypgDegree(data.studentEducationDocument.pgDegree)
                                                        setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                                                        setmypgMarksheet(data.studentEducationDocument.pgMarksheet)
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
                                                    Drop hero image here, or click to select file
                                                </span>
                                            </div>
                                        )}
                                    </Dropzone>
                                    :
                                    <div>
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalpgDegreeConsolidatedMarksheet1">
                                            View
                                        </button>
                                        <button type="button"
                                            onClick={() => onDeletepgDegreeConsolidatedMarksheetHandle()}
                                            //  onClick={this.onDeletecvHandle} 
                                            className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                        <div className="modal" id="myModalpgDegreeConsolidatedMarksheet1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    {/* <!-- Modal Header --> */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">PG Consolidated Marksheet</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    <img src={mypgDegreeConsolidatedMarksheet} alt="pgDegreeConsolidatedMarksheet" />

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
                    {/* end for pgDegree */}
                    {/* start for pgDegree */}
                    <div className="upload_doc d-flex flex-wrap align-items-center row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <p className="pl-4 pr-4 pt-0 pb-0">PG Marksheet  <span className="text-danger"> *</span></p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                            <div>{/* This would be the dropzone for the Hero image */}
                                {mypgMarksheet === "" || mypgMarksheet === "*" || mypgDegree === null || mypgMarksheet === undefined ?
                                    <Dropzone onDrop={(acceptedFiles) => {
                                        const obj5 = new FormData();
                                        obj5.append("pgMarksheet", acceptedFiles[0]);
                                        //start for calling first api
                                        fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                            method: 'put',
                                            body: obj5,
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                //start for get all newIdeneitiydocument 
                                                fetch(process.env.REACT_APP_SERVER_URL + 'student/educationDocument', {
                                                    method: 'get',
                                                    //  body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmypgDegree(data.studentEducationDocument.pgDegree)
                                                        setmypgDegreeConsolidatedMarksheet(data.studentEducationDocument.pgDegreeConsolidatedMarksheet)
                                                        setmypgMarksheet(data.studentEducationDocument.pgMarksheet)

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
                                                    Drop hero image here, or click to select file
                                                </span>
                                            </div>
                                        )}
                                    </Dropzone>
                                    :
                                    <div>
                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalpgMarksheetConsolidate1">
                                            View
                                        </button>
                                        <button type="button"
                                            onClick={() => onDeletepgMarksheetConsolidateHandle()}
                                            //  onClick={this.onDeletecvHandle} 
                                            className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                        <div className="modal" id="myModalpgMarksheetConsolidate1">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    {/* <!-- Modal Header --> */}
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">PG Marksheet</h4>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    <img src={mypgMarksheet} alt="pgDegreeConsolidatedMarksheet" />

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
                    {/* end for PG Consolidated Marksheet */}
                </div>



            </div>
        </div>



    );
}

export default NewIdentityDocument;