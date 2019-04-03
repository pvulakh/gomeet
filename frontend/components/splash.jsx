import React from 'react';
import { Redirect, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Splash = props => {
    let hidden;
    hidden = props.currentUser ? 'hidden' : '';

    return (
    <div className={`splash ${hidden}`}>
        <Route
            path="/"
            render={
                () => {
                    if (props.currentUser) {
                        return < Redirect to="/find/gomeets" />
                    }
                }
            }
        />
        <div className='splash-vid'>
            <video muted autoPlay loop><source src="https://www.meetup.com/mu_static/en-US/video.dddafbfe.mp4" /></video>
            <div className='vid-text'>
                <h1>The real world is calling</h1>
                <p>Join a local group to meet people, try something new, or do more of what you love.</p>
                <Link to="/register">
                    <button id='join-button'>Join GoMeet</button>
                </Link>
            </div>
        </div>
        <div className='splash-text'>
            {/* <h1>EVENTS CAROUSEL FROM MVP #4</h1> */}
            <div className='gomeet-how'>
                <h2>How GoMeet Works</h2>
                <div className='how-items'>
                    <div className="sub-how-item">
                        <i className="fa fa-search fa-5x" aria-hidden="true"></i>
                        <div>
                            <span>Discover groups</span>
                            <p>See who’s hosting local events for all the things you love.</p>
                            <div>
                                <Link to='/register'><p>Join GoMeet</p></Link>
                                <div className='icon-link'><Link to='/register'><i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link></div>
                            </div>
                        </div>
                    </div>

                    <div className='sub-how-item'>
                        <i className="fas fa-plus fa-5x" aria-hidden="true"></i>
                        <div>
                            <span>Start a group</span>
                            <p>Create your own GoMeet group, and draw from a community of millions.</p>
                            <div>
                                <Link to='/create'><p>Get started</p></Link>
                                <div className='icon-link'><Link to='/create'>
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}
export default withRouter(connect(msp, null)(Splash));