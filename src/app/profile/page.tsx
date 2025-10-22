export default function ProfilePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-800">Skills</h3>
          <div className="mt-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">React</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Node.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TypeScript</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800">Experience</h3>
          <div className="mt-2">
            <div className="mb-4">
              <h4 className="font-bold">Software Engineer at Tech Corp</h4>
              <p className="text-gray-600">2020 - Present</p>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
            </div>
            <div>
              <h4 className="font-bold">Junior Developer at Innovate Inc.</h4>
              <p className="text-gray-600">2018 - 2020</p>
              <p className="text-gray-700 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
