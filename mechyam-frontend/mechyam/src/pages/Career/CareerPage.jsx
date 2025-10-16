// // src/pages/CareerPage.jsx
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // Job Card Component
// const JobCard = ({ job, onClick }) => (
//   <div
//     onClick={() => onClick(job)}
//     className="border p-4 shadow-md hover:shadow-lg transition bg-white w-full sm:w-[300px] cursor-pointer"
//   >
//     <h3 className="text-blue-700 font-semibold mb-1 border-b border-blue-700 inline-block">
//       {job.jobTitle}
//     </h3>
//     {job.department && <p className="text-gray-500 mb-2">{job.department}</p>}
//     <p className="text-blue-600 hover:underline text-sm font-medium">
//       Click for Details →
//     </p>
//   </div>
// );

// const CareerPage = () => {
//   const navigate = useNavigate();
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://192.168.1.191:8085/mechyam/api/career/jobs/all")
//       .then((response) => {
//         if (response.data && response.data.data) {
//           // Flatten all country jobs into a single array
//           const allJobs = Object.values(response.data.data).flat();
//           setJobs(allJobs);
//         } else {
//           setJobs([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching jobs:", err);
//         setError("Failed to load jobs. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   const handleCardClick = (job) => {
//     navigate(`/career/${job.id}`, { state: job });
//   };

//   if (loading) return <p className="text-center mt-20">Loading jobs...</p>;
//   if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

//   return (
//     <main className="min-h-screen bg-white py-10 px-8">
//       <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
//         Job Openings
//       </h1>

//       <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
//         {jobs.map((job) => (
//           <JobCard key={job.id} job={job} onClick={handleCardClick} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default CareerPage;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const CareerPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://192.168.1.191:8085/mechyam/api/career/jobs/all")
      .then((response) => {
        let allJobs = [];
        if (response.data && response.data.data) {
          const data = response.data.data;
          allJobs = Array.isArray(data) ? data : Object.values(data).flat();
        }
        setJobs(allJobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleCardClick = (job) => {
    navigate(`/career/${job.id}`, { state: job });
  };

  if (loading) return <p className="text-center mt-20">Loading jobs...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <main className="min-h-screen bg-white py-10 px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Job Openings
      </h1>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-6">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} onClick={handleCardClick} />
          ))
        ) : (
          <p className="text-center w-full mt-20 text-gray-500">
            No jobs available
          </p>
        )}
      </div>
    </main>
  );
};

export default CareerPage;
