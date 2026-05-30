"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


// "id": 1,
//         "name": "Ariana Mitchell",
//         "picture": "https://randomuser.me/api/portraits/women/21.jpg",
//         "email": "ariana.mitchell@example.com",
//         "days_since_contact": 18,
//         "status": "overdue",
//         "tags": [
//             "college",
//             "best friend"
//         ],
//         "bio": "Met during first year at university. We still plan weekend coffee hangouts and photography walks.",
//         "goal": 14,
//         "next_due_date": "2026-06-01"

const statusStyle = {
    "Overdue": "badge-error",
    "Almost Due": "badge-warning",
    "On-Track": "badge-success",
};


const FriendsCards = ({ friend }) => {
    return (
        <Link href={`/friends/${friend.id}`}>
            <div className='container mx-auto mt-2 mb-8 border-gray-100 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-gray-200 cursor-pointer'>
                <div className="card bg-base-100 w-auto shadow-lg">
                    <figure className='px-6 pt-6 pb-2'>
                        <div className='mx-auto w-40 h-40 rounded-full overflow-hidden border-2 border-white shadow-md'>
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                width={150}
                                height={150}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="text-3xl text-center font-bold">{friend.name}</h2>

                        <p className='font-semibold text-center text-gray-400'>{friend.days_since_contact} ago</p>

                        <div className='font-semibold flex flex-col gap-3 pt-2 justify-center items-center'>

                            <div className="flex gap-2 flex-wrap mt-3">
                                {
                                    friend.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="badge badge-accent p-3 rounded-2xl">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>


                            <div className={`badge text-white p-3 rounded-2xl ${statusStyle[friend.status]}`}>
                                {friend.status}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FriendsCards;