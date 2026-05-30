import React from 'react';
import { MoonLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-60">
                <MoonLoader color="#244D3F" size={60} ></MoonLoader>
            </div>

        </div>
    );
};

export default LoadingPage;