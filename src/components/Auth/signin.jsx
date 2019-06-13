import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../Store/authactions';
import { Redirect } from 'react-router-dom'
const Signin = (props) => {
    // state = {
    //     username: '',
    //     password: ''
    // };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleOnChange = (e) => {
        // this.setState({
        //     [e.target.id]: e.target.value
        // })
        if(e.target.id=='password')
        setPassword(e.target.value)
        else
        setUsername(e.target.value)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault();

        // await props.signIn(this.state)
        const obj = {
            username : username.toString(),
            password : password.toString()
        }
        await props.signIn(obj)
        if (props.user)
            props.history.push('/')
    }
    
        const { authError, usertype } = props;



        return (
            <div className="container">
                <br />
                <br />
                <form onSubmit={handleOnSubmit} className="Myform">
                    <h5 className="dark-grey text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username" >Username</label>
                        <input type="text" id="username" onChange= {handleOnChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange= {handleOnChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Login</button>
                    </div>
                    <div className="center red-text">{authError}</div>
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        )
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.authError,
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
