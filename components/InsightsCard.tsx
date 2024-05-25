import React from 'react';
import InsightsIcon from '@mui/icons-material/Insights';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const InsightsCard = ({ title, value, description, percentage, isIncrease }: any) => {
    return (
        <div className="p-4 rounded-lg shadow-lg min-w-[200]">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-center lg:text-left">{title}</h3>
            <div className="text-center mb-2 flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
                <p className="lg:text-xl text-lg font-bold mb-2 lg:mb-0 lg:mr-2">{value}</p>
                <InsightsIcon className="text-center lg:text-left" />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-2 lg:space-y-0 lg:space-x-2">
                <p className="text-gray-600 text-sm lg:text-base text-center lg:text-left">{description}</p>
                <p className={`flex rounded-lg p-2 items-center ${isIncrease ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {percentage}%
                    {isIncrease ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </p>
            </div>
        </div>
    );
};

export default InsightsCard;
