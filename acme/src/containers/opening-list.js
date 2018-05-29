import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchPositions } from '../actions/action-openings';

class OpeningList extends Component{
	componentWillMount(){
		this.props.fetchPositions();
		
	}
	renderList(){
		return _.map(this.props.openings, opening =>{
			return(
					<li key={opening.title} className="">{opening.title}
					</li>
				);
		});
	}
	render(){
		return(

				<ul className="">
					<h2>Hiring</h2>
					{this.renderList()}
				</ul>
			)
	}
}

function mapStateToProps(state) {
	return{
		openings: state.openings
	};
}


export default connect(mapStateToProps, {fetchPositions})(OpeningList);