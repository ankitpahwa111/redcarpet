import React, { Component } from 'react'
import Chart from './Chart'


class UserDetails extends Component {

    state = {
        favourite: null,
        chartData:{}
    }

    componentWillMount(){
        this.getChartData();
      }
      getChartData(){
        // Ajax calls here
        this.setState({
          chartData:{
            labels: ['2019-04-04', '2019-04-09', '2019-04-11'],
            datasets:[
              {
                label:'Dates',
                data:[
                  6,
                  1,
                  6
                  
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  
                ]
              }
            ]
          }
        });
      }

    render() {
        

        let store = {
            "name": "Test Store",
            "category": "Food",
            "plans": [
                1
            ],
            "categories_available": [
                "snacks"
            ],
            "store_logo_url": "https://d28fujbigzf56k.cloudfront.net/static/img/store-logo.png",
            "place": {
                "id": 1,
                "street_address": "BTW, M2K Road, Mangalam Place, Sector 3, Rohini",
                "city": "Delhi",
                "state": "Delhi",
                "latitude": 28.7003629,
                "longitude": 77.1174550000001,
                "cover_pic_url": "https://d28fujbigzf56k.cloudfront.net/static/img/placelogo.png"
            },
            "hcash_limit": 10.0,
            "hcash_percentage": 3.0,
            "is_verified": true,
            "active": true
        }
        
        
        

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
                                <Chart chartData={this.state.chartData} location="2019-04-11" legendPosition="bottom"/>
                                
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
                <br /><br />
                
            </React.Fragment>
        )
    }



}

export default UserDetails