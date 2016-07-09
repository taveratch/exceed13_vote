var React = require('react');
(function() {
    'use strict';

    module.exports = React.createClass({
      render: function() {
        /* Components */
        var CheckBox = require('../checkbox/wrapper.jsx');
        var text    = require('../text');
        return (
          <div>
            {
              this.props.quota.map(function(result, i) {
                return <CheckBox checked={result === 0} text={text.vote[i]}/>;
              })
            }
          </div>
        );
      }
    });

}());
