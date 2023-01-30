import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <>
        <div className='start-nav'>
            <Link to='/farinjim'> Far In Jim </Link>;
            <Link to='/songs5000'> Songs 5000 </Link>
            <Link to='/speirsybass'> Bass </Link>


            
        </div>
        </>
    )
}

export default Start;
