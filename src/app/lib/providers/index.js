"use client";

import CheckInFriendProvider from '@/context/CheckInFriendProvider';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <CheckInFriendProvider>
            {children}
        </CheckInFriendProvider>

    );
};

export default Providers;