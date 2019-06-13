import React, { Component ,useState } from 'react'
import { connect } from 'react-redux';
import {AddReview} from '../../Store/reviewactions';
import {Redirect} from 'react-router-dom'
const CreateReview = (props) => {
    // state = {
    //     title: '',
    //     body: '',
    //     imageUrl: ''
    // };
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleOnChange = (e) => {
        // this.setState({
        //     [e.target.id]: e.target.value
        // })
        if(e.target.id=='title')
        setTitle(e.target.value)
        else if(e.target.id=='body')
        setBody(e.target.value)
        else
        setImageUrl(e.target.value)
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title : title.toString(),
            body : body.toString(),
            imageUrl : imageUrl.toString()
        }
        props.AddReview(obj)
        props.history.push('/');
    }
   
        const user = props.user;
        if(!user) return <Redirect to="/signin"></Redirect>
        return (
            <div className="container">
                <br/><br/>
                <form onSubmit={handleOnSubmit} className="white Myform">
                    <h5 className="dark-grey text-darken-3">Create New Review</h5>
                    <br/>
                    <div className="input-field">
                        <input type="text" id='title' onChange={handleOnChange} />
                        <label htmlFor="title">Review Title</label>
                    </div>
                    <div className="input-field">
                        <input type="text" id='body' onChange={handleOnChange} />
                        <label htmlFor="body">Body</label>
                    </div>
                    <div className="input-field">
                        <textarea id="imageUrl" className="materialize-textarea" onChange={handleOnChange}></textarea>
                        <label htmlFor="imageUrl">Image Url</label>
                        
                    </div>
                    <div className="input-field">
                        <button className="btn z-depth-0 pink darken-1">Create</button>
                    </div>
                </form>
            </div>
        )
    
}
const mapDispatchToProps = (dispatch) => {
    return{
        AddReview: (Review) => dispatch(AddReview(Review))
    }
    
}
const mapStateToProps = (state) =>{
    return {
        user : state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReview)
