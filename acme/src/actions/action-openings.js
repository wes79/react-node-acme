import axios from 'axios';

export const FETCH_POSITIONS = 'fetch_positions';


export function fetchPositions(){

	const url =" http://localhost:3000/api/openings/";
	
	return {
      type: FETCH_POSITIONS,
      payload: new Promise((resolve, reject) => {
          axios.get(url).then(response => resolve(response.data))
      })
    }
}
