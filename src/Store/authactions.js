import axios from 'axios';
export const signIn = (credentials) => {
    //console.log(credentials)
    return (dispatch, getState) => {

        // axios({
        //     headers: {
        //         'Access-Control-Allow-Origin': true,
        //         'Content-Type': 'application/json'
        //     },
        //     url: '/api/users/login',
        //     method: 'POST',
        //     data: {
        //         email: credentials.email,
        //         password: credentials.password,
        //         gender: credentials.gender
        //     }
        // }).then((user) => {
        //     console.log('logged in')
        //     dispatch({ type: 'LOGIN_SUCCESS', user: user.data })
        // }).catch((err) => {
        //     //console.log( getState())
        //     console.log('error is ', err)
        //     dispatch({ type: 'LOGIN_FAILED', err: err })
        // })
        if(credentials.username === 'test' && credentials.password==='test'){
            let user = {
                username : 'test',
                password : 'test'
            }
            dispatch({type: 'LOGIN_SUCCESS' , user : user})
        }
        else {
            dispatch({type: 'LOGIN_FAILED'})
        }
    }
}
export const signout = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'SIGNOUT' })
    }
}


export default { signIn, signout }