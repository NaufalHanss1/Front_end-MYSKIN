import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Detail_daftar() {
  const navigate = useNavigate();
  const location = useLocation();
  const submission = location.state;

  if (!submission) {
    return <p>Data tidak ditemukan.</p>;
  }

  return (
    <>
      <div className="bg-white min-h-screen p-8">
        <div className=" ml-10">
          <div className="mt-20 ">
            <button
              onClick={() => navigate(`/riwayat-deteksi`)}
              className="text-white bg-cyan-800 hover:bg-cyan-700 px-4 py-2 rounded-2xl h-[50px] mb-4"
            >
              &larr; Kembali
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className=" text-center">
              <h2 className=" text-3xl font-semibold mb-3">
                Prediksi Penyakit
              </h2>
              <p className=" text-sm  mb-4">
                Hasil deteksi sudah divertifikasi oleh dokter
              </p>
            </div>
            <div className="flex flex-col justify-center mx-auto mb-4">
              <div className=" overflow-auto border-dashed border-2 border-gray-400 rounded-lg p-2 bg-blue-50   w-[450px] h-[350px] flex items-center ">
                <div className="">
                  <img
                    src={submission.gambar}
                    alt="gambar"
                    className="w-[500px] h-[350px] object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className=" mt-5">
                <h3 className=" font-bold ">ID Deteksi 16</h3>
              </div>

              <button className="mt-4 bg-cyan-800 hover:bg-cyan-700 rounded-2xl text-white px-4 py-2 w-full ">
                Unduh Gambar
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center mt-8">
            {/* Melanoma */}
            <div className="bg-white p-6 rounded-lg ">
              <h4 className="text-lg font-semibold">Melanoma</h4>
              <p className="text-2xl font-bold mt-2">Iya</p>
            </div>

            {/* Keakuratan */}
            <div className="bg-white p-6 rounded-lg ">
              <h4 className="text-lg font-semibold">Keakuratan</h4>
              <p className="text-2xl font-bold mt-2">99%</p>
              <p className="text-sm text-red-500">(Tidak Aman)</p>
            </div>

            {/* Status */}
            <div className="bg-white p-6 rounded-lg ">
              <h4 className="text-lg font-semibold">Status</h4>
              <p className="text-2xl font-bold mt-2">Unverified</p>
            </div>
            <div className="bg-white p-6 rounded-lg ">
              <h4 className="text-lg font-semibold">Pengajuan Vertifikasi</h4>
              <p className="text-2xl font-bold mt-2">Unverified</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
