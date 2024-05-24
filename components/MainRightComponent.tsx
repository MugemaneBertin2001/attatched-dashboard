import React, { useState } from 'react';
import TopComponent from './TopComponent';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

interface MainRightComponentProps {
    // Define props as needed
}

const MainRightComponent: React.FC<MainRightComponentProps> = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (text: string) => {
        setSearchText(text);
    };

    return (
        <div className="px-5 py-10">
            <TopComponent searchText={searchText} onSearchChange={handleSearchChange} />
            <Navbar></Navbar>
            <Dashboard></Dashboard>
        </div>
        
    );
};

export default MainRightComponent;
