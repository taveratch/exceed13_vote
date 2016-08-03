(function() {
	'use strict';
	var ScoreItem = require('./score-item.jsx');
	function vm() {
		return require('./viewmodel');
	}
  var Action = require('../action');
	module.exports = React.createClass({
		getInitialState: function() {
			return _.merge(vm()({}, {type: 'init', isNormal: this.props.isNormal || true}), {score: this.defaultScoreItem()});
		},
		handleClick: function(index) {
      Action.update({key: this.props.i, score: index});
      this.mouseEnter(index,'selected');
		},
		mouseEnter: function(index,action) {
			var self = this;
			index = index - 1;
			var score = [];
			_.times(10, function(i) {
				score.push(<ScoreItem i={i + 1} onClick={self.handleClick} type={action || self.state.action} mouseEnter={self.mouseEnter} mouseLeave={self.mouseLeave} selected={i <= index}/>);
			});
			this.setState({score: score});
		},
		mouseLeave: function() {
			this.setState({score: this.defaultScoreItem()});
		},
		defaultScoreItem: function() {
			var score = [];
			var self = this;
			_.times(10, function(i) {
				score.push(<ScoreItem i={i + 1} onClick={self.handleClick} type="normal" mouseEnter={self.mouseEnter} mouseLeave={self.mouseLeave} selected={false}/>);
			});
			return score;
		},
		render: function() {
			var Col = ReactBootstrap.Col;
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
							{this.state.score.map(function(result, i) {
								return result;
							})
              }
						</div>
					</div>
				</div>
			);
		},
	});

}());
