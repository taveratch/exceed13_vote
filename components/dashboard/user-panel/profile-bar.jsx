var React = require('react');
(function() {
  'use strict';

    module.exports = React.createClass({
      render: function() {
        /* Components */
        var CircularProgressBar = require('../circular-progressbar/wrapper.jsx');
        return (
          <div>
            <CircularProgressBar percent={this.props.percent}/>
          </div>
        );
      }
    });

}());
