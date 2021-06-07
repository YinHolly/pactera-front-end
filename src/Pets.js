import React from 'react';
import axios from 'axios'


class Pets extends React.Component {

	//构造函数
	constructor(props) {
		super(props);
		this.state = {
			genderType: [],
			catsList: {},
			isLoaded: false
		}
	}

	render() {
		return (
			<div>
				<ul>
					{(this.state.genderType).map((key) =>

						<li key={key} >{key}
							<ul>
								{Object.keys(this.state.catsList[key]).map((item, index) =>
									<li key={index} >{(this.state.catsList[key])[item].name}
									</li>
								)}
							</ul>
						</li>
					)}
				</ul>
			</div>
		)
	}

	// 钩子函数
	componentDidMount() {
		var that = this;
		let url = "http://localhost:8081/pactera/dev/petsApi/getCatsList";
		axios.get(url)
			.then(function (response) {
				console.log(response.data.data);
				console.log(Object.keys(response.data.data));
				that.setState({
					genderType: Object.keys(response.data.data),
					catsList: response.data.data,
					isLoaded: true
				});
				console.log(this.state.genderType);
				console.log(this.state.catsList);
			})
			.catch(function (error) {
				console.log(error);
			})
	}
}

export default Pets;