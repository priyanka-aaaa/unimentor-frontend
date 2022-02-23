import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";




function WorkExperienceDocument(props) {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [companyName, setcompanyName] = useState("");
    const [mydocument, setmydocument] = useState();

    const [submitcompanyName, setsubmitcompanyName] = useState("none");
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [viewDetail, setviewDetail] = useState("none");
    const [document, setdocument] = useState("inline");
    const [salutation, setsalutation] = useState("");
    const [workStatus, setworkStatus] = useState("");
    const [workType, setworkType] = useState("");
    const [organization, setorganization] = useState("");
    const [start, setstart] = useState("");
    const [ended, setended] = useState("");
    const [designation, setdesignation] = useState("");
    const [role, setrole] = useState("");
    const [country, setcountry] = useState("");
    const [city, setcity] = useState("");

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
    function handleYes() {
        setviewDetail("none")
        setdocument("inline")
    }
    function handleNo() {
        setviewDetail("inline")
        setdocument("none")
    }
    function onDeletefileHandle() {
        const obj5 = new FormData();
        obj5.append("companyName", " ");
        obj5.append("document", "*");


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
    }

    function handlesubmit() {
        const obj7 = new FormData();

        obj7.append("companyName", companyName);
        obj7.append("workStatus", workStatus);
        obj7.append("workType", workType);
        obj7.append("organization", organization);
        obj7.append("start", start);
        obj7.append("ended", ended);
        obj7.append("designation", designation);
        obj7.append("role", role);
        obj7.append("country", country);
        obj7.append("city", city);





        //start for calling first api
        fetch(process.env.REACT_APP_SERVER_URL + 'student/experienceDocument', {
            method: 'put',
            body: obj7,
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

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
    }
    return (
        <div className="card">

            <a className="card-header" data-bs-toggle="collapse" href="#collapse3">
                <strong>3</strong> Work Experience Documents
            </a>
            <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                <div className="card-body">
                    <div className="form form_doc">
                        <div className="row">
                            <div className="col-md-8">
                                <p>I don't have any work experience</p>
                            </div>
                            <div className="col-md-4 text-right">
                                <label className="switch3">
                                    <input type="checkbox" />
                                    <span className="slider3 round3"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">


                                <div className="form form_doc document">
                                    <div className="add-more">
                                        <div className="upload_doc d-flex flex-wrap align-items-center row ">
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">Comapny Name</div>
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">Have Document?</div>
                                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">Action</div>
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
                                            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                                                <div role="group" className="doc_choice btn-group">
                                                    <button type="button" className="selected btn btn-secondary"
                                                        onClick={() => handleYes()} >Yes</button>
                                                    <button type="button" className="btn btn-secondary" onClick={() => handleNo()} >No</button>
                                                </div>
                                            </div>

                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 text-left">
                                                {/* start for add details */}
                                                {/* 
                                                <div style={{ display: viewDetail }} >
                                                    <button data-bs-toggle="modal" data-bs-target="#workexpModal" type="button" class="btn btn-secondary">Add Details</button>
                                                </div> */}
                                                {/* end for add details */}
                                                <div style={{ display: viewDetail }} >
                                                            <button data-bs-toggle="modal" data-bs-target="#workexpModal" type="button" class="btn btn-secondary">Add Details</button>
                                                        </div>
                                                {/* //start for cv */}
                                                {mydocument === "" || mydocument === "*" || mydocument === null || mydocument === undefined ?
                                                    <div>
                                                        
                                                        <Dropzone onDrop={(acceptedFiles) => {
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
                                                                <div {...getRootProps({ className: 'dropzone' })} style={{ display: document }}>
                                                                    <input {...getInputProps()} />
                                                                    <span style={{ fontSize: ".8rem" }}>
                                                                        Drop hero image here, or click to select file
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </Dropzone>
                                                    </div>
                                                    :
                                                    <div>
                                                           <div style={{ display: document }} >
                                                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalfile1">
                                                            View
                                                        </button>
                                                        <button type="button"
                                                            onClick={() => onDeletefileHandle()}
                                                            //  onClick={this.onDeletecvHandle} 
                                                            className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
</div>
                                                        <div className="modal" id="myModalfile1">
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
                                                }
                                                {/* //end for file */}

                                            </div>

                                        </div>
                                    </div>




                                    {/* <!-- The Modal --> */}
                                    <div className="modal" id="workexpModal">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                                {/* <!-- Modal Header --> */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Add Work Experience Details</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                </div>

                                                {/* <!-- Modal body --> */}
                                                <form>
                                                    <div className="modal-body">
                                                        <div className="form-block">

                                                            <div className="row">
                                                                <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                    <div className="form-group">
                                                                        <label>Work Status <span className="text-danger">
                                                                            *</span></label><br />
                                                                        <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                            <input name="is_current_job_0"
                                                                                type="radio"
                                                                                className="ant-radio-input"
                                                                                value={workStatus}
                                                                                onChange={(e) => setworkStatus(e.target.value)}
                                                                                value="Ongoing"
                                                                            />
                                                                            <span className="ant-radio-inner"></span></span><span>Ongoing </span></label>

                                                                        <label className="ant-radio-wrapper"><span className="ant-radio">
                                                                            <input name="is_current_job_0"
                                                                                type="radio"
                                                                                className="ant-radio-input" value="1"
                                                                                value={workStatus}
                                                                                onChange={(e) => setworkStatus(e.target.value)}
                                                                                value="Completed"
                                                                            />
                                                                            <span className="ant-radio-inner"></span></span><span>Completed </span>
                                                                        </label>




                                                                        <br />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                    <div className="form-group"><label htmlFor="work_type">Work Type <span className="text-danger"> *</span></label><select
                                                                        value={workType}
                                                                        onChange={(e) => setworkType(e.target.value)}
                                                                        className="form-control" id="work_type" name="work_type">
                                                                        <option >Select</option>
                                                                        <option value="Full-time">Full-time</option>
                                                                        <option value="Part-time">Part-time</option>
                                                                        <option value="Internship">Internship</option>
                                                                    </select></div>
                                                                </div>
                                                                <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                                                                    <div className="form-group"><label htmlFor="company_name">Name of
                                                                        Organization <span className="text-danger">
                                                                            *</span></label><input type="text"
                                                                                value={organization}
                                                                                onChange={(e) => setorganization(e.target.value)}
                                                                                className="form-control" id="company_name" name="organization" placeholder="Name of Organization" /></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label htmlFor="start_from">Started From</label>
                                                                        <input type="date"
                                                                            value={start}
                                                                            onChange={(e) => setstart(e.target.value)}
                                                                            className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group">
                                                                        <label htmlFor="start_from">Ended On</label>
                                                                        <input
                                                                            value={ended}
                                                                            onChange={(e) => setended(e.target.value)}
                                                                            type="date" className="form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group"><label htmlFor="work_designation">Designation</label><input type="text"
                                                                        value={designation}
                                                                        onChange={(e) => setdesignation(e.target.value)}
                                                                        className="form-control" id="work_designation" name="designation" placeholder="Designation" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group"><label htmlFor="role_description">Job
                                                                        Role</label><input type="text"
                                                                            value={role}
                                                                            onChange={(e) => setrole(e.target.value)}
                                                                            className="form-control" id="role_description" name="role_description" placeholder="Job Role" /></div>
                                                                </div>
                                                            </div>




                                                            <div className="row">
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <label>Country</label>
                                                                    <select
                                                                        value={country}
                                                                        onChange={(e) => setcountry(e.target.value)}
                                                                        className="form-control" id="job_country" name="job_country">
                                                                        <option >Select Country</option>
                                                                        <option value="India">India</option>
                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                        <option value="Albania">Albania</option>
                                                                        <option value="Algeria">Algeria</option>
                                                                        <option value="American Samoa">American Samoa</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                    <div className="form-group"><label htmlFor="job_city">City/Town</label><input
                                                                        value={city}
                                                                        onChange={(e) => setcity(e.target.value)}
                                                                        type="text" className="form-control" id="job_city" placeholder="City/Town" name="job_city" /></div>
                                                                </div>

                                                            </div>
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6"></div>
                                                                    <div className="col-md-6 text-right">



                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>

                                                    {/* <!-- Modal footer --> */}
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn  btn-success" onClick={() => handlesubmit()}
                                                        >Save
                                                        </button>
                                                    </div>
                                                </form>

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