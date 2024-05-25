import React from 'react';
import ReusableCard from './ReusableCard';
import { HeadingRow } from './HeadingRow';
import ChartContainer from './ChartContainer';
import OrderListChart from './OrderListChart';
import MontlySalesChart from './MontlySalesChart';
import TotalOrder from './TotalOrder';

const RightComponent = () => {
    return (
        <div className="p-4  text-black h-auto">
            <ReusableCard>
                <HeadingRow title="Orders List" />
                <ChartContainer> 
                <OrderListChart />
                    
                </ChartContainer>
            </ReusableCard>
            <ReusableCard>
                <HeadingRow title="Monthly Sales" />
                <ChartContainer> 
                <MontlySalesChart />
                </ChartContainer>
            </ReusableCard>
            <ReusableCard>
                <ChartContainer>
                <TotalOrder />
                </ChartContainer>
            </ReusableCard>
            
        </div>
    );
};

export default RightComponent;
