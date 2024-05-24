import React from 'react';
import {AdjustmentsVerticalIcon , FunnelIcon , EyeIcon, ScaleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <nav className="shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-4">
                        <NavItem Icon={EyeIcon} active={true} text="Value Comparison" />
                        <NavItem Icon={ScaleIcon} text="Oversight Values" />
                        <NavItem Icon={AdjustmentsVerticalIcon } text="Configure Analysis" />
                        <NavItem Icon={FunnelIcon } text="Filter Analysis" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ Icon, text, active }:any) => {
    return (
        <a href="#" className={` ${active ? "underline":""} flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600`}>
            <Icon className="h-6 w-6 mr-2" />
            {text}
        </a>
    );
};
export default Navbar;
