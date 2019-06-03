import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signIn} from '../../Store/authactions';
import {Redirect} from 'react-router-dom'
class Signin extends Component {
    state = {
        username: '',
        password: ''
    };
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = async (e) => {
        e.preventDefault();
        
        await this.props.signIn(this.state)
        
        if(this.props.user)
        this.props.history.push('/')
    }
    render() {
        const {authError , usertype} = this.props;
        
        
        
        return (
            <div className="container">
                <br/>
                <br/>
                <form onSubmit={this.handleOnSubmit} className="Myform">
                    <h5 className="dark-grey text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="username" >Username</label>
                        <input type="text" id="username" onChange={this.handleOnChange}  />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password" >Password</label>
                        <input type="password" id="password" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Login</button>
                    </div>
                    <div className="center red-text">{authError}</div>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signIn : (credentials) => dispatch(signIn(credentials))
    }
}
const mapStateToProps=(state)=>{
    return {
        authError : state.authError,
        user : state.user,
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Signin)
