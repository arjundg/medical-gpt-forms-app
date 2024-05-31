// src/components/HomePage.js

import React from 'react';

const HomePage = () => {
  return (
    <div class="body row p-3 bg-dark text-dark bg-opacity-10">
      <div class="row p-3">
        <div class="col-sm-6">
          <div class="card mb-3 bg-dark text-dark bg-opacity-10">
            <div class="card-body">
              <h5 class="card-title">Medicine Lookup</h5>
              <p class="card-text">Use AI to search for medications by name or brand to find information on generic or brand names, uses, dosage, side effects, interactions with other drugs, and prescription requirement.</p>
              <a href="/medicines" class="btn btn-primary btn-primary btn-dark">Take me there</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card mb-3 bg-dark text-dark bg-opacity-10">
            <div class="card-body">
              <h5 class="card-title">Symptom Checker</h5>
              <p class="card-text">Use AI to analyze your symptoms and suggest potential related diseases.</p>
              <a href="/symptoms" class="btn btn-primary btn-primary btn-dark">Take me there</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card mb-3 bg-dark text-dark bg-opacity-10">
            <div class="card-body">
              <h5 class="card-title">Disease Lookup</h5>
              <p class="card-text">Use AI to search for diseases by name or symptom to get detailed information on causes, risk factors, diagnosis, treatment options, and prevention methods.</p>
              <a href="/diseases" class="btn btn-primary btn-primary btn-dark">Take me there</a>
            </div>
          </div>
        </div>
        <div class="card card-footer text-muted">
          This app is intended for informational purposes only and should not be construed as medical advice, diagnosis, or treatment. Always seek the advice of your doctor or other qualified healthcare provider with any questions you may have regarding a medical condition.<p />
          Never disregard professional medical advice or delay in seeking it because of something you have read on this app.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
