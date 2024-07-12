import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import Footer from './components/Footer';
import MainPage from './components/MainPage';


function App() {
  return (
    <>   
      <Routes>
        <Route exact path='/' Component={MainPage} />
        <Route path='/firstpage' Component={FirstPage} />
        <Route path='/secondpage' Component={SecondPage} />
        <Route path='/thirdpage' Component={ThirdPage} />
        <Route path='/fourthpage' Component={FourthPage} />
        <Route path='/fifthpage' Component={FifthPage} />
        <Route path='/footer' Component={Footer} />
      </Routes>

    </>
  );
}

export default App;
