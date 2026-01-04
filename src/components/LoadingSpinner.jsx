import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div  className="flex justify-center items-center h-screen">
            <HashLoader color="orange"  height={20} ></HashLoader>

        </div>
    );
};

export default LoadingSpinner;
// loading={true}