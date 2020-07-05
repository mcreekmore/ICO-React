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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import Index from "views/Index.js";
import Landing from "views/Landing.js";
import Login from "views/Login.js";
import Profile from "views/Profile.js";
import Register from "views/Register.js";
import Buy from "views/Buy.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <PublicRoute
        path="/"
        restricted={false}
        exact
        render={(props) => <Landing {...props} />}
      />
      <PublicRoute
        path="/index"
        restricted={false}
        exact
        render={(props) => <Index {...props} />}
      />
      <PublicRoute
        path="/login"
        restricted={true}
        exact
        render={(props) => <Login {...props} />}
      />
      <PrivateRoute
        path="/profile"
        exact
        render={(props) => <Profile {...props} />}
      />
      <PrivateRoute path="/buy" exact render={(props) => <Buy {...props} />} />
      <PublicRoute
        path="/register"
        restricted={true}
        exact
        render={(props) => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
