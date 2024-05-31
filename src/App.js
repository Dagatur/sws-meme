import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Hot from './components/Hot';
import Regular from './components/Regular';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className='nav-menu'>
          <NavLink to='/hot' className={(navData) => (navData.isActive ? 'active' : '')}>Hot</NavLink>
          <NavLink to='/regular' className={(navData) => (navData.isActive ? 'active' : '')}>Regular</NavLink>
        </nav>
        <Routes>
          <Route path='/hot' element={<Hot/>}/>
          <Route path='/regular'element={<Regular/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
