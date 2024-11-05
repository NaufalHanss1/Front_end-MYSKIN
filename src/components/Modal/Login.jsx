import React,{useState}from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGE from "../Image/Test1.jpg";
import IMAGE2 from "../Image/Close Square.png";
import Register from "../Modal/SignUp";
import { useNavigate } from "react-router-dom";

export default function Login({ isOpen, onClose }) {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const openRegisterModal = () => {
    
    onClose();
    setRegisterOpen(true);
  };

  const handleCloseModalReg = () => {
    setRegisterOpen(false);
  };

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: { duration: 0.2 },
    },
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (email.endsWith("@pasien.myskin.ac.id")) {
      navigate("/app/hero");
    } else if (email.endsWith("@dokter.myskin.ac.id")) {
      navigate("/doctor/DashboardD"); 
    } else {
      alert("Domain email tidak valid. Gunakan email @pasien.myskin.ac.id atau @dokter.myskin.ac.id.");
    }
  };

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 md:p-6 relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-500 opacity-100 rounded-full ">
            <button
              className="hover:scale-105 duration-200 absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <img src={IMAGE2} alt="" />
            </button>
            </div>
            <div className="flex flex-row">
              <div className=" w-[470px] h-[530px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src={IMAGE} // Ganti dengan URL gambar yang diinginkan
                  alt="Doctor"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className=" w-1/2 md:pl-10 mt-16">
                <h2 className="text-2xl font-semibold text-center">Masuk</h2>
                <p className="text-center text-gray-500">
                  Masuk untuk tetap terhubung
                </p>
                <form
                onSubmit={handleLoginSubmit}
                >
            
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Masukkan email kamu"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="kataSandi"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Kata Sandi
                    </label>
                    <input
                      type="password"
                      placeholder="masukan kata sandi"
                      id="password"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center ">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        {" "}
                        Remeber me{" "}
                      </label>
                      
                    </div>
                    <a href="#" className="text-sm text-cyan-600 hover:underline">
                      Lupa Kata Sandi?
                    </a>
                    </div>
                <button
                type="submit"
                className=" w-full bg-cyan-800 text-white py-2 rounded-full shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-5">
                    Masuk
                </button> 
                </form>
                <p className="text-sm text-gray-500 mt-10 text-center">
                  Email harus mengandung salah satu dari domain berikut:
                  <span className="font-semibold">@pasien.myskin.ac.id</span> untuk pasien, atau
                  <span className="font-semibold">@dokter.myskin.ac.id</span> untuk dokter.
                </p>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Belum memiliki akun?{" "}
                  <a href="#" onClick={openRegisterModal}  className="text-cyan-600 hover:underline">
                    Klik disini untuk daftar
                  </a>
                </p>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      ;
    </AnimatePresence>
    <Register isOpen={isRegisterOpen} onClose={handleCloseModalReg} />
    </>
  );
}
