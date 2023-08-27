import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import { BsCreditCard } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" />
      </div>
      <div className="header-left"></div>
      <div className="header-right">
        <BsCreditCard className="icon header-icon" />
        <BsFillBellFill className="icon header-icon" />
        <BsFillEnvelopeFill className="icon header-icon" />
        <BsPersonCircle className="icon header-icon" />
      </div>
    </header>
  );
};

export default Header;
