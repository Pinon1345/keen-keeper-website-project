"use client"

import React, { use, useEffect, useState } from 'react';
import FriendsCards from '../ui/FriendsCards';

// const friendsPromise = fetch("/data.json")
// .then((response) => response.json())

const Friends = () => {

    // const friends = use(friendsPromise)
    // console.log(friends, "Friends");

    const [friends, setFriends] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json")
            const data = await response.json()
            console.log("Data are:", data);
            setFriends(data);
        }
        fetchData();
    }, [])

    console.log("Friends:", friends);

    return (
        <div className='bg-[#F8FAFC] py-8 px-4'>
            <div className='container mx-auto w-11/12'>
                <h2 className='text-2xl font-bold'>Your Friends</h2>
                {/* Total Friends: {friends.length} */}

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
                {
                    friends.map((friend, index) => {
                        return (
                            <FriendsCards
                                friend={friend}
                                key={index}
                            />
                        )


                    })
                }
                </div>

            </div>

        </div>
    );
};

export default Friends;