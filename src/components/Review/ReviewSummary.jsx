import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewSummary extends Component {
    constructor(props) {
        super(props);
        

       

    }
    render() {

        return (

            <div class="col s12 m7 small">
                <h2 class="header">{this.props.review.title}</h2>
                <div class="card horizontal small">
                    <div class="card-image">
                        <img src= {this.props.review.imageUrl} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-action">
                            <p>{this.props.review.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default (ReviewSummary);