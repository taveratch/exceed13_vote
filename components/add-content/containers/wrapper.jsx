(function() {
	'use strict';
  var getState = function(state) {
    return {reducer: state};
  };
	var Wrapper = React.createClass({
		componentDidMount: function() {
			$('html').css({'height': "auto"});
		},
		componentWillUnmount: function() {
			$('html').css({'height': "100%"});
		},
		render: function() {
			/* Components */
			var Navbar = require('../../nav-bar/NavigationBar.jsx');
			var ContentBox = require('../content-box/wrapper.jsx');
      var InputField = require('./input_field.jsx');
			return (
				<div className="full-height">
					<Navbar/>
					<div className="full-height" style={{
						paddingTop: 50
					}}>
						<div className="full-width" style={{
							padding: 15
						}}>
							<div id="content-container" className="full-width">
								<InputField disable={true} header="Group name" value={this.props.reducer.user.group}/>
                <br></br>
								<InputField header="Project name" placeholder="Enter project name" />
								<ContentBox />
								<ContentBox />
							</div>
						</div>
					</div>
				</div>
			);
		},
	});
	Wrapper = connect(getState)(Wrapper);
  module.exports = Wrapper;
}());
