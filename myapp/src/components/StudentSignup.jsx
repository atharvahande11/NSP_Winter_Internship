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

    // Store user data in sessionStorage
    sessionStorage.setItem('userData', JSON.stringify({
      fullName,
      aadhaar
    }));

    setTimeout(() => {
      setLoading(false);
      navigate('/student-details');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold p-4 font-protest-revolution text-center">
          <span>Student Register</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="text-gray-700 flex">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="aadhaar" className="text-gray-700 flex">
              Aadhaar Number
            </label>
            <input
              type="text"
              id="aadhaar"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, "").slice(0, 12))}
              className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="Enter 12-digit Aadhaar number"
              required
            />
          </div>
          <button
            type="button"
            onClick={generateOtp}
            className="w-full p-2 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none transition duration-200"
            disabled={loading || !isValidAadhaar(aadhaar)}
          >
            Generate OTP
          </button>
          {isOtpSent && (
            <div>
              <label htmlFor="otp" className="text-gray-700 flex">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Enter 4-digit OTP"
                required
              />
            </div>
          )}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className={`w-full p-2 rounded-md text-white ${
              loading || !isOtpSent
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } focus:outline-none transition duration-200`}
            disabled={loading || !isOtpSent}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/student-login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentSignup;