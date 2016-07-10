var React = require('react');
var Rb = require('react-bootstrap');
(function() {
  'use strict';

    module.exports = React.createClass({
        render: function() {
          /* Components */
          var NavItem = Rb.NavItem;
          /* JSX */
          return <NavItem className="navbar-profile" eventKey={1}>
            {this.props.username}
            <img src="/assets/img/profile.png" style={{marginLeft: 10}} width={20} height={20} responsive />
            </NavItem>;
        }
    });

}());
