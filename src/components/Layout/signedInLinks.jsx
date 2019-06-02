import React from 'react';
import {NavLink } from 'react-router-dom';
import {signout} from '../../Store/authactions';
import {connect} from 'react-redux'
const SignedInLinks = (props)=>{
    //console.log('here')
    
    return(
        <div>
            <ul className='right'>
            
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/'>About Us</NavLink></li>
            <li><NavLink to='/'>Contact</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-3'>AP</NavLink></li>
            
            </ul>
        </div>
        
    )
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signOut : ()=> dispatch(signout())
    }
}

export default connect(null , mapDispatchToProps)(SignedInLinks)