// src/components/AdminPage/JobList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.191:8085/mechyam/api/career/jobs"
        );

        // Log response to check structure
        console.log("Job API response:", response.data);

        // Ensure jobs is always an array
        const jobsArray = Array.isArray(response.data)
          ? response.data
          : response.data.data || [];
        setJobs(jobsArray);
      } catch (error) {
        console.error("❌ Error fetching jobs:", error);
        setJobs([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p className="text-gray-500 text-center mt-4">Loading jobs...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-[85vh] overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Uploaded Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs uploaded yet.</p>
      ) : (
        <ul className="space-y-3">
          {jobs.map((job, index) => (
            <li
              key={index}
              className="border p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-lg">{job.jobTitle}</h3>
              <p className="text-gray-600">Department: {job.department}</p>
              <p className="text-gray-600">Location: {job.location}</p>
              <p className="text-gray-600">Type: {job.jobType}</p>
              <p className="text-gray-600">Experience: {job.experienceLevel}</p>
              <p className="text-gray-600">Active: {job.isActive ? "Yes" : "No"}</p>
              <p className="text-gray-500 text-sm">
                Posted: {new Date(job.postedDate).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm">
                Closing: {new Date(job.closingDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobList;
