import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

const MainComponent = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:md:w-3/5">
                <LeftComponent />
            </div>
            <div className="w-full md:w-2/5 h-1/2">
                <RightComponent />
            </div>
        </div>
    );
};

export default MainComponent;
