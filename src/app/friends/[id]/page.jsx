'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { HiMiniBellSnooze } from 'react-icons/hi2';
import { MdArchive, MdDeleteForever, MdPhoneCallback } from 'react-icons/md';
import { IoIosText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';
import { IoArrowBackSharp } from 'react-icons/io5';
import { RotateLoader } from 'react-spinners';

const FriendDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const foundFriend = data.find(f => f.id === parseInt(id) || f.id === id);
        setFriend(foundFriend);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-60">
      <RotateLoader color="#244D3F" size={40}></RotateLoader>
    </div>;
  }

  if (!friend) {
    return <div className="py-20 text-center">Ahh! Friend not found...</div>;
  }

  const statusStyle = {
    "Overdue": "badge-error",
    "Almost Due": "badge-warning",
    "On-Track": "badge-success",
  };

  return (
    <div className="container w-11/12 mx-auto my-6 p-4">

      <div className='flex justify-between sm:flex-row flex-col gap-6'>
        {/* Left column */}
        <div className='flex-1'>
          <div className="card bg-base-100 border-2 border-gray-100 w-auto shadow-lg">
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
          <div className='flex flex-col gap-4 items-center justify-center'>

            <button className='btn w-full py-5 mt-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer'>
              <div className='flex flex-row gap-1 items-center text-xl font-semibold'>
                <HiMiniBellSnooze className='w-5 h-6'></HiMiniBellSnooze>
                <h2>Snooze 2 Weeks</h2>
              </div>
            </button>

            <button className='btn w-full py-5 mt-2 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer'>
              <div className='flex flex-row gap-1 items-center text-xl font-semibold'>
                <MdArchive className='w-5 h-6'></MdArchive>
                <h2>Archive</h2>
              </div>
            </button>

            <button className='btn w-full py-5 mt-2 mb-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-red-200 cursor-pointer'>
              <div className='flex flex-row gap-1 items-center text-xl font-semibold text-red-600'>
                <MdDeleteForever className='w-5 h-6'></MdDeleteForever>
                <h2>Delete</h2>
              </div>
            </button>

          </div>

        </div>

        {/* Right column */}
        <div className='flex-2'>
          {/* Top */}
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>

            <div className='card bg-base-100 w-auto shadow-lg p-4 text-center px-3 py-10'>
              <h2 className='font-bold text-2xl'>{friend.days_since_contact}</h2>
              <p className='text-lg text-gray-500'>Days Since Contact</p>
            </div>

            <div className='card bg-base-100 w-auto shadow-lg p-4 text-center px-3 py-10'>
              <h2 className='font-bold text-2xl'>{friend.goal}</h2>
              <p className='text-lg text-gray-500'>Goal (Days)</p>
            </div>

            <div className='card bg-base-100 w-auto shadow-lg p-4 text-center px-3 py-10'>
              <h2 className='font-bold text-2xl'>{friend.next_due_date}</h2>
              <p className='text-lg text-gray-500'>Next Due</p>
            </div>

          </div>
          {/* Center */}
          <div className='bg-base-100 w-auto shadow-lg p-8 mt-5 mb-6 rounded-xl'>
            <div className='flex justify-between items-center gap-4 mx-auto'>
              <h2 className='font-bold text-2xl'>Relationship Goal</h2>
              <button className='btn py-2 px-5'>Edit</button>
            </div>

            <p className='font-semibold text-xl text-gray-400 pt-2'>Connect every: <span className='font-bold text-xl text-black'>30 days</span></p>

          </div>
          {/* Bottom */}
          <div className='bg-base-100 w-auto shadow-lg p-8 mt-6 rounded-xl'>
            <h2 className='font-semibold text-2xl pb-4'>Quick Check-In</h2>

            <div className='flex flex-col sm:flex-row gap-6 items-center mt-4'>

              <button
                className='btn px-6 py-10 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer'>

                <div className='flex flex-col gap-1 items-center'>
                  <MdPhoneCallback className='text-2xl font-bold'></MdPhoneCallback>
                  <h2 className='text-lg'>Call</h2>
                </div>
              </button>

              <button
                className='btn px-6 py-10 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer'>

                <div className='flex flex-col gap-1 items-center'>
                  <IoIosText className='text-2xl font-bold'></IoIosText>
                  <h2 className='text-lg'>Text</h2>
                </div>
              </button>

              <button
                className='btn px-6 py-10 flex-1 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-md hover:border-gray-200 cursor-pointer'>

                <div className='flex flex-col gap-1 items-center'>
                  <FaVideo className='text-2xl font-bold'></FaVideo>
                  <h2 className='text-lg'>Video</h2>
                </div>
              </button>

            </div>


          </div>


        </div>

      </div>

      {/* Go To Home Button */}

      <div className='flex justify-center mt-8 mb-8'>

        <button
          onClick={() => router.back()}
          className="btn group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-medium border border-slate-200 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:shadow-lg"
        >
          <div className='flex items-center gap-1'>
            <IoArrowBackSharp className='font-semibold transition-transform duration-300 group-hover:-translate-x-1'></IoArrowBackSharp>
            <h2 className='font-semibold'>Back to Friends</h2>
          </div>
        </button>

      </div>



    </div>
  );
};

export default FriendDetail;