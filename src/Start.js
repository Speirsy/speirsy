import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css';

const Start = () => {
    return (
        <>
        {/* <div className={"Start-nav App-logo"}> */}
        <div className={"Start-nav"}>
            <Link to='/farinjim'> Far In Jim </Link>
            <Link to='/songs5000'> Songs 5000 </Link>
            <Link to='/speirsybass'> Speirsy Bass </Link>
            
        </div>
        </>
    )
}

export default Start;
