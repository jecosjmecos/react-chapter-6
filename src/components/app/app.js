import {Component} from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import AppTest from '../app-test/app-test';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			data: [
				{name: "Carl W.", salary: "1200", increase: false, id: 1 },
				{name: "John C.", salary: "800", increase: false, id: 2 },
				{name: "Alex M.", salary: "1000", increase: true, id: 3 },
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
				return {
					data: data.filter(item => item.id !== id)
				}
		})
	}

	addNewItem = (itemName, itemSalary) => {

		if(itemName.length > 0 && itemSalary.length > 0 ){
			const item = {
				name: itemName,
				salary: itemSalary,
				increase: false,
				id: this.state.data.length + 1
			}

			this.setState((state) => {
				state.data.push(item);
			});
		}
	}

	render(){
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem} />

				<EmployeesAddForm onAdd={this.addNewItem} />

				{/* <AppTest />  */}
			</div>
		);
	}
}

export default App;