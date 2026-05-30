"use client";

import { CheckInFriendContext } from "@/context/CheckInFriendContext";
import React, { useContext } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function StatsClientPage() {

    const { checkInFriends } = useContext(CheckInFriendContext);

    // count tech type

    const callCount = checkInFriends.filter(
        (checkedInFriend) => checkedInFriend.type === "Call"
    ).length;

    const textCount = checkInFriends.filter(
        (checkedInFriend) => checkedInFriend.type === "Text"
    ).length;

    const videoCount = checkInFriends.filter(
        (checkedInFriend) => checkedInFriend.type === "Video"
    ).length;

    const data = [
        { name: "Call", value: callCount, fill: "black" },
        { name: "Text", value: textCount, fill: "blue" },
        { name: "Video", value: videoCount, fill: "green" },
    ];

    return (
        <div className="bg-[#F8FAFC] border-t-4 border-t-gray-100 rounded-t-2xl">
            <div className="container w-11/12 mx-auto my-6 p-4">

                <h2 className="text-3xl font-bold mb-6">
                    Friendship Analytics
                </h2>

                <div className="bg-base-100 shadow-sm mx-auto p-4 rounded-xl border-4 border-gray-200">

                    <p className="text-lg text-gray-500 font-semibold mb-2">
                        By Interaction Type
                    </p>

                    <div className="w-full h-100">

                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={80}
                                    outerRadius={140}
                                    cornerRadius={10}
                                    paddingAngle={5}
                                    isAnimationActive={true}
                                />
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                    </div>

                </div>
            </div>
        </div>
    );
}