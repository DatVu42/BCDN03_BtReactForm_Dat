import { combineReducers, createStore } from "redux";
import { quanLySinhVienReducer } from './reducers/quanLySinhVienReducer';

const rootReducer = combineReducers({
    quanLySinhVienReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());