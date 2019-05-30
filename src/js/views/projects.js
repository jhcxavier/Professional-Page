import React from "react";

const projectDescription = [
	{
		name: "Hello World",
		Tools: "React · CSS · HTML · JS",
		imgUrl: "https://via.placeholder.com/140x100"
	},

	{
		name: "Hello World",
		Tools: "React · CSS · HTML · JS",
		imgUrl: "https://via.placeholder.com/140x100"
	},
	{
		name: "Hello World",
		Tools: "React · CSS · HTML · JS",
		imgUrl: "https://via.placeholder.com/140x100"
	},
	{
		name: "Hello World",
		Tools: "React · CSS · HTML · JS",
		imgUrl: "https://via.placeholder.com/140x100"
	},
	{
		name: "Hello World",
		Tools: "React · CSS · HTML · JS",
		imgUrl: "https://via.placeholder.com/140x100"
	},
	{
		name: "Hello World",
		Tools: "React · CSS · HTML · JS",
		imgUrl: "https://via.placeholder.com/140x100"
	}
];

class Projects extends React.Component {
	render() {
		return projectDescription.map((item, index) => {
			return (
				<div key={index} className=" container-fluid card projects col-3 md-4-mb-2 m-4 p-0">
					<img src={item.imgUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">{item.Tools}</p>
						<a href="#" className="btn btn-primary float-left">
							Demo
						</a>
						<a href="#" className="btn btn-primary float-right">
							Code
						</a>
					</div>
				</div>
			);
		});
	}
}
export default Projects;
