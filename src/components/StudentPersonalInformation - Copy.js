import React, { Component } from 'react';

class StudentPersonalInformation extends Component {
    render() {
        return (
            <div>

                <div class="card-body">

                    <div class="from-block">

                        <div class="mb-3">
                            <div class="row">
                                <div class="col">
                                    <label for="state" class="form-label">Salutation
                                        *</label>
                                    <select type="text" class="form-control"
                                        id="salutation" placeholder="Salutation"
                                        name="salutation">
                                        <option value="">Select</option>
                                        <option value="Ms.">Ms.</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                        <option value="Miss.">Miss.</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="row">
                                <div class="col">
                                    <label for="fname" class="form-label">First Name
                                        *</label>
                                    <input type="text" class="form-control"
                                        placeholder="First Name" name="fname" />
                                </div>
                                <div class="col">
                                    <label for="Mname" class="form-label">Middle
                                        Name</label>
                                    <input type="text" class="form-control"
                                        placeholder="Middle Name" name="Mname" />
                                </div>
                                <div class="col">
                                    <label for="lname" class="form-label">Last Name/
                                        Surname/ Family Name *</label>
                                    <input type="text" class="form-control"
                                        placeholder="" name="lname" />
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="row">
                                <div class="col">
                                    <label for="email" class="form-label">Have you
                                        ever been known by any other name ?</label>
                                    <select class="form-control" id="othername"
                                        name="has_other_name">
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="row">
                                <div class="col">
                                    <label for="gender">Gender</label><select
                                        class="form-control" id="gender"
                                        name="user_gender">
                                        <option value="">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">Transgender
                                        </option>
                                    </select>
                                </div>
                                <div class="col">
                                    <div class="mt"><label for="dob">Date of
                                        Birth</label>
                                        <input type="date" class="form-control" />
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="country_of_birth">Country of
                                        Birth</label>
                                    <select class="form-control" id="country_of_birth"
                                        name="country_of_birth">
                                        <option value="">Select</option>
                                        <option value="101">India</option>
                                        <option value="1">Afghanistan</option>
                                        <option value="2">Albania</option>
                                        <option value="3">Algeria</option>
                                        <option value="4">American Samoa</option>
                                        <option value="5">Andorra</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mt">
                                        <label for="nationality">Nationality</label>
                                        <select class="form-control" id="Nationality"
                                            name="Nationality">
                                            <option value="">Select</option>
                                            <option value="101">India</option>
                                            <option value="1">Afghanistan</option>
                                            <option value="2">Albania</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">American Samoa
                                            </option>
                                            <option value="5">Andorra</option>

                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="mt"><label for="DualNationality">Do
                                        you hold Dual
                                        Nationality?</label><select
                                            class="form-control" id="DualNationality"
                                            name="has_dual_nationality">
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select></div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="mt"><label for="">Marital
                                        Status</label><br /><input type="radio"
                                            id="married" name="marital_status"
                                            value="married" /><label class="mr-1"
                                                for="married">Married</label>&nbsp;&nbsp;<input
                                            type="radio" id="unmarried"
                                            name="marital_status"
                                            value="unmarried" /><label class="mr-1"
                                                for="unmarried">Unmarried</label>&nbsp;&nbsp;<input
                                            type="radio" id="widowed"
                                            name="marital_status" value="widowed" /><label
                                                for="widowed">Widowed</label></div>
                                </div>


                                <div class="col-md-4">
                                    <div class="mt"><label for="abled">Are
                                        you differently abled?</label><select
                                            class="form-control" id="abled"
                                            name="is_differently_abled">
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select></div>
                                </div>

                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div class="mt"><label for="passport">Do you
                                        have a valid passport?</label><select
                                            class="form-control" id="passport"
                                            name="has_valid_passport">
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select></div>
                                </div>
                            </div>
                        </div>


                        <div class="mb-3">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div class="mt"><label for="aadharCard">Do you
                                        have
                                        a valid Aadhar Card?</label><select
                                            class="form-control" id="aadharCard"
                                            name="has_aadhar_card">
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select></div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mt">
                                    <label for="firstLanguage">First
                                        Language</label><input type="text"
                                            class="form-control" id="firstLanguage"
                                            placeholder="First Language"
                                            name="first_language" value="" />
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="mt"><label for="">Do you have a valid
                                    study visa/work permit?</label><select
                                        class="form-control" name="has_visa">
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </select></div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="row">
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div class="mt-3"><label for="refusedVisa">Have
                                        you been refused a visa from Canada, the
                                        USA, the United Kingdom, New Zealand or
                                        Australia?</label><select
                                            class="form-control" id="refusedVisa"
                                            name="is_visa_refused">
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select></div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-6"></div>
                                <div class="col-md-6 text-right">
                                    <button type="button"
                                        class="btn btn-secondary btn-lg">Save
                                    </button>
                                    <button type="button"
                                        class="btn btn-success btn-lg">Save &
                                        Next</button>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>

            </div>
        );
    }
}

export default StudentPersonalInformation;