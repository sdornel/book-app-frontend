import { combineReducers } from "redux";

const userReducer = (state = [], action) => {
  switch (action.type) {
      // case "FETCHED_USERS":
      //   return action.payload.users
      case "LOGGED_IN":
        if(action.payload === undefined){
          return null
        }else{
          return action.payload
        }
      case "GOT_PROFILE_FETCH":
        return action.payload
      case "LOGOUT_USER":
        state = null
        return state
        // debugger
        // return {...state, user: null}
      default:
        return state;
  }
}

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_BOOKS":
      return action.payload.books
    default:
      return state;
  }
}

const reviewsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_REVIEWS":
      return action.payload.reviews
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  // users: usersReducer,
  books: bookReducer,
  reviews: reviewsReducer,
  user: userReducer
});
  
  export default rootReducer;