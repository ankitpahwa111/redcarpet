import React from 'react'
import StoreSummary from './ReviewSummary';


import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StoreList = (props) => {
  
  const user = props.user;
  
  let stores = [{
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
  }]
  
  return (
    <div className="store-list section">
      {stores && stores.map(store =>
        
          <StoreSummary store={store} />
        
      )

      }

    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user : state.user
  }

}
export default connect(mapStateToProps)(StoreList)