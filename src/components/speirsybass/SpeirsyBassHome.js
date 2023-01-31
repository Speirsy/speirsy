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
        <Link to='bassblog'>Bass Blog</Link>
        <Link to='therapy'>  Bass Therapist  </Link>
        <Outlet  />
        
        </>
    );
};

export default BassHome;