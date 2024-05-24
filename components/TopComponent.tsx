import React from 'react';
import { MagnifyingGlassIcon, BellIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';

interface TopComponentProps {
    searchText: string;
    onSearchChange: (text: string) => void;
}

const TopComponent: React.FC<TopComponentProps> = ({ searchText, onSearchChange }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 w-[100%]">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Viewer Demographics</h1>
            <div className="flex items-center">
                <div className="relative mr-4">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <MagnifyingGlassIcon className="absolute top-1/2 left-4 transform -translate-y-1/2 w-5 h-5 text-gray-400 ml-0" />
                </div>
                <div className="flex items-center mr-auto">
                    <BellIcon className="w-6 h-6 text-gray-600 mr-3 " />
                    <Cog8ToothIcon className="w-11 h-11 text-white  text-bold rounded-md outline md:mr-3 bg-[#4a2b7a]" />
                </div>
            </div>
        </div>
    );
};

export default TopComponent;
