// src/components/FormPage.js

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const Form = () => {
  const [formData, setFormData] = useState({
    medicineName: '',
  });

  const [apiResult, setApiResult] = useState(''); // Initialize state for API result

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API call (replace with your actual API endpoint)
      const response = await axios.get('https://api.sampleapis.com/coffee/hot', {
        params: { name: formData.medicineName } // Pass any required parameters
      });

      // Handle the API response (e.g., update state with the data)
      console.log('API response:', response.data);
      setApiResult(response.data.message); // Set the API result in state
      // Reset form fields
      setFormData({
        medicineName: ''
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div class="row p-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Medicine Research</h5>
          <p class="card mb-3">This will give you information on medicine usage and side effects.</p>

          <form onSubmit={handleSubmit} class="mb-3">
            <div class="form-floating mb-3">

              <input type="text" class="form-control" id="medicineName"
                onChange={handleInputChange} required />
              <label for="medicineName">Medicine Brand name or Generic name:</label>
            </div>

            <div class="mb-3">
              <button type="submit" class="btn btn-primary btn-dark">Get Information</button>
            </div>
          </form>
          <div class="mb-3">
            <label for="answer" class="form-label"></label>
            <textarea disabled class="form-control" id="answer" rows="3" value={apiResult}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
