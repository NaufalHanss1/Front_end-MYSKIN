import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon1 from "../Image/Ellipse 1.png";
import Icon2 from "../Image/Ellipse 3.png";
import Icon3 from "../Image/Ellipse 4.png";
import Icon4 from "../Image/Ellipse 5.png";

export default function DetailDaftar({ submission, onClose, isOpen }) {
  if (!submission) {
    return null;
  }

  const getPercentage = (text) => {
    const match = text.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) : 0;
  };

  const percentageColor =
    getPercentage(submission.percentage) >= 50
      ? "text-red-500"
      : "text-green-500";

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
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
              className="overflow-y-auto max-h-full bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 md:p-6 relative"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <button
                  onClick={onClose}
                  className="text-white bg-cyan-800 hover:bg-cyan-700 px-4 py-2 rounded-2xl h-[50px] mb-4"
                >
                  &larr; Kembali
                </button>
              </div>
              <div className="flex flex-col gap-4 mt-6">
                <div className="text-center">
                  <h2 className=" text-3xl font-semibold mb-3">
                    Prediksi Penyakit
                  </h2>
                  <p className=" text-sm  mb-4">
                    Hasil deteksi sudah divertifikasi oleh dokter
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mx-auto">
                <div className="overflow-auto border-dashed border-0 border-gray-400 rounded-lg p-2 bg-blue-50 w-[400px] md:w-[550px] h-[350px]">
                  <img
                    src={submission.gambar}
                    alt="gambar"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                {/* Mengubah margin dan text center untuk "ID Deteksi" */}
                <div className="mt-2 left-0 relative">
                  <h3 className="font-bold">ID Deteksi 16</h3>
                </div>

                <button className="mt-4 w-[450px] md:w-[550px] bg-cyan-800 hover:bg-cyan-700 rounded-2xl text-white px-4 py-2">
                  Unduh Gambar
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
                {/* Melanoma */}
                <div className="bg-white p-6 rounded-lg ">
                  <div className="flex justify-center mb-2">
                    <img src={Icon1} alt="" className="w-20 " />
                  </div>
                  <h4 className="text-lg font-semibold">Melanoma</h4>
                  <p className="text-2xl font-bold mt-2">Iya</p>
                </div>

                {/* Keakuratan */}
                <div className="bg-white p-6 rounded-lg ">
                  <div className="flex justify-center mb-2">
                    <img src={Icon2} alt="" className="w-20 " />
                  </div>
                  <h4 className="text-lg font-semibold">Keakuratan</h4>
                  <p className={`${percentageColor} text-2xl font-bold mt-2`}>{submission.percentage}</p>
                  <p className={`text-sm ${getPercentage(submission.percentage) >= 50 ? 'text-red-500' : 'text-green-500'}`}>{getPercentage(submission.percentage) >= 50
                          ? "(Tidak aman)"
                          : "(aman)"}</p>
                </div>

                {/* Status */}
                <div className="bg-white p-6 rounded-lg ">
                  <div className="flex justify-center mb-2">
                    <img src={Icon3} alt="" className="w-20 " />
                  </div>
                  <h4 className="text-lg font-semibold">Status</h4>
                  <p className={`text-2xl font-bold mt-2 ${submission.submissionStatus === 'Pending' ? 'text-red-500' : 'text-green-500'}`}>{submission.submissionStatus}</p>
                </div>
                <div className="bg-white p-6 rounded-lg ">
                  <div className="flex justify-center mb-2">
                    <img src={Icon4} alt="" className="w-20 " />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Pengajuan Vertifikasi
                  </h4>
                  <p className={`text-2xl font-bold mt-2 ${submission.verificationStatus === 'Unverified' ? 'text-red-500' : 'text-green-500'}`}>{submission.verificationStatus}</p>
                </div>
              </div>
              <div className="mt-6 text-center w-full">
                <h1 className="text-sm text-gray-700">
                  *Hasil deteksi belum dipastikan benar karena web hanya
                  memberikan indikasi awal, silahkan login untuk verifikasi
                  hasil deteksi oleh Dokter.
                </h1>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
