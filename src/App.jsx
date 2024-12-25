import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import "./App.css";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [selectedJob, setSelectedJob] = useState(null);


  const fetchJobs = async () => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get("https://mployee-backend.vercel.app/");
      if (response.data.length === 0) {
        throw new Error("No jobs found."); 
      }
      setJobs(response.data);
      setSelectedJob(response.data[0]); 
    } catch (err) {
      setError(err.message || "Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleSearch = async (location) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://mployee-backend.vercel.app/search?location=${location}`
      );
      if (response.data.length === 0) {
        throw new Error("No jobs found for the specified location."); // Custom error for no search results
      }
      setJobs(response.data);
      setSelectedJob(null);
    } catch (err) {
      setError(err.message || "Failed to search jobs.");
      setJobs([]); // Clear job list on error
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col border border-black">
      <div className="flex flex-col p-5 items-center px-40">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          // Loading state
          <div className="flex items-center justify-center h-screen w-full text-lg font-semibold">
            Loading...
          </div>
        ) : error ? (
          // Error state
          <div className="flex flex-col items-center justify-center h-screen w-full text-lg font-semibold text-red-500">
            <p>{error}</p>
            <button
              className="bg-blue-500 text-white px-4 py-1 mt-4"
              onClick={fetchJobs} // Retry fetching jobs
            >
              Retry
            </button>
          </div>
        ) : jobs.length > 0 ? (
          // Jobs and details view
          <div className="grid grid-cols-2 p-5 gap-x-5">
            <JobList
              jobs={jobs}
              onJobClick={handleJobClick}
              selectedJob={selectedJob} // Pass selectedJob state
            />
            <JobDetails job={selectedJob} />
          </div>
        ) : (
          // No jobs found state
          <div className="flex flex-col items-center justify-center h-screen w-full text-lg font-semibold text-gray-500">
            <p>No jobs available.</p>
            <button
              className="bg-blue-500 text-white px-4 py-1 mt-4"
              onClick={fetchJobs} // Retry fetching jobs
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default App;
