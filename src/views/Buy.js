import React from "react";
import Web3 from "web3";
// nodejs library that concatenates classes
// import classnames from "classnames";
import { ABI, address } from "../config/moveCrowdsale";

// reactstrap components
import {
  // Badge,
  Button,
  // Card,
  // CardBody,
  // CardImg,
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
  // componentWillMount() {

  // }
  // state = {};
  componentDidMount() {
    this.loadBlockchainData();
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  async loadBlockchainData() {
    const web3 = new Web3(
      Web3.givenProvider ||
        "https://mainnet.infura.io/v3/a7c7dbde56784dcb9d6342c8ad255a1d"
    ); // TODO change on launch to mainnet
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const moveCrowdsaleContract = new web3.eth.Contract(ABI, address);
    this.setState({ moveCrowdsaleContract });
    const closingTime = await moveCrowdsaleContract.methods
      .closingTime()
      .call();
    this.setState({ closingTime });
    console.log("Blockchain data loaded");
    // for (var i = 1; i <= taskCount; i++) {
    //   const task = await todoList.methods.tasks(i).call();
    //   this.setState({
    //     tasks: [...this.state.tasks, task],
    //   });
    // }
    this.setState({ loading: false });
  }

  // buyTokens(amount) {
  //   console.log(this.amountToBuy);
  // }

  async onSubmit(e) {
    e.preventDefault();

    const web3 = new Web3(
      Web3.givenProvider ||
        "https://mainnet.infura.io/v3/a7c7dbde56784dcb9d6342c8ad255a1d"
    ); // TODO change on launch to mainnet
    // const accounts = await web3.eth.getAccounts();
    const accountID = web3.eth.accounts[0];
    web3.eth.defaultAccount = accountID;

    window.ethereum.enable();

    var amountToBuy = this.state.amountToBuy;
    console.log("Amount to buy (in ETH): " + amountToBuy);

    console.log(web3.utils.toWei(amountToBuy, "ether"));

    web3.eth.getCoinbase((err, coinbase) => {
      // console.log("COINBASE: " + coinbase);

      this.setState({ loading: true });
      this.state.moveCrowdsaleContract.methods
        .buyTokens(coinbase)
        .send({
          // from: this.state.account,
          from: coinbase,
          value: web3.utils.toWei(this.state.amountToBuy),
        })
        .once("receipt", (receipt) => {
          this.setState({ loading: false });
        });
    });
  }

  handleChange(event) {
    this.setState({ amountToBuy: event.target.value });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      closingTime: 0,
      tasks: [],
      loading: true,
      amountToBuy: 0,
    };
    // this.amountToBuy = this.amountToBuy.bind(this);
    // this.amountToBuy = this.buyTokens.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // this.createTask = this.createTask.bind(this);
    // this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // createTask(content) {
  //   this.setState({ loading: true });
  //   this.state.todoList.methods
  //     .createTask(content)
  //     .send({ from: this.state.account })
  //     .once("receipt", (receipt) => {
  //       this.setState({ loading: false });
  //     });
  // }

  // toggleCompleted(taskId) {
  //   console.log("toggle complete init");
  //   this.setState({ loading: true });
  //   this.state.todoList.methods
  //     .toggleCompleted(taskId)
  //     .send({ from: this.state.account })
  //     .once("receipt", (receipt) => {
  //       this.setState({ loading: false });
  //     });
  // }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250 pt-200">
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
                    <h4 className="text-white">Amount to purchase (in ETH):</h4>
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
                                  alt="Ethereum Icon"
                                />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              ref={(c) => (this.amountToBuy = c)}
                              placeholder="0 ETH"
                              type="number"
                              step="0.01"
                              min="0"
                              value={this.state.amountToBuy}
                              onChange={this.handleChange}
                              // name="amountToBuy"
                            />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="success"
                        onClick={this.onSubmit.bind(this)}
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
