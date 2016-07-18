var React = require('react');
var ReactBootstrap = require('react-bootstrap');
(function() {
	'use strict';

		module.exports = React.createClass({
			handleClick: function() {
				this.props.dispatch({type: 'single_content', id: this.props.i});
				$(".contents-panel").scrollTop(0);
			},
			mouseOver: function() {
				$('.thumbnail-img-'+ this.props.i + ' img').css({
	          "-webkit-filter": "none",
	          "filter": "none"
	      });
			},
			mouseOut: function() {
				$('.thumbnail-img-'+ this.props.i + ' img').css({
	          "-webkit-filter": "blur("+4+"px)",
	      	"filter": "blur("+4+"px)"
	      });
			},
			render: function() {
				/* Components */
				var Thumbnail = ReactBootstrap.Thumbnail;
				/* JSX */
				return (
					<div className="project-thumbnail no-padding">
							<Thumbnail className={"thumbnail-img-"+ this.props.i} href="#" src={this.props.imgSrc} />
							<div onMouseEnter={this.mouseOver} onMouseLeave={this.mouseOut} className="thumbnail-content" onClick={this.handleClick}>
									<div className="middle-vertical-parent full-height full-width">
										<div className="thumbnail-wrapper middle-vertical-child">
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
