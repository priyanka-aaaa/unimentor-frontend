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
            image: ""
        };
        this.submitImages = this.submitImages.bind(this);
        //start for primary information

    }
    componentWillMount() {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken });
        }
    }

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



        axios.put(process.env.REACT_APP_SERVER_URL+'university/image ', obj1, { headers: { 'Authorization': this.state.mounted } })
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
    render() {
        return (
            <div>
                <div className="card">

                    <a className="card-header" data-bs-toggle="collapse" href="#collapse7"><strong>7</strong>
                        Images/Video
                    </a>
                    <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Logo(size)</label><br />
                                            <span className="documentUpload ant-upload-picture-card-wrapper" >
                                                <div className="ant-upload-list ant-upload-list-picture-card">
                                                </div>
                                                <DragAndDrop handleDrop={this.logoHandleDrop}>
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

                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Cover Pict(size)</label><br />
                                            <span className="documentUpload ant-upload-picture-card-wrapper" >
                                                <div className="ant-upload-list ant-upload-list-picture-card">
                                                </div>
                                                <DragAndDrop handleDrop={this.coverPikHandleDrop}>
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
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-10">
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