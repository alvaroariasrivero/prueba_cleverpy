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
    console.log(checked)
    if(password.length < 6){
      setMessage('Password must be at least six characters')
    } if(!checked){
      setMessage('Terms and conditios must be accepted')
    }else {
      if(password === passwordRpt){
          localStorage.setItem('user', JSON.stringify({
            username: user,
            password: password
        }))
        setSignUp(true)} else {
          setMessage('Passwords must match')
        }
    }
  }

  if(signUp){
    return <Navigate to='/login'/>
  }
  return <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="user">Username: </label>
            <input type="text" name="user" required/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" required/>
          </div>
          <div>
            <label htmlFor="passwordRpt">Repeat password: </label>
            <input type="password" name="passwordRpt" required/>
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
