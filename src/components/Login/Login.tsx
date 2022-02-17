import * as React from "react";
import {userContext} from '../../App';
import './Login.scss';

type LoginProps = {
  //
};

const Login: React.FC<LoginProps> = () => {
  
  const appContext = React.useContext(userContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const user: string = event.currentTarget.user.value;
    appContext?.setUser(user);
    appContext?.login(user)
  }

  return <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">Username: </label>
            <input type="text" name="user"/>
          </div>
          <div>
            <label htmlFor="pass">Password: </label>
            <input type="password" name="password"/>
          </div>  
          <input type="submit" value='Login'/>  
         </form>;
};

export default Login;
