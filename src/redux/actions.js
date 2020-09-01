const USERS_URL = 'http://localhost:3000/api/users'
const BOOKS_URL = 'http://localhost:3000/api/books'
const REVIEWS_URL = 'http://localhost:3000/api/reviews'




// callingBackendAPI = async () => {
//     const response = await fetch('http://localhost:3000/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     // return body;
//     dispatch(calledBackendAPI(body))
// };

function fetchingUsers(){
    return async (dispatch) => {
        const response = await fetch(USERS_URL);
        const body = await response.json();
        if (response.status !== 200) {
        throw Error(body.message) 
        }
        dispatch(fetchedUsers(body))
    }
}

function fetchedUsers(body){
    return {type: "FETCHED_USERS", payload: body}
}

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

// do fetch request from backend to double check everything works

export { fetchingUsers, fetchingBooks }