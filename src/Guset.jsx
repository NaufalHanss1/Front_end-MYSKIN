import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Guest/HeroGuest"
import Faq from "./components/Guest/FAQGuest"

export const Guest = () => {
    return (
      <div>
    
          <Routes>
                <Route  path="/DasboardG" element={<Dashboard/>}/>
                <Route  path="/FaqG" element={<Faq/>}/>
          </Routes>
  
      </div>
    );
  };
  
  export default Guest;