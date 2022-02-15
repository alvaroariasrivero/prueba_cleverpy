import * as React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home';
import Login from '../Login'

type MainProps = {
  //
};

const Main: React.FC<MainProps> = () => {
  return <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
  </main>;
};

export default Main;
