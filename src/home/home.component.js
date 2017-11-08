import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import HouseDetails from "../house-details/house-details.component";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houses: []
		};
	}

	componentDidMount() {
		fetch("https://www.anapioficeandfire.com/api/houses?pageSize=50")
			.then(res => res.json())
			.then(data => {
				this.setState({ houses: data });
			});
	}

	render() {
		const housesList = this.state.houses.map(house => (
			<li key={house._id}>
				<Link to="/details">{house.name}</Link>
			</li>
		));
		return (
			<div>
				<p>all the houses</p>
				<ul>{housesList}</ul>
				<div id="details" />
				<Route path="/details" component={HouseDetails} />
			</div>
		);
	}
}

export default Home;
