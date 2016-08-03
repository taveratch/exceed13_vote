
(function() {
  'use strict';
    function vm() { return require('./viewmodel'); }
    module.exports = React.createClass({
  		contextTypes: {
  			router: React.PropTypes.object.isRequired
  		},
      back: function() {
        this.context.router.goBack();
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
    		var Image = ReactBootstrap.Image;
    		return (
    			<Navbar fixedTop={true}>
    				<NavbarBrand className="page-scroll">
    					<a href="#" onClick={this.back} style={{marginRight: 10, marginLeft: 10}}>
                <Image src="/assets/img/left-arrow-key.png" responsive style={{display: 'inline-block', height: 20}}/>
    					</a>
              <Image src="/assets/img/logo.png" responsive style={{display: 'inline-block'}}/>
    				</NavbarBrand>
    				<Nav pullRight>
    					<Profile {...this.state.user}/>
    				</Nav>
    			</Navbar>
    		);
    	}
    });
}());
