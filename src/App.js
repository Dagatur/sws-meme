import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import memeData from './data/memeData';
import AddMeme from './components/AddMeme';
import Memes from './components/Memes';
import './App.css';

function App() {

const [memes, setMemes] = useState(memeData)

  return (
    <Router>
      <div>
        <nav className='nav-menu'>
          <NavLink to='/hot' className={(navData) => (navData.isActive ? 'active' : '')}>Hot</NavLink>
          <NavLink to='/regular' className={(navData) => (navData.isActive ? 'active' : '')}>Regular</NavLink>
          <NavLink to='/addmeme' className={(navData) => (navData.isActive ? 'active' : '')}>Add Meme</NavLink>
        </nav>
        <Routes>
          <Route path='/hot' element={<Memes memes={memes} setMemes={setMemes} isHot={true}/>}/>
          <Route path='/regular'element={<Memes memes={memes} setMemes={setMemes} isHot={false}/>}/>
          <Route path='/addmeme'element={<AddMeme/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
