import React, { useState, useEffect } from "react";
import axios from 'axios';
const AdminDocument = () => {
    const [formValues, setFormValues] = useState([{
        document: "",
        _id: "null"

    }])
    const [mounted, setMounted] = useState();
    const [myAdminId, setAdminId] = useState();


    const [data, setdata] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("adminData")) {
            var a = localStorage.getItem('adminData');
            var mydata = JSON.parse(a);

          

            var mytoken = mydata.data.token;
            var adminId = mydata.data.admin._id;
          
        }
        setMounted(mytoken)

        setAdminId(adminId)

      
        const url = process.env.REACT_APP_SERVER_URL+"admin/documents/";
 
        fetch(url, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(data => {
                setFormValues(data.adminDocuments)
               
            })

    }, [])
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, {
            document: "",
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
       
        formValues.map(async (item) => {
            if (item._id === "null") {
                await axios.post(process.env.REACT_APP_SERVER_URL + 'admin/documents', item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                       
                        if (res.data.success === true) {
                      
                        }
                        else {
                    
                        }
                    })
                    .catch(error => {
                     
                    });

            }
            else {
                await axios.put(process.env.REACT_APP_SERVER_URL + 'admin/documents/' + item._id, item, { headers: { 'Authorization': mounted } })
                    .then(function (res) {
                      
                        if (res.data.success === true) {
                       
                        }
                        else {
                         
                        }
                    })
                    .catch(error => {
                       
                    });

            }
        })

    }


    return (



        <div className="card">
        <a className="card-header" data-bs-toggle="collapse" href="#collapse2"><strong>2</strong>
            Document
        </a>
        <div id="collapse2" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
                <div className="form-block">
                <form onSubmit={handleSubmit}>
                                <div className="card-body" >

                                    <div className="from-block" >



                                        {formValues.map((element, index) => (

                                            <div className="row" key={index}>
                                                <div className="mb-3">
                                                    <div className="row">
                                                        <div className="col">
                                                        <div className="form-group">
                                                            <label className="form-label">Document
                                                            <span className="text-danger"> *</span></label>
                                                            <input type="text" className="form-control"
                                                                placeholder="document" name="document"
                                                                value={element.document || ""} onChange={e => handleChange(index, e)}

                                                            />
                                                        </div>
                                                        </div>


                                                    </div>
                                                </div>



                                            </div>
                                        ))}

                                        <div className="mb-3">
                                            <div className="row">
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6 text-right">

                                                    <button title="Add New"  type="button" className="btn btn-success " onClick={() => addFormFields()}>Add New</button>

                                                    <button title="Save" type="submit" className="btn btn-secondary ml-2">Save
                                                    </button>
                                                    <button title="Save & Next" type="submit" data-bs-toggle="collapse" href="#collapse4" className="btn btn-success ">Save &
                                                        Next</button>
                                                </div>

                                            </div>

                                        </div>



                                    </div>
                                </div>
                            </form>

                    <div className="row pl-4 pr-4 mt-3">


                        <div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AdminDocument