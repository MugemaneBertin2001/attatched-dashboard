import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

interface SidebarItemProps {
    Icon: React.ElementType;
    text: string;
    children?: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, text, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <button
                className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-200 rounded-lg transition-colors duration-200"
                onClick={toggleAccordion}
            >
                <div className="flex items-center">
                    <Icon className="h-6 w-6 mr-2" />
                    <span className="flex-grow">{text}</span>
                </div>
                {children && (isOpen ? <FaChevronDown className="h-5 w-5" /> : <FaChevronRight className="h-5 w-5" />)}
            </button>
            {isOpen && children && (
                <div className="pl-8 pr-4 py-2 rounded-lg">
                    {children}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
