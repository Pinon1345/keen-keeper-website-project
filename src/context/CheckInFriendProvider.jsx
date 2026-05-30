"use client";

import { useState } from 'react';
// import React, { createContext } from 'react';
import { CheckInFriendContext } from './CheckInFriendContext';

const CheckInFriendProvider = ({ children }) => {
    const [checkInFriends, setCheckInFriends] = useState([]);
    const data = {
        checkInFriends,
        setCheckInFriends
    }

    return (
        <CheckInFriendContext.Provider value={data}>{children}</CheckInFriendContext.Provider>
    );
};

export default CheckInFriendProvider;