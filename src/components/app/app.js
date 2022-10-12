import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import AppTest from '../app-test/app-test';

function App() {

	const data = [
		{name: "Carl W.", salary: "1200", increase: false, id: 1 },
		{name: "John C.", salary: "800", increase: false, id: 2 },
		{name: "Alex M.", salary: "1000", increase: true, id: 3 },
	];

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>

			<EmployeesList data={data} />

			<EmployeesAddForm />

			{/* <AppTest />  */}
		</div>
	);
}

export default App;