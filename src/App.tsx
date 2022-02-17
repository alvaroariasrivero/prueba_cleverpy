import * as React from "react";
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import User from './components/User';
import Header from './components/Header';
import Footer from './components/Footer';

interface AppContextInterface {
  user: string;
  login: (userName: string) => void
  logout: () => void
  setUser: (value: string) => void;
}

export const userContext = React.createContext<AppContextInterface | null>(null);

function App() {

  const[user, setUser] = useState('')

  const login = (userName: string) => {
    setUser(userName);
  }

  const logout = () => {
    setUser('');
  }

  const userObj: AppContextInterface = {
    user,
    login,
    logout,
    setUser
  }

  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={userObj}>
        <Header/>
        <User/>
        <Main/>
        <Footer/>
      </userContext.Provider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
