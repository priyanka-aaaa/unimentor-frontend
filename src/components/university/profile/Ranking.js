import React, { Component } from 'react';

import RankingEdit from './RankingEdit';
import DragAndDrop from './DragAndDrop';
import axios from 'axios';

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "",
            rankingId: "",
            mounted: "",
            files: [
            ],
            data: [],
            editId: "",
            width: "",
            editnewcomponent: "0",
            addWidth: "0",
            addnewcomponent: 1,
            successMessage: "",
            submitSuccess: "",
            test: "",
            agencyName: "",
            rank: "",
            year: "",
            onFileChangeLogo: "",
            certificate: "",
            universityId: "",
            myUgDegree: "",
            myugConsolidatedMarksheet: "",
            myugMarksheet: "",




        };
        //start for primary information
        this.handleAdd = this.handleAdd.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.closeaddbox = this.closeaddbox.bind(this);
        this.submitAddRanking = this.submitAddRanking.bind(this);
        this.changeagencyName = this.changeagencyName.bind(this);
        this.changerank = this.changerank.bind(this);
        this.changeyear = this.changeyear.bind(this);
        this.onFileChangeLogo = this.onFileChangeLogo.bind(this);
        this.submitEditRanking = this.submitEditRanking.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.ddhandleAddClick = this.ddhandleAddClick.bind(this);

        
    }

    componentWillMount() {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            var user_email = mydata.data.university.email;
            var universityId = mydata.data.university._id;
            var mytoken = mydata.data.token;
            this.setState({ mounted: mytoken, universityId: universityId });
        }
    }
    componentDidMount() {    //start for call api
        // start for  university ranking
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': this.state.mytoken }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.universityRankings })

            })
        // end for  university ranking
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
    ddhandleAddClick(){
        this.setState({  width: "0px",addWidth:"0px"})

    }
    handleAddClick(value) {
        this.setState({ editId: value, width: "1600px", editnewcomponent: 1, rankingId: value })

        //start for call api

        axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings/' + value, { headers: { 'Authorization': this.state.mounted } })
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

    }
    handleAdd() {

        this.setState({ addWidth: "1600px", addnewcomponent: 1 })

    }
    closeaddbox() {
        this.setState({ width: "0px", addWidth: "0px" })


    }
    submitAddRanking(event) {
        event.preventDefault();
        this.setState({ addWidth: "0px" })

        const obj1 = new FormData();
        obj1.append("agencyName", this.state.agencyName);
        obj1.append("rank", this.state.rank);
        obj1.append("year", this.state.year);
        obj1.append("certificate", this.state.certificate);

        // start for university ranking
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/rankings';
        fetch(url2, {
            method: 'post',
            headers: { 'Authorization': this.state.mounted },
            body: obj1
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ successMessage: "Ranking Added", submitSuccess: 1, addWidth: "0px" });
                setTimeout(() =>
                    this.setState({ submitSuccess: 0 })
                    , 3000);

                // end for university ranking
                const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';
                console.log("url3");
                console.log(url3);
                fetch(url3, {
                    method: 'GET',
                    headers: { 'Authorization': this.state.mytoken }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ data: data.universityRankings })

                    })
                // end for university ranking
            })

    }
    renderElement() {

        if (this.state.submitSuccess === 1)
            return <div className="Show_success_message">
                <strong>Success!</strong> {this.state.successMessage}
            </div>;
        return null;
    }
    submitEditRanking(event) {
        event.preventDefault();
        const obj1 = new FormData();
        obj1.append("agencyName", this.state.agencyName);
        obj1.append("rank", this.state.rank);
        obj1.append("year", this.state.year);
        obj1.append("certificate", this.state.certificate);
        const url2 = process.env.REACT_APP_SERVER_URL + 'university/rankings/' + this.state.rankingId;
        fetch(url2, {
            method: 'put',
            headers: { 'Authorization': this.state.mounted },
            body: obj1
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ successMessage: "Ranking Updated", submitSuccess: 1, width: "0px" });
                setTimeout(() =>
                    this.setState({ submitSuccess: 0 })
                    , 3000);

                // end for university ranking
                const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';
                console.log("url3");
                console.log(url3);
                fetch(url3, {
                    method: 'GET',
                    headers: { 'Authorization': this.state.mytoken }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ data: data.universityRankings })

                    })
                // end for university ranking
            })










    }
    handleDeleteClick(value) {
        this.setState({ editId: value, editnewcomponent: 1, rankingId: value })

        const url2 = process.env.REACT_APP_SERVER_URL + 'university/rankings/' + value;
        fetch(url2, {
            method: 'delete',
            headers: { 'Authorization': this.state.mounted },

        })
            .then(response => response.json())
            .then(data => {
                this.setState({ successMessage: "Ranking Deleted", submitSuccess: 1, width: "0px" });
                setTimeout(() =>
                    this.setState({ submitSuccess: 0 })
                    , 3000);

                // end for university ranking
                const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';
                console.log("url3");
                console.log(url3);
                fetch(url3, {
                    method: 'GET',
                    headers: { 'Authorization': this.state.mytoken }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ data: data.universityRankings })

                    })
                // end for university ranking
            })

    }
    render() {
        return (




            < div id="page-top" >
                {this.renderElement()}
                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapse7"><strong>7</strong>
                        Ranking
                    </a>
                    <div id="collapse7" className="collapse" data-bs-parent="#accordion">
                        <div className="container">

                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Ranking</h1>

                                <button type="button" onClick={() => this.handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add New Ranking</button>
                            </div>




                            {/* <!-- Content Row --> */}

                            <div className="row">

                                {/* <!-- Area Chart --> */}
                                <div className="col-xl-12 col-lg-7">
                                    <div className="card shadow mb-4">
                                        {/* <!-- Card Header - Dropdown --> */}
                                        <div className="card shadow mb-4">
                                            <div className="table-responsive-sm">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Agency Name</th>
                                                            <th>Rank</th>
                                                            <th>Year</th>
                                                            <th>Image</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>




                                                        {this.state.data.map((object, i) => {

                                                            return (

                                                                <tr key={i}>
                                                                    <td>{object._id}</td>
                                                                    <td>{object.agencyName}</td>
                                                                    <td>{object.rank}</td>
                                                                    <td>{object.year}</td>
                                                                    <td>  <img src={object.certificate} alt="passportback" /> </td>

                                                                    <td>


                                                                        <button className="btn"
                                                                            onClick={() => this.handleAddClick(object._id)}

                                                                        ><i className="fas fa-pen "></i></button>
                                                                        <button className="btn" onClick={() => this.handleDeleteClick(object._id)}><i class="fas fa-trash-alt"></i></button>


                                                                    </td>
                                                                </tr>

                                                            )
                                                        })}
                                                    </tbody>


                                                </table>
                                            </div>
                                        </div>



                                        {/* start for add ranking */}
                                        <div className="card-body sidenav" id="mySideAdd"
                                            style={{ width: this.state.addWidth }}>

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    </div>
                                                    <div className="col-md-6">
                                                        <a className="closebtn"
                                                            onClick={() => this.ddhandleAddClick()}

                                                        >&times;</a>
                                                    </div>
                                                </div>

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
                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <div className="row">
                                                            <div className="col-md-6"></div>
                                                            <div className="col-md-6 text-right">

                                                                <button type="submit"
                                                                    onClick={this.submitAddRanking}
                                                                    className="btn btn-secondary">Add
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                        {/* end for add ranking */}


                                        <div className="card-body sidenav" id="mySideAdd"
                                            style={{ width: this.state.width }}>

                                            <div className="student-view">
                                                <div className="row">
                                                    <div className="col-md-6">

                                                    </div>
                                                    <div className="col-md-6">closeaddbox
                                                        <a className="closebtn"


                                                            onClick={() => this.ddhandleAddClick()}
                                                        >&times;</a>
                                                    </div>
                                                </div>

                                                {/* start for edit component */}
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
                                                                    onClick={this.submitEditRanking}
                                                                    className="btn btn-secondary">Add
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/* end for edit compobent */}
                                            </div>
                                        </div>
                                        {/* end for edit ranking */}





                                        {/* end for edit */}
                                    </div>
                                </div>


                            </div>
                            {/* <!-- Card Body --> */}

                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Ranking;