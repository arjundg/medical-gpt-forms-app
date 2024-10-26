// src/components/AboutPage.js

import React, { useState, useEffect } from 'react';
//import { Card, CardBody, CardHeader, CardLink, CardText } from 'react-bootstrap'
//import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import countryData from './countries.json'; // Import country data

const Visas = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  // Load countries from the local file
  useEffect(() => {
    setCountries(countryData.countries);
  }, []);

  // Fetch questions based on selected country
  useEffect(() => {
    if (selectedCountry) {
      setQuestions([
        {
          "Sequence": 1,
          "Text": "What is your nationality?",
          "Type": "CountryList",
          "Options": null
        },
        {
          "Sequence": 2,
          "Text": "What is the purpose of your travel?",
          "Type": "Dropdown",
          "Options": ["Business", "Tourism"]
        },
        {
          "Sequence": 3,
          "Text": "If business or work, what is your job description?",
          "Type": "Text",
          "Options": null,
          "Conditional": "Business selected in Question 2"
        },
        {
          "Sequence": 4,
          "Text": "What is your intended date of travel?",
          "Type": "Date",
          "Options": null
        },
        {
          "Sequence": 5,
          "Text": "Describe the job description",
          "Type": "TextArea",
          "Options": null
        }
      ]);
        /*axios.get(`https://api.example.com/get-questions?country=${selectedCountry}`)
         .then(response => {
          setQuestions(response.data.Questions);
        })
        .catch(error => console.error('Error fetching questions:', error));
 */    }
  }, [selectedCountry]);

  // Handle country selection
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setQuestions([]); // Reset questions on country change
    setFormData({}); // Reset form data
    setResult(null); // Reset result
  };

  // Handle input changes
  const handleInputChange = (sequence, value) => {
    setFormData(prevData => ({
      ...prevData,
      [sequence]: value
    }));
  };

  // Check if a question should be shown based on its conditional logic
  const shouldShowQuestion = (question) => {
    if (!question.Conditional) return true; // No conditional, show the question
    const [conditionalKey, conditionalValue] = question.Conditional.split(' selected in ');
    const selectedValue = formData[conditionalKey];
    return selectedValue === conditionalValue;
  };

  // Render input fields based on the question type
  const renderQuestion = (question) => {
    const { Sequence, Text, Type, Options } = question;

    if (!shouldShowQuestion(question)) return null; // Don't show question if the condition is not met

    return (
      <div className="mb-4" key={Sequence}>
        {Type === 'Text' && (
          <>
            <label className="form-label">{Text}</label>
            <input
              type="text"
              className="form-control"
              value={formData[Sequence] || ''}
              onChange={(e) => handleInputChange(Sequence, e.target.value)}
            />
          </>
        )}
        {Type === 'Dropdown' && (
          <>
            <label className="form-label">{Text}</label>
            <select
              className="form-select"
              value={formData[Sequence] || ''}
              onChange={(e) => handleInputChange(Sequence, e.target.value)}
            >
              <option value="">Select...</option>
              {Options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </>
        )}
        {Type === 'CountryList' && (
          <>
            <label className="form-label">{Text}</label>
            <select
              className="form-select"
              value={formData[Sequence] || ''}
              onChange={(e) => handleInputChange(Sequence, e.target.value)}
            >
              <option value="">Select country...</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </>
        )}
        {Type === 'Date' && (
          <>
            <label className="form-label">{Text}</label>
            <input
              type="date"
              className="form-control"
              value={formData[Sequence] || ''}
              onChange={(e) => handleInputChange(Sequence, e.target.value)}
            />
          </>
        )}
        {Type === 'TextArea' && (
          <>
            <label className="form-label">{Text}</label>
            <textarea
              className="form-control"
              rows="4"
              value={formData[Sequence] || ''}
              onChange={(e) => handleInputChange(Sequence, e.target.value)}
            />
          </>
        )}
      </div>
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setResult("You need a visa");

    /* axios.post('https://api.example.com/submit-answers', { formData }) // Replace with your API endpoint
        .then(response => {
            setResult(response.data);
        })
        .catch(error => console.error('Error submitting form:', error)); */
  };

  return (
    <div className="App bg-dark text-light min-vh-100">
      <div className="container">
        <h3 className="text-left">Visa Assessment using AI</h3>
        <p className="mb-3">
          Use AI to simplify your visa application process! Our innovative application guides you through a series of questions to determine your visa requirements for travel to various countries. By leveraging artificial intelligence, we aim to provide accurate information and tailored recommendations based on your answers. The application features a user-friendly interface that dynamically presents relevant questions, allowing you to easily input your nationality, travel purpose, and other essential details. Once you complete the questionnaire, our system submits your responses to a secure API and returns the necessary visa information, all in real-time.
        </p>
        {/* Country Selection */}
        <div className="row justify-content-start">
          <div className="col-sm">
            {!selectedCountry ? (
              <div className="mb-4 bg-secondary p-4 rounded" style={{ maxWidth: '600px', minWidth: '300px' }} >
                <label className="form-label">Which country do you wish to travel to?</label>
                <select
                  className="form-select"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  style={{ maxWidth: '600px' }}
                >
                  <option value="">Select country...</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-secondary p-4 rounded" style={{ maxWidth: '600px', minWidth: '300px' }}>
                {/* Group the questions */}
                <div className="mb-4">
                  <h2 className="text-left">Your Information</h2>
                  <div >
                    {questions.map(renderQuestion)}
                  </div>
                </div>

                <button type="submit" className="btn btn-dark w-100" style={{ maxWidth: '200px' }}>Submit</button>
              </form>
            )}
          </div>
          <div className="col-sm">
            {result && (
              <div className="bg-secondary p-4 rounded" style={{ maxWidth: '600px', minWidth: '300px' }}>
                <h2>Result</h2>
                <pre>{JSON.stringify(result, null, 2)}</pre>
              </div>
            )}
          </div>
        </div>
        
        <div className="col-sm-12">
          <div className="card mb-6">
            <div className="card-body bg-dark text-light">
              <h5 className="card-title">Disclaimer</h5>
              <p className="card-text">Please note that while this application uses AI technology to assist you in determining your visa requirements, the information provided may not always be accurate or up-to-date. It is essential to verify all details with official government sources or immigration authorities. Do not provide any personal information beyond what is necessary for the application, and avoid sharing sensitive data that could compromise your privacy. Your safety and security are our top priorities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visas;
