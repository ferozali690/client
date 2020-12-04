import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formsReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: formsReducer,
});
