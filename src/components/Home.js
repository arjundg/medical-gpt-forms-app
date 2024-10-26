// src/components/HomePage.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; // Import the custom CSS for dark theme
import React from 'react';

const HomePage = () => {
  return (
    <div className="App bg-dark text-light min-vh-100 body">
      <div className="container">
        <div className="row p-3">
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body bg-secondary text-light ">
                <h5 className="card-title">Visa Assessment</h5>
                <p className="card-text">Use AI to simplify your visa application process! Our innovative application guides you through a series of questions to determine your visa requirements for travel to various countries. </p>
                <a href="/medicines" className="btn btn-primary btn-primary btn-dark">Take me there</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body bg-secondary text-light ">
                <h5 className="card-title">Medicine Lookup</h5>
                <p className="card-text">Use AI to search for medications by name or brand to find information on generic or brand names, uses, dosage, side effects, interactions with other drugs, and prescription requirement.</p>
                <a href="/medicines" className="btn btn-primary btn-primary btn-dark">Take me there</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body bg-secondary text-light ">
                <h5 className="card-title">Symptom Checker</h5>
                <p className="card-text">Use AI to analyze your symptoms and suggest potential related diseases, which can be used to analyze health problems.</p>
                <a href="/symptoms" className="btn btn-primary btn-primary btn-dark">Take me there</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card mb-3">
              <div className="card-body bg-secondary text-light ">
                <h5 className="card-title">Disease Lookup</h5>
                <p className="card-text">Use AI to search for diseases by name or symptom to get detailed information on causes, risk factors, diagnosis, treatment options, and prevention methods.</p>
                <a href="/diseases" className="btn btn-primary btn-primary btn-dark">Take me there</a>
              </div>
            </div>
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
    </div>
  );
};

export default HomePage;
