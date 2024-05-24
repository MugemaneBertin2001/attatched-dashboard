'use client'
import React from 'react';
import { CompanyHeading } from './CompanyHeading';
import UserInfo from './UserInfo';

const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col w-full md:w-[300px] min-w-[300] text-white border-r py-3 min-h-screen bg-[#4a2b7a] ">
                <CompanyHeading />
                <UserInfo 
                fullName="John Doe"
                email="john.doe@example.com"
                onProfileClick={() => console.log("Navigate to full profile")}
            />
        </div>
    );
};

export default Sidebar;
