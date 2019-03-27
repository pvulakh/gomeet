import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div>
        <video muted autoPlay loop><source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" /></video>
        <h1>The real world is calling</h1>
        <p>Join a local group to meet people, try something new, or do more of what you love.</p>
        <Link to="/register">
            <button>Join GoMeet</button>
        </Link>
        <h1>EVENTS CAROUSEL GOES HERE</h1>
        <div>
            <h2>How GoMeet Works</h2>
            <i className="fa fa-search" aria-hidden="true"></i>
            <h3>Discover groups</h3>
            <p>See who’s hosting local events for all the things you love.</p>
            <Link to='/register'>
                <p>Join GoMeet</p>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>

            <h3>Start a group</h3>
            <p>Create your own Meetup group, and draw from a community of millions.</p>
            <Link to='/create'>
                <p>Get started</p>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </Link>
        </div>
    </div>
);

export default Splash;