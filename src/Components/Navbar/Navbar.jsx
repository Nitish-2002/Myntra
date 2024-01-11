import React from "react";
import "../../styles/Navbar.scss";
import Username from "../../images/user.png";
import Details from "./Details";
import Logo from "../../images/logo.png";
import ArrItems from "../../Objects/NavbarObj";
import Items from "./Items";
import Search from "./Search";

function Navbar() {
  
  return (
    <div className="navbar flex">
      <Items />
      <Search />
      <Details />
    </div>
  );
}
export default Navbar;
