import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon1 from "../Image/Ellipse 1.png";
import Icon2 from "../Image/Ellipse 3.png";
import Icon3 from "../Image/Ellipse 4.png";
import Icon4 from "../Image/Ellipse 5.png";


    
export default function ({ submission, onClose, isOpen}) {

  const getPercentage = (text) => {
    const match = text.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) : 0;
  };
  
  const percentageColor =
    getPercentage(submission.percentage) >= 50
      ? "text-red-500"
      : "text-green-500";

  const backdrop = {
    hidden: { opacity: 0},
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: { duration: 0.2 },
    },

    
  };

  const modal = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3,ease: "easeInOut"},
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: { duration: 0.3,ease: "easeInOut" },
    },
  };


  return (
    <AnimatePresence >
      {isOpen && (
    <motion.div 
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    variants={backdrop}
    initial="hidden"
    animate="visible"
    exit="exit"
    onClick={onClose}
    
    >
      <motion.div className="bg-white rounded-lg shadow-lg w-full max-w-6xl overflow-y-auto max-h-full p-6 md:p-6 relative"
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
        <div className=" bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 ">Diverifikasi Oleh</h2>
            <p className="font-medium">{submission.vertified_by}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-1">
            <div className="bg-white p-6 rounded-lg w-[300px]">
              <h3 className="text-lg font-semibold mb-4">Detail Pasien</h3>
              <p>Nama : {submission.pasien.nama}</p>
              <p>Nomor Telpon :{submission.pasien.nomorTelepon}</p>
              <p>Email :{submission.pasien.email}</p>
              <p>Age :{submission.pasien.umur}</p>
            </div>
            <div className="bg-white p-6 rounded-lg ">
              <h3 className="text-lg font-semibold mb-4">Keluhan</h3>
              <p
                style={{
                  maxWidth: "800px",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                {" "}
                {submission.complaint}
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-lg font-semibold mb-4">Prediksi Penyakit</h3>

            <div className=" overflow-auto border-dashed border-0 border-gray-400 rounded-lg p-2  flex items-center justify-center md:w-[750px] h-[350px] mx-auto mb-4">
              <div className="grid grid-cols-1">
                <img
                  src={submission.gambar}
                  alt="Penyakit"
                  className="w-96 h-64 object-cover rounded-2xl"
                />
                <button className="mt-4 bg-cyan-800 hover:bg-cyan-700 rounded-2xl text-white px-4 py-2 ">
                  Unduh Gambar
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center  mt-8">
              {/* Melanoma */}
              <div className="bg-white p-6 rounded-lg ">
                  <div className="flex justify-center mb-2">
                    <img src={Icon1} alt="" className="w-20 " />
                  </div>
                  <h4 className="text-lg font-semibold">Penyakit</h4>
                  <p className={`text-2xl font-bold mt-2 ${submission.penyakit === 'Melamona' ? 'text-red-500': 'text-green-500'}`}>{submission.penyakit}</p>
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
                    <img src={Icon4} alt="" className="w-20 " />
                  </div>
                  <h4 className="text-lg font-semibold">
                    Pengajuan Vertifikasi
                  </h4>
                  <p className={`text-2xl font-bold mt-2 ${submission.verificationStatus === 'Unverified' ? 'text-red-500' : 'text-green-500'}`}>{submission.verificationStatus}</p>
                </div>
              
            </div>

            {/* Catatan Dokter */}
            <div className="mt-1 bg-white p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Catatan Dokter</h4>
              <p>Jangan lupa makan obat</p>
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
  );
}
