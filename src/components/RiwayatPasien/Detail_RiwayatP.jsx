import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Detail_RiwayatP() {
  const location = useLocation(); // Menerima data yang dikirim dari Riwayat_Pengajuan
  const navigate = useNavigate();
  const submission = location.state; // Data submission



  return (
    <>
      <div className=" bg-white min-h-screen p-8">
        <div className=" ml-20">
          <div className="mt-20 ">
            <button
              onClick={() => navigate(`/riwayat-pengajuan`)}
              className="text-white bg-cyan-800 hover:bg-cyan-700 px-4 py-2 rounded-2xl h-[50px] mb-4"
            >
              &larr; Kembali
            </button>
          </div>
          {/* Verifikasi Section */}
          <div className=" bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 ">Diverifikasi Oleh</h2>
            <p className="font-medium">{submission.vertified_by}</p>
          </div>
          <div className="flex flex-row gap-4 mt-6">
            <div className="bg-white p-6 rounded-lg w-">
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

            <div className=" overflow-auto border-dashed border-2 border-gray-400 rounded-lg p-2 bg-blue-50 flex items-center justify-center w-[450px] h-[350px] mx-auto mb-4">
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

            <div className="grid grid-cols-3 gap-4 text-center mt-8">
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
            </div>

            {/* Catatan Dokter */}
            <div className="mt-8 bg-white p-6 rounded-lg ">
              <h4 className="text-lg font-semibold mb-2">Catatan Dokter</h4>
              <p>Jangan lupa makan obat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
