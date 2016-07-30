(function() {
  'use strict';
  var Wrapper = React.createClass({
    render: function() {
      return (
        <div>
          <img height="50" src={this.props.img} className="img-responsive" />
          <span>{this.props.text}</span>
          <span className="score">{this.props.score}</span>
        </div>
      );
    }
  });
  module.exports = Wrapper;
}());
