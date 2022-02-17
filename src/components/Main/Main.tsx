import * as React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Login'
import SignUp from "../SignUp";

type MainProps = {
  //
};

const Main: React.FC<MainProps> = () => {
  return <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  </main>;
};

export default Main;
