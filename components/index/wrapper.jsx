var cookie = require('js-cookie');
(function() {
	'use strict';

	function vm() {
		return require('./viewmodel');
	}
	var event = require('event.service');
  var http = require('http.service');
  var constants = require('constants.service');
  var auth = require('auth.service');
	module.exports = React.createClass({
		mixins: [TimerMixin],
		contextTypes: {
			router: React.PropTypes.object.isRequired
		},
		getInitialState: function() {
			return vm()({}, {type: 'init'});
		},
		dispatch: function(action) {
			this.setState(vm()(this.state, action));
		},
		dashboard: function(data) {
			window.location.href = '/dashboard';
		},
		componentDidMount: function() {
			event.getInstance().on(event.event.auth.redirect, this.dashboard);
			var self = this;
      http.get(constants.url + '/api/time')
      .done(function(data) {
        var date = new Date(data.remain_time);
				var now = new Date();
				var diff = (date.getTime() - now.getTime()) / 1000;
				self.dispatch({type: 'update', time: diff, message: data.message, round: data.round});
      });
			this.setInterval(function() {
				self.dispatch({
					type: 'update_time',
					time: self.state.time - 1,
				});
			}, 1000);
		},
    componentWillReceiveProps: function(nextProps) {
      if(this.props.routeParams.splat === 'signin'){
        this.dispatch({type: 'signin'});
      }
    },
		render: function() {
			var dispatch = _.bind(this.dispatch, this);
      var self = this;
			/* Components */
			var Image = ReactBootstrap.Image;
			var Timer = require('./timer/wrapper.jsx');
			var NavigationBar = require('./nav-bar/wrapper.jsx');
			var AwardsPanel = require('./awards-panel/wrapper.jsx');
			var TimelineItem = require('./index-2/timeline/wrapper.jsx');
			var TimerPanel = require('./timer_panel.jsx');
			var SigninPanel = require('./signin/signin_panel.jsx');
			var Col = ReactBootstrap.Col;
			var Row = ReactBootstrap.Row;
			var timelineSigninProp = {
				percent: 100,
				header: 'Signin',
				desc: 'Sign in with KU account',
				btnText: 'Sign in',
				btnDisabled: typeof auth.getUser() === 'undefined' ? false : true,
        img: '/assets/img/green-circle-3-layers.png',
        onClick: function() {
          self.context.router.push({
            pathname: '/'
          });
				},
			};

			var timelineProjDocProps = {
				percent: 0,
				header: 'Complete Project Document',
				desc: 'Tell people what’s your project can do',
				btnText: 'Go',
        img: this.state.round === 'document' ? '/assets/img/green-circle-3-layers.png' : '/assets/img/red-circle-3-layers.png',
				btnDisabled: this.state.round !== 'document',
				onClick: function() {
          self.context.router.push({
            pathname: '/add'
          });
				},
			};

			var timelineVoteProps = {
				percent: 0,
				header: 'Vote',
				desc: 'Vote your favorite project',
				btnText: 'Go',
				btnDisabled: this.state.round !== 'vote',
        img: this.state.round !== 'document' ? '/assets/img/green-circle-3-layers.png' : '/assets/img/red-circle-3-layers.png',
				onClick: function() {
          self.context.router.push({
            pathname: '/dashboard'
          });
				},
			};

			var view;
			switch (this.state.pane) {
				case 'timer':
					view = <TimerPanel time={this.state.time} message={this.state.message} formatter={vm().toHHMMSS}/>;
					break;
				case 'signin':
					view = <SigninPanel dispatch={dispatch}/>;
					break;
			}
			return (
				<div className="full-height full-width">
					<div id="first-page" className="full-height full-width center">
						<NavigationBar user={vm().getUser()} dispatch={dispatch}/>
						<div>
							<div>
								<div className="logo-wrapper">
                  <img src="/assets/img/logo_inverse.png" className="img-responsive" style={{
                    display: "inline"
                  }}/>
                </div>
								<div className="flex-center-x">
									{view}
								</div>
							</div>
						</div>
						<div id="awards-panel" className="full-width" style={{
							height: "20%",
							bottom: 0,
							position: "absolute",
						}}>
							<AwardsPanel/>
						</div>
					</div>
					<div id="second-page" className="full-height full-width">
						<div className="flex-center-y alt" style={{
							height: "33%"
						}}>
							<TimelineItem {...timelineSigninProp}/>
						</div>
						<div className="flex-center-y" style={{
							height: "33%"
						}}>
							<TimelineItem {...timelineProjDocProps}/>
						</div>
						<div className="flex-center-y alt" style={{
							height: "33%"
						}}>
							<TimelineItem {...timelineVoteProps}/>
						</div>
					</div>
				</div>
			);
		},
	});
}());
