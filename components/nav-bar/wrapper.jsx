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
                  <NavBar fixedTop={true}>
                      <Nav>
                        <NavItem eventKey={1}>EXCEED</NavItem>
                        <NavItem eventKey={2}>VOTE</NavItem>
                      </Nav>
                  </NavBar>
              );
          }
      });

}());
