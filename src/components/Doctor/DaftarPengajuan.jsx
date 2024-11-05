import { button, div } from "framer-motion/client";
import React, { useState, useEffect } from "react";
import image1 from "../Image/Frame 130.png";
import Nav from "../Navbar/NavbarDoc";
import VerifikasiModal from "../Modal/VerifikasiModal";
import { motion, AnimatePresence } from "framer-motion";

export default function DaftarPengajuan() {
  const submissions = [
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Naufal",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Nur Shodiq",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Naufal",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      imgUrl: image1,
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
    },
    {
      name: "Muhammad Naufal",
      date: "7 Oktober 2024",
      diagnosis: "93.00%",
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
      imgUrl: image1,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };

  const Card = ({ submission, index }) => (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 space-y-4 border hover:border-cyan-800 duration-300 ease-in-out"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.1, delay: 0.0, ease: [0.4, 0, 0.3, 1] }}
    >
      <img
        src={submission.imgUrl}
        alt={`Melanoma ${index}`}
        className="w-full h-[200px] object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold">{submission.name}</h2>
      <p className=" text-gray-500">{submission.date}</p>
      <p className="text-red-500 font-semibold">
        Melamonia : {submission.diagnosis}
      </p>
      <button
        onClick={() => openModal(submission)}
        className=" w-full bg-cyan-700 text-white py-2 px-4 rounded-full hover:bg-cyan-800 duration-300 ease-in-out"
      >
        Detail Pengajuan
      </button>
    </motion.div>
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;

  //menghitung jumlah pagination
  const totalPages = Math.ceil(submissions.length / itemPerPage);

  //untuk mengatur firtsIndex dan lastIndex dari data yang akan di tampilkan
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentSubmissions = submissions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Matikan loading setelah 2 detik
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  const trunaceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "....";
    }
    return text;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className=" container mx-auto p-4 mt-16">
        <h1 className="text-3xl font-bold text-center mb-8">
          Daftar Pengajuan Umum
        </h1>
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
        ) : (
          <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentSubmissions.map((submission, index) => (
              <Card key={index} submission={submission} index={index} />
            ))}
            
          </div>
          
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-cyan-700 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
        </>
        )}

      </div>
      <Nav />
      {isModalOpen && (
        <VerifikasiModal
          isOpen={isModalOpen}
          onClose={closeModal}
          submission={selectedSubmission}
        />
      )}
    </>
  );
}
