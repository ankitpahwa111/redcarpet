import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ReviewSummary = (props) =>{

    

        return (

            <div class="col s12 m7 small">
                <h2 class="header">{props.review.title}</h2>
                <div class="card horizontal small">
                    <div class="card-image">
                        <img src= {props.review.imageUrl} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-action">
                            <p>{props.review.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    


}

export default (ReviewSummary);