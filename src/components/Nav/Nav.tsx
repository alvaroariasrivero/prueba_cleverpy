import {FC, useContext} from "react";
import {Link} from 'react-router-dom';
import {userContext} from '../../App';
import './Nav.scss';

const Nav: FC = () => {

  const appContext = useContext(userContext);

  if(appContext?.user){
    return <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
            </ul>
          </nav>
  } else {
      return <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
              </ul>
            </nav>
  }
};

export default Nav;
