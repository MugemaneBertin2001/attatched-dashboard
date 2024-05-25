import React from 'react';
import InsightsIcon from '@mui/icons-material/Insights';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const InsightsCard = ({ title, value, description, percentage, isIncrease }: any) => {
    return (
        <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <div className="text-center mb-2 flex flex-col items-center md:flex-row md:items-center md:justify-center">
                <p className="text-4xl font-bold mb-2 md:mb-0 md:mr-4">{value}</p>
                <InsightsIcon className="text-center md:text-left" />
            </div>
            <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-600">{description}</p>
                <p className={`flex rounded-md p-2 items-center bg-white ${isIncrease ? 'text-green-800' : 'text-red-800'}`}>
                    {percentage}%
                    {isIncrease ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </p>
            </div>
        </div>
    );
};

export default InsightsCard;
