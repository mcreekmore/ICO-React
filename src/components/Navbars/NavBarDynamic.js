import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../utils/Logout";

import {
  // Button,
  // DropdownMenu,
  // DropdownItem,
  NavItem,
  NavLink,
  // Row,
  // Col,
  Nav,
  // UncontrolledCollapse,
  UncontrolledTooltip,
} from "reactstrap";

export default function NavBarDynamic(props) {
  if (props.isLoggedIn) {
    return (
      <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
        <NavItem>
          <NavLink className="nav-link-icon" to="/" tag={Link}>
            <i className="fa fa-home mr-1" />
            <span className="nav-link-inner--text">Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link-icon" to="/profile" tag={Link}>
            <i className="fa fa-user mr-1" />
            <span className="nav-link-inner--text">Profile</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link-icon" onClick={Logout} to="/" tag={Link}>
            <i className="fa fa-sign-out mr-1" />
            <span className="nav-link-inner--text">Sign Out</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon"
            href="https://www.instagram.com/matthewcreekmore/"
            id="tooltip356693867"
            target="_blank"
          >
            <i className="fa fa-instagram" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              Instagram
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip356693867">
            Follow us on Instagram
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon"
            href="https://www.linkedin.com/in/creekmore/"
            id="tooltip184698705"
            target="_blank"
          >
            <i className="fa fa-twitter-square" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              LinkedIn
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip184698705">
            Connect on LinkedIn
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon"
            href="https://github.com/mcreekmore"
            id="tooltip112445449"
            target="_blank"
          >
            <i className="fa fa-github" />
            <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip112445449">
            Star us on Github
          </UncontrolledTooltip>
        </NavItem>
      </Nav>
      // <DropdownMenu>
      //   <DropdownItem to="/" tag={Link}>
      //     Home
      //   </DropdownItem>
      //   <DropdownItem to="/profile" tag={Link}>
      //     Profile
      //   </DropdownItem>
      //   <DropdownItem onClick={Logout} to="/" tag={Link}>
      //     Sign Out
      //   </DropdownItem>
      // </DropdownMenu>
    );
  } else {
    return (
      <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
        <NavItem>
          <NavLink className="nav-link-icon" to="/" tag={Link}>
            <i className="fa fa-home mr-1" />
            <span className="nav-link-inner--text">Home</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link-icon" to="/login" tag={Link}>
            <i className="fa fa-sign-in mr-1" />
            <span className="nav-link-inner--text">Sign In</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link-icon" to="/register" tag={Link}>
            <i className="fa fa-plus mr-1" />
            <span className="nav-link-inner--text">Register</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon"
            href="https://www.instagram.com/matthewcreekmore/"
            id="tooltip356693867"
            target="_blank"
          >
            <i className="fa fa-instagram" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              Instagram
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip356693867">
            Follow us on Instagram
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon"
            href="https://www.linkedin.com/in/creekmore/"
            id="tooltip184698705"
            target="_blank"
          >
            <i className="fa fa-twitter-square" />
            <span className="nav-link-inner--text d-lg-none ml-2">
              LinkedIn
            </span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip184698705">
            Connect on LinkedIn
          </UncontrolledTooltip>
        </NavItem>
        <NavItem>
          <NavLink
            className="nav-link-icon"
            href="https://github.com/mcreekmore"
            id="tooltip112445449"
            target="_blank"
          >
            <i className="fa fa-github" />
            <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
          </NavLink>
          <UncontrolledTooltip delay={0} target="tooltip112445449">
            Star us on Github
          </UncontrolledTooltip>
        </NavItem>
      </Nav>
      // <DropdownMenu>
      //   <DropdownItem to="/" tag={Link}>
      //     Home
      //   </DropdownItem>
      //   <DropdownItem to="/login" tag={Link}>
      //     Login
      //   </DropdownItem>
      //   <DropdownItem to="/register" tag={Link}>
      //     Register
      //   </DropdownItem>
      // </DropdownMenu>
    );
  }
}
