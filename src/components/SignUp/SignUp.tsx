import * as React from "react";

type SignUpProps = {
  //
};

const SignUp: React.FC<SignUpProps> = () => {

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const password: string = event.currentTarget.password.value;
    const user: string = event.currentTarget.user.value;
    const passwordRpt: string = event.currentTarget.passwordRpt.value;
    if(password === passwordRpt){
        localStorage.setItem('user', JSON.stringify({
          username: user,
          password: password
      }))}
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
          <input type="submit" value='Sign Up'/>  
         </form>
};

export default SignUp;
