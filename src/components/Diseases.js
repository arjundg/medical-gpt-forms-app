// src/components/FormPage.js

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import autosize from 'autosize';

const Diseases = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  //const [apiResult, setApiResult] = useState(''); // Initialize state for API result

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    autosize(formData.apiResult)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API call (replace with your actual API endpoint)
      console.log('API name:', formData.name);
      //const url = 'http://localhost:7071/api/MedicalGPT'
      const url = 'https://medicalgpt.azurewebsites.net/api/medicalgpt?code=UVHCGTPu45GKrRr2BMHLW9AO-HjlKS6ZSehsBvSSgF2ZAzFuCIRpqw%3D%3D'
      const response = await axios.get(url, {
        method: "post",
        params: { name: formData.name, query: 'healthconditions' } // Pass required parameters
      });

      // Handle the API response (e.g., update state with the data)
      console.log('API response:', response.data);
      //(response.data.message); // Set the API result in state
      // Reset form fields
      setFormData({
        name: formData.name,
        apiResult: response.data
      });
      autosize(formData.apiResult)
    } catch (error) {
      console.error('Error fetching data:', error);
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
          <form onSubmit={handleSubmit} class="mb-3">
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
