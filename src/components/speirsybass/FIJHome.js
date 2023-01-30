import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const BassHome = () => {

    return (
        <>
        <div>
            <Link to='/'>START</Link>
        </div>
        <h1>Speirsy Bass</h1>
        <Link to=''>Bass Home</Link>
        <Link to='BassBlog'>Bass Blog</Link>
        <Link to='BassTherapy'>Bass Therapy</Link>
        <Outlet  />
        
        </>
    );
};

export default BassHome;
