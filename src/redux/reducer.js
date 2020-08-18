import { combineReducers } from "redux";

const backendAPIReducer = (state = [], action) => {
  switch (action.type) {
      case "CALLED_BACKEND_API":
        debugger
          return action.payload
      default:
          return state;
  }
}

const rootReducer = combineReducers({
  backendAPI: backendAPIReducer,
});
  
  export default rootReducer;