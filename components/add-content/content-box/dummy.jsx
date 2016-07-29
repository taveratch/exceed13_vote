(function() {
	'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var actions = require('../actions');
	var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
	var Wrapper = React.createClass({
		handleClick: function() {
			/*Add new content box*/
      this.props.newContentBox();
		},
		render: function() {
			return (
				<div className="content-box shadow center" style={{
					marginTop: 20
				}}>
					<div>
						<img className="pointer" onClick={this.handleClick} src='/assets/img/big-plus.png' width="40"/>
						<br></br>
						<span className="thin">Add new content</span>
					</div>
				</div>
			);
		},
	});
	module.exports = connect(null,mapDispatchToProps)(Wrapper);
}());
