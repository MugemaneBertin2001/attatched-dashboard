"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CompanyHeading } from './CompanyHeading';
import UserInfo from './UserInfo';

const Sidebar: React.FC = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            {/* Toggler button for the sidebar */}
            <button
                className="md:hidden text-white p-5 bg-[#2E2559] fixed top-0 left-0 z-50"
                onClick={toggleSidebar}
            >
                {isSidebarVisible ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Sidebar content, visible based on the screen size and state */}
            <div className={`flex-col w-full md:w-[300px] min-w-[300px] text-white border-r py-3 min-h-screen bg-[#2E2559] fixed top-0 left-0  ${isSidebarVisible ? 'flex' : 'hidden'} md:flex`}>
                <CompanyHeading />
                <UserInfo 
                    fullName="John Doe"
                    email="john.doe@example.com"
                    onProfileClick={() => console.log("Navigate to full profile")}
                />
            </div>
        </>
    );
};

export default Sidebar;
