import React, { useState } from "react";

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    registeredNumber: "",
    organizationName: "",
    scholarshipAmount: "",
    academicYear: "",
    scholarshipName: "",
    incomeCriteria: "",
    ageLimit: "",
    fieldOfStudy: [],
    hscScore: "",
    sscScore: "",
    religion: "",
    caste: "",
    startsOn: "",
    endsOn: "",
    officialUrl: "",
    guidelines: null,
  });

  const options = ["Undergraduate", "Medical", "Law Student", "CA", "Post Graduation"];
  const religions = ["Christianity", "Islam", "Hinduism", "Buddhism", "Judaism", "Sikhism", "Atheism", "Other"];
  const castes = ["General", "OBC", "SC", "ST", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleFieldChange = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      fieldOfStudy: prevData.fieldOfStudy.includes(field)
        ? prevData.fieldOfStudy.filter((f) => f !== field)
        : [...prevData.fieldOfStudy, field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container-fluid py-4">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="shadow-lg bg-white rounded-lg">
          <div className="bg-[#36AAC7] text-white rounded-t-lg py-4">
            <h2 className="text-2xl font-bold text-center">New Scheme Registration</h2>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Organization Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Organization Information</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <label htmlFor="registeredNumber">12AA Registered Number</label>
                    <input
                      id="registeredNumber"
                      name="registeredNumber"
                      value={formData.registeredNumber}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="organizationName">Scholarship Organization Name</label>
                    <input
                      id="organizationName"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="scholarshipAmount">Scholarship Amount</label>
                    <input
                      id="scholarshipAmount"
                      name="scholarshipAmount"
                      type="number"
                      value={formData.scholarshipAmount}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="academicYear">Academic Year</label>
                    <input
                      id="academicYear"
                      name="academicYear"
                      type="date"
                      value={formData.academicYear}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Scholarship Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Scholarship Information</h3>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <label htmlFor="scholarshipName">Scholarship Name</label>
                    <input
                      id="scholarshipName"
                      name="scholarshipName"
                      value={formData.scholarshipName}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Eligibility Criteria</h3>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label htmlFor="incomeCriteria">Annual Income (Less Than)</label>
                    <input
                      id="incomeCriteria"
                      name="incomeCriteria"
                      value={formData.incomeCriteria}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="ageLimit">Age Limit</label>
                    <input
                      id="ageLimit"
                      name="ageLimit"
                      value={formData.ageLimit}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="space-y-4">
                    <label>Field of Study</label>
                    <div className="grid grid-cols-2 gap-4">
                      {options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={option}
                            checked={formData.fieldOfStudy.includes(option)}
                            onChange={() => handleFieldChange(option)}
                            className="cursor-pointer"
                          />
                          <label htmlFor={option} className="text-sm font-normal">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="hscScore">HSC Score</label>
                      <input
                        id="hscScore"
                        name="hscScore"
                        value={formData.hscScore}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="sscScore">SSC Score</label>
                      <input
                        id="sscScore"
                        name="sscScore"
                        value={formData.sscScore}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label>Religion</label>
                      <select
                        value={formData.religion}
                        onChange={(e) => handleSelectChange("religion", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                      >
                        <option value="">Select Religion</option>
                        {religions.map((religion) => (
                          <option key={religion} value={religion}>
                            {religion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label>Caste</label>
                      <select
                        value={formData.caste}
                        onChange={(e) => handleSelectChange("caste", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                      >
                        <option value="">Select Caste</option>
                        {castes.map((caste) => (
                          <option key={caste} value={caste}>
                            {caste}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="startsOn">Starts On</label>
                      <input
                        id="startsOn"
                        name="startsOn"
                        type="date"
                        value={formData.startsOn}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="endsOn">Ends On</label>
                      <input
                        id="endsOn"
                        name="endsOn"
                        type="date"
                        value={formData.endsOn}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="officialUrl">Official URL</label>
                    <input
                      id="officialUrl"
                      name="officialUrl"
                      type="url"
                      value={formData.officialUrl}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="guidelines">Guidelines</label>
                    <br></br>
                    <input
                      id="guidelines"
                      name="guidelines"
                      type="file"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#36AAC7] text-white py-2 rounded hover:bg-[#36AAC7]/85"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationForm;
