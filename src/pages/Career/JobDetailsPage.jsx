import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const JobDetailsPage = () => {
  const location = useLocation();
  const job = location.state;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedinUrl: "",
    portfolioUrl: "",
    coverLetter: "",
    resumeFile: null,
  });

  const [message, setMessage] = useState("");

  if (!job) {
    return <div className="text-center mt-10">No job details available.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resumeFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("email", formData.email);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("linkedinUrl", formData.linkedinUrl);
    form.append("portfolioUrl", formData.portfolioUrl);
    form.append("coverLetter", formData.coverLetter);
    form.append("jobId", job.id); // Link job with application
    if (formData.resumeFile) {
      form.append("resumeFile", formData.resumeFile);
    }

    try {
      await axios.post("http://192.168.1.191:8080/mechyam/api/career/apply", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Application submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        linkedinUrl: "",
        portfolioUrl: "",
        coverLetter: "",
        resumeFile: null,
      });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setMessage("❌ Something went wrong! Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="bg-blue-700 text-white py-16 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
        {job.department && (
          <p className="text-lg opacity-90">Department: {job.department}</p>
        )}
      </section>

      {/* Job Details + Application Form Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE — Job Description */}
        <section className="border-r pr-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Job Description
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {job.details ||
              "We are looking for passionate and skilled professionals to join our team. Your role will involve collaborating on key projects and contributing innovative ideas to achieve organizational goals."}
          </p>

          <div className="mt-6 space-y-3">
            <p>
              <strong>Location:</strong> {job.location || "India / USA"}
            </p>
            <p>
              <strong>Experience:</strong> {job.experience || "2–5 years"}
            </p>
            <p>
              <strong>Employment Type:</strong> {job.type || "Full-time"}
            </p>
            <p>
              <strong>Industry:</strong> {job.industry || "Engineering / Construction"}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">
              Key Responsibilities
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Prepare and review technical drawings and documents.</li>
              <li>Collaborate with design and project teams.</li>
              <li>Ensure compliance with engineering standards.</li>
              <li>Provide innovative solutions to design challenges.</li>
            </ul>
          </div>
        </section>

        {/* RIGHT SIDE — Application Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Apply for this Position
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">LinkedIn URL</label>
              <input
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your LinkedIn profile link"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Portfolio URL</label>
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                placeholder="Enter your portfolio link"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="4"
                className="w-full border px-3 py-2 rounded"
                placeholder="Write a short cover letter..."
              ></textarea>
            </div>

            <div>
              <label className="block font-medium mb-1">Upload Resume</label>
              <input
                type="file"
                name="resumeFile"
                onChange={handleFileChange}
                className="w-full border px-3 py-2 rounded"
                accept=".pdf,.doc,.docx"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto"
            >
              Submit Application
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 font-medium ${message.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
                }`}
            >
              {message}
            </p>
          )}
        </section>
      </div>
    </main>
  );
};

export default JobDetailsPage;
