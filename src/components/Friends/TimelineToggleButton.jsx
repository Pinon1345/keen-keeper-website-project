"use client";

import { CheckInFriendContext } from '@/context/CheckInFriendContext';
import React, { useContext } from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';
import { MdPhoneCallback } from 'react-icons/md';
import { toast } from 'react-toastify';

const TimelineToggleButton = ({ friend }) => {

    const { checkInFriends, setCheckInFriends } = useContext(CheckInFriendContext)
    console.log(checkInFriends, "Something");

    const handleToggleButton = (type) => {
        const newEvent = {
            name: friend.name,
            next_due_date: friend.next_due_date,
            type: type
        }
        console.log("Call/Text/VideoCall Someone");
        setCheckInFriends([...checkInFriends, newEvent]);
        toast.success(`${type} with ${friend.name} is successfully added in Timeline!`)
    }

    // const isCheckedIn = checkInFriends.find(checkedInFriend => checkedInFriend.id === friend.id)
    // console.log({ isCheckedIn, friend }, "isCheckedIn")

    const isCheckedIn = checkInFriends.some(
        (checkedInFriend) => checkedInFriend.name === friend.name
    );

    const isCallDone = checkInFriends.some(
        (checkedInFriend) => checkedInFriend.name === friend.name && checkedInFriend.type === "Call"
    );

    const isTextDone = checkInFriends.some(
        (checkedInFriend) => checkedInFriend.name === friend.name && checkedInFriend.type === "Text"
    );

    const isVideoDone = checkInFriends.some(
        (checkedInFriend) => checkedInFriend.name === friend.name && checkedInFriend.type === "Video"
    );

    return (
        <div className='flex flex-col sm:flex-row gap-6 items-center mt-4'>

            <button
                disabled={isCallDone}
                onClick={() => handleToggleButton("Call")}
                className={`btn ${isCheckedIn ? "opacity-80" : "opacity-100"} px-6 py-10 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer`}>

                <div className='flex flex-col gap-1 items-center'>
                    <MdPhoneCallback className='text-2xl font-bold'></MdPhoneCallback>
                    <h2 className='text-lg'>Call</h2>
                </div>
            </button>

            <button
                disabled={isTextDone}
                onClick={() => handleToggleButton("Text")}
                className={`btn ${isTextDone ? "opacity-80" : "opacity-100"} px-6 py-10 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer`}>

                <div className='flex flex-col gap-1 items-center'>
                    <IoIosText className='text-2xl font-bold'></IoIosText>
                    <h2 className='text-lg'>Text</h2>
                </div>
            </button>

            <button
                disabled={isVideoDone}
                onClick={() => handleToggleButton("Video")}
                className={`btn ${isVideoDone ? "opacity-80" : "opacity-100"} px-6 py-10 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer`}>

                <div className='flex flex-col gap-1 items-center'>
                    <FaVideo className='text-2xl font-bold'></FaVideo>
                    <h2 className='text-lg'>Video</h2>
                </div>
            </button>

        </div>
    );
};

export default TimelineToggleButton;