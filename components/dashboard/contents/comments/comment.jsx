(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        return (
          <div className="flex-center-y">
            <img src="/assets/img/blue_circle.png" width="20" className="img-responsive"/>
            <div>
              <span>{this.props.username}</span>
              <hr></hr>
              <span className="thin">{this.props.detail}</span>
            </div>
          </div>
        );
      }
    });
    module.exports = Wrapper;
}());
