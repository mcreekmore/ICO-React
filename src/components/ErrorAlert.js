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

// reactstrap components
import { Alert } from "reactstrap";

class ErrorAlert extends React.Component {
  render() {
    return (
      <>
        <Alert isOpen={this.props.isOpen} color="danger" fade={false}>
          {/* <span className="alert-inner--icon">
            <i className="ni ni-support-16" />
          </span> */}
          <span className="alert-inner--text ml-1">
            <strong>ERROR:</strong> Username or Password does not match
          </span>
        </Alert>
      </>
    );
  }
}

export default ErrorAlert;
