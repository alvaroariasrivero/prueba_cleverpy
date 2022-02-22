import * as React from "react";
import {userContext} from '../../App';
import './User.scss';


const User: React.FC = () => {

  const appContext = React.useContext(userContext);

  if(appContext?.user){
    return <>
            <h3>Bienvenido {appContext?.user}</h3>
            <button className="logout-btn" onClick={appContext?.logout}>Logout</button>
          </>
          }else{
            return (<></>)
          };
};

export default User;
