'use client'
import React, { useState } from 'react';
import TopComponent from './TopComponent';
import Navbar from './Navbar';
import MainComponent from './MainComponent';

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
            <MainComponent></MainComponent>
        </div>
        
    );
};

export default MainRightComponent;
