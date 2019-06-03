import axios from 'axios';
export const signIn = (credentials) => {
    //console.log(credentials)
    return (dispatch, getState) => {
        let reviews = [
            {
                id : '1',
                title : "Lovin it",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.'
            },
            {
                id : '2',
                title : "not Lovin it",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.'
            },
            {
                id : '3',
                title : "wtf is this",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.'
            },
            {
                id : '4',
                title : "hatin it",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.'
            },
            {
                id : '5',
                title : "ok",
                body : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                imageUrl : 'https://s3.amazonaws.com/poly-screenshots.angel.co/enhanced_screenshots/1687048-original.'
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