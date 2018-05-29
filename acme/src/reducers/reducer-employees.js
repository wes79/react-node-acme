import _ from 'lodash';
import { FETCH_EMPLOYEES } from '../actions/action-employees';


export default function(state = {}, action){
	switch (action.type){


		case FETCH_EMPLOYEES:
		return _.mapKeys(action.payload, 'id');

		default: 
		return state;
	}
}