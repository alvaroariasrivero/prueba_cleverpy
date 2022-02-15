import * as React from "react";
import {Link} from 'react-router-dom';

type NavProps = {
  //
};

const Nav: React.FC<NavProps> = () => {
  return <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  </nav>;
};

export default Nav;
