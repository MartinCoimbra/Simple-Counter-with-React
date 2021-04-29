import React from "react";
import PropTypes from "prop-types";

export function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="row justify-content-around mt-5">
				<div className="col-2 cuadro h2 text-center">
					<i className="fas fa-clock"></i>
				</div>
				<div className="col-2 cuadro h2 text-center">
					{props.digitFour % 10}
				</div>
				<div className="col-2 cuadro h2 text-center">
					{props.digitThree % 10}
				</div>
				<div className="col-2 cuadro h2 text-center">
					{props.digitTwo % 10}
				</div>
				<div className="col-2 cuadro h2 text-center text-white">
					{props.digitOne % 10}
				</div>
			</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
