// src/pages/CareerPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

// Temporary job data
const jobData = {
  USA: [
    { id: 1, title: "Techno-Commercial Manager (BD)", details: "Responsible for business development and client relations in the USA." },
    { id: 2, title: "Project Management", details: "Oversee project timelines, deliverables, and client satisfaction." },
  ],
  India: [
    { id: 3, title: "Document Controller", department: "Structural", details: "Manage engineering and structural documentation processes." },
    { id: 4, title: "Design Engineer / Sr. Design Engineer", department: "Structural", details: "Design and analyze structural frameworks using CAD software." },
    { id: 5, title: "Checker", department: "Structural", details: "Review and verify engineering drawings and calculations." },
  ],
};

// Job Card Component
const JobCard = ({ job, onClick }) => (
  <div
    onClick={() => onClick(job)}
    className="border p-4 shadow-md hover:shadow-lg transition bg-white w-full sm:w-[300px] cursor-pointer"
  >
    <h3 className="text-blue-700 font-semibold mb-1 border-b border-blue-700 inline-block">
      {job.title}
    </h3>
    {job.department && <p className="text-gray-500 mb-2">{job.department}</p>}
    <p className="text-blue-600 hover:underline text-sm font-medium">
      Click for Details →
    </p>
  </div>
);

// Country Section Component
const CountrySection = ({ country, jobs, onCardClick }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-5 text-gray-800">{country}</h2>
    <div className="flex flex-wrap gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={onCardClick} />
      ))}
    </div>
  </section>
);

// Main Career Page
const CareerPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (job) => {
    navigate(`/career/${job.id}`, { state: job });

  };

  return (
    <main className="min-h-screen bg-white py-10 px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Job Openings
      </h1>


      <div className="max-w-6xl mx-auto">
        {Object.entries(jobData).map(([country, jobs]) => (
          <CountrySection
            key={country}
            country={country}
            jobs={jobs}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </main>
  );
};

export default CareerPage;