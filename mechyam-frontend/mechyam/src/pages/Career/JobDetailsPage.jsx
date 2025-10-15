import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { applyJob, resetApplyStatus } from "../../redux/slices/JobSlice";

const JobDetailsPage = () => {
  const location = useLocation();
  const job = location.state; // passed from CareerPage
  const dispatch = useDispatch();

  const applyStatus = useSelector((state) => state.jobs.applyStatus);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
    jobId: job.id,
  });

  useEffect(() => {
    if (applyStatus) {
      if (applyStatus.error) {
        alert("❌ Failed to submit application: " + applyStatus.error);
      } else {
        alert("✅ Application submitted successfully!");
      }
      dispatch(resetApplyStatus());
    }
  }, [applyStatus, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(applyJob(formData));
    setFormData({ name: "", email: "", resume: "", coverLetter: "", jobId: job.id });
  };

  return (
    <main className="min-h-screen py-10 px-8 bg-white max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{job.jobTitle}</h1>
      <p className="text-gray-600 mb-2">Department: {job.department}</p>
      <p className="text-gray-600 mb-2">Location: {job.location}</p>
      <p className="text-gray-600 mb-2">Type: {job.jobType}</p>
      <p className="text-gray-600 mb-2">Experience: {job.experienceLevel}</p>
      <p className="text-gray-600 mb-4">Active: {job.isActive ? "Yes" : "No"}</p>

      <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
      <p className="mb-6">{job.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Apply for this Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
          required
        />
        <input
          type="text"
          name="resume"
          placeholder="Resume URL or Text"
          value={formData.resume}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />
        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
          rows="3"
        />
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
};

export default JobDetailsPage;
