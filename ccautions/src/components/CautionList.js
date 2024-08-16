//AddressList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import { PencilSquare, Trash } from 'react-bootstrap-icons';

const CautionList = () => {
const [cautions, setCautions] = useState([]);
const [selectedCaution, setSelectedCaution] = useState(null);

//handle for fetching addresses on page load
useEffect(() => {
    axios.get('http://localhost:5000/api/cautions').then((response) => {
    setCautions(response.data);
    });
}, []);

//handle for deleting address
const handleDelete = (cautionId) => {
    axios
    .delete(`http://localhost:5000/api/cautions/${cautionId}`)
    .then(() => {
        axios.get('http://localhost:5000/api/cautions').then((response) => {
        setCautions(response.data);
        });
    })
    .catch((error) => {
        console.error('Error deleting address: ', error);
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
            <label>Name:</label>
            <input
                type="text"
                className="form-control"
                name="name"
                value={selectedCaution.name}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    name: e.target.value,
                })
                }
                required
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
                required
            />
            </div>
            <div className="form-group">
            <label>Phone:</label>
            <input
                type="text"
                className="form-control"
                name="phone"
                value={selectedCaution.contact}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    contact: e.target.value,
                })
                }
                required
            />
            </div>
            <div className="form-group">
            <label>Address:</label>
            <input
                type="text"
                className="form-control"
                name="name"
                value={selectedCaution.address}
                onChange={(e) =>
                setSelectedCaution({
                    ...selectedCaution,
                    address: e.target.value,
                })
                }
                required
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
            <h5>Name : {caution.name}</h5>
            <h5>Email : {caution.email}</h5>
            <h5>Contact : {caution.contact}</h5>
            <h5>Address : {caution.address}</h5>
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