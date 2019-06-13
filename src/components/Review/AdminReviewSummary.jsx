import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DeleteReview } from '../../Store/reviewactions'
const ReviewSummary = (props) => {
   const handleChange = () => {
        props.DeleteReview(props.review.id)
    }
    
        
        return (

            <div class="col s12 m7 small">
                <h2 class="header">{props.review.title}</h2>
                <div class="card horizontal small">
                    <div class="card-image">
                        <img src={props.review.imageUrl} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-action">
                            <p>{props.review.body}
                                <br />
                                <br />
                                <a class="waves-effect waves-light btn right white-text" onClick={handleChange}>Reject Review</a>
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        )
    


}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteReview: (id) => dispatch(DeleteReview(id))
    }
}
export default connect(null, mapDispatchToProps)(ReviewSummary);