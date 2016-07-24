(function() {
	'use strict';
	/* Services */
	var event = require('event.service.js');
	var vm = require('./viewmodel');
	/* React */
	module.exports = React.createClass({
		getInitialState: function() {
			return vm({}, {type: 'init'});
		},
		dispatch: function(action) {
      this.setState(vm(this.state, action));
		},
		updateUser: function(data) {
			this.dispatch({type: 'update_user', data: data,});
		},
		updateContents: function(data) {
			this.dispatch({type: 'update_contents', data: data,});
		},
		componentDidMount: function() {
			event.getInstance().on(event.event.auth.signin, this.updateUser);
			event.getInstance().on(event.event.contents.update, this.updateContents);
			require('project.service').getContents();
		},
		componentWillUnmount: function() {
			event.getInstance().off(event.event.auth.signin, this.updateUser);
			event.getInstance().off(event.event.contents.update, this.updateContents);
		},
		render: function() {
			/* Functions */
			var dispatch = _.bind(this.dispatch, this);
			/* Components */
			var NavBar = require('../nav-bar/NavigationBar.jsx');
			var Thumbnails = require('./contents/thumbnails/wrapper.jsx');
			return (
				<div className="full-height">
					<NavBar />
					<div className="full-height" style={{
						paddingTop: 50
					}}>
						<div className="full-height full-width" style={{
							padding: 15
						}}>
							<div id="thumbnail-container" className="full-width full-height">
								<Thumbnails dispatch={dispatch} contents={this.state.contents}/>
							</div>
						</div>
					</div>
				</div>
			);
		}
	});

}());

// var Wrapper = require('./wrapper.jsx');
// ReactDOM.render(<Wrapper />, document.getElementById('container'));
