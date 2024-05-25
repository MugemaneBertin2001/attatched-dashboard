import React, { useState } from 'react';
import FavoriteAnalytics from './FavoriteAnalytics';
import NewAnalytics from './NewAnalytics';
import AllAnalytics from './AllAnalytics';


const Analytics: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');

    const renderContent = () => {
        switch (activeTab) {
            case 'favorites':
                return <FavoriteAnalytics />;
            case 'new':
                return <NewAnalytics />;
            case 'all':
            default:
                return <AllAnalytics />;
        }
    };

    return (
        <div>
            <div className="flex space-x-4 mb-4">
                <button
                    className={`px-4 py-2 rounded ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('all')}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 rounded ${activeTab === 'favorites' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('favorites')}
                >
                    Favorites
                </button>
                <button
                    className={`px-4 py-2 rounded ${activeTab === 'new' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('new')}
                >
                    New
                </button>
            </div>
            {renderContent()}
        </div>
    );
};

export default Analytics;
