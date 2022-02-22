import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';

const NewIdentityDocument = () => {
    const [heroFiles, setHeroFiles] = useState([]);
    const [thumbnailFiles, setThumbnailFiles] = useState([]);
    const [mounted, setMounted] = useState();

    useEffect(() => {
        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var mydata = JSON.parse(a);

            var user_email = mydata.data.student.email;
            var mounted = mydata.data.token;
        }
        setMounted(mounted)

    }, [])
    return (
        <div>{/* This would be the dropzone for the Hero image */}
            <Dropzone onDrop={(acceptedFiles) => {

                var myurl = process.env.REACT_APP_SERVER_URL + 'student/identityDocument'



                //start for calling another api
                const url3 = process.env.REACT_APP_SERVER_URL + 'admin/EnglishProficiencies';
                fetch(url3, {
                    method: 'GET',

                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('hhhhh')
                        // setFormAdmissionValues(data.universityAdmissions)
                    })

                //end for calling another api

                const obj5 = new FormData();
                obj5.append("passportBack", acceptedFiles[0]);


                //start for calling another api
                const url2 = process.env.REACT_APP_SERVER_URL + 'student/identityDocument';
                fetch(url2, {
                    method: 'put',
                    body: obj5,
                    headers: { 'Authorization': mounted },

                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('hhhhh')

                    })

                //end for calling another api

                setHeroFiles(acceptedFiles.map(file => Object.assign(file, {

                    preview: URL.createObjectURL(file)


                })));
            }} name="heroImage" multiple={false}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <span style={{ fontSize: ".8rem" }}>
                            Drop hero image here, or click to select file
                        </span>
                    </div>
                )}
            </Dropzone>
            {/* This would be the dropzone for the Thumbnail image */}
            <Dropzone onDrop={(acceptedFiles) => {
                setThumbnailFiles(acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })));
            }} name="heroImage" multiple={false}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <span style={{ fontSize: ".8rem" }}>
                            Drop hero image here, or click to select file
                        </span>
                    </div>
                )}
            </Dropzone>
            {/* This would be where the Hero image is displayed */}
            <img style={{ width: "600px", height: "200px", margin: "0", display: "block" }} src={heroFiles.length > 0 ? heroFiles[0].preview : "https://via.placeholder.com/600x200"} alt="Hero Image" />
            {/* This would be where the Thumbnail image is displayed */}
            <img style={{ width: "600px", height: "200px", margin: "0", display: "block" }} src={thumbnailFiles.length > 0 ? thumbnailFiles[0].preview : "https://via.placeholder.com/600x200"} alt="Thumbnail Image" />
        </div>
    );
}

export default NewIdentityDocument;