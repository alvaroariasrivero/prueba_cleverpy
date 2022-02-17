import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {userContext} from './context/userContext';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const[user, setUser] = useState('')

  const login = (userName: string) => {
    setUser(userName);
  }

  const logout = () => {
    setUser('');
  }

  const userObj = {
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
        <Main/>
        <Footer/>
      </userContext.Provider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
