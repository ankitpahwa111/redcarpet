import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';
const Navbar = (props) => {
    const { authError,user } = props;
    console.log(user)
    let Links = {};
    if (user)
        Links = <SignedInLinks />
    else
        Links = <SignedOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-1">
            <div className="container">
                <Link to='/' className='brand-logo'>Halanx Stores</Link>
                {Links}
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        authError: state.authError,
        user : state.user
    }
}
export default connect(mapStateToProps)(Navbar);