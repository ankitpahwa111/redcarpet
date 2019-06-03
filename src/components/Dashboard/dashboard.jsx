import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
//import {Redirect} from 'react-router-dom'
class Dashboard extends Component {
    state = {
        store: {}
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://testapi.halanx.com/stores/',
            headers: [

                {
                    "key": "Authorization",
                    "value": "Token 0f948ebc7f620891adde46a8b1d1049cc7d56fcc",
                    "description": "",
                    "enabled": true
                },
                {
                    "key": "",
                    "value": "",
                    "description": "",
                    "type": "text",
                    "enabled": true
                }

            ]
        }).then((store) => {
            console.log(store)
            this.setState({
                store: store
            })
        })
    }
    render() {
        let link = <Link to='/signin'>Sign In</Link>;
        if(this.props.user){
            if(this.props.usertype=='reviewer')
            link = <Link to = '/userwall'>Go To Wall</Link>;
            else
            link = <Link to = '/adminwall'>Go To Admin Wall</Link>
        }
        
        return (
            <div className="dashboard container">
                <div className="mycard">
                    <div className="col s12 m6">
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card">
                                    <div class="card-image">
                                        <img src='https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.' />
                                        <span class="card-title red-text text-darken-2 ">Red Carpet Reviewer</span>
                                    </div>
                                    <div class="card-content">
                                        <p class="h4">Through Halanx app, customers can know about their neighborhood happenings and they can order from neighborhood businesses like Grocery stores, restaurants, and pharmacies, and get it delivered in as little as an hour, through our part time shoppers. </p>
                                    </div>
                                    <div class="card-action">
                                        {link}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m5 offset-m1">

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        authError : state.authError,
        user : state.user,
        usertype : state.usertype
    }
}
export default connect(mapStateToProps)(Dashboard);
