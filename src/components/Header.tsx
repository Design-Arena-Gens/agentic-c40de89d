import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          JobBoard
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/jobs" className="text-gray-600 hover:text-gray-800">
            Jobs
          </Link>
          <Link href="/post-job" className="text-gray-600 hover:text-gray-800">
            Post a Job
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-gray-800">
            Profile
          </Link>
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </Link>
          <Link href="/signup" className="text-gray-600 hover:text-gray-800">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
