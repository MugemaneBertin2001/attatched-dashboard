import React from 'react';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';

const MainComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:lg:w-3/5">
                <LeftComponent />
            </div>
            <div className="w-full lg:w-2/5 h-1/2">
                <RightComponent />
            </div>
        </div>
    );
};

export default MainComponent;
