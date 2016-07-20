(function() {
	'use strict';
	module.exports = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    back: function() {
      this.props.dispatch({type: 'timer'});
    },
    signin: function() {
      var authService = require('auth.service');
      var username = this.refs.username.value;
      var password = this.refs.password.value;
      var self = this;
      var callback = function(data) {
        if(data.success){
          self.context.router.push({
            pathname: '/dashboard',
            state: { text: "hello" }
          });
        }
      };
      authService.login(username, password, callback);
    },
		render: function() {
      var Form = ReactBootstrap.Form;
      var FormControl = ReactBootstrap.FormControl;
      var FormGroup = ReactBootstrap.FormGroup;
      var Button = ReactBootstrap.Button;
			return (
        <div id="signin-container">
          <img width={10} onClick={this.back} src="/assets/img/back_arrow.png" className="back img-responsive pointer"/>
          <p>Sign in</p>
          <hr></hr>
          <Form style={{marginTop: 15}}>
            <FormGroup>
              <input ref="username" className="form-control" type="text" placeholder="KU account" />
              <input ref="password" className="form-control" style={{marginTop: 8}} type="password" placeholder="Password" />
            </FormGroup>
            <span onClick={this.signin} style={{ marginTop: 25 }} className="button button-success btn-block">Sign in</span>
          </Form>
        </div>
      );
		}
	});
}());
