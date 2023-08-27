'use client'
import React, { useEffect } from 'react';
import {toast } from 'react-toastify';
import Homes from './../components/Home/Homes';


const Home = () => {
  useEffect(()=>{
    toast.success("is work")
  },[])
  return (
    <div>
     <Homes/>

    </div>
  );
};

export default Home;