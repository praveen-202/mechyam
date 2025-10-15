import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/slices/JobSlice";

const JobList = () => {
  const dispatch = useDispatch();
  const { data: jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  if (loading) return <p className="text-gray-500 text-center mt-4">Loading jobs...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-[85vh] overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Uploaded Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs uploaded yet.</p>
      ) : (
        <ul className="space-y-3">
          {jobs.map((job, index) => (
            <li key={index} className="border p-3 rounded-lg hover:bg-gray-50 transition">
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
