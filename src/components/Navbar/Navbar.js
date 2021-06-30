import React from "react";

import NavLink from "components/NavLink/NavLink";

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='app-navbar'>
      <NavLink to={"/"}>Form</NavLink>
      <NavLink to={"/tree"}>Tree</NavLink>
    </div>
  );
};

export default Navbar;
