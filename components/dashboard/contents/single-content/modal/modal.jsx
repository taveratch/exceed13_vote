(function() {
  'use strict';
    var Wrapper = React.createClass({
  		contextTypes: {
  			router: React.PropTypes.object.isRequired
  		},
      vote: function() {
        var self = this;
        this.props.voteAction(this.props.projectId);
        $('#voteButton').addClass('btn-done');
        setTimeout(function() {
          self.props.onHide();
          self.context.router.push({
            pathname: '/dashboard'
          });
        },1000);
      },
      render: function() {
        /* Components */
        var Modal = ReactBootstrap.Modal;
        var ModalItem = require('./modal_item.jsx');
        /* JSX */
        return (
          <Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
              Vote
            </Modal.Header>
            <Modal.Body style={{paddingLeft: "10%", paddingRight: "10%"}}>
              {
                this.props.vote.map(function(result, i) {
                  return <ModalItem {...result} />;
                })
              }
              <div className="full-width center" style={{
  							marginTop: 30
  						}}>
                <button id="voteButton" onClick={this.vote} className="btn-vote">Vote</button>
              </div>
            </Modal.Body>
          </Modal>
        );
      }
    });
    module.exports = Wrapper;
}());
