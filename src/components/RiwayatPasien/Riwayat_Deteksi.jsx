import React, { useState,useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import image1 from "../Image/Frame 130.png";
import RiwayatDetail from "../Modal/RiwayatDetail";
import Navbar from "../Navbar/Navabar";
import { motion } from "framer-motion";

const Card = ({ data, openModal }) => {
  const getPercentage = (text) => {
    const match = text.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) : 0;
  };

  const statusColor2 = {
    Pending: "text-red-500",
    Sudah: "text-green-500",
  };

  const statusColor = {
    Melamona: "text-red-500",
    "Bukan Melamona": "text-green-500",
  };
  const trunaceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "....";
    }
    return text;
  };
  const percentageColor =
    getPercentage(data.percentage) >= 50 ? "text-red-500" : "text-green-500";
  // const percentageColor =
  //   data.diagnosisAI && data.diagnosisAI.includes("Melanoma")
  //     ? "text-red-500"
  //     : "text-green-500";

  return (
    <motion.div className="border bg-white shadow-md rounded-lg p-6 my-4 hover:border-cyan-800  hover:scale-105 duration-200"
    initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }} 
   
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.1, delay: 0.0,  ease: [0.4, 0, 0.2, 1] }} 
      
    >
      <div className=" hidden sm:grid grid-cols-9 gap-4 text-center text-black text-sm font-semibold pb-4 w-full md:border-b border-gray-300 ">
        <div>Tanggal Pengujian</div>
        <div>Presentase</div>
        <div>Gambar</div>
        <div>Keluhan</div>
        <div>Tanggal Diverifikasi</div>
        <div>Verifikation By</div>
        <div>Status</div>
        <div>Catatan Doktor</div>
        <div>Aksi</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-9 gap-4 text-left w-full text-gray-700 py-4 ">
        <div className="flex md:justify-center justify-between items-center my-3">
          <div className="text-black font-bold text-lg ml-3 sm:hidden">
            Tanggal Pengujian
          </div>
          <div>{data.date}</div>
        </div>
        <div className="flex  md:justify-center justify-between items-center  my-3 ">
          <div className="text-black font-bold text-lg ml-3 sm:hidden ">
            Presentase
          </div>
          <div className={`${percentageColor}`}>
            {data.percentage}
            <p
              className={`text-sm text-center ${
                getPercentage(data.percentage) >= 50
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {getPercentage(data.percentage) >= 50 ? "(Tidak aman)" : "(Aman)"}
            </p>
          </div>
        </div>

        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">
            Gambar
          </div>
          <img
            src={data.gambar}
            alt=""
            className="w-36  h-28 object-cover rounded-xl"
          />
          {/* <div className={`${percentageColor}`}>{data.diagnosisAI}</div> */}
        </div>
        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">
            Keluhan
          </div>
          <div
            className="  text-center"
            style={{
              maxWidth: "150px",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {trunaceText(data.complaint, 40)}
          </div>
        </div>
        <div className="flex md:justify-center justify-between items-center my-3">
          <div className="text-black font-bold text-lg ml-3 sm:hidden">Tanggal Diverifikasi</div>
          <div>{data.tanggal_vertivikasi}</div>
        </div>
        <div className="flex md:justify-center justify-between items-center md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3 sm:hidden">
            Verifikation By
          </div>
          <div>{data.vertified_by}</div>
        </div>
        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">
            Status
          </div>
          <div className={`${statusColor[data.penyakit]}`}>{data.penyakit}</div>
        </div>
        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">
            Catatan Doktor
          </div>
          <div
            className="  text-center"
            style={{
              maxWidth: "150px",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            {trunaceText(data.Catatan_doktor, 40)}
          </div>
        </div>
        <div className="flex justify-center  items-center p-0 m-0  md:mt-0 mt-3 ">
          <div className="flex flex-row">
            <button
              onClick={() => openModal(data)}
              className="bg-blue-500 hover:bg-blue-700 text-white p-3 md:w-11 w-20 mx-2 rounded-full transition duration-300 ease-in-out"
            >
              ℹ️
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white p-2 md:w-11 w-20 rounded-full transition duration-300 ease-in-out">
              🗑️
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Riwayat_Pengajuan() {
  const navigate = useNavigate();

  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Matikan loading setelah 2 detik
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  const Submission = [
    {
      date: "22/06/2024",
      gambar: image1,
      percentage: "50.70% Melanoma",
      complaint:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu ullamcorper purus, in vehicula libero. Duis eu pharetra metus, sed mollis urna. In non velit pulvinar, varius nisi at, lacinia neque. Proin tempus purus vel risus lacinia, sit amet ultrices turpis viverra. Vivamus suscipit varius erat, at consequat ligula elementum et. Quisque sollicitudin vel leo sit amet tristique. Nunc posuere tempor elit, in maximus quam tincidunt eget. Aenean bibendum ligula metus, a scelerisque elit mollis non. Cras pharetra ullamcorper magna, id laoreet mi porta ac.",
      submissionStatus: "Sudah",
      verificationStatus: "Unverified",
      tanggal_vertivikasi: "22/06/2024",
      vertified_by: "Hans_Capon",
      penyakit: "Melamona",
      Catatan_doktor: "Catatan Doktor",
      pasien: {
        nama: "Zakiya Pasien",
        nomorTelepon: "082246881193",
        email: "shodiq@pasien.ac.id",
        umur: 21,
      },
    },
    {
      date: "22/06/2021",
      gambar: image1,
      percentage: "40.70% Melanoma ",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya...",
      submissionStatus: "Sudah",
      verificationStatus: "Sudah Verified",
      tanggal_vertivikasi: "22/06/2021",
      vertified_by: "Hans_Capon",
      penyakit: "Bukan Melamona",
      Catatan_doktor: "Catatan Doktor",
      pasien: {
        nama: "MANI Pasien",
        nomorTelepon: "082246881193",
        email: "shodiq@pasien.ac.id",
        umur: 21,
      },
    },
    {
      date: "22/06/2021",
      gambar: image1,
      percentage: "40.70% Melanoma ",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya...",
      submissionStatus: "Sudah",
      verificationStatus: "Sudah Verified",
      tanggal_vertivikasi: "22/06/2021",
      vertified_by: "Hans_Capon",
      penyakit: "Melamona",
      Catatan_doktor: "Catatan Doktor",
      pasien: {
        nama: "MANI Pasien",
        nomorTelepon: "082246881193",
        email: "shodiq@pasien.ac.id",
        umur: 21,
      },
    },
    {
      date: "22/06/2021",
      gambar: image1,
      percentage: "40.70% Melanoma ",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya...",
      submissionStatus: "Sudah",
      verificationStatus: "Sudah Verified",
      tanggal_vertivikasi: "22/06/2021",
      vertified_by: "Hans_Capon",
      penyakit: "Melamona",
      Catatan_doktor: "Catatan Doktor",
      pasien: {
        nama: "MANI Pasien",
        nomorTelepon: "082246881193",
        email: "shodiq@pasien.ac.id",
        umur: 21,
      },
    },
    {
      date: "22/06/2021",
      gambar: image1,
      percentage: "40.70% Melanoma ",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya...",
      submissionStatus: "Sudah",
      verificationStatus: "Sudah Verified",
      tanggal_vertivikasi: "22/06/2021",
      vertified_by: "Hans_Capon",
      penyakit: "Melamona",
      Catatan_doktor: "Catatan Doktor",
      pasien: {
        nama: "MANI Pasien",
        nomorTelepon: "082246881193",
        email: "shodiq@pasien.ac.id",
        umur: 21,
      },
    },
  ];

  const trunaceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "....";
    }
    return text;
  };

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubmission(null);
  };

  return (
    <>
      <div className=" container mx-auto p-4 mt-28">
        <h2 className="text-2xl font-bold mb-4">Riwayat Pengajuan</h2>
        {isLoading ? (
           <motion.div
           className="flex justify-center items-center h-96"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
         >
           {/* SVG Loading animation */}
           <svg
             className="animate-spin"
             width="128"
             height="128"
             viewBox="0 0 128 128"
             xmlns="http://www.w3.org/2000/svg"
           >
             <circle
               cx="64"
               cy="64"
               r="56"
               stroke="#12476b" // Warna garis
               strokeWidth="8"
               fill="none"
               strokeLinecap="round"
               strokeDasharray="350" // Panjang total garis
               strokeDashoffset="350" // Posisi awal garis
             >
               <motion.animate
                 attributeName="stroke-dashoffset"
                 from="250"
                 to="0"
                 dur="2s"
                 repeatCount="indefinite"
                 ease="easeInOut"
               />
             </circle>
           </svg>
         </motion.div>


        ):(
          Submission.map((data, index) => (
            <Card key={index} data={data} openModal={openModal} />
          ))
   
         
        )}
           </div>
      
      

      <Navbar />
      {isModalOpen && (
        <RiwayatDetail
          onClose={closeModal}
          isOpen={isModalOpen}
          submission={selectedSubmission}
        />
      )}
    </>
  );
}
