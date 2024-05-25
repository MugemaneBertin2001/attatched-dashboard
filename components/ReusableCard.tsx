import React, { ReactNode } from 'react';

interface ReusableCardProps {
    children: ReactNode;
}

const ReusableCard: React.FC<ReusableCardProps> = ({ children }) => {
    return (
        <div className="p-4 rounded-lg shadow-md  flex flex-col justify-between h-full">
            {children}
        </div>
    );
};

export default ReusableCard;
