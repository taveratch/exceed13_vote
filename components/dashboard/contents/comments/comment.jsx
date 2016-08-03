(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        return (
          <div className="flex-center-y" style={{marginTop: 20}}>
            <img src="/assets/img/blue_circle.png" width="15" className="img-responsive"/>
            <div style={{marginLeft: 20, width: "100%"}}>
              <span>{this.props.detail}</span>
            </div>
          </div>
        );
      }
    });
    module.exports = Wrapper;
}());
