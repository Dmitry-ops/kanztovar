import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/Profile/ActualNews/News/News';
import {Contacts} from './components/Profile/Contacts/Contacts';




const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div class='app-wrapper-content'>
          <Routes>
          <Route path='/messages' element={<Messages/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
