import * as React from "react";
import { Navigate } from 'react-router-dom';
import {userContext} from '../../App';
import './Login.scss';

type LoginProps = {
  //
};

const Login: React.FC<LoginProps> = () => {
  
  const appContext = React.useContext(userContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const password: string = event.currentTarget.password.value;
    const user: string = event.currentTarget.user.value;
    if(password && user){
      appContext?.setUser(user);
      appContext?.login(user);
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
         </form>;
};

export default Login;
