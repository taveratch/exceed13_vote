var React = require('react');
var ReactBootstrap = require('react-bootstrap');
(function() {
	'use strict';

		module.exports = React.createClass({
			handleClick: function() {
				this.props.dispatch({type: 'single_content', id: this.props.i});
				$(".contents-panel").scrollTop(0);
			},
			render: function() {
				/* Components */
				var Thumbnail = ReactBootstrap.Thumbnail;
				/* JSX */
				return (
					<div className="no-padding" style={{textAlign: "center"}}>
							<Thumbnail href="#" src={this.props.imgSrc} />
							<div className="thumbnail-content" onClick={this.handleClick}>
									<div className="middle-vertical-parent full-height full-width">
										<div className="middle-vertical-child">
											<h3>{this.props.groupName}</h3>
											<p>{this.props.projectName}</p>
										</div>
									</div>
							</div>
					</div>
				);
			}
		});

}());
