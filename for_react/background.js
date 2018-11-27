import React {Component} from 'react';
import test.css

class Background extends Component {
	constructor() {
		super();
		this.state = {
			pictures: [],
		};
	}
}

ComponentDidMount(){
	fetch('https://api.magicthegathering.io/v1/cards/')
	.then(results => {
		return results.json();	
	}).then(data => {
		let pictures = data.results.map((card) => {
			return(
				<div key={card.results}>
					<img src={card.ImageUrl} />

				</div>
				)
		})
		this.setState({pictures: pictures});
		console.log("state", this.state.pictures);
	})
}

render(){
	return(
		<div className="container2">
			<div className="container1">
				{this.state.pictures}
			</div>
		</div>
	)
}