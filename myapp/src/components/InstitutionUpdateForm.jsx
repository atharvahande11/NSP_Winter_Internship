import React, { useState } from 'react';

const InstitutionUpdateForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState({
    officialEmail: initialData?.officialEmail || '',
    collegeName: initialData?.collegeName || '',
    address: initialData?.address || '',
    city: initialData?.city || '',
    state: initialData?.state || '',
    mobileNumber: initialData?.mobileNumber || ''
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

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300">
      {/* Header */}
      <div className="bg-[#E94FBB] text-white p-4 rounded-t-lg text-center text-lg font-semibold">
        Update Institution Profile
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Read-only Fields */}
          <div>
            <label className="font-medium text-gray-700">HEI ID</label>
            <input
              value={initialData?.heiId || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">PAN Number</label>
            <input
              value={initialData?.panNumber || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700">TAN Number</label>
            <input
              value={initialData?.tanNumber || ''}
              disabled
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Editable Fields */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="mobileNumber">Mobile Number</label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              placeholder="Enter Mobile Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#E94FBB]"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="officialEmail">Official E-mail</label>
            <input
              id="officialEmail"
              name="officialEmail"
              type="email"
              value={formData.officialEmail}
              onChange={handleChange}
              required
              placeholder="Enter Official Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#E94FBB]"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="collegeName">College Name</label>
            <input
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              required
              placeholder="Enter College Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#E94FBB]"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#E94FBB]"
            />
          </div>

          <div>
            <label className="font-medium text-gray-700" htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Enter City"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#E94FBB]"
            />
          </div>

          {/* Dropdown for State */}
          <div>
            <label className="font-medium text-gray-700" htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#E94FBB]"
            >
              <option value="" disabled>Select State</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#E94FBB] hover:bg-[#E94FBB]/90 text-white px-8 py-2 rounded-lg shadow-md"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstitutionUpdateForm;
