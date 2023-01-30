import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const SongsHome = () => {

    return (
        <>  
        <div>
            <Link to='/'>Start</Link>
        </div>
        <h1>$5000 Songs</h1>
        <Link to=''>Home Page</Link>
        <Link to='$5000_songs_2'> Page 2</Link>
        <Link to='$5000_songs_3'> Page 3</Link>
        <Outlet />
        
        </>
    )
}

export default SongsHome;
