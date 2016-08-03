var React = require('react');
var Rb = require('react-bootstrap');
(function() {
	'use strict';
  var Store = require('./store');
  var Action = require('./action');
  var key = 1;
	module.exports = React.createClass({
		getInitialState: function() {
      Store.init();
      return Store.getState();
    },
    _onChange: function() {
      this.setState(Store.getState());
    },
    componentWillReceiveProps: function(nextProps) {
      Action.updateVoted(nextProps.voted);
    },
    componentDidMount: function() {
      Store.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
      Store.removeChangeListener(this._onChange);
    },
		handleClick: function() {
      Action.voteModalFormatter();
      Action.openModal();
		},
    onHideModal: function() {
      Action.closeModal();
    },
		render: function() {
      console.log(this.state.votedScore);
			var self = this;
			/* Components */
			var VoteItem = require('./score-item/vote-item.jsx');
      var VotedItem = require('./score-item/voted-item.jsx');
      var Modal = require('../single-content/modal/modal.jsx');
			var text = require('text');
			var Col = Rb.Col;
      console.log(this.state);
			var Row = Rb.Row;
      var awards = ['best_of_hardware', 'best_of_software', 'popular'];
			/* JSX */
			return (
				<div className="full-width content-wrapper">
					<div className="full-width content-box">
						<p className="header">Vote</p>
						<hr></hr>
						<p>Tap on number to scale from 1 - 10</p>
						{text.map(function(result, i) {
              if(self.state.votedScore[i] !== -1) {
                return <VotedItem {...result} score={self.state.votedScore[i]} />;
              }else {
                return <VoteItem {...result} score={self.state.votedScore[i]} i={i}/>;
              }
						})
            }
						<div className="full-width center" style={{
							marginTop: 30
						}}>
							<button disabled={!this.state.buttonEnable} onClick={this.handleClick} className="btn-vote">Vote</button>
						</div>
            <Modal show={this.state.modalShow} onHide={this.onHideModal} voteAction={Action.vote} projectId={this.props.projectId} vote={this.state.serverFormat}/>
					</div>
				</div>
			);
		},
	});

}());
