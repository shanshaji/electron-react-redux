import { FETCH_THEATRE_SUCCESS } from '../../actions/theatres/fetch-theatre';

export default function(action){
    switch (action.type){
        case FETCH_THEATRE_SUCCESS:
            return action.payload;
        default: 
            return state
    }
}