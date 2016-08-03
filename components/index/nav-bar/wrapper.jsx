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
						<button className="btn-border" onClick={this.signout} style={{zIndex: 999}}>Sign out</button>
     			</div>
				);
			}else {
				view = <button className="btn-border" style={{zIndex: 999}} onClick={this.handleClick}>Sign in</button>;
			}
			return (
        <div className="full-width" style={{height: 50, display: "flex", alignItems: "center", justifyContent: "flex-end", zIndex: 999}}>
					<div className="pointer" style={{marginRight: 20, zIndex: 999}}>
						{view}
     			</div>
        </div>
			);
		}
	});
}());
