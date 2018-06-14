import { combineReducers } from 'redux';

import TheatreReducer from './theatres/theatre-reducer';

const rootReducer = combineReducers({
    theatre: TheatreReducer,
});

export default rootReducer;