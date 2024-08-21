//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CautionList from './components/CautionList';
import AddCaution from './components/AddCaution';

function App() {
return (
    <Router>
    <div className='container container-fluid min-vh-100 d-flex flex-column'>
        <Routes>
        <Route exact path="/" element={<CautionList/>} component={CautionList} />
        <Route exact path="/add" element={<AddCaution/>} component={AddCaution} />
        </Routes>
        
    </div>
    </Router>

);
}

export default App;