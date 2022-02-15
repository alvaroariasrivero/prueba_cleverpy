import * as React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';

type MainProps = {
  //
};

const Main: React.FC<unknown> = () => {
  return <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </main>;
};

export default Main;
