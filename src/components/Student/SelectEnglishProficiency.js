import React, { Component } from 'react';

class SelectEnglishProficiency extends Component {
    render() {
        return (
            <div>
                <div className="upload_doc d-flex flex-wrap align-items-center row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <label>Please select English Proficiency Test</label><br />
                            <div role="group" className="doc_choice btn-group">
                                <button type="button" className="selected btn btn-secondary">IELTS</button>
                                <button type="button" className="btn btn-secondary">TOEFL</button>
                                <button type="button" className="btn btn-secondary">PTE</button>
                                <button type="button" className="btn btn-secondary">Duolingo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center my-auto">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectEnglishProficiency;