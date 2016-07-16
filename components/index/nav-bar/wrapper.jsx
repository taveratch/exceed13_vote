(function() {
	'use strict';
	module.exports = React.createClass({

		render: function() {
			var NavBar = ReactBootstrap.Navbar;
			var NavbarBrand = ReactBootstrap.NavbarBrand;
			var Nav = ReactBootstrap.Nav;
			var NavItem = ReactBootstrap.NavItem;
			return (
				// <NavBar fixedTop>
				// 	<Nav pullRight>
				// 		<NavItem className="navbar-profile page-scroll" eventKey={1}>Sign in</NavItem>
				// 	</Nav>
				// </NavBar>
        <div className="full-width" style={{height: 50, textAlign: 'right'}}>
          <p>Sign in</p>
        </div>
			);
		}
	});
}());
