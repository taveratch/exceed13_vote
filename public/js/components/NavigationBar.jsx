var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var NavigationBar = React.createClass({
  render: function() {
    var NavBar = ReactBootstrap.Navbar;
    var NavbarBrand = ReactBootstrap.NavbarBrand;
    var Nav    = ReactBootstrap.Nav;
    var NavItem = ReactBootstrap.NavItem;

    var Image = ReactBootstrap.Image;
    return (
      <NavBar fixedTop={true}>
        <Nav>
          <NavItem className="navbar-exceed page-scroll" eventKey={1}>Exceed</NavItem>
          <NavItem className="navbar-vote page-scroll" eventKey={2}>Vote</NavItem>
        </Nav>
        <NavbarBrand className="page-scroll">
          <a href="#page-top">
            <Image src="../public/img/logo.png" responsive />
          </a>
      </NavbarBrand>
        <Nav pullRight>
          <NavItem className="navbar-profile page-scroll" eventKey={1}>Sign in</NavItem>
        </Nav>
      </NavBar>
    );
  }
});

module.exports = NavigationBar;
