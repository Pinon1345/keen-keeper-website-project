import Image from 'next/image';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineQueryStats } from 'react-icons/md';
import { RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <div>
            <div className='bg-base-100 shadow-lg shadow-gray-200 flex justify-between items-center gap-6 px-8 py-3 mb-4'>
                <div>
                    <Image
                        src="/logo.png"
                        alt='navbarLogo'
                        width={180}
                        height={180}
                    >
                    </Image>

                </div>

                <div className='flex sm:flex-row flex-col items-center gap-4 text-gray-500'>
                    <button className='btn primary-btn'>
                        <div className='flex items-center gap-2 text-lg'>
                            <AiOutlineHome></AiOutlineHome>
                            <h2 className='font-semibold'>Home</h2>
                        </div>
                    </button>

                    <button className='cursor-pointer'>
                        <div className='flex items-center gap-2 text-lg'>
                            <RiTimeLine></RiTimeLine>
                            <h2 className='font-semibold'>Timeline</h2>
                        </div>
                    </button>

                    <button className='cursor-pointer'>
                        <div className='flex items-center gap-2 text-lg'>
                            <MdOutlineQueryStats></MdOutlineQueryStats>
                            <h2 className='font-semibold'>Stats</h2>
                        </div>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Navbar;