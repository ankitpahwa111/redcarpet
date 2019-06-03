import React from 'react'
import ReviewSummary from './ReviewSummary';


import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ReviewList = (props) => {
  
  const {reviews} = props.reviews;
  
  
  return (
    <div className="store-list section">
      {reviews && reviews.map(review =>
        
          <ReviewSummary review={review} />
        
      )

      }

    </div>
  )
}
const mapStateToProps = (state) => {
  
  return {
    reviews : state.reviews
  }

}
export default connect(mapStateToProps)(ReviewList)