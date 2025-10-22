import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Dream Job
        </h1>
        <p className="mt-3 text-lg text-gray-600">
          The best place to find and post jobs.
        </p>
        <div className="mt-8 space-x-4">
          <Link href="/jobs" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Find a Job
          </Link>
          <Link href="/post-job" className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Post a Job
          </Link>
        </div>
      </div>
    </main>
  );
}