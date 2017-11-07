import React, { Component } from "react";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: []
		};
	}

	componentDidMount() {
		fetch("https://api.got.show/api/houses/")
			.then(res => res.json())
			.then(data => {
				this.setState({ houses: data });
			});
	}

	render() {
		const housesList = this.state.houses.map(house => (
			<li key={house._id}>
				<a href="#details">{house.name}</a>
			</li>
		));
		return (
			<div>
				<p>all the houses</p>
				<ul>{housesList}</ul>
				<div id="details" />
			</div>
		);
	}
}

export default Home;
