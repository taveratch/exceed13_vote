
(function() {
  'use strict';
    function vm() { return require('./viewmodel'); }
    module.exports = React.createClass({
  		contextTypes: {
  			router: React.PropTypes.object.isRequired
  		},
      getInitialState: function() {
        return vm()({},{type: 'init'});
      },
    	render: function() {
    		var Navbar = ReactBootstrap.Navbar;
    		var NavbarBrand = ReactBootstrap.NavbarBrand;
    		var Nav = ReactBootstrap.Nav;
    		var NavItem = ReactBootstrap.NavItem;
    		var Profile = require('./profile/profile.jsx');
    		var Signin = require('./profile/signin.jsx');
    		var profileView;
    		if (!this.state.user) {
          if(this.context.router){
            this.context.router.push({
              pathname: "/"
            });
          }
    			profileView = <Signin/>;
    		} else {
    			profileView = <Profile {...this.state.user}/>;
    		}
    		var Image = ReactBootstrap.Image;
    		return (
    			<Navbar fixedTop={true}>
    				<NavbarBrand className="page-scroll">
    					<a href="#page-top">
    						<Image src="/assets/img/logo.png" responsive/>
    					</a>
    				</NavbarBrand>
    				<Nav pullRight>
    					{ profileView }
    				</Nav>
    			</Navbar>
    		);
    	}
    });
}());
