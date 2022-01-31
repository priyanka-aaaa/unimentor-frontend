import React, { Component } from 'react';
import DragAndDrop from './DragAndDrop';
import axios from 'axios';
class RankingEdit extends Component {
    constructor() {
        super();
        this.state = {
            //start for primary information
            agencyName: "",
            rank: "",
            year: "",
            onFileChangeLogo: "",
            certificate: "",
            universityId: "",

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
            var universityId = mydata.data.university._id;

            this.setState({ universityId: universityId });
            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken });
        }
    }
    componentDidMount() {
        { console.log("this.props.editId") }
        { console.log(this.props.editId) }
        var rankingId = this.props.editId
        this.setState({  
            rankingId:rankingId
        });
        var myuniversityId = this.state.universityId;
        //start for call api

        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityId + '/rankings/' + rankingId, { headers: { 'Authorization': this.state.mounted } })
            .then(res => {
                console.log("res.data.universityRanking.agencyName")
                console.log(res.data.universityRanking.agencyName)
                this.setState({

                    agencyName: res.data.universityRanking.agencyName,
                    rank: res.data.universityRanking.rank,
                    year: res.data.universityRanking.year,
                    certificate: res.data.universityRanking.certificate,
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

    };

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

        axios.put(process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings/' + this.state.rankingId, { headers: { 'Authorization': this.state.mounted } })

        // axios.put(process.env.REACT_APP_SERVER_URL + 'university/rankings/'+, obj1, { headers: { 'Authorization': this.state.mounted } })
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

                <form>
                    Edit Ranking
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
                            <p>Certificate</p>
                            <div>  <img src={this.state.certificate} alt="passportback" /></div>

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


                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6 text-right">

                                <button type="submit"
                                    onClick={this.submitRanking}
                                    className="btn btn-secondary">Add
                                </button>

                            </div>
                        </div>
                    </div>
                </form>


            </div>

        );
    }
}

export default RankingEdit;