import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Login from './Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className=''>
            <header className='my-4'>
            <Navbar></Navbar>
            </header>
           
           <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;