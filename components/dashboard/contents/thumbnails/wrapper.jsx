var React = require('react');
var Rb = require('react-bootstrap');
(function() {
	'use strict';

	module.exports = React.createClass({
		contextTypes: {
			router: React.PropTypes.object.isRequired
		},
		render: function() {
			var self = this;
			/* Components */
			var Col = Rb.Col;
			var ProjectThumbnail = require('./project-thumbnail.jsx');
			return (
				<div>
					{this.props.contents.map(function(result, i) {
            if(!result.presented) { return; }
						var props = {
							i: i,
							imgSrc: result.image_url,
							groupName: result.group.group_name,
							projectName: result.name,
							redirect: function() {
								self.context.router.push({
									pathname: '/dashboard/project',
									state: {
										project: result
									},
								});
							},
						};
						return (
							<Col xs={12} md={3} sm={4} className="no-padding">
								<ProjectThumbnail dispatch={self.props.dispatch} {...props}/>
							</Col>
						);
					})
          }
				</div>
			);
		},
	});

}());
