import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DisplayFormData = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const navigate = useNavigate();

  const dummyData = {
    registeredNumber: "1234567890",
    organizationName: "Scholarship Foundation",
    scholarshipAmount: "50000",
    academicYear: "2024-25",
    scholarshipName: "Bright Future Scholarship",
    incomeCriteria: "Less than 3,00,000 INR",
    ageLimit: "25",
    fieldOfStudy: ["Undergraduate", "Medical"],
    hscScore: "85%",
    sscScore: "90%",
    religion: "Hinduism",
    caste: "General",
    startsOn: "2025-01-01",
    endsOn: "2025-12-31",
    officialUrl: "https://scholarshipfoundation.org",
    guidelines: "guidelines.pdf",
  };

  const handleRegistration = () => {
    if (termsChecked) {
      setShowPopup(false);
      navigate("/student-dashboard");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="shadow-lg bg-white rounded-lg">
        <div className="bg-[#FF7F7F] text-white rounded-t-lg py-4 text-center">
          <h2 className="text-2xl font-bold">Scholarship Registration Form</h2>
        </div>
        <div className="p-6 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Organization Information</h3>
          <p><strong>12AA Registered Number:</strong> {dummyData.registeredNumber}</p>
          <p><strong>Scholarship Organization Name:</strong> {dummyData.organizationName}</p>
          <p><strong>Scholarship Amount:</strong> {dummyData.scholarshipAmount}</p>
          <p><strong>Academic Year:</strong> {dummyData.academicYear}</p>

          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Scholarship Information</h3>
          <p><strong>Scholarship Name:</strong> {dummyData.scholarshipName}</p>

          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Eligibility Criteria</h3>
          <p><strong>Annual Income (Less Than):</strong> {dummyData.incomeCriteria}</p>
          <p><strong>Age Limit:</strong> {dummyData.ageLimit}</p>
          <p><strong>Field of Study:</strong> {dummyData.fieldOfStudy.join(", ")}</p>
          <p><strong>HSC Score:</strong> {dummyData.hscScore}</p>
          <p><strong>SSC Score:</strong> {dummyData.sscScore}</p>
          <p><strong>Religion:</strong> {dummyData.religion}</p>
          <p><strong>Caste:</strong> {dummyData.caste}</p>
          <p><strong>Starts On:</strong> {dummyData.startsOn}</p>
          <p><strong>Ends On:</strong> {dummyData.endsOn}</p>
          <p><strong>Official URL:</strong> <a href={dummyData.officialUrl} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{dummyData.officialUrl}</a></p>
          <p><strong>Guidelines:</strong> {dummyData.guidelines}</p>
        </div>
        <div className="p-6">
          <button 
            onClick={() => setShowPopup(true)} 
            className="w-full bg-[#FF7F7F] text-white py-2 rounded hover:bg-[#FF7F7F]/85 transition-colors"
          >
            Register
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Registration</h3>
            <p>Are you sure you want to register?</p>
            <div className="mt-4">
              <input 
                type="checkbox" 
                id="terms" 
                checked={termsChecked} 
                onChange={() => setTermsChecked(!termsChecked)} 
                className="mr-2"
              />
              <label htmlFor="terms">
                I agree to the <a href="#" className="text-blue-500 underline">Terms and Conditions</a>
              </label>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <button 
                onClick={() => setShowPopup(false)} 
                className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleRegistration} 
                className={`py-2 px-4 rounded text-white transition-colors ${
                  termsChecked ? 'bg-[#FF7F7F] hover:bg-[#FF7F7F]/85' : 'bg-gray-400 cursor-not-allowed'
                }`} 
                disabled={!termsChecked}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayFormData;