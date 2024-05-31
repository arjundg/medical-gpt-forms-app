// src/components/AboutPage.js

import React from 'react';
import { Card, CardBody, CardHeader, CardLink, CardText } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div class="row p-3">
      <Card >
        <CardHeader>
          <h5 class="card-title">Arjun K Dasgupta</h5>
        </CardHeader>
        <CardBody>
          <CardText>Software Architect, with special interest in AI and ML.</CardText>
          <CardLink href="https://www.linkedin.com/in/arjunkdasgupta/" target='_blank' class="btn btn-primary btn-primary btn-dark">Connect with me on Linkedin</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutPage;
