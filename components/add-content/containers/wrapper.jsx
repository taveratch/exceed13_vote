(function() {
	'use strict';
	var bindActionCreators = Redux.bindActionCreators;
	var actions = require('../actions');
	var mapStateToProps = function(state) {
		return {reducer: state};
	};
	var mapDispatchToProps = function(dispatch) {
		return bindActionCreators(actions, dispatch);
	};
	var Wrapper = React.createClass({
		contextTypes: {
			router: React.PropTypes.object.isRequired
		},
		getInitialState: function() {
			this.props.reset();
			return {};
		},
		componentDidMount: function() {
			$('html').css({'height': "auto"});
			this.props.init(this.props.callback);
		},
		componentWillUnmount: function() {
			$('html').css({'height': "100%"});
		},
    callback: function(data) {
      var self = this;
      setTimeout(function() {
				self.context.router.push({pathname: '/dashboard'});
			}, 2000);
    },
		submit: function() {
			this.props.submit(this.callback);
			$('#doneButton').addClass("btn-done");
		},
		preview: function() {
			this.props.preview();
		},
		normal: function() {
			this.props.normal();
		},
		render: function() {
			/* Components */
			var Navbar = require('../../nav-bar/NavigationBar.jsx');
			var Row = ReactBootstrap.Row;
			var Col = ReactBootstrap.Col;
			var Form = require('./form.jsx');
			var Preview = require('./preview.jsx');
			var view;
			var previewButtonView;
			if (!this.props.reducer.isPreview) {
				view = <Form/>;
				previewButtonView = <span onClick={this.preview} className="btn-vote btn-blue">Preview</span>;
			} else {
				view = <Preview/>;
				previewButtonView = <span onClick={this.normal} className="btn-vote btn-blue">Close preview</span>;
			}

			return (
				<div className="full-height">
					<Navbar/>
					<div className="full-height" style={{
						paddingTop: 50
					}}>
						<div className="full-width" style={{
							padding: 15
						}}>
							<div id="content-container" className="full-width">
								{view}
								<Row className="flex-center-x" style={{
									marginTop: 20
								}}>
									{previewButtonView}
									<button id="doneButton" style={{
										marginLeft: 10
									}} onClick={this.submit} className="btn-vote">Done</button>
								</Row>
							</div>
						</div>
					</div>
				</div>
			);
		}
	});
	Wrapper = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
	module.exports = Wrapper;
}());
