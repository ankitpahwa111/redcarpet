import React, { Component } from 'react'



const UserDetails =(props)=> {
        

        return (

            <React.Fragment>
                <div class="row user-details">
                    <div class="col">
                        <div class="card mydetailcard">
                            <div class="card-image">
                                <img src="https://d28fujbigzf56k.cloudfront.net/static/img/store-logo.png" alt="ProfileImage" />
                                <span class="card-title">{store.name}</span>
                                {/* <a class="btn-floating halfway-fab waves-effect waves-light red "><i class="material-icons">add</i></a> */}
                            </div>
                            <div class="card-content">
                                <span><blockquote>{store.name}</blockquote></span>
                                
                                <span><blockquote>Category :  {store.category}</blockquote></span>
                              
                                <span><blockquote>Address : {store.place.street_address}</blockquote></span>
                                
                                <span><blockquote>Verified :<i class="material-icons">check</i> </blockquote></span>
                                <br/>
                                <br/>
                                {/* <Chart chartData={this.state.chartData} location="2019-04-11" legendPosition="bottom"/> */}
                                
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
                <br /><br />
                
            </React.Fragment>
        )
    



}

export default UserDetails