import React from "react";


const DiagnosisCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-4">
      {/* Header yang hanya muncul di layar besar */}
      <div className="hidden sm:grid sm:grid-cols-6 gap-4 text-left text-gray-500 text-sm font-semibold pb-4 md:border-b border-gray-300">
        <div>Tanggal Pengujian</div>
        <div>Pasien</div>
        <div>Diagnosis AI</div>
        <div>Verifikasi Dokter</div>
        <div>Catatan</div>
        <div>Detail</div>
      </div>

      {/* Data dengan header internal untuk small screen */}
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 text-left text-gray-700 py-4 border-b sm:border-0">
        {/* Header untuk small screen */}
       
          <div className="flex justify-between items-center ">
            <div className="text-gray-500 sm:hidden">Tanggal Pengujian</div>
            <div>{data.tanggalPengujian}</div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="text-gray-500  sm:hidden ">Pasien</div>
            <div className="truncate">{data.pasien}</div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="text-gray-500  sm:hidden">Diagnosis AI</div>
            <div
              className={`${
                data.diagnosisAI.includes("Melanoma")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {data.diagnosisAI}
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="text-gray-500  sm:hidden">Verifikasi Dokter</div>
            <div>{data.verifikasiDokter}</div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="text-gray-500  sm:hidden">Catatan</div>
            <div>{data.catatan}</div>
          </div>

          <div className="flex justify-between items-center ">
            <div className="text-gray-500  sm:hidden">Detail</div>
            <div>
              <button className="bg-cyan-700 text-white py-2 px-4 rounded-lg hover:bg-cyan-800 transition duration-300">
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
  
  );
};

const DiagnosisList = () => {
  const diagnosisData = [
    {
      tanggalPengujian: "22/06/2024",
      pasien: "Muhammad Nur Shodiq",
      diagnosisAI: "0.09% Melanoma",
      verifikasiDokter: "Bukan Melanoma",
      catatan: "Pasien tersebut tidak menderita...",
    },
    {
      tanggalPengujian: "22/06/2024",
      pasien: "Ahmad Fauzan",
      diagnosisAI: "99% Melanoma",
      verifikasiDokter: "Melanoma",
      catatan: "Pasien tersebut memerlukan tindakan lanjut...",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {diagnosisData.map((data, index) => (
        <DiagnosisCard key={index} data={data} />
      ))}
    </div>
  );
};

export default DiagnosisList;
