import React,{useState, useEffect} from "react";
import Nav from "../Navbar/NavbarDoc"
import image1 from "../Image/Frame 130.png";
import RwModal from "../Modal/RiwayarVerifikasiDoctor";
import { motion, AnimatePresence } from "framer-motion";
import icon1 from "../Image/eye.png"

const Card = ({ data, openModal }) => {

  const getPercentage = (text) => {
    
    const match = text.match(/(\d+(\.\d+)?)%/); 
    return match ? parseFloat(match[1]) : 0;
  };

  const trunaceText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "....";
    }
    return text;
  };
  const percentageColor = getPercentage(data.diagnosisAI) >= 50 ? "text-red-500" : "text-green-500";
  // const percentageColor =
  //   data.diagnosisAI && data.diagnosisAI.includes("Melanoma")
  //     ? "text-red-500"
  //     : "text-green-500";

  return (
    <motion.div className="bg-white shadow-md rounded-lg p-6 my-4 border hover:border-cyan-800  hover:scale-105 duration-200"
    initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }} 
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.1, delay: 0.0,  ease: [0.4, 0, 0.3, 1] }}
    >
      <div className=" hidden sm:grid grid-cols-6 gap-4 text-center text-black text-sm font-semibold pb-4 w-full md:border-b border-gray-300 ">
        <div>Tanggal Pengujian</div>
        <div>Pasien</div>
        <div>Diagnosis AI</div>
        <div>Verifikasi Dokter</div>
        <div>Catatan</div>
        <div>Detail</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 text-left w-full text-gray-700 py-4 ">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 sm:hidden">Tanggal Pengujian</div>
          <div>{data.tanggalPengujian}</div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-gray-500 sm:hidden ">Pasien</div>
          <div className="truncate">{data.pasien}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-500  sm:hidden">Diagnosis AI</div>
          <div className={`${percentageColor}`}>{data.diagnosisAI}</div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-gray-500  sm:hidden">Verifikasi Dokter</div>
          <div>{data.verifikasiDokter}</div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="text-gray-500  sm:hidden">Catatan</div>
          <div>{trunaceText(data.catatan, 40)}</div>
        </div>
        <div className="flex justify-between items-center p-0 m-0 ">
          <div className="text-gray-500  sm:hidden">Detail</div>
          <div className="">
            <button onClick={()=> openModal(data)}className="bg-cyan-700 md:w-[140px] xl:w-[220px] text-white py-2 px-4 rounded-lg hover:bg-cyan-800 transition duration-300">
              <p className="text-sm text-white justify-center flex md:flex-row">
              <img src={icon1} alt="test" className="hidden md:flex md:mr-2" />
                Detail</p>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function DaftarPengajuan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = (data) => {
    setSelectedSubmission(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Matikan loading setelah 2 detik
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);


  const diagnosisData = [
    {
      tanggalPengujian: "22/06/2024",
      pasien: "Muhammad Nur Shodiq",
      diagnosisAI: "0.09% Melanoma",
      phone: "08262468193",
      email : "papapasien@gmail.com",
      umur : "21",
      verifikasiDokter: "Bukan Melanoma",
      catatan: "Pasien tersebut tidak menderitaasien tersebut tidak menderitaasien tersebut tidak menderitaasien tersebut tidak menderita",
      imagUrl: image1,
    },
    {
      tanggalPengujian: "22/06/2024",
      pasien: "Ahmad Fauzan",
      diagnosisAI: "99% Melanoma",
      phone: "08262468193",
      verifikasiDokter: "Melanoma",
      email : "papapasien@gmail.com",
      umur : "21",
      catatan: "Pasien tersebut memerlukan tindakan lanjut...",
      imagUrl: image1,
    },
  ];

  return (
    <>
    <div className="container mx-auto p-6 mt-20">
      <h1 className="font-bold text-3xl text-center mb-6">Riwayat Verifikasi</h1>
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

        diagnosisData.map((data, index) => (
          <Card key={index} data={data} openModal={openModal} />
        ))

      )

      }
   
    </div>
    <Nav/>
    {isModalOpen &&(

      <RwModal 
      submission={selectedSubmission}
      isOpen={isModalOpen}
      onClose={closeModal}
      />
    )

    }
 
    </>
  );
}
