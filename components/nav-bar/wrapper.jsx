var React = require('react');
var Rb    = require('react-bootstrap');

(function() {
  'use strict';

      module.exports = React.createClass({
          render: function() {
              var NavBar = Rb.Navbar;
              var Nav    = Rb.Nav;
              var NavItem = Rb.NavItem;
              return (
                  <NavBar fixedTop={true} style={{marginBottom: 0}}>
                      <Nav>
                        <NavItem eventKey={1}>EXCEED</NavItem>
                        <NavItem eventKey={2}>VOTE</NavItem>
                      </Nav>
                      <Nav pullRight>
                        <NavItem eventKey={1}>Sign in</NavItem>
                      </Nav>
                  </NavBar>
              );
          }
      });

}());
