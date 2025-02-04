import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

const RedStar = () => {
  return <span style={{ color: 'red' }}>*</span>;
};

const StudentLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [userEnteredOTP, setUserEnteredOTP] = useState(Array(6).fill(""));  // Array of 6 empty strings for OTP digits
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setotp] = useState("");

  const handleAppIdChange = (e) => {
    setApplicationId(e.target.value);
  };

  const handleotpChange = (e) => {
    setotp(e.target.value);
  };

  const handleUserEnteredOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...userEnteredOTP];
      newOtp[index] = value;
      setUserEnteredOTP(newOtp);
    }
  };

  const handleGetOtp = async () => {
    if (applicationId) {
      try {
        const response = await axios.post("http://localhost:4000/aadhaar/verify-appId", {
          applicationId,
        });
        if (response.data.success) {
          try {
            const otpResponse = await axios.post("http://localhost:4000/otp/appId/send-otp", {
              appId: applicationId,
            });
            alert(otpResponse.data.message);
            setOtpSent(true);
          } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP.");
          }
        } else {
          alert("Invalid Application ID.");
        }
      } catch (error) {
        console.error("Error verifying application ID:", error);
        alert("Error occurred while verifying application ID.");
      }
    } else {
      alert("Please enter a valid Application ID.");
    }
  };

  const handleVerify = async () => {
    const otp = userEnteredOTP.join(""); // Combine the OTP array into a single string
    if (otp && applicationId) {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:4000/otp/appId/verify-otp", {
          appId: applicationId,
          userEnteredOTP: otp,
        });
        setLoading(false);
        if (response.data.status === "success") {
          alert(response.data.message);
          // Navigate or proceed with the application
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        setLoading(false);
        console.error("Error verifying OTP:", error);
        alert("Error verifying OTP.");
      }
    } else {
      alert("Please enter OTP.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-start justify-center bg-gray-100 px-4 pt-10">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <header style={{ backgroundColor: '#E94FBB' }} className="text-white py-4 px-6 rounded-lg mb-6 text-center">
          <h2 className="text-2xl font-cambria font-bold">Student Login</h2>
        </header>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="applicationId" className="block font-cambria text-gray-700 text-sm font-medium">
              Application ID <RedStar />
            </label>
            <div className="flex">
              <input
                type="text"
                id="applicationId"
                className="w-2/3 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                placeholder="Enter your application ID"
                value={applicationId}
                onChange={handleAppIdChange}
                required
              />
              <button
                type="button"
                className="w-1/3 ml-2 bg-pink-500 text-white px-4 py-2 rounded-lg"
                onClick={handleGetOtp}
              >
                Get OTP
              </button>
            </div>
            <div>
            <input
                type="number"
                id="otpid"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                placeholder="Enter your OTP"
                value={otp}
                onChange={handleotpChange}
                required
              />
            </div>
          </div>

          {otpSent && (
            <div className="space-y-2 mt-4">
              <label htmlFor="otp" className="block font-cambria text-gray-700 text-sm font-medium">
                Enter OTP <RedStar />
              </label>
              <div className="flex space-x-2">
                {userEnteredOTP.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-1/6 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2  focus:border-transparent text-center"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleUserEnteredOtpChange(e, index)}
                    placeholder={`Digit ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 text-center">
            <button
              type="button"
              style={{ backgroundColor: '#E94FBB' }}
              className={`w-full px-4 py-2 text-white text-lg font-cambria rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
              onClick={handleVerify}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-gray-600">
          <Link to="/student-signup" className="text-pink-500 hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
