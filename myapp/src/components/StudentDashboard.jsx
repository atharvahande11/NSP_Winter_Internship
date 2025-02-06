import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import StudentProfileUpdate from './StudentUpdateProfile';

const ScholarshipCard = ({ title, description }) => {
  const navigate = useNavigate();

  ScholarshipCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#FF7F7F]">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <button 
          className="bg-[#F8788E] hover:bg-[#e0677f] text-white px-4 py-2 rounded-lg"
          onClick={() => navigate('/scholarship-register')}
        >
          Register 
        </button>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('scholarships');
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const scholarships = [
    { id: 1, title: "National Scholarship Portal Scheme 2024", description: "National Scholarships Portal is one-stop solution through which various services starting from student application, application receipt, processing, sanction and disbursal of various scholarships to students are enabled." },
    { id: 2, title: "Merit-based Scholarship Program", description: "Scholarship program for outstanding academic achievers with demonstrated excellence in their field of study." },
    { id: 3, title: "Research Fellowship Grant", description: "Special grants for students pursuing research in emerging technologies and innovation." }
  ];

  return (
    <div className="flex min-h-screen bg-[#FF7F7F]/10">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-8">Student Portal</h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setActiveTab('profile')}
              className={`p-3 rounded-lg text-left ${activeTab === 'profile' ? 'bg-[#F8788E] text-white' : 'text-gray-600 hover:bg-[#f9b3c0]'}`}
            >
              Update Profile
            </button>
            <button
              onClick={() => setActiveTab('scholarships')}
              className={`p-3 rounded-lg text-left ${activeTab === 'scholarships' ? 'bg-[#F8788E] text-white' : 'text-gray-600 hover:bg-[#f9b3c0]'}`}
            >
              Apply for Scholarships
            </button>
            <button
              onClick={() => setActiveTab('my-scholarships')}
              className={`p-3 rounded-lg text-left ${activeTab === 'my-scholarships' ? 'bg-[#F8788E] text-white' : 'text-gray-600 hover:bg-[#f9b3c0]'}`}
            >
              My Scholarships
            </button>
            <button
              onClick={handleLogout}
              className={`p-3 rounded-lg text-left ${activeTab === 'logout' ? 'bg-[#F8788E] text-white' : 'text-gray-600 hover:bg-[#f9b3c0]'}`}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        {activeTab === 'profile' && (
          <div>
            <StudentProfileUpdate />
          </div>
        )}
        {activeTab === 'scholarships' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Available Scholarships</h2>
            <div className="space-y-4">
              {scholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} {...scholarship} />
              ))}
            </div>
          </div>
        )}
        {activeTab === 'my-scholarships' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Scholarships</h2>
            <p className="text-gray-600">Your applied scholarships will appear here...</p>
          </div>
        )}
      </div>
    </div>
  );      
};

export default StudentDashboard;