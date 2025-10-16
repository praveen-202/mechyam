// src/components/AdminPage/AppliedJobs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.191:8085/mechyam/api/career/applications")
      .then((res) => setApplications(res.data.data || []))
      .catch((err) => console.error("Error fetching applied jobs:", err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Applied Job Candidates</h2>
      {applications.length === 0 ? (
        <p className="text-gray-500">No candidates have applied yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-50">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Job Title</th>
              <th className="border p-2">Experience</th>
              <th className="border p-2">Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border p-2">{app.name}</td>
                <td className="border p-2">{app.email}</td>
                <td className="border p-2">{app.jobTitle}</td>
                <td className="border p-2">{app.experience}</td>
                <td className="border p-2">
                  <a
                    href={app.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppliedJobs;
