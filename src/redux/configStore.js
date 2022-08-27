import { combineReducers, createStore } from "redux";
import { BaiTapDatVeReducer } from './reducers/BaiTapDatVeReducer';

const rootReducer = combineReducers({
    BaiTapDatVeReducer,
});

export const store = createStore(rootReducer);