(function() {
	'use strict';
  var connect = ReactRedux.connect;
  var actions = require('../actions');
  var bindActionCreators = Redux.bindActionCreators;
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
	var Wrapper = React.createClass({
    handleFormChange: function(e) {
      var data = {
        header: this.refs.header.value,
        desc: this.refs.desc.value
      };
      this.props.updateContent(this.props.id,data);
    },
		render: function() {
      /* Components */
      var FormControl = ReactBootstrap.FormControl;
			var headerView;
      headerView = (
        <input onChange={this.handleFormChange} ref="header" className="form-control" placeholder="Header" defaultValue={this.props.header} disabled={this.props.disabled || false} />
      );
			return (
				<div className="content-box shadow" style={{marginTop: 20}}>
					{ headerView }
          <hr></hr>
          <textarea onChange={this.handleFormChange} className="text-area form-control" componentClass="textarea" ref="desc" placeholder="Description (Supported markdown format)" defaultValue={this.props.desc}/>
				</div>
			);
		}
	});
  Wrapper = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
  module.exports = Wrapper;
}());
