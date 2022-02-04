import React, { Component } from 'react';
import SecondaryEducation from './SecondaryEducation';
import WorkExperienceDocument from './WorkExperienceDocument';
class WorkExperience extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapse3">
                        <strong>3</strong> Work Experience Documents
                    </a>
                    <div id="collapse3" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <div className="form form_doc">
                                <div className="form form_doc">
                                    <WorkExperienceDocument />
                                    <hr />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;