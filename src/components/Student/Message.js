import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';
import Loader from '../Home/Loader';
export default function Message() {
    const [mounted, setMounted] = useState();
    const [password, setpassword] = useState();
    const [confirmpassword, setconfirmpassword] = useState();
    const [confirmpasswordError, setconfirmpasswordError] = useState("");
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [citizenship, setcitizenship] = useState("");
    const [aboutMe, setaboutMe] = useState("");
    const [email, setemail] = useState("");
    const [location, setlocation] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");
    const [countryCode, setcountryCode] = useState("");
    const [mobile, setmobile] = useState("");
    const [gender, setgender] = useState("");
    const [picture, setpicture] = useState("");
    const [loader, setmyloader] = useState("false");
    const [submitSuccess, setsubmitSuccess] = useState("0");
    const [successMessage, setsuccessMessage] = useState("");
    const [FormValues, setFormValues] = useState([{
        message: "", type: ""
    }])
    const [countries, setcountries] = useState([{
        country_name: ""
    }]);
    const [states, setstates] = useState([{
        state_name: ""
    }])
    const [cities, setcities] = useState([{
        city_name: ""
    }])
    useEffect(() => {
        var mounted = localStorage.getItem("studentToken")
        setMounted(mounted)
        var myurl = process.env.REACT_APP_SERVER_URL;
        axios.get(process.env.REACT_APP_SERVER_URL + 'student/messages', { headers: { 'Authorization': mounted } })
            .then(function (res) {
                console.log("res")
                console.log(res.data.notifications)
                if (res.data.success === true) {

                    var myresults = res.data.notifications;

                    if (Object.keys(myresults).length === 0) {

                    }
                    setFormValues(myresults)
                }
            })
            .catch(error => {
            });

    }, [])




    return (

        <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Message</h1>
            </div>
            {/* Content Row */}
            <div className="row">
                {/* Area Chart */}
                <div className="col-xl-12 col-lg-7">
                    <div className="card shadow mb-4">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="chat-message msg_list">
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* start for message  */}
                                            {FormValues.map((element, index) => {
                                                return (

                                                    <div className="anw-block" key={index}>

                                                        {element.type === 0 ?
                                                        
                                                           
                                                        <div className="row">
                                                            <div className="col-md-1">
                                                                <div className="us-img us-letter">
                                                                    <h6>A</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-11">
                                                                <div className="anw-content-rightblock  drak-blue">
                                                                    <div className="des-title">
                                                                        <h6><strong>Visa Team:</strong>(admin) Sent a Message </h6><span className="date-block">Sep 25, 2020, 10:31 PM</span>
                                                                    </div>
                                                                    <div className="reply-content ">
                                                                        <p>{element.message}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="anw-block">
                          <div className="row">
                            <div className="col-md-1">
                              <div className="us-img us-letter">
                                <h6>S</h6>
                              </div>
                            </div>
                            <div className="col-md-11">
                              <div className="anw-content-rightblock  light-greenish">
                                <div className="des-title">
                                  <h6><strong>Student:</strong> (Parveen) Sent a Message</h6><span className="date-block">Apr 8, 2021, 4:03 PM</span>
                                </div>
                                <div className="reply-content ">
                                  <p>{element.message}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                                                       
                                                        
                                                        }
                                                    </div>
                                                )
                                            })}
                                            {/* end for message */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="msg-form">
                                    <form >
                                        <div className="form-group"><label>Send Message</label><textarea rows={5} cols={7} className="form-control" defaultValue={""} /></div>
                                        <div className="form-group">
                                            <div className="dr-section" id="drop_section"><input type="file" name="file[]" id="files" multiple />
                                                <div id="drag" className="drop_upper">
                                                    <div className="row">
                                                        <div className="col-md-12"><label className="open" htmlFor="files">
                                                            <div className="droped_data">
                                                                <div className="drop_img"><i className="fas fa-cloud-upload-alt" /></div>
                                                                <div className="drag_dropsection">
                                                                    <div id="drag_h3" className="drop_text">
                                                                        <p> Drop Files Here Or Click to Upload</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </label></div>
                                                    </div>
                                                    <div className="drop_lower" id="gallery" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn-send-msg"><i className="fa fa-paper-plane" aria-hidden="true" style={{ marginRight: '6px' }} /> Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}