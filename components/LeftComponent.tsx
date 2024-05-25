import React from 'react';
import Insights from './Insights';
import SalesChart from './SalesChart';
import ReusableCard from './ReusableCard';
import ReportGraph from './ReportGraph';
import Orders from './Orders';

const LeftComponent = () => {
    return (
        <div className="p-4 border text-white">
            <Insights />
            <ReusableCard>
                <ReportGraph>
                </ReportGraph>
            </ReusableCard>
            <ReusableCard>
                <Orders>
                </Orders>
            </ReusableCard>
        </div>
    );
};

export default LeftComponent;
