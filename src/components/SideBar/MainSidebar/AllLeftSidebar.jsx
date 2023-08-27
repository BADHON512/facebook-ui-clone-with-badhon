import Image from 'next/image';
import React from 'react';
import { CgProfile } from 'react-icons/cg'

const AllLeftSidebar = () => {
    return (
        <div className='h-[92vh] w-full bg-[#18191A] overflow-y-scroll text-white'>
            <div className='p-5 '>
              <div className='flex flex-col gap-y-3'>
              <div className='flex gap-1 items-center'>
                 <Image src='/img/facebook-logo.png' height={10000} width={10000} alt='img' className='h-[40px] w-[50px] rounded-full'/>
                 <h2>Muhammad badhon</h2>
               </div>


               <div className='flex gap-1 items-center'>
                 < CgProfile size={40}className='h-[40px] w-[50px]'/>
                 <h2>Friends</h2>
               </div>
               
               <div className='flex gap-1 items-center'>
                 < CgProfile size={40}className='h-[40px] w-[50px]'/>
                 <h2>Feeds</h2>
               </div>

               <div className='flex gap-1 items-center'>
                 < CgProfile size={40}className='h-[40px] w-[50px]'/>
                 <h2>Groups</h2>
               </div>

               <div className='flex gap-1 items-center'>
                 < CgProfile size={40}className='h-[40px] w-[50px]'/>
                 <h2>Marketplace</h2>
               </div>

               <div className='flex gap-1 items-center'>
                 < CgProfile size={40}className='h-[40px] w-[50px]'/>
                 <h2>Video</h2>
               </div>
               <div className='flex gap-1 items-center'>
                <div className='h-[40px] w-[50px] bg-[#686666a1] flex justify-center items-center ronunded-full'>
                   < CgProfile size={25}/> 
                </div>
                 
                 <h2>See more</h2>
               </div>
              </div>
            </div>
        
         </div>
     
    );
};

export default AllLeftSidebar;