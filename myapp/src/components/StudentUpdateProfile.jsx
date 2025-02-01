import React, { useState } from 'react';

const StudentProfileUpdate = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    mobileNo: initialData?.mobileNo || '',
    email: initialData?.email || '',
    address: initialData?.address || '',
    collegeName: initialData?.collegeName || '',
    branch: initialData?.branch || '',
    currentYear: initialData?.currentYear || '',
    bankName: initialData?.bankName || '',
    accountNumber: initialData?.accountNumber || '',
    ifscCode: initialData?.ifscCode || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg border">
      <h2 className="text-center text-xl font-semibold text-[#0D4F8B] mb-6 border-b pb-4">
        Student Profile Update
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Non-updatable fields */}
          <div>
            <label className="font-medium text-gray-700">Application ID</label>
            <input
              value={initialData?.applicationId || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Candidate Name</label>
            <input
              value={initialData?.candidateName || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Aadhar Number</label>
            <input
              value={initialData?.aadharNumber || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Gender</label>
            <input
              value={initialData?.gender || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">Date of Birth</label>
            <input
              value={initialData?.dateOfBirth || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Updatable fields */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="mobileNo">Mobile Number</label>
            <input
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="email">Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email ID"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Address"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="collegeName">College Name</label>
            <input
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter College Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="branch">Branch</label>
            <input
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Enter Branch"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="currentYear">Current Year of Study</label>
            <input
              id="currentYear"
              name="currentYear"
              value={formData.currentYear}
              onChange={handleChange}
              placeholder="Enter Current Year"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Bank Details Section */}
          <div className="col-span-2 border-t pt-4">
            <h3 className="text-[#0D4F8B] font-semibold text-lg mb-4">Bank Details</h3>
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="bankName">Bank Name</label>
            <input
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="Enter Account Number"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="ifscCode">IFSC Code</label>
            <input
              id="ifscCode"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              placeholder="Enter IFSC Code"
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#0D4F8B] hover:bg-[#0D4F8B]/90 text-white px-8 py-2 rounded-lg shadow-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfileUpdate;
