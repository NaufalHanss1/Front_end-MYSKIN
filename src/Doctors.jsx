import React from "react";
import StickyNavbar from "./components/Navbar/Navabar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/Doctor/Dashboard'
import DaftarPengajuan from "./components/Doctor/DaftarPengajuan";
import RiwayatVerifikasi from "./components/Doctor/RiwayatVerifikasi";

export const Doctors = () => {
  return (
    <div>
    
        <Routes>
            <Route path="/DashboardD" element={<Dashboard/>}/>
            <Route path="/DaftarPenagjuanD" element={<DaftarPengajuan/>}/>
            <Route path="/RiwayatVerifikasiD" element={<RiwayatVerifikasi/>}/>
        </Routes>
     
    </div>
  );
};

export default Doctors;
