import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './FIJ.css';


const FIJHome = () => {

    return (
        <>
        <head>
            <title>FIJ | About</title>
        </head>
        <body>
            <header>
                <nav className="nav" >
                    <ul >
                    <Link to='/' className='space'>START</Link>
                    <Link to='' className='space'>FIJ Hello</Link>
                    <Link to='FIJVideos' className='space'>FIJ Watch</Link>
                    <Link to='FIJAudio' className='space'>FIJ Funk</Link>
                    {/* <Link to='/' >START</Link>
                    <Link to='' >FIJ Hello</Link>
                    <Link to='FIJVideos' >FIJ Watch</Link>
                    <Link to='FIJAudio' >FIJ Funk</Link> */}



                    </ul>
                </nav>
            </header>
                <hr />
                <Outlet  />
         </body>
        </>
    );
};

export default FIJHome;
