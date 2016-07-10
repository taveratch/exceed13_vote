(function() {
  'use strict';
    module.exports = React.createClass({
      render: function() {
        return (
          <div>
            <CircularProgressBar percent={this.props.percent}/>
          </div>
        );
      }
    });
}());
