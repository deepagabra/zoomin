/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Login extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    nameFocused: false,
    emailFocused: false,
    phoneFocused: false,
    courseFocused: false,
    messageFocused: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(this.state);
  };

  render() {
    return (
      <>
        <section className="section section-lg section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <h3 className="display-3 text-white">
                Join Our Courses{" "}
                  <span className="text-white">and Shape Your Future</span>
                </h3>
                <p className="text-white">
                Fill out the form to enroll in our courses and take the first step towards a brighter future. Whether you're looking to enhance your skills or start a new career, our courses are designed to help you succeed. Don't miss out on this opportunity to learn and grow with us.
                </p>
             
                
              </Col>
              <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-right">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Lets Connect to join the course</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.nameFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Name"
                              type="text"
                              name="name"
                              onFocus={() => this.setState({ nameFocused: true })}
                              onBlur={() => this.setState({ nameFocused: false })}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.emailFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              name="email"
                              onFocus={() => this.setState({ emailFocused: true })}
                              onBlur={() => this.setState({ emailFocused: false })}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.phoneFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone Number"
                              type="text"
                              name="phone"
                              onFocus={() => this.setState({ phoneFocused: true })}
                              onBlur={() => this.setState({ phoneFocused: false })}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.courseFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Course"
                              type="text"
                              name="course"
                              onFocus={() => this.setState({ courseFocused: true })}
                              onBlur={() => this.setState({ courseFocused: false })}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: this.state.messageFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-chat-round" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Message"
                              type="textarea"
                              name="message"
                              onFocus={() => this.setState({ messageFocused: true })}
                              onBlur={() => this.setState({ messageFocused: false })}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button className="my-4" color="primary" type="submit">
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
