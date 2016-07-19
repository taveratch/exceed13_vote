(function() {
	'use strict';

	function vm() {
		return require('./viewmodel');
	}
	module.exports = React.createClass({
		mixins: [TimerMixin],
		getInitialState: function() {
			return vm()({}, {type: 'init'});
		},
		dispatch: function(action) {
			this.setState(vm()(this.state, action));
		},
		componentDidMount: function() {
			var self = this;
			$.get('/api/time', function(data) {
				var date = new Date(data.remain_time);
				var now = new Date();
				var diff = (date.getTime() - now.getTime()) / 1000;
				self.dispatch({type: 'update', time: diff});
			});
			this.setInterval(function() {
				self.dispatch({
					type: 'update',
					time: self.state.time - 1
				});
			}, 1000);
		},
		render: function() {
			/* Components */
			var Image = ReactBootstrap.Image;
			var Timer = require('./timer/wrapper.jsx');
			var NavigationBar = require('./nav-bar/wrapper.jsx');
			var AwardsPanel = require('./awards-panel/wrapper.jsx');
			var TimelineItem = require('./index-2/timeline/wrapper.jsx');
			var TimerPanel = require('./timer_panel.jsx');
			var SigninPanel = require('./signin_panel.jsx');
			var Col = ReactBootstrap.Col;
			var Row = ReactBootstrap.Row;
			var timelineSigninProp = {
				percent: 100,
				header: 'Signin',
				desc: 'Sign in with KU account',
				btnText: 'Sign in',
				btnDisabled: false,
				onClick: function() {
					alert('Go signin');
				}
			};

			var timelineProjDocProps = {
				percent: 0,
				header: 'Complete Project Document',

				// header: 'Signin',
				desc: 'Tell people what’s your project can do',

				// desc: 'Sign in with KU account',
				btnText: 'Go',
				btnDisabled: false,
				onClick: function() {
					alert('Go complete document');
				}
			};

			var timelineVoteProps = {
				percent: 0,
				header: 'Vote',
				desc: 'Vote your favorite project',
				btnText: 'Go',
				btnDisabled: false,
				onClick: function() {
					alert('Go vote');
				}
			};
			return (
				<div className="full-height full-width">
					<div id="first-page" className="full-height full-width center">
						<NavigationBar/>
						<div class>
							<div>
								<img src="/assets/img/logo_inverse.png" className="img-responsive" style={{display: "inline"}}/>
								<div className="flex-center-x">
									{/*<TimerPanel time={this.state.time} formatter={vm().toHHMMSS} />*/}
									<SigninPanel />
								</div>
       				</div>
      			</div>
						<div id="awards-panel" className="full-width" style={{
							height: "20%",
							bottom: 0,
							position: "absolute"
						}}>
							<AwardsPanel/>
						</div>
					</div>
					<div id="second-page" className="full-height full-width">
						<div className="flex-center-y alt" style={{
							height: "33%"
						}}>
							{/*<Col lgOffset={3} mdOffset={3} smOffset={2} xsOffset={1}>*/}
								<TimelineItem {...timelineSigninProp}/>
							{/*</Col>*/}
						</div>
						<div className="flex-center-y" style={{
							height: "33%"
						}}>
							{/*<Col lgOffset={3} mdOffset={3} smOffset={2} xsOffset={1}>*/}
								<TimelineItem {...timelineProjDocProps}/>
							{/*</Col>*/}
						</div>
						<div className="flex-center-y alt" style={{
							height: "33%"
						}}>
							{/*<Col lgOffset={3} mdOffset={3} smOffset={2} xsOffset={1}>*/}
								<TimelineItem {...timelineVoteProps}/>
							{/*</Col>*/}
						</div>
					</div>
				</div>
			);
		}
	});
}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper />, document.getElementById('container'));
