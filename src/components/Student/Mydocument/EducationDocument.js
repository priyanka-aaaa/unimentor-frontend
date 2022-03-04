import React from 'react';
import SecondaryEducation from './SecondaryEducation';

import Ug from './Ug';

import Pg from './Pg';

function NewEducationDocument() {
    return (
        <div>
            <div className="card">
                <a className="card-header" data-bs-toggle="collapse" href="#collapse2">
                    <strong>2</strong> Education Documents
                </a>
                <div id="collapse2" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        <div className="form form_doc">
                            <div className="form form_doc">
                                <SecondaryEducation />
                                <hr />
                                <Ug />
                                <hr />
                                <Pg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewEducationDocument;