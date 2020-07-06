/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import axios from "axios";

// reactstrap components
import {
  // Alert,
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

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import ErrorAlert from "components/ErrorAlert.js";
import LoginButton from "../components/LoginButton";

class Login extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    // this.setState({});
  }

  constructor(props) {
    super();
    this.state = {
      email: null,
      password: null,
      user: null,
      showAlert: false,
    };
    this.handleSubmit.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  // AlertDialogue = () => {
  //   // const [showResults, setShowResults] = React.useState(false);
  //   // const onClick = () => setShowResults(true);
  //   return (
  //     <Alert color="danger">
  //       <strong>Login Failed: </strong> Email or password is incorrect
  //     </Alert>
  //   );
  // };

  handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email: this.state.email, password: this.state.password };
    console.log(user);
    // send the email and password to the server
    // const response = await axios.post("https://creekmore.io/api/auth", user);

    axios
      .post("https://creekmore.io/api/auth", user)
      .then((res) => {
        // set the state of the user
        this.user = res.data;

        console.log(res);

        // successful login
        if (res.status === 200) {
          // store the user in localStorage
          localStorage.setItem("user", JSON.stringify(res.data)); // when retrieving, JSON.parse(res)
          // const history = useHistory();
        } else {
          console.log("runs");
          this.state.showAlert = true;
        }
      })
      .catch((e) => {
        console.log(e);
        // this.state.showAlert = true;
        this.setState({ showAlert: true });
      });
  };

  toggleError() {
    this.setState({ showAlert: !this.state.showAlert });
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/github.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i
                                  // ref={(e) => (this.state.email = c)}
                                  className="ni ni-email-83"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              onChange={({ target }) =>
                                this.setState({ email: target.value })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              onChange={({ target }) =>
                                this.setState({ password: target.value })
                              }
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          {/* <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            onClick={this.handleSubmit.bind(this)}
                          >
                            Sign in
                          </Button> */}
                          <LoginButton
                            email={this.state.email}
                            password={this.state.password}
                          />
                        </div>
                      </Form>
                      <ErrorAlert
                        isOpen={this.state.showAlert}
                        toggleError={this.toggleError}
                      />
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="/register"
                        onClick={(e) => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Login;
