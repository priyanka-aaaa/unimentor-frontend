import React, { Component } from 'react';
import SecondaryEducation from './SecondaryEducation';
import ExtraCurricularActivity from './ExtraCurricularActivity';
class ExtraCurricular extends Component {
    render() {
        return (
            <div>

                <div className="card">
                    <a className="card-header" data-bs-toggle="collapse" href="#collapse5">
                        <strong>5</strong> Extra Curricular Document
                    </a>
                    <div id="collapse5" className="collapse" data-bs-parent="#accordion">
                        <div className="card-body">
                            <div className="form form_doc">
                                <div className="form form_doc">
                                    <ExtraCurricularActivity />
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

export default ExtraCurricular;