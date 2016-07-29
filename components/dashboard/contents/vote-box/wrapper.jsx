var React = require('react');
var Rb = require('react-bootstrap');
(function() {
	'use strict';
	function vm() {
		return require('./viewmodel');
	}
  var Store = require('./store');
  var Action = require('./action');
	module.exports = React.createClass({
		getInitialState: function() {
      return Store.getState();
    },
    _onChange: function() {
      this.setState(Store.getState());
    },
    componentDidMount: function() {
      Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      Store.removeChangeListener(this._onChange);
    },
		handleClick: function() {
			// this.props.dispatch({type: 'vote'});
      Action.vote(this.props.projectId);
		},
		render: function() {
			var self = this;
			/* Components */
			var VoteItem = require('./score-item/vote-item.jsx');
			var text = require('text');
			var Col = Rb.Col;
			var Row = Rb.Row;
      var awards = ['best_of_hardware', 'best_of_software', 'popular'];
      console.log(this.props.checker);
			/* JSX */
			return (
				<div className="full-width content-wrapper">
					<div className="full-width content-box">
						<p className="header">Vote</p>
						<hr></hr>
						<p>Tap on icon to vote (You can have more than 1 vote)</p>
						{text.map(function(result, i) {
              if(self.props.checker[awards[i]]){
                return (<VoteItem {...result} i={i}/>);
              }
              else{
                return;
              }
						})
            }
						<div className="full-width center" style={{
							marginTop: 30
						}}>
							<span onClick={this.handleClick} className="btn-vote">Vote</span>
						</div>
					</div>
				</div>
			);
		},
	});

}());
