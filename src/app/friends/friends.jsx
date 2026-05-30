"use client"

import React, { use, useEffect, useState } from 'react';
import FriendsCards from '../../components/ui/FriendsCards';
import { ClockLoader, DotLoader, HashLoader } from 'react-spinners';


// const friendsPromise = fetch("/data.json")
// .then((response) => response.json())

const Friends = () => {

    // const friends = use(friendsPromise)
    // console.log(friends, "Friends");

    const [friends, setFriends] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data.json")
            const data = await response.json()
            console.log("Data are:", data);

            setTimeout(() => {

                setFriends(data);
                setLoading(false);
            }, 3000);

        }
        fetchData();
    }, [])

    console.log("Friends:", friends);
    console.log("Loading", loading);

    return (
        <div className='bg-[#F8FAFC] py-8 px-4'>
            <div className='container mx-auto w-11/12'>
                <h2 className='text-2xl font-bold'>Your Friends</h2>
                {/* Total Friends: {friends.length} */}

                {loading ?
                    (<div className="flex justify-center items-center h-60">
                        <ClockLoader color="#244D3F" size={60} />
                    </div>)
                    :
                    (<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
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
                    </div>)
                }

            </div>

        </div>
    );
};

export default Friends;