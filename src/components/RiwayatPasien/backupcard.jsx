import React from "react";
import image1 from "../Image/Frame 130.png";
import { useNavigate } from "react-router-dom";

function Card({ date, percentage, image, complaint, submission, status }) {
  
 const statusColor = {
    Unverified: "text-red-500",
    "Sudah Verified": "text-green-500",
  };

  const trunaceText = (text, maxLength) => {
    if(text.length  > maxLength){
        return text.substring(0, maxLength) + "....";
    }
    return text;
  }

  const percentageColor = percentage.includes("Tidak aman") ? "text-red-500" : "text-green-500";

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-lg p-4  my-4 md:w-[1300px] sm:w-[500px]">
          <div className=" grid md:grid-cols-7 gap-1 items-center min-h-[100px]">
            <div className=" col-span-1 ">
              <p className="text-gray-500 ">Tanggal Pengajuan</p>
              <p className="truncate">{date}</p>
              
            </div>
            <div className="col-span-1">
              <p className="text-gray-500 ">Persentase</p>
              <p className={`${percentageColor} font-bold `}>{percentage}</p>
            </div>
            <div className="col-span-1">
              <p className="text-gray-500">Gambar</p>
              <img src={image} alt="" className="w-32 h-fit object-cover rounded-xl " />
            </div>
            <div className="col-span-1">
              <p className="text-gray-500">Keluhan</p>
              <p>{trunaceText(complaint,30)}</p>
            </div>
            <div className="col-span-1">
              <p className="text-gray-500">Pengajuan</p>
              <p className="font-bold">{submission}</p>
            </div>
            <div className="col-span-1">
              <p className="text-gray-500">Status</p>
              <p className={statusColor[status]}>{status}</p>
            </div>
            <div className="col-span-1 justify-around ">
            <p className="text-gray-500 mt-2">Aksi</p>
            <button className="bg-red-500 text-white p-2 rounded-full mx-1">
              🗑️
            </button>
            <button className="bg-yellow-500 text-white p-2 rounded-full  mx-1">
              ✏️
            </button>
            <button className="bg-yellow-500 text-white p-2 rounded-full  mx-1">
              ✏️
            </button>
          </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default function Daftar_pengajuan() {
  const navigate = useNavigate();

  const Submission = [
    {
      date: "22/06/2024",
      gambar: image1,
      percentage: "90.70% Melanoma (Tidak aman)",
      image: "path/to/image1.jpg",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya.dddddddddddddddddddddd..",
      submissionStatus: "Sudah",
      verificationStatus: "Unverified",
    },
    {
      date: "22/06/2024",
      gambar: image1,
      percentage: "50.70% Melanoma (Aman)",
      image: "path/to/image2.jpg",
      complaint:
        "Saya pertama kali menyadari adanya perubahan pada tahi lalat di punggung saya...",
      submissionStatus: "Sudah",
      verificationStatus: "Unverified",
    },
  ];
  
  return (
    <>
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

      <div className=" mt-36 bg-gray-200">
        {Submission.map((item, index) =>(
          <Card 
          key={index}
          date={item.date}
          percentage={item.percentage}
          image={item.gambar}
          complaint={item.complaint}
          submission={item.submissionStatus}
          status={item.verificationStatus}
          />

        ))

        }
   
      </div>
    </>
  );
}
