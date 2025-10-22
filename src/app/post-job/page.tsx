'use client';

import { useState } from 'react';

export default function PostJobPage() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    skills: '',
    salary: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement job submission logic
    console.log(job);
    alert('Job posted successfully!');
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Post a Job</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border rounded-md"
            value={job.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-2 border rounded-md"
            value={job.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full px-4 py-2 border rounded-md"
            value={job.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Job Description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="w-full px-4 py-2 border rounded-md"
            value={job.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills (comma-separated)</label>
          <input
            type="text"
            id="skills"
            name="skills"
            className="w-full px-4 py-2 border rounded-md"
            value={job.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            className="w-full px-4 py-2 border rounded-md"
            value={job.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
          Post Job
        </button>
      </form>
    </div>
  );
}
