import React from "react";
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/pages/Home.js';
import Datenbankabfrage from "./components/pages/Datenbankabfrage";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/datenbankabfrage' exact element={<Datenbankabfrage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
