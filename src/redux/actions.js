





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
        const response = await fetch('http://localhost:3000/api/users');
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

// do fetch request from backend to double check everything works

export { fetchingUsers }