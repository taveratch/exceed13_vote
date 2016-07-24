
(function() {
  'use strict';
    function vm() { return require('./viewmodel'); }
    module.exports = React.createClass({
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
    		var Image = ReactBootstrap.Image;
    		return (
    			<Navbar fixedTop={true}>
    				<NavbarBrand className="page-scroll">
    					<a href="#page-top">
    						<Image src="/assets/img/logo.png" responsive/>
    					</a>
    				</NavbarBrand>
    				<Nav pullRight>
    					<Profile {...this.state.user}/>
    				</Nav>
    			</Navbar>
    		);
    	}
    });
}());
