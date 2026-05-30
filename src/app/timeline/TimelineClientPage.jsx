"use client";

import { CheckInFriendContext } from "@/context/CheckInFriendContext";
import { useContext } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";

export default function TimelineClientPage() {

    const { checkInFriends } = useContext(CheckInFriendContext);

    // Icon Logic

    const getIcon = (type) => {
        switch (type) {
            case "Call":
                return <MdPhoneCallback className="w-8 h-8 text-green-600" />;
            case "Text":
                return <IoIosText className="w-8 h-8 text-blue-600" />;
            case "Video":
                return <FaVideo className="w-8 h-8 text-purple-600" />;
            default:
                return <FaUserFriends className="w-8 h-8 text-gray-600" />;
        }
    };

    return (
        <div className="bg-[#F8FAFC] border-t-4 border-t-gray-100 rounded-t-2xl">
            <div className="container w-11/12 mx-auto my-6 p-4">

                <h2 className="font-bold text-3xl mb-8">Timeline</h2>

                {checkInFriends.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center text-2xl h-50 mb-8 gap-2 border-8 border-gray-100 rounded-2xl shadow-xl">
                        <TbMoodSad className="h-12 w-12 text-gray-500 font-bold"></TbMoodSad>
                        <p className="text-center text-gray-500 font-bold text-2xl">
                            Upps! There is no Friend Activity in Timeline
                        </p>
                    </div>
                )}

                {
                    checkInFriends.map((friend, index) => {
                        return (
                            <div key={index}>
                                <div className="bg-[#FFFFFF] mt-4 mb-8 px-5 py-2 border-4 border-gray-100 rounded-lg shadow-lg">

                                    <div className="flex flex-row items-center gap-5 py-4">


                                        {getIcon(friend.type)}

                                        <div>

                                            <div className="flex flex-row items-center text-center gap-3">


                                                <h2 className="font-bold text-2xl capitalize">
                                                    {friend.type || "Meetup"}
                                                </h2>

                                                <p className="font-semibold text-xl text-gray-500">
                                                    with {friend.name}
                                                </p>
                                            </div>

                                            <h2 className="text-lg font-semibold text-gray-400">
                                                {friend.next_due_date}
                                            </h2>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
}