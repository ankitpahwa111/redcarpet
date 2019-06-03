import React from 'react'
import AdminReviewSummary from './AdminReviewSummary';
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ReviewList = (props) => {
    if (!props.user) {
        return <Redirect to='/'></Redirect>
    }
    const { reviews } = props;
    if (reviews.length == 0)
        return (<div>
            <br /><br /><br /><br /><br />
            <p className="red-text center">No Reviews For Now , Come Later :(</p>
            <br /><br /><br /><br /><br /><br /> <br/><br/><br/><br/>
        </div>
        )

    return (
        <div className="store-list section">
            {reviews && reviews.map(review =>

                <AdminReviewSummary review={review} />

            )

            }

        </div>
    )
}
const mapStateToProps = (state) => {

    return {
        user: state.user,
        reviews: state.reviews
    }

}
export default connect(mapStateToProps)(ReviewList)