import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';
export default function UniversityPassword() {
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [myuniversityid, setUniveristyId] = useState([]);


    const [formValues, setFormValues] = useState([{
        year: "", month: "",
        _id: "null"

    }])

    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);

            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        setUniveristyId(myuniversityid)
        //start for select course
        const url = process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityid + '/intakes';
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                var myresults = data.universityIntakes;
                if (Object.keys(myresults).length === 0) {
                }
                else {
                    setFormValues(data.universityIntakes)
                }
            })
        //end for select course
    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, {
            year: "", month: "",
            _id: "null"
        }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        var myvalues = JSON.stringify(formValues);

        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'university/intakes', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        console.log(res.data);
                        if (res.data.success === true) {
                            setsuccessMessage("Intake Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                        }
                        else {
                            alert("error");
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    });

            }
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'university/intakes/' + item._id, item, { headers: { 'Authorization': mounted } })
                    // await axios.put('/university/61dab27e05671a193cca5f81/courses', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                        console.log(res.data);
                        if (res.data.success === true) {
                            setsuccessMessage("Intake Updated")
                            setTimeout(() => setsubmitSuccess(""), 3000);
                            setsubmitSuccess(1)
                        }
                        else {
                            alert("error");
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    });
            }
        })

    }
    function handleDelete(value) {

        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/intakes/' + value, { headers: { 'Authorization': mounted } })
            .then(function (res) {
                var myuniversityCourse = res.data.universityCourse;
                if (res.data.success === true) {
                    setsuccessMessage("Intake delete")
                    setTimeout(() => setsubmitSuccess(""), 3000);
                    setsubmitSuccess(1)
                    //start for select course
                    const url = process.env.REACT_APP_SERVER_URL + 'university/' + myuniversityid + '/intakes';
                    fetch(url, {
                        method: 'GET'
                    })
                        .then(response => response.json())
                        .then(data => {
                            var myresults = data.universityIntakes;
                            if (Object.keys(myresults).length === 0) {
                            }
                            else {
                                setFormValues(data.universityIntakes)
                            }
                        })
                    //end for select course
                }
                else {
                    alert("error");
                }

            })
            .catch(error => {
                console.log(error.response)
            });

    }


    // start for personal information

    return (

        <div id="page-top">
            {/* <!-- Page Wrapper --> */}
            <div id="wrapper">
                <Sidebar />
                {/* there will be come sidebar */}

                {/* <!-- Content Wrapper --> */}
                <div id="content-wrapper" className="d-flex flex-column">

                    {/* <!-- Main Content --> */}
                    <div id="content">

                        {/* topbar will be come there */}
                        <Topbar />
                        {/* <!-- Begin Page Content --> */}
                        {/* the content of each page will be come there */}
                        {/* <ApplicationProfile /> */}
                        <div className="container">
                            {submitSuccess === 1 ? <div className="Show_success_message">
                                <strong>Success!</strong> {successMessage}
                            </div> : null}
                            {/* <!-- Page Heading --> */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Student</h1>


                            </div>


                            {/* <!-- Content Row --> */}

                            <p>Admin Application</p>
                            {/* <form onSubmit={handleSubmit}> */}
                            <form onSubmit={handleSubmit}>
                                <div className="card-body" >

                                    <div className="from-block" >
                                        {formValues.map((element, index) => (
                                            <div key={index}>

                                                <div className="row" >


                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label className="form-label">Year
                                                                *</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="Year" name="year"
                                                                value={element.year || ""} onChange={e => handleChange(index, e)}


                                                                required />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-5">
                                                        <div className="form-group">
                                                            <label className="form-label">month
                                                                *</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="month" name="month"
                                                                value={element.month || ""} onChange={e => handleChange(index, e)}


                                                                required />
                                                        </div>
                                                      

                                                    </div>
                                                    <div className="col-md-2">

                                                    <button className="btn"
                                                            onClick={() => handleDelete(element._id)}
                                                        ><i className="fas fa-trash-alt"></i></button>

</div>
                                                    {/* <div className="mb-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <label className="form-label">application
                                                            *</label>
                                                        <input type="text" className="form-control"
                                                            placeholder="application" name="application"
                                                        // value={element.application || ""} onChange={e => handleChange(index, e)}

                                                        // value={courseName}
                                                        // onChange={(e) => setcourseName(e.target.value)}
                                                        />
                                                    </div>


                                                </div>
                                            </div> */}



                                                </div>
                                            </div>
                                        ))}

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6 text-right">

                                                    <button className="button add" type="button" className="btn btn-success "
                                                        onClick={() => addFormFields()}
                                                    >Add New</button>

                                                    <button type="submit" className="btn btn-secondary">Save
                                                    </button>
                                                    <button type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                                        Next</button>
                                                </div>

                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </form>
                            {/* <!-- Card Body --> */}

                        </div>
                        {/* <!-- /.container-fluid --> */}

                    </div>
                    {/* <!-- End of Main Content --> */}

                    {/* <!-- Footer --> */}
                    <Footer />
                    {/* <!-- End of Footer --> */}

                </div>
                {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}

        </div >
    );
}