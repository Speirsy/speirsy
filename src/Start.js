import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css';

const Start = () => {
    return (
        <>
        <div className={"start-nav"}>
        
            <Link to='/farinjim' className="FIJ-banner-temp"> FIJ </Link>
            <Link to='/songs5000' >Songs 5000 </Link>
            <Link to='/speirsybass' > Speirsy Bass </Link>
            
        </div>
        </>
    )
}

export default Start;
