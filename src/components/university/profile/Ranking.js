import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';
import axios from 'axios';
class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //start for primary information
            agencyName: "",
            rank: "",
            year: "",
            onFileChangeLogo: "",
            certificate: "",
        };
        //start for primary information
        this.changeagencyName = this.changeagencyName.bind(this);
        this.changerank = this.changerank.bind(this);
        this.changeyear = this.changeyear.bind(this);
        this.onFileChangeLogo = this.onFileChangeLogo.bind(this);
        this.submitRanking = this.submitRanking.bind(this);
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
        this.setState({ certificate: myfiles[0] });
    }
    onFileChangeLogo = eventpassportback => {
        this.setState({ certificate: eventpassportback.target.files[0] });
    };
    changeagencyName(event) {
        this.setState({ agencyName: event.target.value });
    }
    changerank(event) {
        this.setState({ rank: event.target.value });
    }
    changeyear(event) {
        this.setState({ year: event.target.value });
    }
    submitRanking(event) {
        event.preventDefault();
        const obj1 = new FormData();
        // agencyName
        // rank
        // year
        // onFileChangeLogo

        obj1.append("agencyName", this.state.agencyName);
        obj1.append("rank", this.state.rank);
        obj1.append("year", this.state.year);
        obj1.append("certificate", this.state.certificate);


        axios.put(process.env.REACT_APP_SERVER_URL+'university/61dab27e05671a193cca5f81/ranking', obj1, { headers: { 'Authorization': this.state.mounted } })
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
                    <a className="card-header" data-bs-toggle="collapse" href="#collapse6"><strong>6</strong>
                        Ranking
                    </a>
                    <div id="collapse6" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <div className="from-block">
                                <form>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col">
                                                <label htmlFor="fname" className="form-label">Agency Name</label>
                                                <input type="text" className="form-control" placeholder="" name="agname"
                                                    value={this.state.agencyName} onChange={this.changeagencyName}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="lname" className="form-label">Rank</label>
                                                <input type="text" className="form-control" placeholder="" name="rank"
                                                    value={this.state.rank} onChange={this.changerank}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="lname" className="form-label">Year</label>
                                                <input type="text" className="form-control" placeholder="" name="rank"
                                                    value={this.state.year} onChange={this.changeyear}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <DragAndDrop handleDrop={this.logoHandleDrop}>
                                                <section className="drag-and-drop-new-section">
                                                    <div className="containerx" id="drop_section">
                                                        <label htmlFor="files">
                                                            <div id="drag" className="drag-and-drop-new class_add">
                                                                <div className="row">
                                                                    <div className="col-md-12 email-con">
                                                                        <label htmlFor="uploadlogo">
                                                                            <span className="myuploadbutton">   upload/Drag & Drop Here</span>
                                                                            <input type="file" onChange={this.onFileChangeLogo} id="uploadlogo" />
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
                                            {/* <div className="col">
                                                <span className="documentUpload ant-upload-picture-card-wrapper">
                                                    <div className="ant-upload-list ant-upload-list-picture-card">
                                                    </div>
                                                    <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                        <span tabIndex="0" className="ant-upload" role="button">
                                                            <input type="file" accept="" />
                                                            <p>
                                                                Upload/Drag &amp; Drop here</p>
                                                        </span>
                                                    </div>
                                                </span>
                                            </div> */}

                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6 text-right">
                                                <button type="button" className="btn btn-success ">Add New
                                                </button>
                                                <button type="submit"
                                                    onClick={this.submitRanking}
                                                    className="btn btn-secondary">Save
                                                </button>
                                                <button type="button" className="btn btn-success " data-bs-toggle="collapse" href="#collapse7">Save &
                                                    Next</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default Ranking;