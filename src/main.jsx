import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './output.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Doctors from './Doctors.jsx'
import "tailwindcss/tailwind.css";
import Guest from './Guset.jsx'
import Main from './MainRouter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main/>
 
    

  </StrictMode>,
)
