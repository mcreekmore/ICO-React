import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import { Button } from "reactstrap";
import axios from "axios";
import ErrorAlert from "./ErrorAlert.js";

const LoginButton = (props) => {
  const history = useHistory();
  const [showError, setShowError] = useState(false);
  // let showError = false;

  function toggleError() {
    setShowError(!showError);
  }

  async function handleClick(e) {
    e.preventDefault();
    // console.log(props.email);
    const user = { email: props.email, password: props.password };
    // console.log(user);
    console.log(props.checked);
    // send the email and password to the server
    // const response = await axios.post("https://creekmore.io/api/auth", user);

    axios
      .post("https://creekmore.io/api/auth", user)
      .then((res) => {
        // set the state of the user
        // this.user = res.data;

        // console.log(res);

        // successful login
        if (res.status === 200) {
          if (props.checked) {
            // store the user in localStorage
            localStorage.setItem("authData", JSON.stringify(res.data));
          } else {
            window.sessionStorage.setItem("authData", JSON.stringify(res.data));
          }

          // when retrieving, JSON.parse(res)
          history.push("/");
          // const history = useHistory();
        } else {
          // console.log("runs");
          toggleError();
        }
      })
      .catch((e) => {
        // console.log(e);
        // this.state.showAlert = true;
        toggleError();
      });
  }

  return (
    <div>
      <Button
        className="my-4"
        color="primary"
        type="submit"
        onClick={handleClick}
      >
        Sign in
      </Button>
      <ErrorAlert isOpen={showError} />
    </div>
  );
};

export default LoginButton;
