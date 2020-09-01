import { combineReducers } from "redux";

const userReducer = (state = [], action) => {
  switch (action.type) {
      case "FETCHED_USERS":
        return action.payload.users
      default:
        return state;
  }
}

const rootReducer = combineReducers({
  users: userReducer,
});
  
  export default rootReducer;