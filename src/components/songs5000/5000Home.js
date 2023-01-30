import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const SongsHome = () => {

    return (
        <>
        <h1>$5000 Songs</h1>
        <Link to=''>Front Page</Link>;
        <Link to='$5000_songs_2'>$5000 Songs Page 2</Link>;
        <Link to='$5000_songs_3'>$5000 Songs Page 3</Link>;
        <Outlet />

        <div>
            <Link to='/'>Start</Link>
        </div>

        
        </>
    )
}

export default SongsHome;
