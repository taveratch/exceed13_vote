var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var NavigationBar = React.createClass({
    render: function() {
        var NavBar = ReactBootstrap.Navbar;
        var NavbarBrand = ReactBootstrap.NavbarBrand;
        var Nav = ReactBootstrap.Nav;
        var NavItem = ReactBootstrap.NavItem;
        var Profile = require('./profile/profile.jsx');
        var Signin = require('./profile/signin.jsx');
        var profileView;
        if(!this.props.user){
          profileView = <Signin />;
        }else {
          profileView = <Profile username={this.props.user.username}/>;
        }
        var Image = ReactBootstrap.Image;
        return (
            <NavBar fixedTop={true}>
                <Nav>
                    <NavItem className="navbar-exceed page-scroll" eventKey={1}>Exceed</NavItem>
                    <NavItem className="navbar-vote page-scroll" eventKey={2}>Vote</NavItem>
                </Nav>
                <NavbarBrand className="page-scroll">
                    <a href="#page-top">
                        <Image src="/assets/img/logo.png" responsive/>
                    </a>
                </NavbarBrand>
                <Nav pullRight>
                    { profileView }
                </Nav>
            </NavBar>
        );
    }
});

module.exports = NavigationBar;
