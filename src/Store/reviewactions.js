import axios from 'axios';
export const AddReview = (credentials) => {
    
    return (dispatch, getState) => {

        dispatch({type :'ADD_REVIEW',review : credentials})
        
    }
}
export const DeleteReview = (id) => {
    return (dispatch, getState) => {
        dispatch({ type: 'DELETE_REVIEW' , id:id })
    }
}


export default { signIn, signout }