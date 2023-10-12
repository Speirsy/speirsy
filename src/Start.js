import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import SpinningStarsBackground from './StarBackground';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);

const Start = () => {
    return (
        // <div className="start-animation"> {/* Apply the animation class */}
        <>
            <div className="start-nav">
                <SpinningStarsBackground />
                <Link to='/farinjim' className="FIJ-banner-temp">Far In Jim</Link>
                <Link to='/songs5000'>Songs 5000</Link>
                <Link to='/speirsybass'>Speirsy Bass</Link>
                
            </div>
        </>
        // </div>
    );
}

export default Start;

