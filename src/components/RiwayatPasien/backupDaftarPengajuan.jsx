<div className=" grid gap-4">
          {Submission.map((submission, index) => {
            // Ensure 'percentage' is available before calling includes()
            const percentageColor =
              submission.percentage &&
              submission.percentage.includes("Tidak aman")
                ? "text-red-500"
                : "text-green-500";

            const statusColor = {
              Unverified: "text-red-500",
              "Sudah Verified": "text-green-500",
            };

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 md:flex md:justify-between space-y-4 md:space-y-0 items-start md:space-x-4"
              >
                {/* Tanggal Pengajuan */}
                <div className="flex flex-col items-start md:items-center md:w-1/6">
                  <p className="text-gray-500">Tanggal Pengajuan</p>
                  <p className="">{submission.date}</p>
                </div>
                {/* Presentase */}
                <div className="flex flex-col items-start md:items-center md:w-1/6">
                  <p className="text-gray-500">Presentase</p>
                  <p className={`${percentageColor} font-bold `}>
                    {submission.percentage}
                  </p>
                </div>
                {/* Gambar */}
                <div className="flex flex-col items-start md:items-center md:w-1/6">
                  <p className="text-gray-500"> Gambar </p>
                  <img
                    src={submission.gambar}
                    alt="Submission"
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                </div>

                {/*    */}
                <div className="flex flex-col items-start md:items-center md:w-1/6">
                  <p className="text-gray-500">Keluhan</p>
                  <p className="">{trunaceText(submission.complaint, 50)}</p>
                </div>
                <div className="flex flex-col items-start md:items-center md:w-1/6">
                  <p className="text-gray-500">Status</p>
                  <p className={statusColor[submission.verificationStatus]}>
                    {submission.verificationStatus}{" "}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-center md:w-1/6">
                  <p className="text-gray-500">Aksi</p>
                  <div className="flex flex-row">
                    <button onClick={()=> openModal(submission)} className="bg-blue-500 hover:bg-blue-700 text-white p-3 w-11 mx-2 rounded-full">
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