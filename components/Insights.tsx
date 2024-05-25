import React from 'react';
import InsightsCard from './InsightsCard';

const Insights = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black rounded-md">
            <div className='bg-[#38bdf8] rounded-md'>
                <InsightsCard
                    title="Revenue"
                    value="$50,000"
                    description="Since last week"
                    percentage={20}
                    isIncrease={true}
                    backgroundColor="bg-[#D7E1FB]"
                />
            </div>
            <div className='bg-[#f9a8d4] rounded-md'>
                <InsightsCard
                    title="Customers"
                    value="500"
                    description="Since last week"
                    percentage={15}
                    isIncrease={true}
                    backgroundColor="bg-[#F9E0E1]"
                />
            </div>
            <div className='bg-[#38bdf8] rounded-md'>
                <InsightsCard
                    title="Products"
                    value="20"
                    description="Since last week"
                    percentage={5}
                    isIncrease={false}
                    backgroundColor="bg-[#DAEAEA]"
                />
            </div>
        </div>
    );
};

export default Insights;
