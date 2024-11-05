import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGE from "../Image/Test2.jpg";
import IMAGE2 from "../Image/Close Square.png";

export default function SignUp({ isOpen, onClose }) {
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
  return (
    
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
            className="bg-white rounded-lg shadow-lg w-[1100px] max-w-5xl p-6 md:p-6 relative"
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
              <div className=" w-[480px] h-[730px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                <img
                  src={IMAGE} // Ganti dengan URL gambar yang diinginkan
                  alt="Doctor"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>

              <div className=" w-1/2 md:pl-10 mt-10">
              <div className=" mb-5">
                <h2 className="text-2xl font-semibold text-center">Daftar</h2>
                <p className="text-center text-gray-500">Buat Akun anda</p>
                </div>
                <form
                  action="
                "
                >
                  <div className="flex flex-row ">
                    <div className="mb-4 mr-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama Depan
                      </label>
                      <input
                        type="text"
                        id="email"
                        placeholder="Masukkan email kamu"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="kataSandi"
                        className="block text-sm font-medium text-gray-700"
                      >
                         Nama Belakang
                      </label>
                      <input
                        type="text"
                        placeholder="masukan kata sandi"
                        id="password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row ">
                    <div className="mb-4  mr-6">
                      <label
                        htmlFor="kataSandi"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Email
                      </label>
                      <input
                        type="email"
                        placeholder="masukan kata sandi"
                        id="password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="kataSandi"
                        className="block text-sm font-medium text-gray-700"
                      >
                        No. Telpon
                      </label>
                      <input
                        type="text"
                        placeholder="masukan kata sandi"
                        id="password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                      <label
                        htmlFor="kataSandi"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        type="date"
                        placeholder="masukan kata sandi"
                        id="password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    <div className="flex flex-row ">
                    <div className="mb-4  mr-6">
                      <label
                        htmlFor="kataSandi"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="masukan kata sandi"
                        id="password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="kataSandi"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Konfirmasi Password
                      </label>
                      <input
                        type="password"
                        placeholder="masukan kata sandi"
                        id="password"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
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
                    <a
                      href="#"
                      className="text-sm text-cyan-600 hover:underline"
                    >
                      Lupa Kata Sandi?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className=" w-full bg-cyan-800 text-white py-2 rounded-full shadow hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-5"
                  >
                    Daftar
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-10 text-center">
                  Email harus mengandung salah satu dari domain berikut:
                  <span className="font-semibold">
                    @pasien.myskin.ac.id
                  </span>{" "}
                  untuk pasien, atau
                  <span className="font-semibold">
                    @dokter.myskin.ac.id
                  </span>{" "}
                  untuk dokter.
                </p>

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Sudah memiliki akun?{" "}
                  <a href="#" className="text-cyan-600 hover:underline">
                    masuk
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    
  );
}
