import React from 'react';
import { DashCard } from './DashCard';

function Dashboard() {
    const handleView = () => {
        console.log("View details");
    };

    return (
        <div className="p-8">
            <DashCard
                title="Monthly Revenue"
                amount="$25,000"
                description="Revenue for the month of April"
                onView={handleView}
            />
            <DashCard
                title="Annual Revenue"
                amount="$300,000"
                description="Revenue for the year 2024"
                onView={handleView}
            />
            <DashCard
                title="Quarterly Revenue"
                amount="$75,000"
                description="Revenue for the last quarter"
                onView={handleView}
            />
            <DashCard
                title="Weekly Revenue"
                amount="$6,250"
                description="Revenue for the last week"
                onView={handleView}
            />
        </div>
    );
}

export default Dashboard;
