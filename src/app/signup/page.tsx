'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('job-seeker');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log({ name, email, password, role });
    alert('Signed up successfully!');
  };

  return (
    <div className="container mx-auto px-6 py-8 flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">I am a...</label>
            <div className="flex">
              <label className="inline-flex items-center mr-6">
                <input
                  type="radio"
                  name="role"
                  value="job-seeker"
                  checked={role === 'job-seeker'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Job Seeker</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="employer"
                  checked={role === 'employer'}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-radio"
                />
                <span className="ml-2">Employer</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
