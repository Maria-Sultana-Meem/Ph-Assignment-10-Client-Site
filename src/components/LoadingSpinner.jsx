import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div  className="flex justify-center items-center h-screen">
            <HashLoader color="#06b6d4"  height={20} ></HashLoader>

        </div>
    );
};

export default LoadingSpinner;
// loading={true}