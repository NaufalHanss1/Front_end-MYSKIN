import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Login from "../Modal/Login";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";


const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    if (location.pathname === "/app/Hero") {
      setActiveItem("Beranda");
    } else if (location.pathname === "/app/riwayat-deteksi") {
      setActiveItem("Riwayat-Deteksi");
    } else if (location.pathname === "/app/riwayat-pengajuan") {
      setActiveItem("Riwayat-Pengajuan");
    } else if (location.pathname === "/app/FAQ") {
      setActiveItem("FAQ1");
    }
  });

  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
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

  return (
    <>
      <nav
        className={`flex justify-between bg-white w-[100%]  md:w-[89%] fixed  left-1/2 translate-x-[-50%] rounded-xl p-6 shadow-lg opacity-90 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? " bg-white shadow-lg md:w-[100%] md:opacity-100 rounded-md top-0 " : "top-5"
        }`}
      >
        <h1 className=" text-2xl font-bold italic uppercase text-cyan-700">
          My skin
        </h1>
        {/* flex gap-12 [&>li]: cursor-pointer font-medium absolute md:static top-20 bg-white max-md:p-3 */}
        <div className="hidden sm:flex spacex-8">
          <ul
            className={`flex flex-row gap-12 font-medium text-gray-500 [&>li]:cursor-pointer  top-20 bg-white  text-center `}
          >
            {/* Menu Items untuk ukuran besar*/}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                handleClick("Beranda");
                navigate(`/app/Hero`);
              }}
            >
              <Link
                to=""
                className={`transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "Beranda" ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                <li>Beranda</li>
              </Link>
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                handleClick("Riwayat-Deteksi");
                navigate(`/app/riwayat-deteksi`);
              }}
            >
              <Link
                to=""
                className={`transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "Riwayat-Deteksi"
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                <li>Riwayat Deteksi</li>
              </Link>
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                handleClick("Riwayat-Pengajuan");
                navigate(`/app/riwayat-pengajuan`);
              }}
            >
              <Link
                to=""
                className={`transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "Riwayat-Pengajuan"
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                <li>Riwayat Pengajuan</li>
              </Link>
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                handleClick("FAQ1");
                navigate(`/app/FAQ`);
              }}
            >
              <Link
                to=""
                className={`transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "FAQ1" ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                <li>FAQ</li>
              </Link>
            </div>
          </ul>
        </div>

        <div className="md:hidden ">
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <GrClose size={25} /> : <FiMenu size={25} />}
          </button>
        </div>

        {/* Versi mobile */}
        <AnimatePresence>
        {openMenu && (
              
          <motion.div className=" sm:hidden absolute top-14 left-0 w-full bg-white shadow-md "
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          >
            <motion.div className="flex flex-col items-center space-y-6 py-4">
              <button
                className={`text-lg font-medium transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "Beranda" ? "text-black font-bold" : "text-gray-500"
                }`}
                onClick={() => {
                  handleClick("Beranda");
                  navigate(`/app/Hero`);
                }}
              >
                Beranda
              </button>
              <button
                className={`text-lg font-medium transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "Riwayat-Deteksi"
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  handleClick("Riwayat-Deteksi");
                  navigate(`/app/riwayat-deteksi`);
                }}
              >
                Riwayat Deteksi
              </button>
              <button
                className={`text-lg font-medium transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "Riwayat-Pengajuan"
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  handleClick("Riwayat-Pengajuan");
                  navigate(`/app/riwayat-pengajuan`);
                }}
              >
                Riwayat Pengajuan
              </button>
              <button
                className={`text-lg font-medium transition-colors duration-300 ease-in-out hover:text-black ${
                  activeItem === "FAQ1"
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
                onClick={() => {
                  handleClick("FAQ1");
                  navigate(`/app/FAQ`);
                }}
              >
                FAQ
              </button>

              <button className="text-red-500 font-medium">Keluar</button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>

        <div className="hidden sm:flex">
          <button onClick={()=> navigate(`/guest/DasboardG`)}>
            <h1 className="text-red-500  font-medium">Keluar</h1>
          </button>
        </div>
      </nav>
      <Login isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Navbar;
