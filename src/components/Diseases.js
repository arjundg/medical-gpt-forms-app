// src/components/FormPage.js

import React, { useState } from 'react';
import autosize from 'autosize';
import { handleSubmit } from './FormUtils';


const Diseases = () => {
  const [formData, setFormData] = useState({
    name: '',
    query: 'healthconditions'
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
    <div class="row p-3 bg-dark text-dark bg-opacity-10">
      <div class="body">
        <div class="card-header">
          <h4>Disease Lookup</h4>
        </div>
        <p class="mb-3">
          Search for diseases by name or symptom to get detailed information on causes, risk factors, diagnosis, treatment options, and prevention methods.
        </p>
        <div class="card bg-transparent p-2 border border-dark">
          <form onSubmit={handleFormSubmit} class="mb-3">
            <div class="mb-3">
              <label class="label label-default">Name of Disease you want to check (Ex: Asthma for adults)</label>
              <input type="text" class="form-control bg-dark p-2 text-dark bg-opacity-10" name="name"
                onChange={handleInputChange} maxLength={30} required />
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary btn-dark">Check</button>
            </div>
          </form>
          <div class="mb-3">
            <label class="form-label"></label>
            <textarea disabled rows="15" autoResizeEnabled class="form-control bg-dark p-2 text-dark bg-opacity-10" name="apiResult" value={formData.apiResult}></textarea>
          </div>
        </div>
        <div class="card-footer text-muted">
          This app is intended for informational purposes only and should not be construed as medical advice, diagnosis, or treatment. Always seek the advice of your doctor or other qualified healthcare provider with any questions you may have regarding a medical condition.<p />
          Never disregard professional medical advice or delay in seeking it because of something you have read on this app.
        </div>
      </div>
    </div>

  );
};

export default Diseases;
