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
			this.dispatch({type: 'update_user', data: data});
		},
		updateContents: function(data) {
			this.dispatch({type: 'update_contents', data: data});
		},
		componentDidMount: function() {
			$('html').css({'height': "auto"});
      $('html').css({'padding-bottom': "15px"});
			event.getInstance().on(event.event.auth.signin, this.updateUser);
			event.getInstance().on(event.event.contents.update, this.updateContents);
			require('project.service').getContents();
		},
		componentWillUnmount: function() {
			$('html').css({'height': "100%"});
      $('html').css({'padding-bottom': "0px"});
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
				<div className="">
					<NavBar />
					<div className="" style={{
						paddingTop: 50
					}}>
						<div className=" full-width" style={{
							padding: 0
						}}>
							<div id="thumbnail-container" className="full-width">
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
