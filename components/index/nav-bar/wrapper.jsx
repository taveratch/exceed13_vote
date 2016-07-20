(function() {
	'use strict';
	module.exports = React.createClass({
		handleClick: function() {
			this.props.dispatch({type: 'signin'});
		},
		signout: function() {
			this.props.dispatch({type: 'signout'});
		},
		render: function() {
			var view;
			if(this.props.user) {
				view = (
					<div>
     				<span>{this.props.user.username}&nbsp;&nbsp;&nbsp;&nbsp;</span>
						<span onClick={this.signout} style={{color: 'white'}}>Sign out</span>
     			</div>
				);
			}else {
				view = <p onClick={this.handleClick}>Sign in</p>;
			}
			return (
        <div className="full-width" style={{height: 50, display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
					<div className="pointer" style={{marginRight: 20}}>
						{view}
     			</div>
        </div>
			);
		}
	});
}());
