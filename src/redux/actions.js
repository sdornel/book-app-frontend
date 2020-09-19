// const BASE_URL = 'http://localhost:3000'
const USERS_URL = 'http://localhost:3000/api/users'
const BOOKS_URL = 'http://localhost:3000/api/books'
const REVIEWS_URL = 'http://localhost:3000/api/reviews'
const LOGIN_URL = 'http://localhost:3000/api/sign-in'



// callingBackendAPI = async () => {
//     const response = await fetch('http://localhost:3000/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     // return body;
//     dispatch(calledBackendAPI(body))
// };

// function fetchingUsers(){
//     return async (dispatch) => {
//         const response = await fetch(USERS_URL);
//         const body = await response.json();
//         if (response.status !== 200) {
//         throw Error(body.message) 
//         }
//         dispatch(fetchedUsers(body))
//     }
// }

// function fetchedUsers(body){
//     return {type: "FETCHED_USERS", payload: body}
// }

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
            debugger
            let u = user.user
            dispatch(loggedIn(u))
        })
    }
}

function loggedIn(body){
    return {type: "LOGGED_IN", payload: body}
}

function creatingUser(){

}

function createdUser(){
    
}

function logoutUser(currentUser){
    return {type: 'LOGOUT_USER', payload: currentUser}
}

export { fetchingBooks, fetchingAllReviews, creatingUser, loggingIn, logoutUser }