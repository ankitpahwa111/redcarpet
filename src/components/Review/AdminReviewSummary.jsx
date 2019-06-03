import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DeleteReview } from '../../Store/reviewactions'
class ReviewSummary extends Component {
    constructor(props) {
        super(props);




    }
    handleChange = () => {
        this.props.DeleteReview(this.props.review.id)
    }
    render() {
        
        return (

            <div class="col s12 m7 small">
                <h2 class="header">{this.props.review.title}</h2>
                <div class="card horizontal small">
                    <div class="card-image">
                        <img src={this.props.review.imageUrl} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-action">
                            <p>{this.props.review.body}
                                <br />
                                <br />
                                <a class="waves-effect waves-light btn right white-text" onClick={this.handleChange}>Reject Review</a>
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        )
    }


}
const mapDispatchToProps = (dispatch) => {
    return {
        DeleteReview: (id) => dispatch(DeleteReview(id))
    }
}
export default connect(null, mapDispatchToProps)(ReviewSummary);