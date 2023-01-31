import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FIJHome = () => {

    return (
        <>
        <div>
            <Link to='/'>START</Link>
        </div>
        <h1>Far In Jim </h1>
        <Link to=''>FIJ Hello</Link>
        <Link to='FIJVideos'> FIJ Watch </Link>
        <Link to='FIJAudio'> FIJ Funk </Link>
        <Outlet  />
        
        </>
    );
};

export default FIJHome;
