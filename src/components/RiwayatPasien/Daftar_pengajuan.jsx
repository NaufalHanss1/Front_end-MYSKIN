import React, { useState, useEffect } from "react";
import image1 from "../Image/Frame 130.png";
import { useNavigate } from "react-router-dom";
import ModalDetail from "../Modal/DetailDaftar";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../Navbar/Navabar";

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
    Unverified: "text-red-500",
    "Sudah Verified": "text-green-500",
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
      transition={{ duration: 0.1, delay: 0.0,  ease: [0.4, 0, 0.3, 1] }}
    >
      <div className=" hidden sm:grid grid-cols-7 gap-4 text-center text-black text-sm font-semibold pb-4 w-full md:border-b border-gray-300 ">
        <div>Tanggal Pengujian</div>
        <div>Presentase</div>
        <div>Gambar</div>
        <div>Keluhan</div>
        <div>Pengajuan</div>
        <div>Status</div>
        <div>Aksi</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 text-left w-full text-gray-700 py-4 ">
        <div className="flex md:justify-center justify-between items-center my-3">
          <div className="text-black font-bold text-lg ml-3 sm:hidden">Tanggal Pengujian</div>
          <div>{data.date}</div>
        </div>
        <div className="flex  md:justify-center justify-between items-center  my-3 ">
          <div className="text-black font-bold text-lg ml-3 sm:hidden ">Presentase</div>
          <div className={`${percentageColor}`}>{data.percentage}
          <p className={`text-sm text-center ${getPercentage(data.percentage) >= 50 ? 'text-red-500' : 'text-green-500'}`}>{getPercentage(data.percentage) >= 50
                          ? "(Tidak aman)"
                          : "(aman)"}</p>
        </div>

          </div>
         
        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">Gambar</div>
          <img
            src={data.gambar}
            alt=""
            className="w-36  h-28 object-cover rounded-xl"
          />
          {/* <div className={`${percentageColor}`}>{data.diagnosisAI}</div> */}
        </div>
        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden" >Keluhan</div>
          <div className="  text-center"style={{ maxWidth: '150px', whiteSpace: 'normal', wordWrap: 'break-word' }}>{trunaceText(data.complaint, 40)}</div>
        </div>
        <div className="flex md:justify-center justify-between items-center md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">Pengajuan</div>
          <div className={`${statusColor2[data.submissionStatus]}`}>
            {data.submissionStatus}
          </div>
        </div>
        <div className="flex md:justify-center justify-between items-center  md:my-0 my-3">
          <div className="text-black font-bold text-lg ml-3  sm:hidden">Status</div>
          <div className={`${statusColor[data.verificationStatus]}`}>
            {data.verificationStatus}
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
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white p-2 md:w-11 w-20 mx-2 rounded-full transition duration-300 ease-in-out">
              ✏️
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Daftar_pengajuan() {
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Matikan loading setelah 2 detik
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  const navigate = useNavigate();

  const trunaceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "....";
    }
    return text;
  };

  const Submission = [
    {
      date: "22/06/2024",
      gambar: image1,
      percentage: "40.70% Melanoma ",
      image: "path/to/image1.jpg",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya.dddddddddddddddddddddd..",
      submissionStatus: "Pending",
      verificationStatus: "Unverified",
    },

    {
      date: "22/06/2024",
      gambar: image1,
      percentage: "50.70% Melanoma ",
      image: "path/to/image2.jpg",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya...",
      submissionStatus: "Sudah",
      verificationStatus: "Sudah Verified",
    },
  ];

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className=" container mx-auto p-4 mt-28">
        <h2 className="text-2xl font-bold mb-4">Riwayat Deteksi</h2>
        {isLoading ?(
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
        )

        }
        
      </div>


      <Nav />
      {isModalOpen && (
        <ModalDetail
          submission={selectedSubmission}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      {/* <div className=" container mx-auto p-4 mt-28 ">
        <h2 className=" text-2xl font-bold mb-4"> Riwayat Pengajuan</h2>
        <table className=" min-w-full border-collapse border border-gray-200 ">
          <thead>
            <tr className=" bg-gray-100">
              <th className=" border border-gray-200 p-2">Tanggal Pengajuan</th>
              <th className=" border border-gray-200 p-2">Presentase</th>
              <th className=" border border-gray-200 p-2">Gambar</th>
              <th className=" border border-gray-200 p-2">Keluhan</th>
              <th className=" border border-gray-200 p-2">Pengajuan</th>
              <th className=" border border-gray-200 p-2">Status</th>
              <th className=" border border-gray-200 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {Submission.map((Submission, index)=>(
               <tr key={index} className=" text-center">
               <td className="border border-gray-200 p-2">{Submission.date}</td>
               <td className="border border-gray-200 p-2 text-green-400">
                  {Submission.percentage}
               </td>
               <td className="border border-gray-200 p-2 flex justify-center">
                 <img
                   src={Submission.gambar}
                   alt="Submission"
                   className="w-16 h-16 object-cover rounded-xl"
                 />
               </td>
               <td className="border border-gray-200 p-2" style={{ maxWidth: '200px', whiteSpace: 'normal', wordWrap: 'break-word' }}>{Submission.complaint}</td>
               <td className="border border-gray-200 p-2 text-green-500" >
                 {Submission.submissionStatus}
               </td>
               <td className="border border-gray-200 p-2 text-green-500">
                 {Submission.verificationStatus}
               </td>
               <td className="border border-gray-200 p-2">
                 <div className="flex justify-center space-x-2">
                   <button onClick={()=> navigate(`/detail_daftarP`, { state: Submission})} className=" bg-blue-500 text-white p-1 rounded-full">
                     <i></i>
                   </button>
                   <button className="bg-red-500 text-white p-1 rounded-full">
                     <i className="fas fa-trash-alt"></i>
                   </button>
                   <button className="bg-yellow-500 text-white p-1 rounded-full">
                     <i className="fas fa-edit"></i>
                   </button>
                 </div>
                </td>
              </tr>
            
            
            ))}
           
          </tbody>
        </table>
      </div> */}
    </>
  );
}
