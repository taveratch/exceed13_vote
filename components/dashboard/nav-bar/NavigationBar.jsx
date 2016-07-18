var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var NavigationBar = React.createClass({
	render: function() {
		var Navbar = ReactBootstrap.Navbar;
		var NavbarBrand = ReactBootstrap.NavbarBrand;
		var Nav = ReactBootstrap.Nav;
		var NavItem = ReactBootstrap.NavItem;
		var Profile = require('./profile/profile.jsx');
		var Signin = require('./profile/signin.jsx');
		var profileView;
		if (!this.props) {
			profileView = <Signin/>;
		} else {
			profileView = <Profile {...this.props}/>;
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

module.exports = NavigationBar;
