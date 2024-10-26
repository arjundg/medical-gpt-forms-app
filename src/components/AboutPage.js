// src/components/AboutPage.js

import React from 'react';
import { Card, CardBody, CardHeader, CardLink, CardText } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className="App bg-dark text-light min-vh-100">
      <div className="container">
        <div>
          <h3 className="text-left">Arjun K Dasgupta</h3>
        </div>
        <CardBody>
          <CardText>
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-light">
                Experienced Cloud Architecture and Software Engineering Leader, with special interest in AI and ML.
              </li>
              <li className="list-group-item bg-dark text-light">
                Experienced in Cloud Architecture and cloud-native development, DevOps automation, team leadership, and software architecture.<br />
              </li>
              <li className="list-group-item bg-dark text-light">
                Skilled at delivering large-scale enterprise solutions and spearheading digital transformations across highly complex, global environments.<br />
              </li>
              <li className="list-group-item bg-dark text-light">
                Expertise in defining strategic architectural direction and driving innovation while optimizing cloud resources and ensuring alignment with business goals.
              </li></ul>
          </CardText>
          <CardLink href="https://www.linkedin.com/in/arjunkdasgupta/" target='_blank' className="btn btn-primary btn-primary btn-dark">Connect with me on Linkedin</CardLink>
        </CardBody>
      </div>
    </div>
  );
};

export default AboutPage;
