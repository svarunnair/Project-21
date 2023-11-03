import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducerAuth";
import { reducerData } from "./data/reducer";




const root=combineReducers({
    authData:authReducer,
    data:reducerData
})
export const store=legacy_createStore(root,applyMiddleware(thunk))