// MainRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from './App';
import Guest from './Guset';
import Doctor from './Doctors';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/app/*" element={<App />} />
        <Route path="/guest/*" element={<Guest />} />
        <Route path="/doctor/*" element={<Doctor />} />
        <Route path="/" element={<Navigate to="/app" />} /> {/* Redirect ke App sebagai halaman utama */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
