import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  element={<Main/>} exact path="/" />
        <Route  element={<Detail/>} exact path="/:id" />
        <Route element={<Update/>} exact path='/:id/edit'/>
      </Routes>
    </div>
  );
}

export default App;
