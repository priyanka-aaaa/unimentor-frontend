import React, { Component } from 'react';
import axios from 'axios';
class StudentPersonalInformation extends Component {
    constructor(props) {
        super(props);

        this.onChangesalutation = this.onChangesalutation.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeOtherName = this.onChangeOtherName.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeCountryOfBirth = this.onChangeCountryOfBirth.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeDualNationality = this.onChangeDualNationality.bind(this);
        this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
        this.onChangedifferentlyAble = this.onChangedifferentlyAble.bind(this);
        this.onChangepassport = this.onChangepassport.bind(this);
        this.onChangeaadharCard = this.onChangeaadharCard.bind(this);
        this.onChangefirstLanguage = this.onChangefirstLanguage.bind(this);
        this.onChangevisa = this.onChangevisa.bind(this);
        this.onChangerefusedVisa = this.onChangerefusedVisa.bind(this);
        this.onSubmit = this.onSubmit.bind(this);




        this.state = {
            salutation: '',
            firstName: '',
            middleName: '',
            lastName: '',
            otherName: '',
            gender: '',
            dateOfBirth: '',
            countryOfBirth: '',
            nationality: '',
            dualNationality: '',
            maritalStatus: '',
            differentlyAble: '',
            passport: '',
            aadharCard: '',
            firstLanguage: '',
            visa: '',
            refusedVisa: '',
            store: '',
            errors: {},

        }
    }
    onChangesalutation(e) {
        this.setState({
            salutation: e.target.value
        });
    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeMiddleName(e) {
        this.setState({
            middleName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeOtherName(e) {
        this.setState({
            otherName: e.target.value
        });
    }
    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeDateOfBirth(e) {
        this.setState({
            dateOfBirth: e.target.value
        });
    }
    onChangeCountryOfBirth(e) {
        this.setState({
            countryOfBirth: e.target.value
        });
    }
    onChangeNationality(e) {
        this.setState({
            nationality: e.target.value
        });
    }
    onChangeDualNationality(e) {
        this.setState({
            dualNationality: e.target.value
        });
    }
    onChangeMaritalStatus(e) {
        this.setState({
            maritalStatus: e.target.value
        });
    }
    onChangedifferentlyAble(e) {
        this.setState({
            differentlyAble: e.target.value
        });
    }
    onChangepassport(e) {
        this.setState({
            passport: e.target.value
        });
    }
    onChangeaadharCard(e) {
        this.setState({
            aadharCard: e.target.value
        });
    }
    onChangefirstLanguage(e) {
        this.setState({
            firstLanguage: e.target.value
        });
    }
    onChangevisa(e) {
        this.setState({
            visa: e.target.value
        });
    }
    onChangerefusedVisa(e) {
        this.setState({
            refusedVisa: e.target.value
        });
    }


    componentWillMount() {

        if (localStorage.getItem("userData")) {
            var a = localStorage.getItem('userData');
            var b = JSON.parse(a);
            console.log(b.data.token);

            console.log("b");
            // var user_email = b.data.student.email;
            this.setState({ store: b.data.token });
        }

        else {
            // var user_email = "";
            // this.setState({ redirectToReferrer: true });

        }
    }

    onSubmit(e) {
        e.preventDefault();

        console.log("ok");
        console.log(this.state.store);
        console.log("ok");
        const obj = {
            salutation: this.state.salutation,
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            otherName: this.state.otherName,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            countryOfBirth: this.state.countryOfBirth,
            nationality: this.state.nationality,
            dualNationality: this.state.dualNationality,
            maritalStatus: this.state.maritalStatus,
            differentlyAble: this.state.differentlyAble,
            passport: this.state.passport,
            aadharCard: this.state.aadharCard,
            firstLanguage: this.state.firstLanguage,
            visa: this.state.visa,
            refusedVisa: this.state.refusedVisa
        };
       
        axios.put('/student/personalInformation', obj, { headers: { 'Authorization': this.state.store } })

        
            // axios.put('https://uni-mentor-backend.vercel.app/student/personalInformation', obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error.response)
            });
        // this.setState({
        //     name: '',
        //     email: '',
        //     phone: ''


        // })
        // alert("register successfully");
    }



    render() {
        return (
            <div>
                <form>
                    <div className="card-body">

                        <div className="from-block">

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label">Salutation
                                            *</label>
                                        <select type="text" className="form-control"
                                            id="salutation" placeholder="Salutation"
                                            name="salutation"

                                            value={this.state.salutation}
                                            onChange={this.onChangesalutation}>
                                            <option value="">Select</option>
                                            <option value="Ms.">Ms.</option>
                                            <option value="Mr.">Mr.</option>
                                            <option value="Mrs.">Mrs.</option>
                                            <option value="Miss.">Miss.</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label">First Name
                                            *</label>
                                        <input type="text" className="form-control"
                                            placeholder="First Name" name="fname"
                                            value={this.state.firstName}
                                            onChange={this.onChangeFirstName}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Middle
                                            Name</label>
                                        <input type="text" className="form-control"
                                            placeholder="Middle Name" name="Mname"
                                            value={this.state.middleName}
                                            onChange={this.onChangeMiddleName}
                                        />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Last Name/
                                            Surname/ Family Name *</label>
                                        <input type="text" className="form-control"
                                            placeholder="" name="lname"
                                            value={this.state.lastName}
                                            onChange={this.onChangeLastName}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="email" className="form-label">Have you
                                            ever been known by any other name ?</label>
                                        <select className="form-control" id="othername"
                                            name="has_other_name"
                                            value={this.state.otherName}
                                            onChange={this.onChangeOtherName}
                                        >
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="gender">Gender</label><select
                                            className="form-control" id="gender"
                                            name="user_gender"
                                            value={this.state.gender}
                                            onChange={this.onChangeGender}
                                        >
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Transgender">Transgender
                                            </option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <div className="mt"><label htmlFor="dob">Date of
                                            Birth</label>
                                            <input type="date" className="form-control"
                                                value={this.state.dateOfBirth}
                                                onChange={this.onChangeDateOfBirth}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="country_of_birth">Country of
                                            Birth</label>
                                        <select className="form-control" id="country_of_birth"
                                            name="country_of_birth"

                                            value={this.state.countryOfBirth}
                                            onChange={this.onChangeCountryOfBirth}
                                        >
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
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mt">
                                            <label htmlFor="nationality">Nationality</label>
                                            <select className="form-control" id="Nationality"
                                                name="Nationality"
                                                value={this.state.nationality}
                                                onChange={this.onChangeNationality}
                                            >
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
                                    <div className="col-md-4">
                                        <div className="mt"><label htmlFor="DualNationality">Do
                                            you hold Dual
                                            Nationality?</label><select
                                                className="form-control" id="DualNationality"
                                                name="has_dual_nationality"
                                                value={this.state.dualNationality}
                                                onChange={this.onChangeDualNationality}
                                            >
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mt"><label htmlFor="">Marital
                                            Status</label><br /><input type="radio"
                                                id="married" name="marital_status"
                                                value="married"
                                                value={this.state.maritalStatus}
                                                onChange={this.onChangeMaritalStatus}
                                            /><label className="mr-1"
                                                htmlFor="married">Married</label>&nbsp;&nbsp;<input
                                                type="radio" id="unmarried"
                                                name="marital_status"
                                                value="unmarried" /><label className="mr-1"
                                                    htmlFor="unmarried">Unmarried</label>&nbsp;&nbsp;<input
                                                type="radio" id="widowed"
                                                name="marital_status" value="widowed" /><label
                                                    htmlFor="widowed">Widowed</label></div>
                                    </div>


                                    <div className="col-md-4">
                                        <div className="mt"><label htmlFor="abled">Are
                                            you differently abled?</label><select
                                                className="form-control" id="abled"
                                                name="is_differently_abled"


                                                value={this.state.differentlyAble}
                                                onChange={this.onChangedifferentlyAble}
                                            >
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select></div>
                                    </div>

                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="mt"><label htmlFor="passport">Do you
                                            have a valid passport?</label><select
                                                className="form-control" id="passport"
                                                name="has_valid_passport"
                                                value={this.state.passport}
                                                onChange={this.onChangepassport}
                                            >
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>


                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="mt"><label htmlFor="aadharCard">Do you
                                            have
                                            a valid Aadhar Card?</label><select
                                                className="form-control" id="aadharCard"
                                                name="has_aadhar_card"
                                                value={this.state.aadharCard}
                                                onChange={this.onChangeaadharCard}
                                            >
                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="mt">
                                        <label htmlFor="firstLanguage">First
                                            Language</label><input type="text"
                                                className="form-control" id="firstLanguage"
                                                placeholder="First Language"
                                                name="first_language" value=""

                                                value={this.state.firstLanguage}
                                                onChange={this.onChangefirstLanguage}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                    <div className="mt"><label htmlFor="">Do you have a valid
                                        study visa/work permit?</label><select
                                            className="form-control" name="has_visa"
                                            value={this.state.visa}
                                            onChange={this.onChangevisa}>
                                            <option value="0">No</option>
                                            <option value="1">Yes</option>
                                        </select></div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        <div className="mt-3"><label htmlFor="refusedVisa">Have
                                            you been refused a visa from Canada, the
                                            USA, the United Kingdom, New Zealand or
                                            Australia?</label><select
                                                className="form-control" id="refusedVisa"
                                                name="is_visa_refused"
                                                value={this.state.refusedVisa}
                                                onChange={this.onChangerefusedVisa}>

                                                <option value="0">No</option>
                                                <option value="1">Yes</option>
                                            </select></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-md-6"></div>
                                    <div className="col-md-6 text-right">
                                        <button type="button"
                                            className="btn btn-secondary btn-lg"

                                            type="submit" onClick={this.onSubmit}
                                        >Save
                                        </button>
                                        <button type="button"
                                            className="btn btn-success btn-lg">Save &
                                            Next</button>
                                    </div>

                                </div>

                            </div>



                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default StudentPersonalInformation;