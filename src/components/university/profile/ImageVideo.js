
import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from '../../Home/Loader';



const ImageVideo = () => {
    // start for image video
    const [universityId, setuniversityId] = useState([]);
    const [mycoverPic, setmycoverPic] = useState([]);

    // const [setaddWidth, setaddWidth] = useState([]);

    // end for image video


    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();
    const [mylogo, setmylogo] = useState();
    const [mylogoBack, setmylogoBack] = useState();
    const [mycv, setmycv] = useState();
    const [deleteId, setdeleteId] = useState();
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [showSweetAlert, setshowSweetAlert] = useState("0");
    const [pikshowSweetAlert, setpikshowSweetAlert] = useState("0");


    const [myimageVideo, setmyimageVideo] = useState([{
        link: "", type: ""

    }])
    const [loader, setmyloader] = useState("false");

    useEffect(() => {

        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');
        setMounted(mounted)
        setuniversityId(universityId)




        //start for get all newIdeneitiydocument 

        fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/image', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                setmylogo(data.universityImage.logo)
                setmycoverPic(data.universityImage.coverPic)


            })
        //end for get all newIdeneitiydocument 

        //start for get all newIdeneitiydocument 

        fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/imageVideos ', {
            method: 'get',
            headers: { 'Authorization': mounted },
        })
            .then(response => response.json())
            .then(data => {

                setmyimageVideo(data.universityImageVideos)
            })
        //end for get all newIdeneitiydocument 
    }, [])


    function onDeletelogoHandle(value) {
        setdeleteId(value)
        setshowSweetAlert("1")


    }
    function onDeletecoverPikHandle(value) {
        setdeleteId(value)
        setpikshowSweetAlert("1")


    }

    let handleDeleteClick = (value) => {
        setshowSweetAlert("1")
        setdeleteId(value)
    }
    return (
        <div>
            <div className="card">

                <a className="card-header" data-bs-toggle="collapse" href="#collapse8"><strong>8</strong>
                    Images/Video
                </a>
                <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        {loader === "true" ?

                            <Loader />

                            : null}

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
                                setmyloader("true")

                                // start for delete


                                //start for calling first api

                                fetch(process.env.REACT_APP_SERVER_URL + 'university/imageVideos/' + deleteId, {
                                    method: 'delete',

                                    headers: { 'Authorization': mounted },
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        setmyloader("false")

                                        setsuccessMessage("Deleted Successfully")
                                        setTimeout(() => setsubmitSuccess(""), 3000);
                                        setsubmitSuccess(1)

                                        //start for get all newIdeneitiydocument 
                                        fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/imageVideos ', {
                                            method: 'get',
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {

                                                setmyimageVideo(data.universityImageVideos)
                                                // setmycoverPic(data.universityImageVideos.coverPic)


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


                        {pikshowSweetAlert === "1" ? <SweetAlert
                            warning
                            showCancel
                            confirmBtnText="Yes, delete it!"
                            confirmBtnBsStyle="danger"

                            title="Are you sure?"
                            onConfirm={(value) => {
                                setpikshowSweetAlert("0");
                                setmyloader("true")

                                // start for delete


                                //start for calling first api
                                const obj6 = new FormData();
                                obj6.append(deleteId, "*");



                                fetch(process.env.REACT_APP_SERVER_URL + 'university/image', {
                                    method: 'put',
                                    body: obj6,
                                    headers: { 'Authorization': mounted },
                                })
                                    .then(response => response.json())
                                    .then(data => {
                                        setmyloader("false")

                                        setsuccessMessage("Deleted Successfully")
                                        setTimeout(() => setsubmitSuccess(""), 3000);
                                        setsubmitSuccess(1)

                                        //start for get all newIdeneitiydocument 
                                        fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/image ', {
                                            method: 'get',
                                            headers: { 'Authorization': mounted },
                                        })
                                            .then(response => response.json())
                                            .then(data => {
                                                setmylogo(data.universityImage.logo)
                                                setmycoverPic(data.universityImage.coverPic)




                                            })
                                        //end for get all newIdeneitiydocument 
                                    })
                                // end for delete





                            }}
                            onCancel={() =>
                                setpikshowSweetAlert("0")

                            }
                            focusCancelBtn
                        >

                        </SweetAlert>
                            : null
                        }
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label><b>Logo(size 250*250px)</b></label><br />


                                    <div className="documentUpload ant-upload-picture-card-wrapper" >
                                        <div className="ant-upload-list ant-upload-list-picture-card">
                                        </div>
                                        {/* start for logo */}
                                        <div className="upload_doc d-flex flex-wrap align-items-center row">



                                            {/* //start for cv */}
                                            {mylogo === "" || mylogo === "*" || mylogo === null || mylogo === undefined ?
                                                <Dropzone onDrop={(acceptedFiles) => {
                                                    setmyloader("true")

                                                    const obj5 = new FormData();
                                                    obj5.append("logo", acceptedFiles[0]);
                                                    //start for calling first api

                                                    fetch(process.env.REACT_APP_SERVER_URL + 'university/image', {
                                                        method: 'put',
                                                        body: obj5,
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setmyloader("false")
                                                            //start for get all newIdeneitiydocument 
                                                            fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/image', {
                                                                method: 'get',
                                                                //  body: obj5,
                                                                headers: { 'Authorization': mounted },
                                                            })
                                                                .then(response => response.json())
                                                                .then(data => {
                                                                    setmylogo(data.universityImage.logo)
                                                                    setmylogoBack(data.universityImage.logoBack)

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
                                                :
                                                <div>






                                                    <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">

                                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                            <button type="button" className="btn btn-outline-primary btn-view" data-bs-toggle="modal" data-bs-target="#myModallogo1">
                                                                View
                                                            </button>
                                                        </div>
                                                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                            <button type="button" onClick={() => onDeletecoverPikHandle("logo")} className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                                                        </div>
                                                    </div>








                                                    <div className="modal" id="myModallogo1">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">

                                                                {/* <!-- Modal Header --> */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">logo </h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>

                                                                <img src={mylogo} alt="logoback" />

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                            {/* //end for logo */}



                                        </div>
                                        {/* end for logo */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label><b>Cover Pict(size 1920*377px)</b></label><br />
                                    <div className="documentUpload ant-upload-picture-card-wrapper" >
                                        <div className="ant-upload-list ant-upload-list-picture-card">
                                        </div>
                                        {/* start for cover pik */}
                                        {
                                            mycoverPic === "" || mycoverPic === "*" || mycoverPic === null || mycoverPic === undefined ?
                                                <Dropzone onDrop={(acceptedFiles) => {
                                                    setmyloader("true")

                                                    const obj5 = new FormData();
                                                    obj5.append("coverPic", acceptedFiles[0]);
                                                    //start for calling first api

                                                    fetch(process.env.REACT_APP_SERVER_URL + 'university/image', {
                                                        method: 'put',
                                                        body: obj5,
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {
                                                            setmyloader("false")

                                                            //start for get all newIdeneitiydocument 
                                                            fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/image', {
                                                                method: 'get',
                                                                //  body: obj5,
                                                                headers: { 'Authorization': mounted },
                                                            })
                                                                .then(response => response.json())
                                                                .then(data => {
                                                                    setmylogo(data.universityImage.logo)

                                                                    setmycoverPic(data.universityImage.coverPic)

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
                                                :
                                                <div>
                                                    <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                                                            <button type="button" className="btn btn-outline-primary btn-view" data-bs-toggle="modal" data-bs-target="#myModalcoverpik1">
                                                                View
                                                            </button>
                                                        </div>
                                                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">
                                                            <button type="button" onClick={() => onDeletecoverPikHandle("coverPic")} className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                                                        </div>
                                                    </div>


                                                    <div className="modal" id="myModalcoverpik1">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">

                                                                {/* <!-- Modal Header --> */}
                                                                <div className="modal-header">
                                                                    <h4 className="modal-title">Cover Pik </h4>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                                </div>

                                                                <img src={mycoverPic} alt="logoback" />

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                        }
                                        {/* end for cover pik */}
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* // start for images and videos */}
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label><b>Images(size 250*250px)</b></label><br />

                                    <div className="documentUpload ant-upload-picture-card-wrapper" >
                                        <div className="ant-upload-list ant-upload-list-picture-card">
                                        </div>
                                        {/* start for logo */}
                                        <div className="upload_doc d-flex flex-wrap align-items-center row">




                                            <Dropzone onDrop={(acceptedFiles) => {
                                                setmyloader("true")

                                                const obj5 = new FormData();
                                                obj5.append("link", acceptedFiles[0]);
                                                obj5.append("type", "image");

                                                //start for calling first api

                                                fetch(process.env.REACT_APP_SERVER_URL + 'university/imageVideos', {
                                                    method: 'post',
                                                    body: obj5,
                                                    headers: { 'Authorization': mounted },
                                                })
                                                    .then(response => response.json())
                                                    .then(data => {
                                                        setmyloader("false")

                                                        fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/imageVideos ', {
                                                            method: 'get',
                                                            headers: { 'Authorization': mounted },
                                                        })
                                                            .then(response => response.json())
                                                            .then(data => {

                                                                setmyimageVideo(data.universityImageVideos)
                                                            })
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


                                            {/* //end for logo */}



                                        </div>
                                        {/* end for logo */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label><b>Videos(size 1920*377px)</b></label><br />
                                    <div className="documentUpload ant-upload-picture-card-wrapper" >
                                        <div className="ant-upload-list ant-upload-list-picture-card">
                                        </div>
                                        {/* start for cover pik */}
                                        <Dropzone onDrop={(acceptedFiles) => {
                                            setmyloader("true")

                                            const obj5 = new FormData();


                                            obj5.append("link", acceptedFiles[0]);
                                            obj5.append("type", "video");

                                            //start for calling first api

                                            fetch(process.env.REACT_APP_SERVER_URL + 'university/imageVideos', {
                                                method: 'post',


                                                body: obj5,
                                                headers: { 'Authorization': mounted },
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    setmyloader("false")

                                                    fetch(process.env.REACT_APP_SERVER_URL + 'university/' + universityId + '/imageVideos ', {
                                                        method: 'get',
                                                        headers: { 'Authorization': mounted },
                                                    })
                                                        .then(response => response.json())
                                                        .then(data => {

                                                            setmyimageVideo(data.universityImageVideos)
                                                        })
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


                                        {/* end for cover pik */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* // end for images and videos */}
                        {/* start for showing all images and video */}
                        <div className="col-md-12 ">
                            <div  >
                                <h5>All Images & Video</h5><br />
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>

                                            <th>Image/Video</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myimageVideo.map((element, index) => {

                                            return (

                                                <tr key={index}>
                                                    {/* <td> {element.point}</td> */}
                                                    <td>
                                                        {element.type === "image" ?
                                                            <img style={{
                                                                width: "99px",
                                                                height: "68px"
                                                            }} src={element.link} alt="passportback" />
                                                            :

                                                            <video width="320" height="240" controls>

                                                                <source src={element.link} type="video/ogg" />

                                                            </video>

                                                        }

                                                        {/* 
                                                                    <img style={{
                                                                        width: "66px",
                                                                        height: "50px"
                                                                    }} src={element.link} alt="passportback" /> */}
                                                    </td>
                                                    <td>


                                                        {/* <button title="Edit" className="btn btn-success btn-sm " onClick={() => handleEditClick(element._id)}><i className="fas fa-pen "></i></button> */}
                                                        <button title="Delete" className="btn btn-danger btn-sm vbtn" onClick={() => handleDeleteClick(element._id)}><i class="fas fa-trash-alt"></i></button>

                                                    </td>
                                                </tr>

                                            )
                                        })}


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* end for showing all images and video */}
                    </div>
                </div>

            </div >


        </div >
    );
}

export default ImageVideo
