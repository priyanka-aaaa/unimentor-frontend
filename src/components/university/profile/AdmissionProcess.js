
import React, { useState, useEffect } from "react";
import axios from 'axios';

const AdmissionProcess = () => {
    const [formAdminValues, setformAdminValues] = useState([{
        application: ""

    }])
    const [FormValues, setFormValues] = useState([{
        point: ""

    }])

    const [mounted, setMounted] = useState();
    const [data, setdata] = useState([]);
    const [tempp, settempp] = useState("0");
    const [myapplication, setmyapplication] = useState();

    useEffect(() => {
        if (localStorage.getItem("universityData")) {
            var a = localStorage.getItem('universityData');
            var mydata = JSON.parse(a);

            var myuniversityid = mydata.data.university._id;

            var user_email = mydata.data.university.email;
            var mytoken = mydata.data.token;
        }
        setMounted(mytoken)
        //start for getting university 
        const url1 = 'university/61dab27e05671a193cca5f81/admissions';
        fetch(url1, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log("data");
                console.log(data.universityAdmissions[0].point);
                setFormValues(data.universityAdmissions)


            })
        //end for getting university 

        //start for getting admin 
        const url = ' admin/applications/61ebe571481b8d50d1e005ec';
        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setformAdminValues(data.adminApplications)

            })
        //end for getting admin 

    }, [])



    let addFormFields = () => {
        setFormValues([...FormValues, {
            point: ""
        }])
    }


    //start for course
    let clickHandler = (datum) => {

        if (tempp !== 1) {

            var datum = "<ul><li>" + datum + "</li></ul>"; //<li></li>
            settempp(1);
        }
        else {
            var datum = "<ul><li></li><li>" + datum + "</li></ul>"; //<li></li>   
        }
        var element = document.querySelector(".help")
        element.editor.insertHTML(datum);
        setmyapplication(datum)
        //  this.setState(prevState => ({ valueArr: [...prevState.valueArr, mydatumvalue] }));
    }
    let handleSubmit = () => {
        let originalString = document.getElementById("x").value;

        var div = document.createElement("div");
        div.innerHTML = originalString;

        var InsetApplication = div.innerText;

        const obj = {
            // point: InsetApplication
            point: originalString

        };

        console.log(obj);
        axios.post('/university/admissions', obj, { headers: { 'Authorization': mounted } })
            .then(function (res) {

                if (res.data.success === true) {
                    alert("courses update successfully");
                }
                else {
                    alert("error");
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    //end for course

    return (
        <div>
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse4"><strong>4</strong>
                    Admissions Process
                </a>
                <div id="collapse4" className="collapse" data-bs-parent="#accordion">

                    <div className="card-body">
                        <div className="formbody">
                            <div className="row">
                                <div className="col-lg-12 col-12 ">
                                    <h3>Application Process</h3>
                                </div>
                                {FormValues.map((element, index) => (
                                    <div className="trix_form_adjustement" key={index}>
                                        {console.log(element.point)}

                                        <div className="row">

                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <div className="col-xl-6 col-md-12 " >
                                                        <div className="form-group ">
                                                            <label htmlFor="comment">Application:</label>
                                                            {/* <input id="x" type="hidden" /> */}

                                                            <trix-editor
                                                                name="universityApplication"
                                                                value={element.point}

                                                                onChange={event => this.changeHandler(event)} class="form-control editarea help"
                                                            //  input="x"
                                                            >
                                                                {element.point}
                                                            </trix-editor>
                                                        

                                                        </div>



                                                    </div>
                                                    <div className="col-xl-6  mt-2 d-none d-xl-block" >
                                                        <div className="form-group">
                                                            <div className="EditorSide">
                                                                <p>Choose your relevant pre-written examples. </p>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <div class="WriterPoints">
                                                                        {formAdminValues.map((element, index) => (


                                                                            <div key={index} className="rowx mt-3 ml-2 border border-secondary help_content" id="content_1">
                                                                                <div className="col-sm-2x ">
                                                                                    <button
                                                                                        className="VerticalText m-0"
                                                                                        onClick={() => clickHandler(element.application)}


                                                                                    >  add</button>
                                                                                </div>
                                                                                <div className="col-sm-10x p-0 ">
                                                                                    <p className="m-0 help_text">{element.application || ""}.</p>
                                                                                </div>
                                                                            </div>


                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div> </div>
                                        </div>


                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6 text-right">
                                <button type="button" className="btn btn-success "
                                    onClick={() => addFormFields()}
                                >Add New
                                </button>
                                <button type="button"
                                    onClick={() => handleSubmit()}
                                    className="btn btn-secondary">Save
                                </button>
                                <button type="button" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                    Next</button>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
}

export default AdmissionProcess
