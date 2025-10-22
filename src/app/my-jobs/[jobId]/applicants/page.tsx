'use client';

import { useEffect, useState } from 'react';

interface Applicant {
  id: number;
  name: string;
  email: string;
  skills: string[];
  jobId: number;
}

export default function ApplicantsPage({ params }: { params: { jobId: string } }) {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const { jobId } = params;

  useEffect(() => {
    if (jobId) {
      const fetchApplicants = async () => {
        const res = await fetch(`/api/jobs/${jobId}/applicants`);
        const data = await res.json();
        setApplicants(data);
      };
      fetchApplicants();
    }
  }, [jobId]);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Applicants for Job #{jobId}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">Skills</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{applicant.name}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{applicant.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {applicant.skills.join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
