import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FIJHome = () => {

    return (
        <>
        <head>
            <title>FIJ | About</title>
        </head>
        <body className={"main-image"}>
            {/* <header> 
            </header> */}
                <nav className={"nav hover"}>
                    <Link to='/'>START</Link>
                    <Link to=''>FIJ Hello</Link>
                    <Link to='FIJVideos'> FIJ Watch </Link>
                    <Link to='FIJAudio'> FIJ Funk </Link>
                    
                </nav>
                <Outlet  />
         </body>
        </>
    );
};

export default FIJHome;
