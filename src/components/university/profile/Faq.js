
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Faq = () => {
    const [formValues, setFormValues] = useState([{
        question: "", answer: "",
        _id: "null"
    }])
    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [universityId, setuniversityId] = useState([]);
    const [successMessage, setsuccessMessage] = useState("");
    const [submitSuccess, setsubmitSuccess] = useState("0");

    const [display, setdisplay] = useState("none");
    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);
            console.log(mydata)
            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
            var universityId = mydata.data.university._id;
        }
        setMounted(mytoken)
        setuniversityId(universityId)

        // const url = "university/faqs";
        const url = process.env.REACT_APP_SERVER_URL + "university/" + universityId + "/faqs";
        fetch(url, {
            method: 'GET',
            headers: { 'Authorization': mytoken }
        })
            .then(response => response.json())
            .then(data => {
                setFormValues(data.universityFaqs)
            })


    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, {
            question: "", answer: "",
            _id: "null"
        }])
    }
    let handleSubmit = (event) => {
        event.preventDefault();


        var myvalues = JSON.stringify(formValues);


        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'university/faqs', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {

                        if (res.data.success === true) {
                            setsuccessMessage("Faq Updated")
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
                await axios.put(process.env.REACT_APP_SERVER_URL + 'university/faqs/' + item._id, item, { headers: { 'Authorization': mounted } })

                    .then(function (res) {

                        if (res.data.success === true) {
                            setsuccessMessage("Faq Updated")
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
    function ToggleButton() {
        if (display === "inline") {
            setdisplay("none");
        }
        else {
            setdisplay("inline");
        }

    }
    let handleDeleteClick = (value) => {

        axios.delete(process.env.REACT_APP_SERVER_URL + 'university/faqs/' + value, { headers: { 'Authorization': mounted } })
             .then(function (res) {
 
                 if (res.data.success === true) {
                     setsuccessMessage("faq deleted")
                     setTimeout(() => setsubmitSuccess(""), 3000);
                     setsubmitSuccess(1)
                   
                     const url = process.env.REACT_APP_SERVER_URL + "university/" + universityId + "/faqs";
                     fetch(url, {
                         method: 'GET',
                         headers: { 'Authorization': mounted }
                     })
                         .then(response => response.json())
                         .then(data => {
                             setFormValues(data.universityFaqs)
                         })
 
                 }
                 else {
                     alert("error");
                 }
             })
             .catch(error => {
                 console.log(error.response)
             });
     }
    return (
        <div>
            {submitSuccess === 1 ? <div className="Show_success_message">
                <strong>Success!</strong> {successMessage}
            </div> : null}
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse9"><strong>9</strong>
                    FAQ
                </a>
                <div id="collapse9" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <div className="form-block">

                            <div className="row pl-4 pr-4 mt-3">
                                <div className="col-8 col-sm-8 col-md-8 col-lg-10">
                                    <p>I haven't have any FAQ</p>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 col-lg-2 text-right pr-0">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round" onClick={() => ToggleButton()}></span>
                                    </label>

                                </div>
                                <div>
                                    <div className="col-xl-12 col-lg-7">
                                        <div className="card shadow mb-4" style={{ display: display }}>
                                            <div id="accordion">
                                                <div className="card-body">
                                                    <div className="from-block">
                                                        <form onSubmit={handleSubmit}>
                                                            {formValues.map((element, index) => (
                                                                <div className="mb-12" key={index}>

                                                                    <button className="btn" onClick={() => handleDeleteClick(element._id)}><i class="fas fa-trash-alt"></i></button>
                                                                    <div className="row">


                                                                        <div className="col">
                                                                            <label htmlFor="fname" className="form-label">Question</label>
                                                                            <input type="text" className="form-control" placeholder="" name="question"
                                                                                value={element.question || ""} onChange={e => handleChange(index, e)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col">
                                                                            <label htmlFor="fname" className="form-label">Answer</label>
                                                                            <input type="text" className="form-control" placeholder="" name="answer"
                                                                                value={element.answer || ""} onChange={e => handleChange(index, e)}

                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            ))}
                                                            <div className="mb-3">
                                                                <div className="row">
                                                                    <div className="col-md-6"></div>
                                                                    <div className="col-md-6 text-right">
                                                                        <button type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New
                                                                        </button>
                                                                        <button type="submit"

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
                                                {/* end for form    */}

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

export default Faq
