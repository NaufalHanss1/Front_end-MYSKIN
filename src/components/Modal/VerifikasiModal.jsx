import React, { useState } from "react";
import IMAGE2 from "../Image/Close Square.png";
import { motion, AnimatePresence } from "framer-motion";

export default function VerifikasiModal({ onClose, isOpen, submission }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [complaint, setComplaint] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleVerification = () => {
    setShowConfirmation(true); // Tampilkan modal konfirmasi ketika tombol Verifikasi ditekan
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    onClose(); // Tutup modal utama setelah konfirmasi
  };

  const getPercentage = (text) => {
    const match = text.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) : 0;
  };

  const percentageColor =
    getPercentage(submission.diagnosis) >= 50
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
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
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
            className="bg-white rounded-lg shadow-lg w-full max-h-full overflow-y-auto max-w-5xl p-6 md:p-6 relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <button
                onClick={onClose}
                className="text-white duration-300 ease-in-out bg-cyan-800 hover:bg-cyan-700 px-4 py-2 rounded-2xl h-[50px] mb-4"
              >
                &larr; Kembali
              </button>
            </div>
            <div className="container mx-auto p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Detail Pasien */}
                <div className="bg-white  rounded-lg p-4">
                  <h2 className="text-xl font-bold mb-4"> Detail Pasien</h2>
                  <p>
                    <strong>Nama :</strong> {submission.name}
                  </p>
                  <p>
                    <strong>Nomor Telpon :</strong> {submission.phone}
                  </p>
                  <p>
                    <strong>Email :</strong> {submission.email}
                  </p>
                  <p>
                    <strong>Umur :</strong> {submission.umur}
                  </p>
                </div>

                {/* Keluhan*/}
                <div className="bg-white  rounded-lg p-4 ">
                  <h2 className="text-xl font-bold mb-4">Keluhan</h2>
                  <p>{submission.keluahan}</p>
                </div>
              </div>
              {/* Prediksi Penyakit */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <h2 className="text-xl font-bold mb-4 text-center">
                  Prediksi Penyakit
                </h2>
                <div className="flex flex-col items-center justify-center mb-4">
                  <div className="">
                    <img
                      src={submission.imgUrl}
                      alt="Gambar "
                      className="rounded-lg mb-8 md:w-[350px]"
                    />
                  </div>
                  <div className="">
                    <button className="md:w-[350px] duration-300 ease-in-out  bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-full">
                      Unduh Gambar
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-bold">Melanoma</p>
                      <p>
                        {getPercentage(submission.diagnosis) >= 50
                          ? "Iya"
                          : "Tidak"}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-bold">Keakuratan</p>
                      <p className={`${percentageColor}`}>
                        {submission.diagnosis}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-bold">Status</p>
                      <p className="text-yellow-500">Unverified</p>
                    </div>
                  </div>
                </div>
                {/* Verifikasi Hasil Deteksi */}
                <div className="bg-white  rounded-lg p-4">
                  <h2 className="text-xl font-bold mb-4">
                    Verifikasi Hasil Deteksi
                  </h2>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Verifikasi Melanoma:</p>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="diagnosis"
                        value="Melanoma"
                        className="form-radio appearance-none h-5 w-5 border duration-300 ease-in-out border-gray-400 rounded-sm checked:bg-cyan-700 "
                        onChange={(e) => setDiagnosis(e.target.value)}
                      />
                      <span className="ml-2">Melanoma</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="diagnosis"
                        value="Bukan Melanoma"
                        className="form-radio appearance-none h-5 w-5 border border-gray-400 rounded-sm checked:bg-cyan-700 duration-300 ease-in-out"
                        onChange={(e) => setDiagnosis(e.target.value)}
                      />
                      <span className="ml-2">Bukan Melanoma</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Keluhan:</p>
                    <textarea
                      className="w-full border border-gray-300 p-2 rounded-md"
                      rows="4"
                      placeholder="Masukkan keluhan Anda disini"
                      value={complaint}
                      onChange={(e) => setComplaint(e.target.value)}
                    ></textarea>
                  </div>
                  <button onClick={handleVerification} className=" w-full bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded-xl">
                    Verifikasi
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

{showConfirmation && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowConfirmation(false)}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 md:p-6 relative"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">Simpan Verifikasi</h2>
            <p className="mb-6">Apakah kamu yakin ingin menyimpan verifikasi?</p>
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
                onClick={() => setShowConfirmation(false)}
              >
                Kembali
              </button>
              <button
                className=" ml-9 w-full bg-cyan-700 hover:bg-cyan-800 text-white py-2 px-4 rounded-lg"
                onClick={handleConfirm}
              >
                Simpan
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
