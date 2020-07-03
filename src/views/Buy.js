import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
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
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections

class Buy extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Col lg="6">
                    <Row>
                      <span>&nbsp;&nbsp;</span>
                    </Row>
                    <Row>
                      <span>&nbsp;&nbsp;</span>
                    </Row>
                    <Row>
                      <span>&nbsp;&nbsp;</span>
                    </Row>
                    <Row>
                      <img
                        alt="..."
                        className="img-fluid"
                        // style="width:70px;height:70px;"
                        // style={styles.stretch}
                        height="70"
                        width="70"
                        src={require("assets/img/brand/creekmore-white.png")}
                      />

                      <h1 className="display-1 text-white">
                        Move Coin
                        {/* <span>completed with examples</span> */}
                      </h1>
                    </Row>
                    <h4 class="text-white">Amount to purchase (in ETH):</h4>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <img
                                  src="https://img.icons8.com/ios-filled/50/000000/ethereum.png"
                                  // style="width:20px;height:20px;filter: grayscale(100%);"
                                  height="20"
                                  width="20"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="0 ETH"
                              type="number"
                              step="0.01"
                              min="0"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="success"
                        href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="ni ni-send" />
                        </span>
                        <span className="btn-inner--text">Buy</span>
                      </Button>
                    </div>
                  </Col>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
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
            {/* 1st Hero Variation */}
          </div>

          {/* <Download /> */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Buy;
