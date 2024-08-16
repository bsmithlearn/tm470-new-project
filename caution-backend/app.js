//app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//bodyparser used for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/tm470');

const Caution = require('./models/caution');

//Get route for fetching cautions from database
app.get('/api/cautions', async (req, res) => {
try {
    const cautions = await Caution.find();
    res.json(cautions);
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

//Post route for storing new caution 
app.post('/api/cautions', async (req, res) => {
try {
    const newCaution = new Caution(req.body);
    const savedCaution = await newCaution.save();
    res.status(201).json(savedCaution);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

//Put route for updating caution with new data
app.put('/api/cautions/:id', async (req, res) => {
try {
    const updatedCaution = await Caution.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
    );
    res.json(updatedCaution);
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

//Delete route for deleting caution with specified id
app.delete('/api/cautions/:id', async (req, res) => {
try {
    await Caution.findByIdAndRemove(req.params.id);
    res.json({ message: 'Caution deleted' });
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

const PORT = 5000;
app.listen(PORT, () => {
console.log(`Server is started on port ${PORT}`);
});