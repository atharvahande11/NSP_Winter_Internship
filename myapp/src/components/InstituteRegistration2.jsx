import React, { useState } from 'react';

const RedStar = () => (
  <span className="text-red-500 ml-1">*</span>
);

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-4 rounded-lg shadow-xl max-w-sm w-full mx-4"> {/* Reduced max-width and padding */}
      {children}
    </div>
  </div>
);

const FormField = ({ label, value, onChange, type = "text", as = "input", options = [] }) => {
  const inputClasses = "w-full sm:w-64 px-3 py-1.5 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"; // Reduced padding and width
  
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">
        {label} <RedStar />
      </label>
      {as === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClasses}
          required
        >
          <option value="" disabled>Select {label}</option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {value} - {label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${label}`}
          className={inputClasses}
          required
        />
      )}
    </div>
  );
};

const InstituteRegistration2 = ({ onRegistrationComplete }) => {
  const [formData, setFormData] = useState({
    heid: '',
    pan: '',
    tan: '',
    email: '',
    collegeName: '',
    address: '',
    city: '',
    mobNum: '',
    state: ''
  });

  const [error, setError] = useState('');
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateApplicationId = () => {
    const stateInitials = formData.state.slice(0, 2).toUpperCase();
    const heiInitials = formData.heid.slice(0, 2).toUpperCase();
    const randomNumbers = Math.floor(100000 + Math.random() * 900000);
    return `EI_${stateInitials}_${heiInitials}${randomNumbers}`;
  };

  const handleRegisterClick = () => {
    if (Object.values(formData).some(value => !value)) {
      setError('Please fill all the input fields.');
      return;
    }
    setError('');
    setShowConfirmationPopup(true);
  };

  const handleConfirmRegistration = async () => {
    setShowConfirmationPopup(false);
    try {
      const newApplicationId = generateApplicationId();
      setApplicationId(newApplicationId);

      const response = await fetch('http://localhost:4000/institute/register-institute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          appId: newApplicationId
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          if (onRegistrationComplete) {
            onRegistrationComplete();
          }
        }, 10000);
      } else {
        setError("Institute registration failed!");
      }
    } catch (error) {
      console.error("Error registering institute:", error);
      setError("Error registering institute. Please try again.");
    }
  };

  const STATES = [
    { value: "MH", label: "Maharashtra" },
    { value: "UK", label: "Uttarakhand" },
    { value: "AP", label: "Andhra Pradesh" },
    { value: "AR", label: "Arunachal Pradesh" },
    { value: "AS", label: "Assam" },
    { value: "BR", label: "Bihar" },
    { value: "CG", label: "Chhattisgarh" },
    { value: "CH", label: "Chandigarh" },
    { value: "DL", label: "Delhi" },
    { value: "GA", label: "Goa" },
    { value: "GJ", label: "Gujarat" },
    { value: "HP", label: "Himachal Pradesh" },
    { value: "HR", label: "Haryana" },
    { value: "JH", label: "Jharkhand" },
    { value: "KA", label: "Karnataka" },
    { value: "KL", label: "Kerala" },
    { value: "ML", label: "Meghalaya" },
    { value: "MN", label: "Manipur" },
    { value: "MP", label: "Madhya Pradesh" },
    { value: "MZ", label: "Mizoram" },
    { value: "NL", label: "Nagaland" },
    { value: "OD", label: "Odisha" },
    { value: "PB", label: "Punjab" },
    { value: "PY", label: "Pondicherry" },
    { value: "RJ", label: "Rajasthan" },
    { value: "SK", label: "Sikkim" },
    { value: "TN", label: "Tamil Nadu" },
    { value: "TR", label: "Tripura" },
    { value: "TS", label: "Telangana" },
    { value: "UP", label: "Uttar Pradesh" },
    { value: "WB", label: "West Bengal" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-cambria">
      <header style={{ backgroundColor: '#E94FBB' }} className="text-white py-6 px-8 rounded-lg mb-8">
        <h1 className="text-2xl font-bold text-center">
          Institute Application Form
        </h1>
      </header>

      <div className="bg-white shadow-xl rounded-xl p-6"> {/* Reduced padding */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap */}
          <FormField
            label="Enter HEI_id"
            value={formData.heid}
            onChange={handleChange('heid')}
          />
          <FormField
            label="PAN number"
            value={formData.pan}
            onChange={handleChange('pan')}
          />
          <FormField
            label="TAN number"
            value={formData.tan}
            onChange={handleChange('tan')}
          />
          <FormField
            label="Mobile Number"
            value={formData.mobNum}
            onChange={handleChange('mobNum')}
            type="tel"
          />
          <FormField
            label="Official E-mail"
            value={formData.email}
            onChange={handleChange('email')}
            type="email"
          />
          <FormField
            label="College Name"
            value={formData.collegeName}
            onChange={handleChange('collegeName')}
          />
          <FormField
            label="Address"
            value={formData.address}
            onChange={handleChange('address')}
          />
          <FormField
            label="City"
            value={formData.city}
            onChange={handleChange('city')}
          />
          <FormField
            label="State"
            value={formData.state}
            onChange={handleChange('state')}
            as="select"
            options={STATES}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={handleRegisterClick}
            style={{ backgroundColor: '#E94FBB' }}
            className="px-6 py-2 text-white font-bold rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg"
          >
            Register
          </button>
        </div>
      </div>

      {showConfirmationPopup && (
        <Modal onClose={() => setShowConfirmationPopup(false)}>
          <h2 className="text-lg font-bold mb-4">Confirm Application</h2> {/* Reduced font size */}
          <p className="mb-6">Are you sure you want to register the application?</p>
          <div className="flex justify-center space-x-4">
            <button
              style={{ backgroundColor: '#E94FBB' }}
              className="px-6 py-2 text-white rounded hover:opacity-90"
              onClick={handleConfirmRegistration}
            >
              Yes
            </button>
            <button
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => setShowConfirmationPopup(false)}
            >
              No
            </button>
          </div>
        </Modal>
      )}

      {showSuccessPopup && (
        <Modal onClose={() => setShowSuccessPopup(false)}>
          <h2 className="text-lg font-bold mb-4">Registration Successful</h2> {/* Reduced font size */}
          <p className="mb-6">Your Application ID: {applicationId}</p>
          <button
            style={{ backgroundColor: '#E94FBB' }}
            className="px-6 py-2 text-white rounded hover:opacity-90"
            onClick={() => setShowSuccessPopup(false)}
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default InstituteRegistration2;
