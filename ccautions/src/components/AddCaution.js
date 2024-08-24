//AddCaution.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const AddCaution = () => {
const nav = useNavigate();
//state for saving form data
const [formData, setFormData] = useState({

    mojRef: '',
    polRef: '',
    forename: '',
    surname: '',
    dob: '',
    addLineOne: '',
    addLineTwo: '',
    addLineThree: '',
    postcode: '',
    homePhone: '',
    mobilePhone: '',
    email: '',
    officerID: '',
    officerRankSurname: '',
    forceID: '',
    offenceDesc: '',
    offenceDate: '',
    offenceLocation: '',
    imposedAmt: '',
    paidAmt:'',
    balance: '',
    acctStatus: ''
});


const [errors, setErrors] = useState({});

//handle for updating form
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

//handle for creating new caution
const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            axios.post('http://localhost:5000/api/cautions', formData).then(() => {
                nav('/');
                });
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!/^[0-9]{7}[A-Z]$/.test(data.mojRef)) {
            errors.mojRef = 'MOJ ref is 7 digits followed by a capital letter. e.g. 1234567A';
        }


        if (!/^[0-9]{2}\/[A-Z]{2}\/[0-9]{5}\/[0-9]{2}$/.test(data.polRef)) {
            errors.polRef = 'Police ref is 2digits / 2 capital letters / 5 digits / 2 digits e.g. 01/AB/23456/78';
        }

        if (data.forename.length < 3) {
            errors.forename = 'Forename must be at least 3 characters long';
        } else if (data.forename.length > 20) {
            errors.forename = 'Forename must be at most 20 characters long';
        } 
        
        if (data.surname.length < 3) {
            errors.surname = 'Surname must be at least 3 characters long';
        } else if (data.surname.length > 20) {
            errors.surname = 'Surname must be at most 20 characters long';
        }  

        if (data.addLineOne.length < 3) {
            errors.addLineOne= 'addLineOne must be at least 3 characters long';
        } else if (data.addLineOne.length > 50) {
            errors.addLineOne = 'addLineOne must be at most 50 characters long';
        }

        if (data.addLineTwo.length < 3) {
            errors.addLineTwo= 'addLineTwo must be at least 3 characters long';
        } else if (data.addLineTwo.length > 50) {
            errors.addLineTwo = 'addLineTwo must be at most 50 characters long';
        }

        if (data.addLineThree.length < 3) {
            errors.addLineThree= 'addLineThree must be at least 3 characters long';
        } else if (data.addLineThree.length > 50) {
            errors.addLineThree = 'addLineThree must be at most 50 characters long';
        } 

        if (data.postcode.length > 10) {
            errors.postcode = 'postcode must be at most 10 characters long';
        } 

        if (!/^(?:0|\+?44)(?:\d\s?){9,10}$/.test(data.homePhone)) {
            errors.homePhone = 'Not a valid Landline Number';
        }

        if (!/^(?:0|\+?44)[7]\d\s?(?:\d\s?){7,8}$/.test(data.mobilePhone)) {
            errors.mobilePhone = 'Not a valid mobile phone number';
        }

        if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/.test(data.email)) {
            errors.email = 'Email is invalid';
        }

        if (data.officerID.length > 10) {
            errors.officerID = 'Officer ID must be at most 10 characters long';
        } 

        if (data.officerRankSurname.length > 30) {
            errors.officerRankSurname = 'Officer Rank and Surname must be at most 30 characters long';
        } 

        if (data.forceID.length > 2) {
            errors.forceID = 'Force ID must be at most 2 characters long';
        } 

        if (data.offenceDesc.length > 100) {
            errors.offenceDesc = 'Offence description must be at most 100 characters long';
        } 

        if (data.offenceLocation.length > 50) {
            errors.offenceLocation = 'Offence location must be at most 50 characters long';
        } 

        if (data.acctStatus.length > 100) {
            errors.acctStatus = 'Acct Status must be at most 100 characters long';
        } 

        return errors;
    };


return (
    <div className='container container-fluid min-vh-100 justify-content-center'>
    <h2 className='display-2 text-center'>Add Caution</h2>
    < Navigation />
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>MOJ Reference:</label>
            <input type="text" name="mojRef" onChange={handleChange} required className='form-control'/>
            {errors.mojRef && (
                <span className="error-message">
                    {errors.mojRef}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Police Reference:</label>
            <input type="text" name="polRef" onChange={handleChange} required className='form-control'/>
            {errors.polRef && (
                <span className="error-message">
                    {errors.polRef}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Forenames:</label>
            <input type="text" name="forename" onChange={handleChange} required className='form-control'/>
            {errors.forename && (
                <span className="error-message">
                    {errors.forename}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Surname:</label>
            <input type="text" name="surname" onChange={handleChange} required className='form-control'/>
            {errors.surname && (
                <span className="error-message">
                    {errors.surname}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Date of Birth:</label>
            <input type="date" name="dob" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Address Line One:</label>
            <input type="text" name="addLineOne" onChange={handleChange} required className='form-control'/>
            {errors.addLineOne && (
                <span className="error-message">
                    {errors.addLineOne}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Address Line Two:</label>
            <input type="text" name="addLineTwo" onChange={handleChange} required className='form-control'/>
            {errors.addLineTwo && (
                <span className="error-message">
                    {errors.addLineTwo}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Address Line Three:</label>
            <input type="text" name="addLineThree" onChange={handleChange} className='form-control'/>
            {errors.addLineThree && (
                <span className="error-message">
                    {errors.addLineThree}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>postcode:</label>
            <input type="text" name="postcode" onChange={handleChange} required className='form-control'/>
            {errors.postcode && (
                <span className="error-message">
                    {errors.postcode}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Home Phone Number:</label>
            <input type="text" name="homePhone" onChange={handleChange} required className='form-control'/>
            {errors.homePhone && (
                <span className="error-message">
                    {errors.homePhone}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Mobile Phone Number:</label>
            <input type="text" name="mobilePhone" onChange={handleChange} required className='form-control'/>
            {errors.mobilePhone && (
                <span className="error-message">
                    {errors.mobilePhone}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required className='form-control'/>
            {errors.email && (
                <span className="error-message">
                    {errors.email}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Officer ID:</label>
            <input type="text" name="officerID" onChange={handleChange} required className='form-control'/>
            {errors.officerID && (
                <span className="error-message">
                    {errors.officerID}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Officer Rank and Surname:</label>
            <input type="text" name="officerRankSurname" onChange={handleChange} required className='form-control'/>
            {errors.officerRankSurname && (
                <span className="error-message">
                    {errors.officerRankSurname}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Force ID:</label>
            <input type="text" name="forceID" onChange={handleChange} required className='form-control'/>
            {errors.forceID && (
                <span className="error-message">
                    {errors.forceID}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Offence Description:</label>
            <input type="text" name="offenceDesc" onChange={handleChange} required className='form-control'/>
            {errors.offenceDesc && (
                <span className="error-message">
                    {errors.offenceDesc}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Offence Date:</label>
            <input type="date" name="offenceDate" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Offence Location:</label>
            <input type="text" name="offenceLocation" onChange={handleChange} required className='form-control'/>
            {errors.offenceLocation && (
                <span className="error-message">
                    {errors.offenceLocation}
                </span>
                )}
        </div>
        <div className='form-group'>
            <label>Imposed Amount:</label>
            <input type="text" name="imposedAmt" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Paid Amount:</label>
            <input type="text" name="paidAmt" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Balance:</label>
            <input type="text" name="balance" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Account Status:</label>
            <input type="text" name="acctStatus" onChange={handleChange} required className='form-control'/>
            {errors.acctStatus && (
                <span className="error-message">
                    {errors.acctStatus}
                </span>
                )}
        </div>
        <div>
            <button type="submit" className='btn btn-primary p-2 m-2'>Add Caution</button>
        </div>
        </form>
    </div>
);
};

export default AddCaution;
