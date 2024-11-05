import React from 'react'
import Hero from './components/Hero/Hero';
import FAQ from './components/FAQ/FAQ'
import RiwayatP from './components/RiwayatPasien/Daftar_pengajuan'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RiwayatD from './components/RiwayatPasien/Riwayat_Deteksi';
import Detail_RiwayatP from './components/RiwayatPasien/Detail_RiwayatP';
import Detail_DaftarP from './components/RiwayatPasien/Detail_daftar';


export const App = () => {
  return (
  
        
          <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/riwayat-pengajuan" element={<RiwayatD />} />
          <Route path="/riwayat-deteksi" element={<RiwayatP />} />
          <Route path="/detail_riwayatP" element={<Detail_RiwayatP />} />
          <Route path="/detail_daftarP" element={<Detail_DaftarP />} />
          </Routes>
        
    
     
   
     
  )
}

export default App;



