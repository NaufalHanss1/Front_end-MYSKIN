<div className=" grid gap-4">
{Submission.map((submission, index) => {
  const percentageColor =
    submission.percentage &&
    submission.percentage.includes("Tidak aman")
      ? "text-red-500"
      : "text-green-500";

  const statusColor = {
    Unverified: "text-red-500",
    "Sudah Verified": "text-green-500",
  };

  return(

      
<div
key={index}
className="bg-white shadow-md rounded-lg  p-4 md:flex md:justify-between space-y-4 md:space-y-0 items-start md:space-x-4"
>
{/* Tanggal Pengajuan */}
<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500 ">Tanggal Pengajuan</p>
  <p className="">{submission.date}</p>
</div>
{/* Presentase */}
<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Presentase</p>
  <p className={`${percentageColor} font-bold ` }  style={{ maxWidth: '150px', whiteSpace: 'normal', wordWrap: 'break-word' }}>  {submission.percentage}</p>
</div>
{/* Gambar */}
<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500"> Gambar </p>
  <img
    src={submission.gambar}
    alt="Submission"
    className="w-24 h-24 object-cover rounded-xl"
  />
</div>

{/*    */}
<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500" >Keluhan</p>
  <p className="">{trunaceText(submission.complaint, 20)}</p>
</div>

<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Status</p>
  <p className={statusColor[submission.verificationStatus]}> {submission.verificationStatus}{" "}</p>
</div>

<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Tanggal Vertifikasi</p>
  <p className="">{submission.tanggal_vertivikasi}</p>
</div>

<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Vertifikasi oleh</p>
  <p className="">{submission.vertified_by}</p>
</div>

<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Penyakit </p>
  <p className="">{submission.penyakit}</p>
</div>

<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Catatan Doctor</p>
  <p className="">{submission.Catatan_doktor}</p>
</div>

<div className="flex flex-col items-start md:items-center md:w-1/8">
  <p className="text-gray-500">Aksi</p>
  <div className="flex flex-row">
    <button
      onClick={()=> openModal(submission)}
      className="bg-blue-500 hover:bg-blue-700 text-white p-3 w-11 mx-2 rounded-full"
    >
      ℹ️
    </button>
    <button className="bg-red-500 hover:bg-red-700 text-white p-2 w-11 rounded-full">
      🗑️
    </button>
    <button className="bg-yellow-500 hover:bg-yellow-700 text-white p-2 w-11 mx-2 rounded-full">
      ✏️
    </button>
  </div>
</div>
</div>
    
  );
})}

</div>



{/* <div className=" container mx-auto p-4 mt-28 ">
        <h2 className=" text-2xl font-bold mb-4"> Daftar Pengajuan</h2>
        <table className=" min-w-full border-collapse border border-gray-200 ">
          <thead>
            <tr className=" bg-gray-100">
              <th className=" border border-gray-200 p-2">Tanggal Pengajuan</th>
              <th className=" border border-gray-200 p-2">Presentase</th>
              <th className=" border border-gray-200 p-2">Gambar</th>
              <th className=" border border-gray-200 p-2">Keluhan</th>
              <th className=" border border-gray-200 p-2">Pengajuan</th>
              <th className=" border border-gray-200 p-2">Status</th>
              <th className=" border border-gray-200 p-2">Tanggal di vertivikasi</th>
              <th className=" border border-gray-200 p-2">Vetifikation by</th>
              <th className=" border border-gray-200 p-2">Penyakit</th>
              <th className=" border border-gray-200 p-2">Catatan Doktor</th>
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
                   className="w-24 h-24 object-cover rounded-xl"
                 />
               </td>
               <td className="border border-gray-200 p-2 " style={{ maxWidth: '200px', whiteSpace: 'normal', wordWrap: 'break-word' }}>{trunaceText(Submission.complaint, 50)}</td>
               <td className="border border-gray-200 p-2 text-green-500">
                 {Submission.submissionStatus}
               </td>
               <td className="border border-gray-200 p-2 text-green-500">
                 {Submission.verificationStatus}
               </td>
               <td className="border border-gray-200 p-2">{Submission.tanggal_vertivikasi}</td>
               <td className="border border-gray-200 p-2 font-bold" style={{ maxWidth: '200px', whiteSpace: 'normal', wordWrap: 'break-word' }}>{Submission.vertified_by}</td>
               <td className="border border-gray-200 p-2 " style={{ maxWidth: '200px', whiteSpace: 'normal', wordWrap: 'break-word' }}>{Submission.penyakit}</td>
               <td className="border border-gray-200 p-2 " style={{ maxWidth: '200px', whiteSpace: 'normal', wordWrap: 'break-word' }}>{Submission.Catatan_doktor}</td>
               <td className="border border-gray-200 p-2">
                 <div className="flex justify-center space-x-2">
                   <button onClick={()=> navigate(`/detail_riwayatP`, { state: Submission})} className=" bg-blue-500 text-white p-1 rounded-full">
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