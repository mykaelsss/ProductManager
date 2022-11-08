import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  element={<Main/>} exact path="/" />
        <Route  element={<Detail/>} exact path="/:id" />
      </Routes>
    </div>
  );
}

export default App;
