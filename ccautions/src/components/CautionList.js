//CautionList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const CautionList = () => {
const [cautions, setCautions] = useState([]);
const [selectedCaution, setSelectedCaution] = useState(null);

//handle for fetching cautions on page load
useEffect(() => {
    axios.get('http://localhost:5000/api/cautions').then((response) => {
    setCautions(response.data);
    });
}, []);

//handle for deleting cautions
const handleDelete = (cautionId) => {
    axios
    .delete(`http://localhost:5000/api/cautions/${cautionId}`)
    .then(() => {
        axios.get('http://localhost:5000/api/cautions').then((response) => {
        setCautions(response.data);
        });
    })
    .catch((error) => {
        console.error('Error deleting caution: ', error);
    });
};

//handle for setting caution to be deleted 
const handleEdit = (caution) => {
    setSelectedCaution(caution);
};

//handle for updating caution
const handleUpdate = (updatedCaution) => {
    axios
    .put(`http://localhost:5000/api/cautions/${updatedCaution._id}`, updatedCaution)
    .then(() => {
        axios.get('http://localhost:5000/api/cautions').then((response) => {
        setCautions(response.data);
        setSelectedCaution(null);
        });
    })
    .catch((error) => {
        console.error('Error updating caution: ', error);
    });
};

return (
    <div className='container container-fluid min-vh-100 justify-content-center'>
    <h2 className='display-2 text-center'>Caution List</h2>
    < Navigation />
    {selectedCaution && (
        <div>
        <h2>Edit Caution</h2>
        <form onSubmit={() => handleUpdate(selectedCaution)}>
        <div className="form-group">
            <label>MOJ Reference:</label>
            <input
                type="text"
                className="form-control"
                name="mojRef"
                value={selectedCaution.mojRef}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Police Reference:</label>
            <input
                type="text"
                className="form-control"
                name="polRef"
                value={selectedCaution.polRef}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Forenames:</label>
            <input
                type="text"
                className="form-control"
                name="forename"
                value={selectedCaution.forename}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Surname:</label>
            <input
                type="text"
                className="form-control"
                name="surname"
                value={selectedCaution.surname}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Date of Birth:</label>
            <input
                type="date"
                className="form-control"
                name="dob"
                value={selectedCaution.dob}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
               //required
            />
            </div>
            <div className="form-group">
            <label>Address Line 1:</label>
            <input
                type="text"
                className="form-control"
                name="addLineOne"
                value={selectedCaution.addLineOne}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Address Line 1:</label>
            <input
                type="text"
                className="form-control"
                name="addLineOne"
                value={selectedCaution.addLineOne}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Address Line 2:</label>
            <input
                type="text"
                className="form-control"
                name="addLineTwo"
                value={selectedCaution.addLineTwo}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Address Line 3:</label>
            <input
                type="text"
                className="form-control"
                name="addLineThree"
                value={selectedCaution.addLineThree}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Postcode:</label>
            <input
                type="text"
                className="form-control"
                name="postcode"
                value={selectedCaution.postcode}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Home Telephone Number:</label>
            <input
                type="text"
                className="form-control"
                name="homePhone"
                value={selectedCaution.homePhone}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    contact: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Mobile Telephone Number:</label>
            <input
                type="text"
                className="form-control"
                name="mobilePhone"
                value={selectedCaution.mobilePhone}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    contact: e.target.value,
                })
                }
               //required
            />
            </div>
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                className="form-control"
                name="email"
                value={selectedCaution.email}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    email: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Officer ID:</label>
            <input
                type="text"
                className="form-control"
                name="officerID"
                value={selectedCaution.officerID}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label>Officer Rank and Surname:</label>
            <input
                type="text"
                className="form-control"
                name="officerRankSurname"
                value={selectedCaution.officerRankSurname}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Force ID:</label>
            <input
                type="text"
                className="form-control"
                name="forceID"
                value={selectedCaution.forceID}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Offence Description:</label>
            <input
                type="text"
                className="form-control"
                name="offenceDesc"
                value={selectedCaution.offenceDesc}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Offence Date:</label>
            <input
                type="date"
                className="form-control"
                name="offenceDate"
                value={selectedCaution.offenceDate}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Offence Location:</label>
            <input
                type="text"
                className="form-control"
                name="offenceLocation"
                value={selectedCaution.offenceLocation}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Imposed Amount:</label>
            <input
                type="text"
                className="form-control"
                name="imposedAmt"
                value={selectedCaution.imposedAmt}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Amount Paid:</label>
            <input
                type="text"
                className="form-control"
                name="paidAmt"
                value={selectedCaution.paidAmt}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Balance:</label>
            <input
                type="text"
                className="form-control"
                name="balance"
                value={selectedCaution.balance}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div className="form-group">
            <label> Acct Status:</label>
            <input
                type="text"
                className="form-control"
                name="acctStatus"
                value={selectedCaution.acctStatus}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                //required
            />
            </div>
            <div>
            <button type="submit" className="btn btn-primary m-2">
                Update Caution
            </button>
            </div>
        </form>
        </div>
    )}
    <ul>
        {cautions.map((caution) => (
        <div className='container border border-dark rounded m-2 p-2 text-right' key={caution._id}>
            <h4>Account References</h4>
            <h5>MOJ Reference : {caution.mojRef}</h5>
            <h5>Police Reference: {caution.polRef}</h5>
            <h4>Defendant Details</h4>

            <h5>Forenames : {caution.forename}</h5>
            <h5>Surname : {caution.surname}</h5>
            <h5>Date of Birth : {caution.dob}</h5>
            <h5>Address Line One: {caution.addLineOne}</h5>
            <h5>Address Line Two : {caution.addLineTwo}</h5>
            <h5>Address Line Three : {caution.addLineThree}</h5>
            <h5>Postcode : {caution.postcode}</h5>
            <h5>Home Telephone Number : {caution.homePhone}</h5>
            <h5>Mobile Telephone Number : {caution.mobilePhone}</h5>
            <h5>Email : {caution.email}</h5>

            <h4>Police Details</h4>

            <h5>Officer ID : {caution.officerID}</h5>
            <h5>Officer Rank and Surname : {caution.officerRankSurname}</h5>
            <h5>Force ID: {caution.forceID}</h5>

            <h4>Offence Details</h4>

            <h5>Offence Description: {caution.offenceDesc}</h5>
            <h5>Offence Date : {caution.offenceDate}</h5>
            <h5>Offence Location : {caution.offenceLocation}</h5>

            <h4>Account Details</h4>

            <h5>Imposed Amount: {caution.imposedAmt}</h5>
            <h5>Paid Amount : {caution.paidAmt}</h5>
            <h5>Balance : {caution.balance}</h5>
            <h5>Account Status : {caution.acctStatus}</h5>

            <button
            className="btn btn-sm"
            onClick={() => handleDelete(caution._id)}
            >
            <h5>< Trash /></h5>
            </button>
            <button
            type="button" className="btn"
            onClick={() => handleEdit(caution)}
            >
            <h5>< PencilSquare /></h5>
            </button>
        </div>
        ))}
    </ul>
    </div>
);
};

export default CautionList;