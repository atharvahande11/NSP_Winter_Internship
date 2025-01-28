import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PrivateScholarshipCard = ({ title, description }) => {
  PrivateScholarshipCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#36AAC7]">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center justify-between">
        <button 
          className="bg-[#36AAC7] hover:bg-[#2a8fa7] text-white px-4 py-2 rounded-lg"
        >
          View Applicants
        </button>
      </div>
    </div>
  );
};

const PrivateScholarshipDashboard = () => {
  const [activeTab, setActiveTab] = useState('manage-scholarships');
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const privateScholarships = [
    {
      id: 1,
      title: "STEM Excellence Scholarship",
      description: "Support students excelling in STEM fields with this exclusive scholarship.",
    },
    {
      id: 2,
      title: "Community Leadership Award",
      description: "Encourage young leaders making an impact in their communities.",
    },
    {
      id: 3,
      title: "Future Innovators Grant",
      description: "Provide funding to students working on groundbreaking projects.",
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#36AAC7]/10">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-8">Private Scholarship Portal</h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setActiveTab('manage-scholarships')}
              className={`p-3 rounded-lg text-left ${
                activeTab === 'manage-scholarships'
                  ? 'bg-[#36AAC7] text-white'
                  : 'text-gray-600 hover:bg-[#36AAC7]/10'
              }`}
            >
              Manage Scholarships
            </button>
            <button
              onClick={() => setActiveTab('review-applicants')}
              className={`p-3 rounded-lg text-left ${
                activeTab === 'review-applicants'
                  ? 'bg-[#36AAC7] text-white'
                  : 'text-gray-600 hover:bg-[#36AAC7]/10'
              }`}
            >
              Review Applicants
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`p-3 rounded-lg text-left ${
                activeTab === 'analytics'
                  ? 'bg-[#36AAC7] text-white'
                  : 'text-gray-600 hover:bg-[#36AAC7]/10'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={handleLogout}
              className={`p-3 rounded-lg text-left ${
                activeTab === 'logout'
                  ? 'bg-[#36AAC7] text-white'
                  : 'text-gray-600 hover:bg-[#36AAC7]/10'
              }`}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        {activeTab === 'manage-scholarships' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Manage Private Scholarships</h2>
            <div className="space-y-4">
              {privateScholarships.map((scholarship) => (
                <PrivateScholarshipCard
                  key={scholarship.id}
                  {...scholarship}
                />
              ))}
            </div>
          </div>
        )}
        {activeTab === 'review-applicants' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Review Applicants</h2>
            <p className="text-gray-600">List of applicants for review will appear here...</p>
          </div>
        )}
        {activeTab === 'analytics' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Analytics</h2>
            <p className="text-gray-600">Analytics dashboard coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateScholarshipDashboard;