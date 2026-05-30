"use client";

import { CheckInFriendContext } from "@/context/CheckInFriendContext";
import { useContext, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdPhoneCallback } from "react-icons/md";
import { IoIosText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";

export default function TimelineClientPage() {

    const { checkInFriends } = useContext(CheckInFriendContext);

    // Filtering & search

    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filteredData = checkInFriends
        .filter((checkedInFriend) => {
            if (filter === "All") return true;
            return checkedInFriend.type === filter;
        })
        .filter((checkedInFriend) =>
            checkedInFriend.name.toLowerCase().includes(search.toLowerCase())
        );

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

                <div>
                    <div className="flex flex-col md:flex-row gap-4 mb-8">

                        {/* search */}
                        <input
                            type="text"
                            placeholder="Search by name..."
                            className="border px-4 py-2 rounded-md w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        {/* Filter buttons */}
                        <div className="flex gap-3">

                            <button onClick={() => setFilter("All")} className="px-3 py-2 bg-gray-200 rounded-lg font-semibold transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer">
                                All
                            </button>

                            <button onClick={() => setFilter("Call")} className="px-3 py-2 bg-cyan-200 rounded-lg font-semibold transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer">
                                Call
                            </button>

                            <button onClick={() => setFilter("Text")} className="px-3 py-2 bg-blue-200 rounded-lg font-semibold transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer">
                                Text
                            </button>

                            <button onClick={() => setFilter("Video")} className="px-3 py-2 bg-green-200 rounded-lg font-semibold transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer">
                                Video
                            </button>

                        </div>

                    </div>
                </div>

                {/* Empty div */}
                {filteredData.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center text-2xl h-50 mb-8 gap-2 border-8 border-gray-100 rounded-2xl shadow-xl">
                        <TbMoodSad className="h-12 w-12 text-gray-500 font-bold" />
                        <p className="text-center text-gray-500 font-bold text-2xl">
                            Upps! No matching activity found in Timeline
                        </p>
                    </div>
                )}

                {/* Timeline filtering */}
                {filteredData.map((friend, index) => {
                    return (
                        <div key={index}>
                            <div className="bg-[#FFFFFF] mt-4 mb-8 px-5 py-2 border-4 border-gray-100 rounded-lg shadow-lg">

                                <div className="flex flex-row items-center gap-5 py-4">


                                    {getIcon(friend.type)}

                                    <div>

                                        <div className="flex flex-row items-center text-center gap-3">

                                            <h2 className="font-bold text-2xl capitalize">
                                                {friend.type}
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
                    );
                })}

            </div>
        </div>
    );
}