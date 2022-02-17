import * as React from "react";
import Nav from '../Nav';
import './Header.scss';

type HeaderProps = {
  //
};

const Header: React.FC<HeaderProps> = () => {
  return <header><Nav/></header>;
};

export default Header;
