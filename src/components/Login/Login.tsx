import * as React from "react";
import { Navigate, Link } from 'react-router-dom';
import {userContext} from '../../App';
import './Login.scss';

type LoginProps = {
  //
};

const Login: React.FC<LoginProps> = () => {
  
  const appContext = React.useContext(userContext);

  const[credentials, setCredentiasl] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const logedPassword: string = event.currentTarget.password.value;
    const logedUser: string = event.currentTarget.user.value;
    const loginUser = JSON.parse(localStorage.getItem('users') || "");
    for(let i = 0; i < loginUser.length; i++){
      const {username, password} = loginUser[i];
      if(logedPassword === password && logedUser.toLowerCase() === username.toLowerCase()){
        appContext?.setUser(logedUser);
        appContext?.login(logedUser);
        appContext?.setLogged(true);
        } else {
          setCredentiasl('Incorrect username or password')
        }
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
          <p className="incorrect">{credentials}</p>
          <p className="account-msg">Still haven't an account? <Link to="/signup" className="signup"><b>Sign Up</b></Link></p>
         </form>;
};

export default Login;
