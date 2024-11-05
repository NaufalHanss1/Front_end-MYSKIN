import React, { useState } from "react";
import HeroImage from "../Image/Test1.jpg";
import HeroImage2 from "../Image/Test2.jpg";
import HeroImage3 from "../Image/Test3.jpg";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Login from "../Modal/Login";
import Register from "../Modal/SignUp";
import "../output.css";
import Navbar from "../Navbar/Navabar";
import iconScan from "../Image/Scan.png";
export default function Hero() {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [error, setError] = useState("");
  const [activeImage, setActiveImage] = useState(HeroImage); // Untuk mengontrol gambar yang aktif
  const [isSliding, setIsSliding] = useState(false);

  const [expandedIndex, setExpandedIndex] = useState(0); // Untuk melacak elemen yang diperluas

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [isModalregOpen, setModalregOpen] = useState(false);
  const handleOpenModalReg = () => {
    setModalregOpen(true);
  };

  const handleCloseModalReg = () => {
    setModalregOpen(false);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handelImageChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      if (file.size <= 5 * 1024 * 1024) {
        setImage(URL.createObjectURL(file));
        setError("");
      } else {
        setError("Ukuran gambar maksimal 5 MB");
      }
    } else {
      setError("Format gambar harus JPEG atau PNG");
    }
  };

  const handleImageChange = (newImage) => {
    // Mulai animasi slide
    setIsSliding(true);
    setTimeout(() => {
      // Ganti gambar setelah delay (untuk sinkronisasi dengan animasi)
      setActiveImage(newImage);
      setIsSliding(false);
    }, 600); // Delay sesuai durasi animasi
  };



  const ImageList = [
    {
      id: 1,
      img: HeroImage,
      title: "Selamat Datang ",
      p: "di Website My Skin",
    },
    {
      id: 2,
      img: HeroImage2,
      title: "Selamat Datang ",
      p: "di Website My Skin",
    },
    {
      id: 3,
      img: HeroImage3,
      title: "Selamat Datang ",
      p: "di Website My Skin",
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className=" overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 row-auto justify-center items-center text-black duration-200">
        <div>
          <Slider {...settings}>
            {ImageList.map((item) => (
              <>
                <div className="relative w-full md:h-[650px] mt-8">
                  <img
                    className="  relative  w-full h-full object-cover"
                    src={item.img}
                    alt="Hero"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center md:items-start  p-10 bg-black bg-opacity-30">
                    <div className=" md:ml-20 ">
                      <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className="text-5xl sm:text-6xl  md:text-6xl lg:text-7xl  text-white"
                      >
                        {item.title}
                      </h1>
                      <h1
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="mt-2 text-5xl sm:text-2xl md:text-6xl lg:text-7xl font-bold text-white"
                      >
                        {item.p}
                      </h1>
                      <div>
                        <button
                          onClick={handleOpenModalReg}
                          className=" bg-white hover:scale-105 duration-200 text-cyan-900  py-2 px-4 rounded-full mt-6 md:h-14 md:w-60  "
                        >
                          <div className=" flex flex-row items-center justify-center " >
                            <img src={iconScan} alt="" />
                            <p className="ml-2 sm:text-sm md:text-xl font-bold ">
                              Coba sekarang
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}

            {/* Gambar Hero */}

            {/* Teks di atas gambar */}
          </Slider>
          <Register isOpen={isModalregOpen} onClose={handleCloseModalReg} />
          <Login isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>

        {/* Informasi Page */}

        <div className=" container flex flex-col md:flex-row items-start p-6 justify-center mt-12 mx-auto">
          {/* Bagian kiri untuk gambar */}
          <div className=" w-[550px] h-[430px] rounded-[20px] overflow-hidden bg-[#D9D9D9] mr-5 sm:ml-5">
            <motion.div 
             className="w-full h-full"
             key={activeImage}
             initial={{ opacity: 0, x: 100 }} // Animasi masuk
             animate={{ opacity: 1, x: 0 }} // Animasi saat berada di tampilan
             exit={{ opacity: 0, x: -100 }} // Animasi keluar
             transition={{ duration: 0.5 }} // Durasi transisi
            >
            <img
              src={activeImage}
              alt="Melanoma Detection"
              className="w-full h-full object-cover object-center"
            />
            </motion.div>
          </div>

          {/* Bagian kanan untuk teks penjelasan */}
          <div className="w-full md:w-1/2 p-4 md:mt-1">
            <div className="space-y-4">
              {/* Deteksi Awal */}
              <div className=" md:w-[650px]  border rounded-lg p-4 shadow-lg hover:scale-105 duration-200 hover:border-cyan-900 border-gray-400">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => {toggleAccordion(0)
                    handleImageChange(HeroImage)


                  }}
                >
                  <h2 className="text-lg font-semibold">Deteksi Awal</h2>
                  <span className="text-2xl">
                    {expandedIndex === 0 ? "▲" : "▼"}
                  </span>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === 0 ? "auto" : 0,
                    opacity: expandedIndex === 0 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className=" text-start  ml-5 mb-4 ">
                    MySkin membantu mendeteksi gejala awal melanoma untuk
                    penanganan yang lebih cepat,   MySkin membantu mendeteksi gejala awal melanoma untuk
                    penanganan yang lebih cepat
                  </p>
                  <div className=" text-end">
                  <a
                    href="#"
                    className="text-blue-500 hover:underline mr-8 "
                  >
                    Lebih banyak →
                  </a>
                  </div>
                </motion.div>
              </div>

              {/* Diagnosis Dokter */}
              <div className="md:w-[650px]  border rounded-lg p-4 shadow-lg hover:scale-105 duration-200 hover:border-cyan-900 border-gray-400 ">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => {toggleAccordion(1)
                    handleImageChange(HeroImage2)
                  }}
                >
                  <h2 className="text-lg font-semibold">Diagnosis Dokter</h2>
                  <span className="text-2xl">
                    {expandedIndex === 1 ? "▲" : "▼"}
                  </span>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === 1 ? "auto" : 0,
                    opacity: expandedIndex === 1 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-start  ml-5 mb-4">
                    MySkin menyediakan 10+ dokter untuk memverifikasi penyakit
                    Anda,   MySkin menyediakan 10+ dokter untuk memverifikasi penyakit
                    Anda
                  </p>
                  <div className=" text-end">
                  <a href="#" className="text-blue-500 hover:underline text-start  mr-8" >
                    Lebih banyak →
                  </a>
                  </div>
                </motion.div>
              </div>

              {/* Diagnosis AI */}
              <div className=" md:w-[650px] border rounded-lg p-4 shadow-lg hover:scale-105 duration-200 hover:border-cyan-900 border-gray-400">
                <div
                  className="flex justify-between items-center p-4 cursor-pointer"
                  onClick={() => {toggleAccordion(2)

                    handleImageChange(HeroImage3)
                  }}
                >
                  <h2 className="text-lg font-semibold">Diagnosis AI</h2>
                  <span className="text-2xl">
                    {expandedIndex === 1 ? "▲" : "▼"}
                  </span>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedIndex === 2 ? "auto" : 0,
                    opacity: expandedIndex === 2 ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-start  ml-5 mb-4"> 
                    MySkin menggunakan kecerdasan buatan yang andal untuk
                    menganalisa kulit Anda
                  </p>
                  <div className=" text-end">
                  <a href="#" className="text-blue-500 hover:underline text-start  mr-8">
                    Lebih banyak →
                  </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Deteksi FOTO */}
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg min-h-[650px] flex flex-col justify-center border-2 border-gray-300">
            <h2 className="text-2xl font-bold text-center mb-4">
              Deteksi Kanker Kulit
            </h2>

            <p className="text-center mb-4">
              Masukkan gambar untuk mendeteksi kanker dari gambar yang diberikan
            </p>

            <div className=" overflow-auto border-dashed border-2 border-gray-400 rounded-lg p-2 bg-blue-50 flex items-center justify-center w-9/12 h-[350px] mx-auto mb-4">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handelImageChange}
                className="hidden"
                id="image-upload"
              />

              <label
                htmlFor="image-upload"
                className="cursor-pointer text-blue-500 hover:text-blue-700 text-lg"
              >
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded Preview"
                    className="  object-center object-cover rounded-lg"
                  />
                ) : (
                  <span>+ Masukkan Gambar</span>
                )}
              </label>
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
            </div>
            <div className="text-sm text-gray-500 ml-10 mt-5">
              <p>1. Format: JPEG, PNG *</p>
              <p>2. Ukuran: Maksimum 5 MB *</p>
              <p>3. Resolusi: Minimal 800 x 600 piksel *</p>
              <p className="text-red-500 mt-2">
                *Wajib mengikuti aturan gambar
              </p>
            </div>
          </div>
          <div className="mt-6 text-center w-full">
            <h1 className="text-sm text-gray-700">
              *Hasil deteksi belum dipastikan benar karena web hanya memberikan
              indikasi awal, silahkan login untuk verifikasi hasil deteksi oleh
              Dokter.
            </h1>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
