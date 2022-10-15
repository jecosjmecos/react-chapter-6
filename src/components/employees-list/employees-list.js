import {Component} from 'react';

import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

class EmployeesList extends Component{
	render(){
		const elements = this.props.data.map(item => {
				return (
					<EmployeesListItem 
						key={item.id} 
						name={item.name} 
						salary={item.salary} 
						increase={item.increase}
						onDelete={() => this.props.onDelete(item.id)} />
				);
			});

		return (
			<ul className="app-list list-group">
				{elements}
			</ul>
		);
	}
}

export default EmployeesList;