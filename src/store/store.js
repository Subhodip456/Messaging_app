import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension" 
import { userValueReducer } from "../reducers/userReducer";
import { userValue } from "../actions/userAction";

const reducer = combineReducers({
    userValue : userValueReducer
})

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(userValue)

export default store