import * as React from "react";
import { Navigate } from 'react-router-dom';
import './SignUp.scss'

type SignUpProps = {
  //
};

const SignUp: React.FC<SignUpProps> = () => {

  const[message, setMessage] = React.useState('');
  const[signUp, setSignUp] = React.useState(false)

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const password: string = event.currentTarget.password.value;
    const user: string = event.currentTarget.user.value;
    const passwordRpt: string = event.currentTarget.passwordRpt.value;
    const checked: boolean = event.currentTarget.accept.checked
    if(!user){
      setMessage('Username must be completed')
    } else if(password.length < 6){
      setMessage('Password must be at least six characters')
    }else if(password !== passwordRpt){
      setMessage('Passwords must match')
    } else if(!checked){
      setMessage('Terms and conditios must be accepted')
    }else {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let signUser = {username: user, password: password};
    users.push(signUser);
    localStorage.setItem("users", JSON.stringify(users));
    setSignUp(true)
    }
  }

  if(signUp){
    return <Navigate to='/login'/>
  }
  return <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="user">Username: </label>
            <input type="text" name="user"/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <div>
            <label htmlFor="passwordRpt">Repeat password: </label>
            <input type="password" name="passwordRpt" />
          </div>
          <div className="terms">
            <input type="checkbox" name='accept'/>
            <label htmlFor="accept">Accept terms and conditions of use</label>
          </div>    
          <input type="submit" value='Sign Up'/>
          <p className="incorrect">{message}</p>  
         </form>
};

export default SignUp;
