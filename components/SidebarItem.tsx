import React from 'react';

interface SidebarItemProps {
    Icon: React.ElementType;
    text: string;
    button?: React.ReactNode;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, text, button }) => {
    return (
        <div className="flex items-center p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200">
            <Icon className="h-6 w-6 mr-2" />
            <span className="flex-grow">{text}</span>
            {button && <div className="ml-2">{button}</div>}
        </div>
    );
};

export default SidebarItem;
