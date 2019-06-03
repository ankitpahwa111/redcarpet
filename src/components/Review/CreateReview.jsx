import React, { Component } from 'react'
import { connect } from 'react-redux';
import {AddReview} from '../../Store/reviewactions';
import {Redirect} from 'react-router-dom'
class CreateReview extends Component {
    state = {
        title: '',
        body: '',
        imageUrl: ''
    };
    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.AddReview(this.state)
        this.props.history.push('/');
    }
    render() {
        const auth = this.props.auth;
        if(!auth.uid) return <Redirect to="/login"></Redirect>
        return (
            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="dark-grey text-darken-3">Create New Review</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleOnChange} />
                        <label htmlFor="title">Review Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id='body' onChange={this.handleOnChange} />
                        <label htmlFor="body">Body</label>
                    </div>
                    <div className="input-field">
                        <textarea id="imageUrl" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="imageUrl">Image Url</label>
                        
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        AddReview: (Review) => dispatch(AddReview(Review))
    }
    
}

export default connect(null, mapDispatchToProps)(CreateReview)
