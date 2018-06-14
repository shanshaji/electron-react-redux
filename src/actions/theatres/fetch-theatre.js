import axios from 'axios';
import { apiBaseUrl } from '../../utils/rest-api';


export const FETCH_THEATRE_SUCCESS = 'FETCH_THEATRE_SUCCESS';
export default function fetchTheatre(id){
    return async(dispatch) => {
        const response = await axios.get(`${apiBaseUrl}/theatres/${id}`)
        dispatch({
            type: FETCH_THEATRE_SUCCESS,
            payload: response.data
        })
    }
}