import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const StudentDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    bankAccount: "",
    gender: "",
    email: "",
    dob: "",
    collegeName: "",
    panNumber: "",
    branch: "",
    mobile: "",
    annualIncome: "",
    address: "",
    currentYear: "",
    bankName: "",
    accountNumber: "",
  });

  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');

  if (!userData.aadhaar) {
    return <Navigate to="/student-signup" replace />;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    const completeUserData = {
      ...userData,
      ...formData,
      hasCompletedRegistration: true
    };
    sessionStorage.setItem('userData', JSON.stringify(completeUserData));
    
    // Navigate to dashboard
    navigate('/student-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="bg-[#F7768D] text-white text-center py-4 rounded-t-lg">
            <h1 className="text-2xl font-semibold">Applicant Application Form</h1>
          </div>
          
          <form className="p-6 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Name of Applicant <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Bank Account Number or IFSC Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  value={formData.bankAccount}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Bank Account Number"
                  required
                />
              </div>
              <div>
            <label className="font-medium text-gray-700" htmlFor="bankName">Bank Name</label>
            <input
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              placeholder="Enter Bank Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="accountNumber">Account Number</label>
            <input
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              placeholder="Enter Account Number"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
              <div>
            <label className="font-medium text-gray-700">Gender</label>
            <input
              type="text"
              value=  {formData.gender}
              name="gender"
              onChange={handleInputChange}
              placeholder="Enter Gender"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Father/Mother/Guardian/Organization PAN Card Number
                </label>
                <input
                  type="text"
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter PAN Card Number"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Mobile Number"
                  required
                />
              </div>
              <div>
            <label className="font-medium text-gray-700" htmlFor="email">Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email ID"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="collegeName">College Name</label>
            <input
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleInputChange}
              placeholder="Enter College Name"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="branch">Branch</label>
            <input
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              placeholder="Enter Branch"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="font-medium text-gray-700" htmlFor="currentYear">Current Year of Study</label>
            <input
              id="currentYear"
              name="currentYear"
              value={formData.currentYear} 
              onChange={handleInputChange}
              placeholder="Enter Current Year"
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Annual Income <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="annualIncome"
                  value={formData.annualIncome}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Annual Income"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Address"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Upload Annual Income Certificate (PDF) <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Digilocker QR Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="text-gray-700">
              Note: Refer to this <a href="#" className="text-blue-500 hover:underline">video</a> on how to access the Digilocker QR code.
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#F7768D]/80 text-white px-8 py-2 rounded hover:bg-[#F7768D] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;