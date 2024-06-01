// src/components/FormPage.js

import React, { useState } from 'react';
import { handleSubmit } from './FormUtils';
import autosize from 'autosize';

const Medicines = () => {
  const [formData, setFormData] = useState({
    name: '',
    query: 'medicines'
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
          <h4>Medicine Lookup</h4>
        </div>
        <p class="mb-3">
          Use AI to search for medications by name or brand to find information on generic or brand names, uses, dosage, side effects, interactions with other drugs, and prescription requirement.
        </p>
        <div class="card bg-transparent p-2 border border-dark">
          <form onSubmit={handleFormSubmit} class="mb-3">
            <div class="mb-3">
              <label class="label label-default">Medicine Brand name or Generic name (Ex: Paracetamol for adults)</label>
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

export default Medicines;
