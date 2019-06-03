const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS' : {
            
            return {
                ...state,
                authError:null,
                user : action.user,
                usertype : action.usertype,
                reviews : action.reviews
            }
        }
        case 'LOGIN_FAILED' : {
            return {
                authError: 'Cannot Login'
            }
        }
        case 'SIGNOUT' : {
            return {
                authError : null
            }
        }
        case 'ADD_REVIEW':{
            let review = action.review;
            review.id=state.reviews.length + 1;
            state.reviews.push(review);
            return{
                ...state,
                
            }
        }
        case 'DELETE_REVIEW' : {
            let reviews = state.reviews.filter((review)=> review.id!=action.id)
            state.reviews=reviews;
            return {
                ...state,
            }
        }
        
        default : return state
    }
}
export default authReducer;