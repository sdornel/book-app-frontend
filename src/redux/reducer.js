import { combineReducers } from "redux";

const userReducer = (state = [], action) => {
  switch (action.type) {
      case "FETCHED_USERS":
        return action.payload.users
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
  users: userReducer,
  books: bookReducer,
  reviews: reviewsReducer
});
  
  export default rootReducer;