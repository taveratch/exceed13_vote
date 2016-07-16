(function() {
	'use strict';

  function vm() { return require('./viewmodel'); }
	module.exports = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function() {
      return vm()({},{type: 'init'});
    },
    dispatch: function(action) {
      this.setState( vm()(this.state, action) );
    },
    componentDidMount: function() {
      var self = this;
      $.get('/api/time', function(data) {
        var date = new Date(data.remain_time);
        var now = new Date();
        var diff = (date.getTime() - now.getTime())/1000;
        self.dispatch({ type: 'update', time: diff });
      });
      this.setInterval(function(){
        self.dispatch({ type: 'update', time: self.state.time-1 });
      },1000);
    },
		render: function() {
      /* Components */
      var Image = ReactBootstrap.Image;
      var Timer = require('./timer/wrapper.jsx');
      var NavigationBar = require('./nav-bar/wrapper.jsx');
			return (
				<div className="full-height full-width">
					<div id="first-page" className="full-height full-width center">
            <NavigationBar />
						<img src="/assets/img/logo_inverse.png" responsive />
						<p style={{
							fontSize: "1.5em"
						}}>eXceed vote will be closed in</p>
						<Timer time={this.state.time} formatter={vm().toHHMMSS}/>
					</div>
          <div id="second-page" className="full-height full-width">
            
          </div>
				</div>
			);
		}
	});
}());
