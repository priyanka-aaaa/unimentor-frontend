import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';
import axios from 'axios';

class ImageVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //start for primary information
            logo: "",
            coverPic: "",
            image: "",
            universityId: "",
            mylogo: "",
            mycoverPic: "",
            imagesVideo: [],
        };
        this.submitImages = this.submitImages.bind(this);
        //start for primary information

    }
    componentWillMount() {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.university.email;
            var universityId = mydata.data.university._id;

            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken });
            this.setState({ universityId: universityId });
        }
    }
    componentDidMount() {
        var myuniversityId = this.state.universityId;
        //start for call api
        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityId + '/image', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {
                this.setState({
                    mylogo: res.data.universityImage.logo,
                    mycoverPic: res.data.universityImage.coverPic,
                });
                if (res.data.success === true) {
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //start for fetting all images

        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityId + '/imageVideos', { headers: { 'Authorization': this.state.mounted } })
            .then(res => {
                this.setState({
                    imagesVideo: res.data.universityImageVideos,

                });
                if (res.data.success === true) {
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
        //end for fetting all images
    };
    logoHandleDrop = (myfiles) => {
        this.setState({ logo: myfiles[0] });
    }
    onFileChangeUniversityLogo = eventpassportback => {
        this.setState({ logo: eventpassportback.target.files[0] });


    };
    coverPikHandleDrop = (mycoverfiles) => {
        this.setState({ coverPic: mycoverfiles[0] });

    }

    onFileChangeCoverPik = eventcoverpik => {
        this.setState({ coverPic: eventcoverpik.target.files[0] });


    };
    imageHandleDrop = (mycoverfiles) => {
        this.setState({ image: mycoverfiles[0] });

    }
    onFileChangeImage = eventcoverpik => {
        this.setState({ image: eventcoverpik.target.files[0] });


    };
    submitImages(event) {
        event.preventDefault();
        const obj1 = new FormData();
        obj1.append("logo", this.state.logo);
        obj1.append("coverPic", this.state.coverPic);
        obj1.append("image", this.state.image);



        axios.put(process.env.REACT_APP_SERVER_URL + 'university/image ', obj1, { headers: { 'Authorization': this.state.mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    alert("address update successfully");
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });
    }
    renderElementpassportBack() {
        if (this.state.mylogo === '' || this.state.mylogo === undefined) {
            return <DragAndDrop handleDrop={this.logoHandleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadUniversitylogo">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeUniversityLogo} id="uploadUniversitylogo" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                    <section className="file-upload">
                        <div className="container">
                            <div className="uploads">
                                <div className="drop_lower" id="gallery"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </DragAndDrop>

        }
        else {
            return <div>
                <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="pl-4 pr-4 pt-0 pb-0">Passport <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        {/* <img src={this.state.mypassportBack} alt="passportback" /> */}
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalPassportback">
                            View
                        </button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    {/* <!-- The Modal --> */}
                    <div className="modal" id="myModalPassportback">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Logo</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <img src={this.state.mylogo} alt="passportback" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>;
        }
    }
    renderElementcoverpik() {
        if (this.state.mycoverPic === '' || this.state.mycoverPic === undefined) {
            return <DragAndDrop handleDrop={this.coverPikHandleDrop}>
                <section className="drag-and-drop-new-section">
                    <div className="containerx" id="drop_section">
                        <label htmlFor="files">
                            <div id="drag" className="drag-and-drop-new class_add">
                                <div className="row">
                                    <div className="col-md-12 email-con">
                                        <label htmlFor="uploadcoverpik">
                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                            <input type="file" onChange={this.onFileChangeCoverPik} id="uploadcoverpik" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </label>

                    </div>
                    <section className="file-upload">
                        <div className="container">
                            <div className="uploads">
                                <div className="drop_lower" id="gallery"></div>
                            </div>
                        </div>
                    </section>
                </section>
            </DragAndDrop>

        }
        else {
            return <div>
                <div className="upload_doc d-flex flex-wrap align-items-center row mb-3">
                    {/* <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <p className="pl-4 pr-4 pt-0 pb-0">Passport <span className="text-danger"> *</span></p>
                    </div> */}
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        {/* <img src={this.state.mypassportBack} alt="passportback" /> */}
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#myModalcoverPik">
                            View
                        </button>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 p-0 text-center">


                        <button type="button" className="btn btn-outline-danger">  <i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                    {/* <!-- The Modal --> */}
                    <div className="modal" id="myModalcoverPik">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* <!-- Modal Header --> */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Cover Pik</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                <img src={this.state.mycoverPic} alt="passportback" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>;
        }
    }
    render() {
        return (
            <div>


                <div className="card">

                    <a className="card-header" data-bs-toggle="collapse" href="#collapse8"><strong>8</strong>
                        Images/Video
                    </a>
                    <div id="collapse8" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Logo(size)</label><br />


                                            <span className="documentUpload ant-upload-picture-card-wrapper" >
                                                <div className="ant-upload-list ant-upload-list-picture-card">
                                                </div>
                                                {this.renderElementpassportBack()}

                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Cover Pict(size)</label><br />
                                            <span className="documentUpload ant-upload-picture-card-wrapper" >
                                                <div className="ant-upload-list ant-upload-list-picture-card">
                                                </div>
                                                {this.renderElementcoverpik()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-10">
                                        <label>All Images</label><br />
                                        <span className="documentUpload ant-upload-picture-card-wrapper" >
                                            <div className="ant-upload-list ant-upload-list-picture-card">
                                            </div>
                                            {/* <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                <span tabIndex="0" className="ant-upload" role="button">
                                                    <input type="file" accept="" />
                                                    <p>
                                                        Upload/Drag &amp; Drop here</p>
                                                </span>
                                            </div> */}
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Image</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                { this.state.imagesVideo.map((element) =>

                                                      

                                                            <tr>
                                                                  <td> {element._id}</td>
                                                                <td> <img src={element.link} alt="passportback" /></td>
                                                               <td></td>

                                                            </tr>

)}
                                                </tbody>


                                            </table>

                                           


                                            <DragAndDrop handleDrop={this.imageHandleDrop}>
                                                <section className="drag-and-drop-new-section">
                                                    <div className="containerx" id="drop_section">
                                                        <label htmlFor="files">
                                                            <div id="drag" className="drag-and-drop-new class_add">
                                                                <div className="row">
                                                                    <div className="col-md-12 email-con">
                                                                        <label htmlFor="uploaduniversityImage">
                                                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                                                            <input type="file" onChange={this.onFileChangeImage} id="uploaduniversityImage" />
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label>

                                                    </div>
                                                    <section className="file-upload">
                                                        <div className="container">
                                                            <div className="uploads">
                                                                <div className="drop_lower" id="gallery"></div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </section>
                                            </DragAndDrop>
                                        </span>
                                    </div>
                                    <div className="col-md-2">

                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6 text-right">
                                            <button type="submit"
                                                onClick={this.submitImages}
                                                className="btn btn-secondary">Save
                                            </button>
                                            <button type="button" data-bs-toggle="collapse" href="#collapse3" className="btn btn-success">Save &
                                                Next</button>
                                        </div>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ImageVideo;