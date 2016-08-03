(function() {
	'use strict';
	var ScoreItem = require('./score-item.jsx');
	module.exports = React.createClass({
		render: function() {
			var Col = ReactBootstrap.Col;
      var self = this;
			return (
				<div className="flex-center-x flex-center-y vote-item-container" style={{
					marginTop: 25
				}}>
					<div className="flex-center-x"><img src={this.props.icon} className="img-responsive"/></div>
					<div className="score-container no-padding" style={{
						marginLeft: 25
					}}>
						<p className="no-margin">{this.props.header}</p>
						<p className="thin">{this.props.desc}</p>
						<hr></hr>
						<div style={{
							marginTop: 10
						}}>
              {
                _.times(10, function(i) {
                  return <ScoreItem i={i + 1} type="selected" selected={i<self.props.score} voted={i<self.props.score}/>;
                })
              }
						</div>
					</div>
				</div>
			);
		},
	});

}());
