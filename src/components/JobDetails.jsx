import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsFillBagFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";

const JobDetails = ({ job }) => {
  function formattedDate(input) {
    const date = new Date(input);
    const res = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    return res;
  }

  if (!job) {
    return (
      <div className="flex items-center justify-center h-screen w-full text-lg font-semibold">
        Please select the job
      </div>
    );
  }
  return (
    <div className="flex flex-col p-4 border border-red-800 absloute h-[100vh]">
      <div className="flex items-center gap-5">
        <img
          src={job?.companyImageUrl}
          className="h-10 w-10 justify-between"
          alt=""
          srcset=""
        />
        <h2 className="text-2xl font-bold mb-1">{job?.title}</h2>
      </div>
      <div className="flex justify-between items-end border-b pb-2">
        <div>
          <div className="flex items-center">
            <HiOfficeBuilding />
            <p className="text-sm text-gray-500">{job?.company}</p>
          </div>
          <div className="flex items-center">
            <FaLocationDot />
            <p className="text-sm text-gray-500">{job?.location}</p>
          </div>
        </div>
        <a
          href={job?.job_link}
          target="_blank"
          className="bg-pink-500 text-white px-4 py-2 rounded-full"
        >
          Quick Apply
        </a>
      </div>

      <div className="overflow-y-auto h-[100vh]">
        <div className="py-2 border-b  ">
          <h2 className="text-l font-semibold">Job Details</h2>
          <div className="flex items-center gap-2">
            <BsFillBagFill />
            <p className="text-sm text-gray-500">{job?.employment_type}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegClock />
            <p className="text-sm text-gray-500">{`${formattedDate(
              `${job?.postedDateTime}`
            )}`}</p>
          </div>
          <div className="flex space-x-2 mt-2">
            <span className="text-sm px-3 py-1 border rounded-l bg-gray-200">
              {job?.source}
            </span>
            <span className="text-sm px-3 py-1 border rounded-l bg-gray-200">
            {job?.min_exp} - {job?.max_exp} years experience required
            </span>
          </div>
        </div>
        <div className="mt-4 ">
          <h3 className="text-xl font-semibold">{"Qualifications"}</h3>
          <div className="flex space-x-2 mt-2">
            <span className="text-sm px-3 py-1 border rounded-l bg-gray-200">
              Management
            </span>
            <span className="text-sm px-3 py-1 border rounded-l bg-gray-200">
              Heavy-lifting
            </span>

            <span className="text-sm px-3 py-1 border rounded-l bg-gray-200">
              {job?.seniority_level || "Entry level"}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Full Job Description</h3>
          <p className="mt-2 ">
            Join our team as a <strong>{job?.title}</strong> at{" "}
            <strong> {job?.company}</strong>, where you'll play a pivotal role
            in architecting and maintaining scalable server-side solutions. As a{" "}
            <strong>{job?.title}</strong>, you’ll have the opportunity to work
            with cutting-edge cloud technologies like {"cloud_technology"} and
            contribute to building high-performance systems that support our
            business’s core functionalities. In this role, you will collaborate
            with cross-functional teams including product managers, designers,
            and other developers to ensure the seamless integration of backend
            services with the frontend. You'll also be responsible for
            identifying areas of improvement in system performance, optimizing
            APIs, and managing databases like {"database_technology"}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
