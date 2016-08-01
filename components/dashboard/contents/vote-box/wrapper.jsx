var React = require('react');
var Rb = require('react-bootstrap');
(function() {
	'use strict';
  var Store = require('./store');
  var Action = require('./action');
	module.exports = React.createClass({
		getInitialState: function() {
      Store.init();
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
      Action.voteModalFormatter();
      Action.openModal();
		},
    onHideModal: function() {
      Action.closeModal();
    },
		render: function() {
			var self = this;
			/* Components */
			var VoteItem = require('./score-item/vote-item.jsx');
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
							<button disabled={!this.state.buttonEnable} onClick={this.handleClick} className="btn-vote">Vote</button>
						</div>
            <Modal show={this.state.modalShow} onHide={this.onHideModal} voteAction={Action.vote} projectId={this.props.projectId} vote={this.state.serverFormat}/>
					</div>
				</div>
			);
		},
	});

}());
