import {Component} from 'react';

class AppTest extends Component {

	constructor(props){
		super(props);

		this.state = {
			inputValue: ''
		};
	}

	returnInput = (e, color) =>{
		console.log(color);
		
		this.setState({
			position: e.target.value
		});
	}

	render(){
		const styles = {
			width: '100%',
			minHeight: '100px',
			background: 'green',
			marginTop: '30px'
		}

		const position = this.state.position

		return (
			<div className="app-test" style={styles}>
				<input type="text" onChange={(e) => this.returnInput(e, 'args')} />
				<h1>position = {position}</h1>
			</div>
		)
	}
}

export default AppTest;