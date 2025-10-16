// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import JobList from "../../components/AdminPage/JobList";
import JobForm from "../../components/AdminPage/JobForm";
// import AdminLogin from "./components/AdminPage/AdminLogin";

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);

  const handleAddJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left: Job List */}
      <div className="w-1/2 p-8">
        <JobList jobs={jobs} />
      </div>

      {/* Right: Job Form */}
      <div className="w-1/2 p-8">
        <JobForm onAddJob={handleAddJob} />
      </div>
    </div>
  );
};

export default AdminDashboard;
