import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PrivateScholarshipCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold text-[#36AAC7] mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

// Move PropTypes outside the function
PrivateScholarshipCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const PrivateScholarshipDashboard = () => {
  const [activeTab, setActiveTab] = useState('manage-scholarships');
  const [scholarships, setScholarships] = useState([
    { id: 1, title: "STEM Excellence Scholarship", description: "Support students excelling in STEM fields." },
    { id: 2, title: "Community Leadership Award", description: "Encourage young leaders making an impact." },
    { id: 3, title: "Women in Tech Scholarship", description: "Empowering women pursuing careers in technology. This scholarship supports aspiring female engineers and developers with financial aid and mentorship opportunities." }
  ]);
  const [newScholarship, setNewScholarship] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/home");
  };

  const handleAddScholarship = (e) => {
    e.preventDefault();
    if (newScholarship.title && newScholarship.description) {
      setScholarships([...scholarships, { id: scholarships.length + 1, ...newScholarship }]);
      setNewScholarship({ title: '', description: '' });
    }
  };

  return (
    <div className="flex min-h-screen bg-[#36AAC7]/10">
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-8">Private Scholarship Portal</h2>
        <div className="flex flex-col space-y-4">
          <button onClick={() => setActiveTab('manage-scholarships')} 
            className={`p-3 rounded-lg text-left ${activeTab === 'manage-scholarships' ? 'bg-[#36AAC7] text-white' : 'text-gray-600 hover:bg-[#36AAC7]/10'}`}>
            Manage Scholarships
          </button>
          <button onClick={() => setActiveTab('add-scholarship')} 
            className={`p-3 rounded-lg text-left ${activeTab === 'add-scholarship' ? 'bg-[#36AAC7] text-white' : 'text-gray-600 hover:bg-[#36AAC7]/10'}`}>
            Add Scholarship
          </button>
          <button onClick={() => setActiveTab('update-profile')} 
            className={`p-3 rounded-lg text-left ${activeTab === 'update-profile' ? 'bg-[#36AAC7] text-white' : 'text-gray-600 hover:bg-[#36AAC7]/10'}`}>
            Update Profile
          </button>
          <button onClick={handleLogout} className="p-3 rounded-lg text-left text-gray-600 hover:bg-[#36AAC7]/10">Log Out</button>
        </div>
      </div>

      <div className="flex-1 p-8">
        {activeTab === 'manage-scholarships' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Manage Private Scholarships</h2>
            <div className="space-y-4">
              {scholarships.map((scholarship) => (
                <PrivateScholarshipCard key={scholarship.id} {...scholarship} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'add-scholarship' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Add Scholarship</h2>
            <form onSubmit={handleAddScholarship} className="space-y-4">
              <input type="text" placeholder="Scholarship Title" value={newScholarship.title} 
                onChange={(e) => setNewScholarship({ ...newScholarship, title: e.target.value })} 
                className="w-full p-3 border rounded-lg" required />
              <textarea placeholder="Scholarship Description" value={newScholarship.description} 
                onChange={(e) => setNewScholarship({ ...newScholarship, description: e.target.value })} 
                className="w-full p-3 border rounded-lg" required />
              <button type="submit" className="bg-[#36AAC7] hover:bg-[#2a8fa7] text-white px-4 py-2 rounded-lg">
                Add Scholarship
              </button>
            </form>
          </div>
        )}

        {activeTab === 'update-profile' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
            <p className="text-gray-600">Profile update functionality coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateScholarshipDashboard;
