import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <FirstPage />
    <SecondPage/>
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>
    <Footer/>
    </React.Fragment>
  );
}

export default App;
