import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (item) => {
    setActiveItem(item);

  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle status menu
  };

  useEffect(() => {
    // Set active item based on current URL
    if (location.pathname === "/doctor/DashboardD") {
      setActiveItem("Dashboard");
    } else if (location.pathname === "/doctor/DaftarPenagjuanD") {
      setActiveItem("Daftar Pengajuan");
    } else if (location.pathname === "/doctor/RiwayatVerifikasiD") {
      setActiveItem("Riwayat Verifikasi");
    }
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      {/* Logo Section */}
      <div className="text-cyan-700 font-bold text-lg">MySkin</div>

      {/* Icon untuk layar kecil*/}
      <div className="sm:hidden">
        {/* Toggle icon based on menu state */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu Items untuk ukuran besar*/}
      <div className="hidden sm:flex space-x-8">
        {/* Dashboard */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            handleClick("Dashboard");
            navigate(`/doctor/DashboardD`);
          }}
        >
          <div
            className={`p-2 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "Dashboard" ? "bg-cyan-700" : "bg-gray-300"
            } hover:bg-cyan-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-colors duration-300 ease-in-out ${
                activeItem === "Dashboard" ? "text-white" : "text-black"
              } hover:text-white`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a6 6 0 00-6 6v1.586L2.707 11.293a1 1 0 101.414 1.414L6 10.414V8a4 4 0 118 0v2.414l1.879 1.879a1 1 0 001.414-1.414L14 9.586V8a6 6 0 00-6-6z"
                clipRule="evenodd"
              />
              <path d="M10 12a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
          </div>
          <Link
            to=""
            className={`font-medium transition-colors duration-300 ease-in-out ${
              activeItem === "Dashboard" ? "text-cyan-700" : "text-black"
            } hover:text-cyan-700`}
          >
            Dashboard
          </Link>
        </div>

        {/* Daftar Pengajuan */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            handleClick("Daftar Pengajuan");
            navigate(`/doctor/DaftarPenagjuanD`);
          }}
        >
          <div
            className={`p-2 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "Daftar Pengajuan" ? "bg-cyan-700" : "bg-gray-300"
            } hover:bg-cyan-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-colors duration-300 ease-in-out ${
                activeItem === "Daftar Pengajuan" ? "text-white" : "text-black"
              } hover:text-white`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 019.9 0A7 7 0 014 13a1 1 0 001 1h2a1 1 0 100-2H5.072a5 5 0 117.856 0H13a1 1 0 100 2h2a1 1 0 001-1 7 7 0 00-10.95-8.95zM10 13a3 3 0 11-6 0 3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <a
            href="#"
            className={`font-medium transition-colors duration-300 ease-in-out ${
              activeItem === "Daftar Pengajuan" ? "text-cyan-700" : "text-black"
            } hover:text-cyan-700`}
          >
            Daftar Pengajuan
          </a>
        </div>

        {/* Riwayat Verifikasi */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => {
            handleClick("Riwayat Verifikasi");
            navigate(`/doctor/RiwayatVerifikasiD`);
          }}
        >
          <div
            className={`p-2 rounded-md transition-colors duration-300 ease-in-out ${
              activeItem === "Riwayat Verifikasi"
                ? "bg-cyan-700"
                : "bg-gray-300"
            } hover:bg-cyan-700`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-colors duration-300 ease-in-out ${
                activeItem === "Riwayat Verifikasi"
                  ? "text-white"
                  : "text-black"
              } hover:text-white`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.049 2.927C9.29 2.38 9.836 2 10.5 2s1.21.38 1.451.927l1.72 3.857 4.243.616c.664.096.925.916.447 1.366l-3.07 2.993.724 4.21c.109.635-.558 1.115-1.106.817L10 15.347l-3.789 1.993c-.548.297-1.215-.182-1.106-.817l.724-4.21-3.07-2.993c-.478-.45-.217-1.27.447-1.366l4.243-.616 1.72-3.857z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <a
            href="#"
            className={`font-medium transition-colors duration-300 ease-in-out ${
              activeItem === "Riwayat Verifikasi"
                ? "text-cyan-700"
                : "text-black"
            } hover:text-cyan-700`}
          >
            Riwayat Verifikasi
          </a>
        </div>
      </div>

      {/* Logout Section */}
      <div className="text-red-500 font-medium hidden sm:block">
        <a href="#" onClick={()=> navigate(`/guest/DasboardG`)}>Keluar</a>
      </div>

      {/* Versi mobile */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div className="sm:hidden absolute top-14 left-0 w-full bg-white shadow-md"
        initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
        
        >
          <motion.div className="flex flex-col items-center space-y-6 py-4">
            <button
              className={`text-lg font-medium ${
                activeItem === "Dashboard" ? "text-cyan-700" : "text-black"
              } duration-300 ease-in-out hover:text-cyan-700`}
              onClick={() => {handleClick("Dashboard")
                navigate(`/doctor/DashboardD`);

              }
              }
            >
              Dashboard
            </button>
            <button
              className={`text-lg font-medium ${
                activeItem === "Daftar Pengajuan"
                  ? "text-cyan-700"
                  : "text-black"
              } duration-300 ease-in-out hover:text-cyan-700`}
              onClick={() => {handleClick("Daftar Pengajuan")
                navigate(`/doctor/DaftarPenagjuanD`);
              }
              }
            >
              Daftar Pengajuan
            </button>
            <button
              className={`text-lg font-medium ${
                activeItem === "Riwayat Verifikasi"
                  ? "text-cyan-700"
                  : "text-black"
              } duration-300 ease-in-out hover:text-cyan-700`}
              onClick={() => {handleClick("Riwayat Verifikasi")
                navigate(`/doctor/RiwayatVerifikasiD`);

              }
            
            }
            >
              Riwayat Verifikasi
            </button>
            <button className="text-red-500 font-medium" onClick={()=> navigate(`/guest/DasboardG`)}>Keluar</button>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
