import { connect } from 'react-redux';
import Footer from './footer';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    return {
        pathname: ownProps.location.pathname
    };
};


export default withRouter(connect(msp, null)(Footer));