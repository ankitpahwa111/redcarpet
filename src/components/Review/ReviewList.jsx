import React from 'react'
import ReviewSummary from './ReviewSummary';
import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ReviewList = (props) => {
  if(!props.user){
    return <Redirect to='/'></Redirect>
  }
  const {reviews} = props;
  console.log(reviews)
  
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
    user : state.user,
    reviews : state.reviews
  }

}
export default connect(mapStateToProps)(ReviewList)