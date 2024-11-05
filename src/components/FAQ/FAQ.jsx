 import { div } from "framer-motion/client";
import React from "react";
import Chat from "../Image/Chat.png";
import Nav from "../Navbar/Navabar"

export default function FAQ() {
  const faqMelamonia = [
    {
      question: "Apa itu Melanoma?",
      answer:
        "Melanoma adalah jenis kanker kulit yang paling serius. Melanoma terjadi ketika sel-sel pigmen kulit yang disebut melanosit berubah menjadi sel-sel kanker. Melanoma dapat terjadi di kulit mana pun, tetapi melanoma yang terjadi di bagian tubuh yang tidak terpapar sinar matahari seringkali lebih serius.",
    },
    {
      question: "Apa saja gejala melanoma?",
      answer:
        "Gejala melanoma dapat meliputi munculnya tahi lalat baru atau perubahan pada tahi lalat yang sudah ada. Ciri-ciri tahi lalat yang mencurigakan termasuk bentuk yang tidak simetris, tepi yang tidak rata, warna yang tidak seragam, diameter lebih besar dari 6 mm, dan perubahan bentuk, ukuran, atau warna.",
    },
    {
      question: "Bagaimana pengobatan untuk melanoma?",
      answer:
        "Pengobatan melanoma tergantung pada stadium dan lokasi kanker. Metode pengobatan yang umum termasuk pembedahan untuk mengangkat kanker, terapi radiasi, imunoterapi, dan terapi target.",
    },  
    {
      question: "Bagaimana cara mencegah melanoma?",
      answer:
        "Pencegahan melanoma meliputi menghindari paparan sinar matahari yang berlebihan, terutama pada jam-jam terik. Gunakan tabir surya dengan SPF tinggi, kenakan pakaian pelindung, dan hindari penggunaan tanning bed.",
    },
  ];
  const mySkin = [
    {
      question: "Apa itu My Skin?",
      answer:
        "My Skin adalah sistem deteksi melanoma berbasis web yang menyediakan layanan bagi pengguna untuk memeriksa tanda awal risiko melanoma melalui analisis gambar kulit.",
    },
    {
      question: "Apakah My Skin berbayar?",
      answer:
        "My Skin gratis untuk digunakan oleh khalayak umum, dapat diakses dimana saja dan tidak dikenakan biaya apapun.",
    },
  ];

  return (
    <>
    <div className="overflow-hidden min-h-[550px] sm:mih-h-[650px] bg-gray-100 text-black  py-32 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h1 className=" text-3xl sm:text-4xl font-bold text-center mb-6">
          Frequently Asked Question
        </h1>
        <h2 className=" text-xl sm:text-2x1 font-semibold text-center mb-8">
          Terkait Melanoma
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6  mb-12">
          {faqMelamonia.map((faq, index) => (
            <div
              key={index}
              className=" border bg-white rounded-lg p-6 hover:scale-105 duration-200 hover:border-cyan-900"
            >
              <h3 className=" text-lg font-semibold mb-2 flex items-center">
                <div className="border  shadow-lg rounded-lg border-gray-400 w-8 h-8 p-1 flex justify-center items-center ">
                  <img src={Chat} className="object-contain" alt="icon" />
                </div>
                <div className=" ml-4">{faq.question}</div>
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-8">
          Terkait MySkin
        </h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
          {mySkin.map((faq, index) => (
            <div
              key={index}
              className=" border bg-white rounded-lg  p-6 hover:scale-105 duration-200  hover:border-cyan-900"
            >
              <h3 className=" text-lg font-semibold mb-2 flex items-center">
                <div className="border  shadow-lg rounded-lg border-gray-400 w-8 h-8 p-1 flex justify-center items-center ">
                  <img src={Chat} className="  object-contain" alt="icon" />
                </div>
                <div className=" ml-4">{faq.question}</div>
              </h3>
              <p>{faq.answer}</p>
            </div>
          ))}
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
    <Nav/>
    </>
  );
}
