import { div, tr } from "framer-motion/client";
import React, { useState } from "react";
import Nav from "../Navbar/NavbarDoc";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { motion, AnimatePresence } from "framer-motion";
import ModalV from "../Modal/VerifikasiModal";
import image1 from "../Image/Frame 130.png";
import icon1 from "../Image/Profile.png";
import icon2 from "../Image/clock.png";
import icon3 from "../Image/check-square.png";
import icon4 from "../Image/Paper.png";
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const openModal = (item) => {
    setSelectedSubmission(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };

  const cardData = [
    { image: icon1, title: "Pasien", count: 547 },
    { image: icon2, title: "Menunggu Verifikasi", count: 547 },
    { image: icon3, title: "Terverifikasi", count: 1000 },
  ];

  const verifikasiData = [
    {
      date: "05/04/2024",
      name: "Muhammad Nur Shodiq",
      diagnosis: "40.02% Melanoma",
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
      imgUrl: image1,
    },
    {
      date: "05/04/2024",
      name: "Muhammad Nur Shodiq",
      diagnosis: "97.02% Melanoma",
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
      imgUrl: image1,
    },

    {
      date: "05/04/2024",
      name: "Muhammad Nur Shodiq",
      diagnosis: "97.02% Melanoma",
      phone: "08262468193",
      keluahan:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya sekitar enam bulan yang lalu. Awalnya, tahi lalat tersebut hanya sedikit besar dari biasanya, tapi seiring waktu",
      submissions: 1,
      email: "papapasien@gmail.com",
      umur: "21",
      imgUrl: image1,
    },
  ];

  const getPercentage = (text) => {
    if (!text || typeof text !== "string") return 0; // Cek apakah text adalah string
    const match = text.match(/(\d+(\.\d+)?)%/);
    return match ? parseFloat(match[1]) : 0;
  };

  const pasienData = [
    { name: "Muhammad Nur Shodiq", phone: "08262468193", submissions: 1 },
    { name: "Naufal Zaki", phone: "08102180812", submissions: 2 },
  ];

  const [showChart, setShowChart] = useState(false);
  const total = cardData.reduce((sum, card) => sum + card.count, 0);
  const pieData = {
    labels: cardData.map((card) => card.title),
    datasets: [
      {
        data: cardData.map((card) => card.count),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false, // Agar ukuran chart bisa diatur dengan CSS
    animation: {
      duration: 1500, // Durasi animasi dalam milidetik
      easing: "easeInOutQuart", // Jenis easing animasi
    },
    plugins: {
      legend: {
        display: true, // Menampilkan legenda
      },
      datalabels: {
        formatter: (value) => {
          const percentage = ((value / total) * 100).toFixed(2); // Hitung persentase
          return `${value}\n(${percentage}%)`; // Kembalikan format string dengan angka dan persentase
        },
        color: "#fff", // Warna teks label
        anchor: "center", // Menempatkan label di tengah arc
        align: "center", // Menempatkan label di tengah arc
        font: {
          weight: "bold", // Berat font
          size: "15", // Ukuran font
        },
      },
    },
  };

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  const Card = ({ titel, count, image }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 my-2 ">
      <h2 className=" text-gray-500  text-lg mb-4">{titel}</h2>
      <div className="flex flex-row">
        <div className="border  shadow-lg rounded-full border-gray-400 w-8 h-8 p-1 flex justify-center items-center">
          <img src={image} alt="icom" className=" " />
        </div>
        <div className="text-2xl font-bold ml-5">{count}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className=" min-h-screen bg-gray-100 p-6 mt-16">
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Hi, Muhammad</h1>
          <p className="text-sm text-gray-500"> Minggu, 6 oketober 2024</p>
        </header>

        <div>
          <button
            onClick={toggleChart}
            className="mb-6 bg-cyan-700 text-white px-4 py-2  rounded-lg hover:bg-cyan-800 duration-300 ease-in-out"
          >
            {showChart ? "Hide Pie Chart" : "Show Pie Chart"}
          </button>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {cardData.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                titel={card.title}
                count={card.count}
              />
            ))}
          </div>

          {showChart && (
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.2, ease: [0.4, 0, 0.3, 1] }}
            >
              <div className=" mb-8 bg-white rounded-lg shadow-lg p-6 ">
                <div className=" w-[850px] h-[280px]">
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ajukan verifikasi */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg mr-8 w-[480px] md:w-full">
              <h2 className="font-bold text-lg mb-4">Ajuan Verifikasi</h2>
              <table className="min-w-full bg-white  ">
                <thead className="opacity-1">
                  <tr>
                    <th className="px-4 py-2">Tanggal</th>
                    <th className="px-4 py-2">Pasien</th>
                    <th className="px-4 py-2">Diagnosis AI</th>
                    <th className="px-4 py-2">Verifikasi</th>
                  </tr>
                </thead>
                <tbody>
                  {verifikasiData.map((item, index) => {
                    const percentageColor =
                      getPercentage(item.diagnosis) >= 50
                        ? "text-red-500"
                        : "text-green-500";
                    return (
                      <tr key={index} className="text-center">
                        <td className="px-4 py-2">{item.date}</td>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className={`px-4 py-2 ${percentageColor}`}>
                          {item.diagnosis}
                        </td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => openModal(item)}
                            className=" w-[70px] bg-cyan-700 rounded-lg md:w-[170px] h-[40px]  hover:bg-cyan-800 duration-300 ease-in-out"
                          >
                            <p className="text-sm text-white justify-center flex md:flex-row">
                              <img
                                src={icon4}
                                alt="test"
                                className="hidden md:flex md:mr-1"
                              />
                              Verifikasi
                            </p>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="font-bold text-lg mb-4">Pasien</h2>
              {/* Tabel dengan hanya menyembunyikan border */}
              <table className="min-w-full bg-white ">
                <thead className="opacity-1">
                  <tr>
                    <th className="px-4 py-2">Nama</th>
                    <th className="px-4 py-2">Nomor Telepon</th>
                    <th className="px-4 py-2">Jumlah Ajuan</th>
                  </tr>
                </thead>
                <tbody className="">
                  {verifikasiData.map((item, index) => (
                    <tr key={index} className="text-center  ">
                      <td className="px-4 md:py-4">{item.name}</td>
                      <td className="px-4 py-2">{item.phone}</td>
                      <td className="px-4 py-2 ">{item.submissions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Nav />
      {isModalOpen && (
        <ModalV
          isOpen={isModalOpen}
          onClose={closeModal}
          submission={selectedSubmission}
        />
      )}
    </>
  );
};

export default Dashboard;
