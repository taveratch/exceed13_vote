var React = require('react');
var Rb = require('react-bootstrap');
(function() {
    'use strict';

    module.exports = React.createClass({
        render: function() {
            /* Components */
            var NavItem = Rb.NavItem;
            var Row = Rb.Row;
            var Col = Rb.Col;
            /* JSX */
            return (
                <NavItem eventKey={1}>
                    <div className="flex-center-y" style={{color: "black"}}>
                      <img width={15} src="/assets/img/blue_circle.png" />
                      <div style={{marginLeft: 20}}>
                        <span>{this.props.username}</span>
                        <br></br>
                        <span className="thin-gray">{this.props.group}</span>
                      </div>
                    </div>
                </NavItem>
            );
        }
    });

}());
