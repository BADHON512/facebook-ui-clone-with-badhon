import Image from 'next/image';
import React from 'react';
import { CgProfile } from 'react-icons/cg'
import { SiGooglenews ,SiCoinmarketcap } from 'react-icons/si'

import { HiSpeakerphone } from 'react-icons/hi'
import { VscGraph } from 'react-icons/vsc'
import {FaUserFriends,FaGamepad,FaHeart  } from 'react-icons/fa'
import { MdEmojiEvents, MdGroups, MdVideoLibrary,MdCrisisAlert, MdBloodtype } from 'react-icons/md'
import { RiSecurePaymentFill,RiMessengerFill,RiMemoriesFill } from 'react-icons/ri'
import { BsFillFlagFill } from 'react-icons/bs'
import { TbActivity } from 'react-icons/tb'
import { IoIosSave,IoLogoGameControllerB } from 'react-icons/io'
import { BsFillTreeFill, } from 'react-icons/bs'

const AllLeftSidebar = () => {
    return (
        <div className='h-[92vh] w-full bg-[#18191A] overflow-y-scroll text-white'>
            <div className='p-5 '>
              <div className='flex flex-col gap-y-5'>
              <div className='flex gap-1 items-center'>
                 <Image src='/img/facebook-logo.png' height={10000} width={10000} alt='img' className='h-[40px] w-[50px] rounded-full'/>
                 <h2>Muhammad badhon</h2>
               </div>


               <div className='flex pl-2 gap-x-3 items-center'>
                 
                 < FaUserFriends size={35} color='#318FF6'  />
                 <h2>Friends</h2>
               </div>
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < SiGooglenews size={35} color='#5CD7C7'/>
                 <h2>Feeds</h2>
               </div>

               <div className='flex gap-x-3 pl-2 items-center'>
                 < MdGroups size={35} color='#40B8E1'/>
                 <h2>Groups</h2>
               </div>

               <div className='flex gap-x-3 pl-2 items-center'>
                 < SiCoinmarketcap size={35} color='#338EEE'/>
                 <h2>Marketplace</h2>
               </div>

               <div className='flex g-xa3 pl-2-1 items-center'>
                 < TbActivity size={35} color='#338EEE'/>
                 <h2>Video</h2>
               </div>

               <div className='flex gap-x-3 pl-2 items-center'>
                 < MdVideoLibrary size={35} color=''/>
                 <h2>Marketplace</h2>
               </div>
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < HiSpeakerphone size={35} color='#338EEE'/>
                 <h2>Ad center</h2>
               </div>


               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < VscGraph size={35} color=''/>
                 <h2>Ads Manager</h2>
               </div>
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < MdBloodtype size={35} color='#F45F78'/>
                 <h2>Blood Donations</h2>
               </div>
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < BsFillTreeFill size={35} color='#4BCE6C'/>
                 <h2>Climate Science Center</h2>
               </div>
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < MdCrisisAlert size={35} color='#6EC0FB'/>
                 <h2>Crisis Response</h2>
               </div> 

               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < MdEmojiEvents size={35} color='#EE4F6B'/>
                 <h2>Events</h2>
               </div> 

              <div className='flex gap-x-3 pl-2 items-center'>
                 < FaHeart size={35} color='#F7C547'/>
                 <h2>Fundraisers</h2>
               </div>
                 
               <div className='flex gap-x-3 pl-2 items-center'>
                 < IoLogoGameControllerB size={35} color='#3183DD'/>
                 <h2>Gaming Video</h2>
               </div>  

               <div className='flex gap-x-3 pl-2 items-center'>
                 < RiMemoriesFill size={35} color='white'/>
                 <h2>Memories</h2>
               </div> 
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < RiMessengerFill size={35} color='#DE58B9'/>
                 <h2>Messenger</h2>
               </div> 
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < RiMessengerFill size={35} color='#A6DD80'/>
                 <h2>Messenger Kids</h2>
               </div> 
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < RiSecurePaymentFill size={35} color='#1C3050'/>
                 <h2>Orders and payments</h2>
               </div>
               
                <div className='flex gap-x-3 pl-2 items-center'>
                 < BsFillFlagFill size={35} color='#ED6A40'/>
                 <h2>Pages</h2>
               </div> 
               
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < FaGamepad size={35} color='#3085F3'/>
                 <h2>Play Games</h2>
               </div> 
               
               <div className='flex gap-x-3 pl-2 items-center'>
                 < TbActivity size={35} color='#3085F3'/>
                 <h2>Recent ad activity</h2>
               </div>

               <div className='flex gap-x-3 pl-2 items-center'>
                 < IoIosSave size={35} color='#B85FD9'/>
                 <h2>Saved</h2>
               </div>
         
              </div>
            </div>
        
         </div>
     
    );
};

export default AllLeftSidebar;