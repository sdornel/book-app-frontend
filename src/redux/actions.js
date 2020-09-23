// const BASE_URL = 'http://localhost:3000'
const USERS_URL = 'http://localhost:3000/users'
const BOOKS_URL = 'http://localhost:3000/books'
const REVIEWS_URL = 'http://localhost:3000/reviews'
const LOGIN_URL = 'http://localhost:3000/login'
const PROTECTED_URL = 'http://localhost:3000/protected'

////////////////////////////// USERS ///////////////////////////////////////////////////////////////////////////

function loggingIn(email, password){
    return (dispatch) => {
        const obj = {
            email: email,
            password: password
        }
        fetch(LOGIN_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json())
        .then(user => {
            // fetch(USER_URL + `/${user.id}`) // fetches user courses and purchases
            // .then(resp => resp.json())
            // .then(user => {
            //     if(!user.status){
            //         dispatch(fetchedUser(user))
            //     }
            // })
            localStorage.token = "Bearer " + user.token
            let u = user.payload.user
            dispatch(loggedIn(u))
        })
    }
}

function loggedIn(body){
    return {type: "LOGGED_IN", payload: body}
}

function gettingProfileFetch(){
    return dispatch => {
            if(localStorage.token) {
            // fetch(LOGIN_URL, {
                // debugger
            fetch(PROTECTED_URL, {
            // fetch(LOGIN_URL, {
                headers: {"Authorization": localStorage.token} // with rails it is "Authenticate"
            })
            .then(resp => resp.json())
            .then(user => { 
                // currentUser = user
                // currentUserId = user.id
                if(user.message){
                    localStorage.removeItem("token")
                }else{
                // fetch(USER_URL + `/${currentUserId}`) // fetches user courses and purchases
                // .then(resp => resp.json())
                // .then(user => {
                //     if(!user.status){
                //         debugger
                //         currentUser = user
                //         dispatch(gotProfileFetch(user))
                //     }
                // })
                dispatch(gotProfileFetch(user.user))
                }
            })
        }
    }
}

function gotProfileFetch(user){
    return {type: "GOT_PROFILE_FETCH", payload: user}
}

function fetchingUser(){

}

function fetchedUser(){

}

function creatingUser(){

}

function createdUser(){
    
}

function logoutUser(currentUser){
    return {type: 'LOGOUT_USER', payload: currentUser}
}

////////////////////////////// BOOKS ///////////////////////////////////////////////////////////////////////////

function fetchingBooks(){
    return (dispatch) => {
        fetch(BOOKS_URL)
        .then(resp => resp.json())
        .then(data => {
            dispatch(fetchedBooks(data))
        })
    }
}

function fetchedBooks(data){
    return {type: "FETCHED_BOOKS", payload: data}
}



////////////////////////////// REVIEWS ///////////////////////////////////////////////////////////////////////////

function fetchingAllReviews(){
    return async (dispatch) => {
        const response = await fetch(REVIEWS_URL)
        const body = await response.json()
        if (response.status !== 200) {
            throw Error(body.message) 
        }
        dispatch(fetchedAllReviews(body))
    }
}

function fetchedAllReviews(body){
    return {type: "FETCHED_REVIEWS", payload: body}
}



export { fetchingBooks, fetchingAllReviews, creatingUser, loggingIn, logoutUser, gettingProfileFetch }