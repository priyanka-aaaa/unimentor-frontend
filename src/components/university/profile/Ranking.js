import React, { Component } from 'react';

import RankingEdit from './RankingEdit';
import DragAndDrop from './DragAndDrop';
import axios from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

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

            showSweetAlert: "",
            deleteId: "",
            yearMessage: ""


        };
    
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

        var universityId = localStorage.getItem('universityId');
        var mounted = localStorage.getItem('universityToken');


        this.setState({ mounted: mounted, universityId: universityId });

    }
    componentDidMount() {  
     
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': this.state.mounted }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data.universityRankings })

            })
     
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
    ddhandleAddClick() {
        this.setState({ width: "0px", addWidth: "0px" })

    }
    handleAddClick(value) {
        this.setState({ editId: value, width: "1600px", editnewcomponent: 1, rankingId: value })
 axios.get(process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings/' + value, { headers: { 'Authorization': this.state.mounted } })
            .then(res => {

                this.setState({

                    agencyName: res.data.universityRanking.agencyName,
                    rank: res.data.universityRanking.rank,
                    year: res.data.universityRanking.year,
                    certificate: res.data.universityRanking.certificate,
                });
                if (res.data.success === true) {
                }
                else {

                }
            })
            .catch(error => {

            });
 

    }
    handleAdd() {

        this.setState({ addWidth: "1600px", addnewcomponent: 1 })

    }
    closeaddbox() {
        this.setState({ width: "0px", addWidth: "0px" })


    }
    submitAddRanking(event) {
        event.preventDefault();
        var yearNo = this.state.year.toString().length;
        if (yearNo !== 4) {
            this.setState({ yearMessage: "Please Insert Four Digit" })

        }
        else {


            this.setState({ addWidth: "0px" })

            const obj1 = new FormData();
            obj1.append("agencyName", this.state.agencyName);
            obj1.append("rank", this.state.rank);
            obj1.append("year", this.state.year);
            obj1.append("certificate", this.state.certificate);

          
            const url2 = process.env.REACT_APP_SERVER_URL + 'university/rankings';
            fetch(url2, {
                method: 'post',
                headers: { 'Authorization': this.state.mounted },
                body: obj1
            })
                .then(response => response.json())
                .then(data => {
                    this.setState({ successMessage: "Ranking Added", submitSuccess: 1, addWidth: "0px", yearMessage: "" });
                    setTimeout(() =>
                        this.setState({ submitSuccess: 0 })
                        , 3000);

                
                    const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';

                    fetch(url3, {
                        method: 'GET',
                        headers: { 'Authorization': this.state.mounted }
                    })
                        .then(response => response.json())
                        .then(data => {
                            this.setState({ data: data.universityRankings })

                        })
               
                })
        }
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
        var yearNo = this.state.year.toString().length;
        if (yearNo !== 4) {
            this.setState({ yearMessage: "Please Insert Four Digit" })

        }
        else {
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
                this.setState({ successMessage: "Ranking Updated", submitSuccess: 1, width: "0px",yearMessage:"" });
                setTimeout(() =>
                    this.setState({ submitSuccess: 0 })
                    , 3000);

       
                const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';

                fetch(url3, {
                    method: 'GET',
                    headers: { 'Authorization': this.state.mounted }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ data: data.universityRankings })

                    })
         
            })






        }



    }
    handleDeleteClick(value) {

        this.setState({ showSweetAlert: "1", deleteId: value })
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
                            {this.state.showSweetAlert === "1" ? <SweetAlert
                                warning
                                showCancel
                                confirmBtnText="Yes, delete it!"
                                confirmBtnBsStyle="danger"

                                title="Are you sure?"
                                onConfirm={(value) => {
                                    this.setState({ showSweetAlert: "0" });
                                    




                                    const url2 = process.env.REACT_APP_SERVER_URL + 'university/rankings/' + this.state.deleteId;
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

                                      

                                            const url3 = process.env.REACT_APP_SERVER_URL + 'university/' + this.state.universityId + '/rankings';

                                            fetch(url3, {
                                                method: 'GET',
                                                headers: { 'Authorization': this.state.mounted }
                                            })
                                                .then(response => response.json())
                                                .then(data => {
                                                    this.setState({ data: data.universityRankings })

                                                })

                                        })



                                }}
                                onCancel={() =>

                                    this.setState({ showSweetAlert: "0" })

                                }
                                focusCancelBtn
                            >

                            </SweetAlert>
                                : null
                            }
                            {/* <!-- Page Heading --> */}

                            <div className="mt-4 mb-4">
                                <div className='row'>
                                    <div className='col-md-6'><h3>Ranking</h3></div>
                                    <div className='col-md-6 text-right'> <button type="button" onClick={() => this.handleAdd()} className="btn btn-outline-success"><span><i className="fas fa-plus"></i></span>Add New Ranking</button></div>
                                </div>
                              

                               
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
                                                                    <td className='img-table'>  <img src={object.certificate} alt="passportback" /> </td>

                                                                    <td>


                                                                        <button title='Edit' className="btn btn btn-success btn-sm "
                                                                            onClick={() => this.handleAddClick(object._id)}

                                                                        ><i className="fas fa-pen "></i></button>
                                                                        <button title='Delete' className="btn btn-danger btn-sm vbtn" onClick={() => this.handleDeleteClick(object._id)}><i class="fas fa-trash-alt"></i></button>


                                                                    </td>
                                                                </tr>

                                                            )
                                                        })}
                                                    </tbody>


                                                </table>
                                            </div>
                                        </div>



                                        {/* start for add ranking */}
                                        <div className="card-body course-sidenav" id="mySideAdd"
                                            style={{ width: this.state.addWidth }}>

                                            <div className="student-view">
                                                <div className="row">                                                    
                                                    <div className="col-md-12">
                                                        <a className="closebtn"
                                                            onClick={() => this.ddhandleAddClick()}

                                                        >&times;</a>
                                                    </div>
                                                </div>
                                                <div className='row mt-3'>
                                                    <div className='col-md-12'>                                                   
                                                        <h3>Add New Ranking</h3>                                                    
                                                    </div>
                                                </div>

                                                <form onSubmit={this.submitAddRanking}>
                                                    <div className="mb-3">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="fname" className="form-label">Agency Name</label>
                                                                <input required type="text" className="form-control" placeholder="" name="agname"
                                                                    value={this.state.agencyName} onChange={this.changeagencyName}
                                                                />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="lname" className="form-label">Rank</label>
                                                                <input required type="number" className="form-control" placeholder="" name="rank"
                                                                    value={this.state.rank} onChange={this.changerank}
                                                                />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="lname" className="form-label">Year</label>
                                                                <input required type="number" className="form-control" placeholder="" name="rank"
                                                                    value={this.state.year} onChange={this.changeyear}
                                                                />
                                                                <span style={{ color: "red" }}> {this.state.yearMessage}</span>

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
                                                                
                                                                    className="btn btn-secondary">Add
                                                                </button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                        {/* end for add ranking */}


                                        <div className="card-body course-sidenav" id="mySideAdd"
                                            style={{ width: this.state.width }}>

                                            <div className="student-view">
                                                <div className="row">                                                   
                                                    <div className="col-md-12">
                                                        <a className="closebtn"
                                                            onClick={() => this.ddhandleAddClick()}
                                                        >&times;</a>
                                                    </div>
                                                </div>
                                                <div className='row mt-3'>
                                                <div className='col-md-12'>
                                                  <h3>Edit Ranking</h3>
                                                </div>
                                                </div>

                                                {/* start for edit component */}
                                                <form onSubmit={this.submitEditRanking}>
                                                   
                                                    <div className="mb-3">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="fname" className="form-label">Agency Name</label>
                                                                <input  type="text" className="form-control" placeholder="" name="agname"
                                                                    value={this.state.agencyName} onChange={this.changeagencyName}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="lname" className="form-label">Rank</label>
                                                                <input required type="number" className="form-control" placeholder="" name="rank"
                                                                    value={this.state.rank} onChange={this.changerank}
                                                                />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="lname" className="form-label">Year</label>
                                                                <input required type="number" className="form-control" placeholder="" name="rank"
                                                                    value={this.state.year} onChange={this.changeyear}
                                                                />
                                                                <span style={{ color: "red" }}> {this.state.yearMessage}</span>

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