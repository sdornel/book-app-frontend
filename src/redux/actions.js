





// callingBackendAPI = async () => {
//     const response = await fetch('http://localhost:3000/express_backend');
//     const body = await response.json();

//     if (response.status !== 200) {
//       throw Error(body.message) 
//     }
//     // return body;
//     dispatch(calledBackendAPI(body))
// };

function fetchingBackendAPI(){
    console.log("calling")
    return async (dispatch) => {
        debugger
        const response = await fetch('http://localhost:3000/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
        throw Error(body.message) 
        }
        // return body;
        dispatch(fetchedBackendAPI(body))
    }
}

function fetchedBackendAPI(body){
    return {type: "CALLED_BACKEND_API", payload: body}
}

export { fetchingBackendAPI }