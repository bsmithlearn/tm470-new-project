//AddCaution.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const AddCaution = () => {
const nav = useNavigate();
//state for saving form data
const [formData, setFormData] = useState({

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

//handle for updating form
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

//handle for creating new caution
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/cautions', formData).then(() => {
    nav('/');
    });
};

return (
    <div className='container container-fluid min-vh-100 justify-content-center'>
    <h2 className='display-2 text-center'>Add Caution</h2>
    < Navigation />
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Forenames:</label>
            <input type="text" name="forename" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Surname:</label>
            <input type="text" name="surname" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Date of Birth:</label>
            <input type="date" name="dob" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Address Line One:</label>
            <input type="text" name="addLineOne" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Address Line Two:</label>
            <input type="text" name="addLineTwo" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Address Line Three:</label>
            <input type="text" name="addLineThree" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>postcode:</label>
            <input type="text" name="postcode" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Home Phone Number:</label>
            <input type="text" name="homePhone" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Mobile Phone Number:</label>
            <input type="text" name="mobilePhone" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Officer ID:</label>
            <input type="text" name="officerID" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Officer Rank and Surname:</label>
            <input type="text" name="officerRankSurname" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Force ID:</label>
            <input type="text" name="forceID" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Offence Description:</label>
            <input type="text" name="offenceDesc" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Offence Date:</label>
            <input type="text" name="offenceDate" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Offence Location:</label>
            <input type="text" name="offenceLocation" onChange={handleChange} required className='form-control'/>
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
        </div>
        <div>
            <button type="submit" className='btn btn-primary p-2 m-2'>Add Caution</button>
        </div>
        </form>
    </div>
);
};

export default AddCaution;
