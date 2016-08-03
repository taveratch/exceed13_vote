var cookie = require('js-cookie');
(function() {
	'use strict';
  var vm = require('./viewmodel');
  var auth = require('auth.service');
	module.exports = React.createClass({
    contextTypes: {
      router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
      return vm({},{type: 'init'});
    },
    back: function() {
      this.props.dispatch({type: 'timer'});
    },
    dispatch: function(action) {
      this.setState(vm(this.state, action));
    },
    handleKeyUp: function(event) {
      if(event.key === 'Enter') {
        this.signin();
      }
    },
    signin: function() {
      var authService = require('auth.service');
      var username = ReactDOM.findDOMNode(this.refs.username).value;
      var password = ReactDOM.findDOMNode(this.refs.password).value;
      var self = this;
      var round = auth.getRound();
      var pathname;
      if(!round) { pathname = '/';}
      else if(round === 'document'){ pathname= '/add'; }
      else if(round === 'vote') { pathname = '/dashboard';}
      var callback = function(data) {
        if(data.success){
          self.context.router.push({
            pathname: pathname,
            state: { text: "hello" }
          });
        }else {
          self.dispatch({type: 'error'});
          ReactDOM.findDOMNode(self.refs.username).value = '';
          ReactDOM.findDOMNode(self.refs.password).value = '';
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
            <FormGroup validationState={this.state.formState}>
              <FormControl ref="username" defaultValue="" type="text" placeholder={this.state.usernamePlaceholder} />
              <FormControl ref="password" onKeyUp={this.handleKeyUp} defaultValue="" type="password" style={{marginTop: 8}} placeholder={this.state.passwordPlaceholder} />
            </FormGroup>
            <span onClick={this.signin} style={{ marginTop: 25 }} className="button button-success btn-block">Sign in</span>
          </Form>
        </div>
      );
		}
	});
}());
