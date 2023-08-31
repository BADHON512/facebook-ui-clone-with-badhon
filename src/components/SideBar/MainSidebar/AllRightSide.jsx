import React from 'react';
import { AiFillTag } from 'react-icons/ai';

const AllRightSide = () => {
    return (
        <div className='h-[92vh] w-full bg-[#18191A] text-white overflow-y-scroll'>
         <div className='p-5'>

            <div className='flex justify-between'>
                <h1 className='text-sm'>Your Pages and profiles</h1>
                <AiFillTag size={20}/>
            </div>

             <div></div>
         </div>
        </div>
    );
};

export default AllRightSide;