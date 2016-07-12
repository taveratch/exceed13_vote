var React = require('react');
var CircleProgress = require('rc-progress').Circle;
(function() {
    'use strict';

    module.exports = React.createClass({
        render: function() {
            return (
                <CircleProgress percent={this.props.percent} strokeWidth={3} strokeColor="#E482CB" trailColor="#FBE6F6"/>
            );
        }
    });

}());
