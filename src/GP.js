
import React from 'react';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GP = ({children}) => {
    return (
        <>
        <ToastContainer position='bottom-center'/>
           {children} 
        </>
    );
};

export default GP;