import React from "react";
import "./header.css";
import { FcIdea } from "react-icons/fc";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <FcIdea className="logo"/>
        Keeper
      </h1>
    </div>
  );
};

export default Header;
