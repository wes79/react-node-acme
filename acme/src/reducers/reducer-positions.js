import _ from 'lodash';
import { FETCH_POSITIONS } from '../actions/action-openings';


export default function(state = {}, action){
	switch (action.type){

		case FETCH_POSITIONS :
		return _.mapKeys(action.payload, 'id');

		default: 
		return state;
	}
}