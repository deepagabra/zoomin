import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faNetworkWired, faDatabase, faServer, faCode, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const services = [
  { icon: faDesktop, title: "Computer Sales", description: "We provide a wide range of computers and accessories." },
  { icon: faNetworkWired, title: "Networking", description: "Expert networking solutions for your business." },
  { icon: faDatabase, title: "Database Management", description: "Reliable database management services." },
  { icon: faServer, title: "Server Maintenance", description: "Top-notch server maintenance and support." },
  { icon: faCode, title: "Software Development", description: "Custom software development services." },
  { icon: faShieldAlt, title: "Cybersecurity", description: "Protect your data with our cybersecurity services." },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md="4" className="mb-4" key={index}>
              <div className="text-center">
                <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3" />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
