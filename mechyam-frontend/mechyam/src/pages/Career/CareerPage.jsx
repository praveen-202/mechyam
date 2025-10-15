import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/slices/JobSlice";

// Job Card Component
const JobCard = ({ job, onClick }) => (
  <div
    onClick={() => onClick(job)}
    className="border p-4 shadow-md hover:shadow-lg transition bg-white w-full sm:w-[300px] cursor-pointer"
  >
    <h3 className="text-blue-700 font-semibold mb-1 border-b border-blue-700 inline-block">
      {job.jobTitle}
    </h3>
    {job.department && <p className="text-gray-500 mb-2">{job.department}</p>}
    <p className="text-blue-600 hover:underline text-sm font-medium">
      Click for Details →
    </p>
  </div>
);

// Country Section Component (if needed)
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

const CareerPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (jobs.length === 0) dispatch(fetchJobs());
  }, [dispatch]);

  const handleCardClick = (job) => {
    navigate(`/career/${job.id}`, { state: job });
  };

  if (loading) return <p className="text-center mt-4">Loading jobs...</p>;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  return (
    <main className="min-h-screen bg-white py-10 px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Job Openings
      </h1>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={handleCardClick} />
        ))}
      </div>
    </main>
  );
};

export default CareerPage;
