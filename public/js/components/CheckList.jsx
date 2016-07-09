var React = require('react');
var Checkbox = require('rc-checkbox');

function onChange(e) {
  console.log('checkbox checked:', (e.target.checked));
}

var CheckList = React.createClass({
	getInitialState() {
		return {
			hardware_checked: "checked",
			hardware_disabled: false,

			software_checked: "checked",
			software_disabled: false,

			popular_checked: "",
			popular_disabled: true,

			rated_checked: "",
			rated_disabled: true,
		};
	},

	render() {
		return (
			<div style={{ margin: 20 }}>
				<div>
					<p>
						<label>
							<Checkbox
								checked={this.state.hardware_checked}
								type="checkbox"
								onChange={onChange}
								disabled={this.state.hardware_disabled}
							/>
							&nbsp; Best of Hardware
						</label>
					</p>
				</div>

				<div>
					<p>
						<label>
							<Checkbox
								checked={this.state.software_checked}
								type="checkbox"
								onChange={onChange}
								disabled={this.state.software_disabled}
							/>
							&nbsp; Best of Software
						</label>
					</p>
				</div>

				<div>
					<p>
						<label>
							<Checkbox
								checked={this.state.popular_checked}
								type="checkbox"
								onChange={onChange}
								disabled={this.state.popular_disabled}
							/>
							&nbsp; Popular Vote
						</label>
					</p>
				</div>

				<div>
					<p>
						<label>
							<Checkbox
								checked={this.state.rated_checked}
								type="checkbox"
								onChange={onChange}
								disabled={this.state.rated_disabled}
							/>
							&nbsp; Top Rate
						</label>
					</p>
				</div>
			</div>
		);
	},
});

module.exports = CheckList;
