import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tabs = [
    'MIN SIDA',
    'PROFIL',
    'ORDERHISTORIK',
    'MINA TJÄNSTER',
    'FAVORITER',
    'KUNDKLUBB'
];

function Profile() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    const [activeTab, setActiveTab] = useState('MIN SIDA');

    const handleLogout = () => {
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Hej, {userName} 👋</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logga ut
                </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 border-b border-gray-300 pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-sm px-4 py-2 rounded-t ${
                            activeTab === tab
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="mt-4">
                <h2 className="text-xl font-medium">{activeTab}</h2>
                <p className="mt-2 text-gray-600">
                    Innehåll för fliken "{activeTab}" kommer här.
                </p>
            </div>
        </div>
    );
}

export default Profile;