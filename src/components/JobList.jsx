import React from "react";

const JobList = ({ jobs, onJobClick, loading,selectedJob }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white border-r p-4 overflow-auto no-scrollbar">
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job._id}
            className={`border p-4 cursor-pointer rounded-sm transition duration-200 ease-in-out ${
              selectedJob && selectedJob._id === job._id
                ? "border-blue-500 bg-blue-50 border-l-pink-500 border-l-2"
                : "border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => onJobClick(job)}
          >
            {/* Job Title */}
            <h3 className="font-bold text-lg sm:text-xl text-blue-500">
              {job.title}
            </h3>

            {/* Company and Location */}
            <p className="text-sm sm:text-base">
              {job.company} - {job.location}
            </p>

            {/* Seniority Level */}
            <p className="text-xs sm:text-sm text-gray-500">
              {job.seniority_level}
            </p>

            {/* Experience and Apply Button */}
            <div className="flex items-center mt-2">
              <p className="text-xs sm:text-sm text-gray-500">
                ${job?.min_exp} - {job?.max_exp} per hour
              </p>
              <a href={job?.job_link} target="_blank" className="text-pink-500 text-xs sm:text-sm px-3 py-1 font-bold rounded-lg hover:bg-pink-100 transition">
                Quick Apply
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
