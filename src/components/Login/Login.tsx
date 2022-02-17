import * as React from "react";
import { Navigate, Link } from 'react-router-dom';
import {userContext} from '../../App';
import './Login.scss';

type LoginProps = {
  //
};

const Login: React.FC<LoginProps> = () => {
  
  const appContext = React.useContext(userContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const logedPassword: string = event.currentTarget.password.value;
    const logedUser: string = event.currentTarget.user.value;
    const loginUser = JSON.parse(localStorage.getItem('user') || "");
    const {username, password} = loginUser;
    if(logedPassword === password && logedUser.toLowerCase() === username.toLowerCase()){
      appContext?.setUser(logedUser);
      appContext?.login(logedUser);
      }
  }

  if(appContext?.user){
    return <Navigate to='/'/>
  }

  return <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">Username: </label>
            <input type="text" name="user" required/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" required/>
          </div>  
          <input type="submit" value='Login'/>  
          <div ><Link to='/signup' className="signup">Sign up</Link></div>
         </form>;
};

export default Login;
