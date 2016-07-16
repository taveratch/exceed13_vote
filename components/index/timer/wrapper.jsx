(function() {
	'use strict';
	module.exports = React.createClass({
		render: function() {
			var times = this.props.formatter(this.props.time);
			return (
				<div className="time">
					<div style={{
						borderRight: "1px solid #ffffff"
					}} className="box-time">
						<h1>{times[0]}</h1>
						<p>Hours</p>
					</div>

					<div style={{
						borderRight: "1px solid #ffffff"
					}} className="box-time">
						<h1>{times[1]}</h1>
						<p>Minutes</p>
					</div>

					<div className="box-time">
						<h1>{times[2]}</h1>
						<p>Seconds</p>
					</div>
				</div>
			);
		}
	});
}());
