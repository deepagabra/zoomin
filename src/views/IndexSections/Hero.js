import React from "react";
import { Button, Container, Row, Col, Card } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faNetworkWired, faDatabase, faServer, faCode, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

// Services data
const services = [
  { icon: faDesktop, title: "Computer Sales", description: "We provide a wide range of computers and accessories." },
  { icon: faNetworkWired, title: "Networking", description: "Expert networking solutions for your business." },
  { icon: faDatabase, title: "Database Management", description: "Reliable database management services." },
  { icon: faServer, title: "Server Maintenance", description: "Top-notch server maintenance and support." },
  { icon: faCode, title: "Software Development", description: "Custom software development services." },
  { icon: faShieldAlt, title: "Cybersecurity", description: "Protect your data with our cybersecurity services." },
];

// Courses data
const courses = [
  { 
    title: "Certificate in Computer Concept", 
    duration: "3 Months", 
    bgColor: "bg-primary"
  },
  { 
    title: "Certificate in Digital Marketing", 
    duration: "6 Months", 
    bgColor: "bg-info"
  },
  { 
    title: "Certificate in Financial Accounting", 
    duration: "6 Months", 
    bgColor: "bg-success"
  },
  { 
    title: "Certificate in Graphic Designing", 
    duration: "12 Months", 
    bgColor: "bg-warning"
  },
  { 
    title: "Advance Diploma in Computer Application", 
    duration: "12 Months", 
    bgColor: "bg-danger"
  },
  { 
    title: "Certificate in Office Automation", 
    duration: "6 Months", 
    bgColor: "bg-success"
  },
  { 
    title: "Diploma in E-Accounting", 
    duration: "12 Months", 
    bgColor: "bg-primary"
  },
  { 
    title: "Diploma in Video Editing", 
    duration: "6 Months", 
    bgColor: "bg-info"
  },
  { 
    title: "Certificate in Tally Prime", 
    duration: "2 Months", 
    bgColor: "bg-warning"
  },
  { 
    title: "Certificate in Management Information System", 
    duration: "6 Months", 
    bgColor: "bg-danger"
  },
  { 
    title: "Diploma in Web Designing & Multimedia", 
    duration: "12 Months", 
    bgColor: "bg-primary"
  },
  { 
    title: "Advance Diploma in Web Designing & Development", 
    duration: "12 Months", 
    bgColor: "bg-info"
  },
];

const Hero = () => {
  return (
    <>
      <div className="position-relative">
        {/* Hero section */}
        <section className="section section-hero section-img">
          {/* Background circles */}
          <div className="shape shape-style-1 shape-default">
            <span className="span-150" />
            <span className="span-50" />
            <span className="span-50" />
            <span className="span-75" />
            <span className="span-100" />
            <span className="span-75" />
            <span className="span-50" />
            <span className="span-100" />
            <span className="span-50" />
            <span className="span-100" />
          </div>
          <Container className="shape-container d-flex align-items-center py-lg">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <Col className="text-center" lg="6">
                  <p className="lead text-white">
                    A beautiful Design System for Bootstrap 4. It's Free and
                    Open Source.
                  </p>
                  <div className="btn-wrapper">
                    <Button
                      className="btn-white btn-icon mb-3 mb-sm-0"
                      color="default"
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      size="lg"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-envelope" />
                      </span>
                      <span className="btn-inner--text">Submit Enquiry</span>
                    </Button>{" "}
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="github"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      size="lg"
                      target="_blank"
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-phone" />
                      </span>
                      <span className="btn-inner--text">
                        <span className="text-warning mr-1">Call Now</span>
                      </span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      </div>
      
      {/* Services Section */}
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
      
      {/* Courses Section */}
      <section className="section bg-light" id="courses">
        <Container>
          <h2 className="text-center mb-5">Our Courses</h2>
          <Row>
            {courses.map((course, index) => (
              <Col md="4" className="mb-4" key={index}>
                <Card
                  body
                  className={`text-center p-4 ${course.bgColor} rounded shadow`}
                  style={{ cursor: "pointer", transition: "background-color 0.3s ease" }}
                >
                  <h5 className="text-white">{course.title}</h5>
                  <p className="text-white mb-0">Duration: {course.duration}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      
      {/* About Us Section */}
      <section className="section">
        <Container>
          <Row className="align-items-center">
            {/* Left Side: Image */}
            <Col md="6">
              <img
                src={require("../../assets/img/aboutus.jpg").default}
                alt="About Us"
                className="img-fluid rounded"
              />
            </Col>
            {/* Right Side: Text Content */}
            <Col md="6" className="mt-4 mt-md-0">
              <div className="about-content">
                <h2>About Us</h2>
                <p>
                  Creating A Community Of Life Long Learners. Step Into The World Of Designing With Lakshaya Computer Institute Where Our Highly Qualified Teachers Will Teach You From Basic To Expert.
                </p>
                <p>
                  Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.
                </p>
                <p>
                  Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;
