(function() {
	'use strict';
	module.exports = React.createClass({
		render: function() {
      var Form = ReactBootstrap.Form;
      var FormControl = ReactBootstrap.FormControl;
      var FormGroup = ReactBootstrap.FormGroup;
      var Button = ReactBootstrap.Button;
			return (
        <div id="signin-container">
          <p>Sign in</p>
          <hr></hr>
          <Form style={{marginTop: 15}}>
            <FormGroup>
              <FormControl type="text" placeholder="KU account" />
              <FormControl style={{marginTop: 8}} type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>

            </FormGroup>
            <span style={{ marginTop: 25 }} className="button button-success btn-block">Sign in</span>
          </Form>
        </div>
      );
		}
	});
}());
