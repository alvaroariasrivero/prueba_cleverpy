import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>  
      </BrowserRouter>
    </div>
  );
}

export default App;
