import React from 'react';

const ChartContainer = ({ children }:any) => {
    return (
        <div className="bg-white rounded-lg shadow-md">
            {children}
        </div>
    );
};

export default ChartContainer;
