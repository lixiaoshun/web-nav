import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/index.jsx";
import Classify from "../pages/Classify/index.jsx";

export default function(){
  return(
    <HashRouter >
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/classity/:id" element={<Classify />} />
      </Routes>
    </HashRouter>
  )
}