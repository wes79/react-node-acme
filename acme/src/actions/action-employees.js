import axios from 'axios';

export const FETCH_EMPLOYEES = 'fetch_employees';

export function fetchEmployees(){
	const url =" http://localhost:3000/api/employees/";
	
	return {
      type: FETCH_EMPLOYEES,
      payload: new Promise((resolve, reject) => {
          axios.get(url).then(response => resolve(response.data))
      })
    } 
	
}