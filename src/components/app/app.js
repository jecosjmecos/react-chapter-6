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
				{name: "Carl W.", salary: "1200", increase: false, rise: true, id: 1 },
				{name: "John C.", salary: "800", increase: false, rise: false, id: 2 },
				{name: "Alex M.", salary: "1000", increase: true, rise: false, id: 3 },
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
				return {
					data: data.filter(item => item.id !== id)
				}
		})
	}

	addItem = (name, salary) => {

		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}

		this.setState(({data}) => {
			const newArr = [...data, newItem];

			return {
				data: newArr
			}
		});
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if (item.id === id) {
					return {...item, [prop]: !item[prop]}
				}

				return item;
			})
		}))
	}

	render(){
		const employees = this.state.data.length,
					increased = this.state.data.filter(item => item.increase).length;

		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList 
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp} />

				<EmployeesAddForm onAdd={this.addItem} />

				{/* <AppTest />  */}
			</div>
		);
	}
}

export default App;