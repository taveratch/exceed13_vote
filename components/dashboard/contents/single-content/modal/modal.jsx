(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        /* Components */
        var Modal = ReactBootstrap.Modal;
        var ModalItem = require('./modal_item.jsx');
        /* JSX */
        return (
          <Modal show={this.props.show} onHide={this.props.hide}>
            <Modal.Header>
              Vote
            </Modal.Header>
            <Modal.Body>
              {
                this.props.vote.map(function(result, i) {
                  return <ModalItem {...result} />;
                })
              }
            </Modal.Body>
          </Modal>
        );
      }
    });
    module.exports = Wrapper;
}());
