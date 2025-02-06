import { useState } from 'react';
import PropTypes from 'prop-types';

const RedStar = () => (
  <span className="text-red-500 ml-1">*</span>
);

const FormInput = ({ label, value, onChange, placeholder, type = "text", maxLength, className = "" }) => (
  <div className="space-y-2">
    <label className="block text-gray-700 text-sm font-medium">
      {label}
      <RedStar />
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      required
      className={`w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none focus:ring-0 ${className}`}
    />
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.string,
  className: PropTypes.string
};

FormInput.defaultProps = {
  type: "text",
  maxLength: undefined,
  className: ""
};

const InstituteLogin = ({ onRegistrationComplete }) => {
  const [formData, setFormData] = useState({
    tan: '',
    mobileNumber: '',
    userEnteredOtp: '',
  });
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleGetOtp = () => {
    if (!formData.mobileNumber) {
      setError("Please enter a mobile number");
      return;
    }
    
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setIsOtpSent(true);
    setError("");
    alert(`Your OTP is: ${newOtp}`);
  };

  const handleVerifyOtp = () => {
    if (formData.userEnteredOtp === generatedOtp) {
      setError("");
      alert("OTP verified successfully!");
      if (onRegistrationComplete) {
        onRegistrationComplete();
      }
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="bg-[#36aac9] text-white py-6 px-8 rounded-lg mb-8">
        <h1 className="text-2xl font-bold text-center">
          Private Organisation Login
        </h1>
      </header>

      <div className="bg-white shadow-xl rounded-xl p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-medium">
              Enter TAN Number
              <RedStar />
            </label>
            <input
              type="text"
              value={formData.tan}
              onChange={handleChange('tan')}
              placeholder="Enter your TAN number"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 text-sm font-medium">
              Mobile Number
              <RedStar />
            </label>
            <div className="flex space-x-2">
              <input
                type="tel"
                value={formData.mobileNumber}
                onChange={handleChange('mobileNumber')}
                placeholder="Enter your mobile number"
                className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none focus:ring-0"
              />
              <button
                onClick={handleGetOtp}
                className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity duration-200 border-2 border-[#36aac9] bg-[#36aac9] disabled:opacity-50"
                disabled={!formData.mobileNumber}
              >
                Get OTP
              </button>
            </div>
          </div>

          {isOtpSent && (
            <FormInput
              label="Enter OTP"
              value={formData.userEnteredOtp}
              onChange={handleChange('userEnteredOtp')}
              placeholder="Enter the 4-digit OTP"
              type="number"
              maxLength="4"
            />
          )}
        </div>

        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        <div className="flex justify-center pt-6">
          <button
            onClick={handleVerifyOtp}
            className="px-8 py-3 text-white text-lg rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg border-2 border-[#36aac9] bg-[#36aac9] disabled:opacity-50"
            disabled={!isOtpSent || !formData.userEnteredOtp}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

InstituteLogin.propTypes = {
  onRegistrationComplete: PropTypes.func
};

InstituteLogin.defaultProps = {
  onRegistrationComplete: undefined
};

export default InstituteLogin;