import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className=' bg-[#F8FAFC] rounded-t-2xl'>
            <div className='container mx-auto text-center space-y-3 pt-12'>
                <h2 className='font-bold text-5xl text-center'>Friends to keep close in your life</h2>
                <p className='text-lg text-center text-gray-400 pt-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>

                <button className='btn primary-btn my-5'>
                    <div className='flex flex-row gap-2 items-center'>
                        <IoMdAdd></IoMdAdd>
                        <p>Add a Friend</p>
                    </div>
                </button>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center mt-6 border-b pb-10 border-gray-200'>

                    <div className='flex flex-col items-center gap-2 bg-base-100 rounded-2xl shadow-xl h-40 justify-center w-11/12 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200 cursor-pointer'>
                        <h2 className='font-bold text-3xl'>12</h2>
                        <p className='font-semibold text-lg text-gray-400'>Total Friends</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 bg-base-100 rounded-2xl shadow-xl h-40 justify-center w-11/12 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200 cursor-pointer'>
                        <h2 className='font-bold text-3xl'>3</h2>
                        <p className='font-semibold text-lg text-gray-400'>On Track</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 bg-base-100 rounded-2xl shadow-xl h-40 justify-center w-11/12 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200 cursor-pointer'>
                        <h2 className='font-bold text-3xl'>6</h2>
                        <p className='font-semibold text-lg text-gray-400'>Need Attention</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 bg-base-100 rounded-2xl shadow-xl h-40 justify-center w-11/12 border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200 cursor-pointer'>
                        <h2 className='font-bold text-3xl'>12</h2>
                        <p className='font-semibold text-lg text-gray-400'>Interactions This Month</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;