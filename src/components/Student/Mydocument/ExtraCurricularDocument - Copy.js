import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';


const ExtraCurricularDocument = () => {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();

    const [mymarksheet12, setmymarksheet12] = useState();
    const [textflag, settextflag] = useState("none");

    const [myfile, setmyfile] = useState();
    const [activity, setactivity] = useState();

    const [activitytype, setactivitytype] = useState("none");
    const [submitactivity, setsubmitactivity] = useState("none");




    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)

        //start for get all newIdeneitiydocument 
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
        //end for get all newIdeneitiydocument 
    }, [])


    function handleChange(e) {
        // alert(e.target.value)
        setactivity(e.target.value)
      
    }

    function ToggleButton() {
        if (textflag == "none") {
            settextflag("inline")
        }
        else {
            settextflag("none")
        }
    }

    function onDeletefileHandle() {
        const obj5 = new FormData();
        obj5.append("activity", "none");
        obj5.append("file", "*");


        //start for calling first api
        fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
            method: 'put',
            body: obj5,
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                //start for get all newIdeneitiydocument 
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
                //end for get all newIdeneitiydocument 
            })
    }

    return (
        <div className="card">
            <a className="card-header" data-bs-toggle="collapse" href="#collapsefive">
                <strong>5</strong>  Extra Curricular Document
            </a>
            <div id="collapsefive" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    <div className="form form_doc">
                        <div className="row pl-4 pr-4 mt-3">
                            <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                <p>I haven't done any extra curricular activites</p>
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
                                        <select name="activity" value={activity}
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
                                    {/* //start for cv */}
                                    {myfile === "" || myfile === "*" || myfile === null || myfile === undefined ?
                                        <Dropzone onDrop={(acceptedFiles) => {
                                            const obj5 = new FormData();
                                            obj5.append("file", acceptedFiles[0]);
                                            obj5.append("activity", activity);
                                            //start for calling first api
                                            fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
                                                method: 'put',
                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    //start for get all newIdeneitiydocument 
                                                    fetch(process.env.REACT_APP_SERVER_URL + 'student/extraCurricularDocument', {
                                                        method: 'get',
                                                        //  body: obj5,
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setactivity(data.studentExtraCurricularDocument.activity)
                                                            setsubmitactivity(data.studentExtraCurricularDocument.activity)

                                                            setmyfile(data.studentExtraCurricularDocument.file)


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
                                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalfile1">
                                                View
                                            </button>
                                            <button type="button"
                                                onClick={() => onDeletefileHandle()}
                                                //  onClick={this.onDeletecvHandle} 
                                                className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>

                                            <div className="modal" id="myModalfile1">
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

export default ExtraCurricularDocument;