import axios from 'axios';
export const signIn = (credentials) => {
    //console.log(credentials)
    return (dispatch, getState) => {
        let reviews = [
            {
                id : '1',
                title : "Lovin it",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : '2',
                title : "not Lovin it",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : '3',
                title : "wtf is this",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : '4',
                title : "hatin it",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            },
            {
                id : '5',
                title : "ok",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            }
        ]

        
        if(credentials.username === 'test' && credentials.password==='test'){
            let user = {
                username : 'test',
                password : 'test'
            }
            dispatch({type: 'LOGIN_SUCCESS' , user : user , usertype : 'reviewer',reviews : reviews})
        }
        else if(credentials.username === 'admin' && credentials.password==='admin') {
            let user = {
                username : 'admin',
                password : 'admin'
            }
            dispatch({type: 'LOGIN_SUCCESS' , user : user , usertype : 'admin',reviews : reviews})
            
        }
        else{
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