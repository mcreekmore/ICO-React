import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../utils/Logout";

import {
  // Button,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function NavBarDropdown(props) {
  if (props.isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownItem to="/" tag={Link}>
          Home
        </DropdownItem>
        <DropdownItem to="/profile" tag={Link}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={Logout}>Sign Out</DropdownItem>
      </DropdownMenu>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownItem to="/" tag={Link}>
          Home
        </DropdownItem>
        <DropdownItem to="/login" tag={Link}>
          Login
        </DropdownItem>
        <DropdownItem to="/register" tag={Link}>
          Register
        </DropdownItem>
      </DropdownMenu>
    );
  }
}
