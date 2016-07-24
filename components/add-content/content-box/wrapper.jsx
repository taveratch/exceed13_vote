(function() {
	'use strict';
  var connect = ReactRedux.connect;
  var getState = function(state) {
    return {reducer: state};
  };
	var Wrapper = React.createClass({

		render: function() {
      /* Components */
      var FormControl = ReactBootstrap.FormControl;
			var headerView;
			if (this.props.header) {
				headerView = (
					<p>{this.props.header}</p>
				);
			} else {
        headerView = (
          <FormControl ref="header" className="form-control" placeholder="Header" />
        );
      }

			return (
				<div className="content-box shadow" style={{marginTop: 20}}>
					{ headerView }
          <hr></hr>
          <FormControl className="text-area" componentClass="textarea" ref="desc" placeholder="Description (Supported markdown format)"/>
				</div>
			);
		}
	});
  Wrapper = connect(getState)(Wrapper);
  module.exports = Wrapper;
}());
