import React from 'react';
import {NavLink } from 'react-router-dom';
import {signout} from '../../Store/authactions';
import {connect} from 'react-redux'
const SignedInLinks = (props)=>{
    //console.log('here')
    let link = null;
    if(props.usertype==='reviewer')
    link=<NavLink to='/create'>Create Review</NavLink>
    return(
        <div>
            <ul className='right'>
            <li>{link}</li>            
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
const mapStateToProps=(state)=>{
    return {
        usertype : state.usertype
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(SignedInLinks)