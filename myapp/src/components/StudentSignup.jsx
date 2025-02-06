import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const StudentSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [aadhaar, setAadhaar] = useState("");
  const [fullName, setFullName] = useState("");

  const isValidAadhaar = (number) => {
    const aadhaarRegex = /^\d{12}$/;
    return aadhaarRegex.test(number);
  };

  const generateOtp = () => {
    if (!isValidAadhaar(aadhaar)) {
      setError("Please enter a valid 12-digit Aadhaar number");
      return;
    }
    
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setIsOtpSent(true);
    setError("");
    alert(`Your OTP is: ${newOtp}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!isValidAadhaar(aadhaar)) {
      setError("Please enter a valid 12-digit Aadhaar number");
      setLoading(false);
      return;
    }

    if (otp !== generatedOtp) {
      setError("Invalid OTP. Please try again.");
      setLoading(false);
      return;
    }

    sessionStorage.setItem('userData', JSON.stringify({ fullName, aadhaar }));

    setTimeout(() => {
      setLoading(false);
      navigate('/student-details');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <header style={{ backgroundColor: '#F7768D' }} className="text-white py-4 px-6 rounded-lg mb-6 text-center">
          <h2 className="text-2xl font-cambria font-bold">Student Register</h2>
        </header>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="fullName" className="block font-cambria text-gray-700 text-sm font-medium">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="aadhaar" className="block font-cambria text-gray-700 text-sm font-medium">Aadhaar Number</label>
            <input
              type="text"
              id="aadhaar"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, "").slice(0, 12))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600"
              placeholder="Enter 12-digit Aadhaar number"
              required
            />
          </div>

          <button
            type="button"
            onClick={generateOtp}
            className="w-full px-4 py-2 text-white rounded-lg transition-opacity duration-200 shadow-lg" 
            style={{ backgroundColor: '#F7768D' }}
            disabled={loading || !isValidAadhaar(aadhaar)}
          >
            Generate OTP
          </button>

          {isOtpSent && (
            <div className="space-y-2">
              <label htmlFor="otp" className="block font-cambria text-gray-700 text-sm font-medium">Enter OTP</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600"
                placeholder="Enter 4-digit OTP"
                required
              />
            </div>
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className={`w-full px-4 py-2 text-white text-lg font-cambria rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg ${loading || !isOtpSent ? 'cursor-not-allowed opacity-70' : ''}`}
            style={{ backgroundColor: '#F7768D' }}
            disabled={loading || !isOtpSent}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/student-login" className="text-pink-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;