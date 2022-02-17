import * as React from "react";
import './Login.scss';

type LoginProps = {
  //
};

const Login: React.FC<LoginProps> = () => {
  return <form>
          <div>
            <label htmlFor="user">Username: </label>
            <input type="text" name="user"/>
          </div>
          <div>
            <label htmlFor="pass">Password: </label>
            <input type="password" name="password"/>
          </div>  
          <input type="submit" value='Search'/>  
         </form>;
};

export default Login;
