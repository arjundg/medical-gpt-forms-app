// src/components/FormPage.js

import React, { useState } from 'react';
import autosize from 'autosize';
import { handleSubmit } from './FormUtils';


const Symptoms = () => {
  const [formData, setFormData] = useState({
    name: '',
    query: 'symptoms'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    autosize(formData.apiResult)
  };

  const handleFormSubmit = async (e) => {
    const apiResult = await handleSubmit(e, formData);  // Use the constant

    if (apiResult) {  // Check if there's an error (null)
      setFormData({
        name: formData.name,
        query: formData.query,
        apiResult: apiResult
      });
      autosize(formData.apiResult);
    }
  };

  return (
    <div className="App bg-dark text-light min-vh-100">
      <div className="container">
        <h3 className="text-left">Symptom Checker</h3>
        <p className="mb-3">
          Use AI to analyze medical symptoms and suggest potential related diseases.
        </p>
        <form onSubmit={handleFormSubmit} className="mb-3">
          <div className="mb-4 bg-secondary p-4 rounded">
            <label className="form-label">Provide a brief description of your health symptoms (Ex: fever, cough, and fatigue for an adult)</label>
            <input type="text" className="form-control" name="name"
              onChange={handleInputChange} maxLength={100} required />

          </div>
          <div className="mb-4">
            <button type="submit" className="btn btn-primary btn-dark">Check</button>
          </div>
        </form>

        <div className="mb-4">
          <label className="form-label"></label>
          <textarea disabled rows="15" className="form-control bg-secondary p-2 text-light" name="apiResult" value={formData.apiResult}></textarea>
        </div>
        <div className="col-sm-12">
          <div className="card mb-6">
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">Disclaimer</h5>
              <p className="card-text">This app is intended for informational purposes only and should not be construed as medical advice, diagnosis, or treatment. Always seek the advice of your doctor or other qualified healthcare provider with any questions you may have regarding a medical condition.
          Never disregard professional medical advice or delay in seeking it because of something you have read on this app.</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Symptoms;
