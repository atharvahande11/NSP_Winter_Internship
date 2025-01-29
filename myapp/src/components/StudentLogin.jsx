import { useState } from "react";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <header style={{ backgroundColor: '#F7768D' }} className="text-white py-4 px-6 rounded-lg mb-6 text-center">
          <h2 className="text-2xl font-cambria font-bold">Student Login</h2>
        </header>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block font-cambria text-gray-700 text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block font-cambria text-gray-700 text-sm font-medium">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            style={{ backgroundColor: '#F7768D' }}
            className={`w-full px-4 py-2 text-white text-lg font-cambria rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-600">
          <Link to="/student-signup" className="text-pink-500 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
