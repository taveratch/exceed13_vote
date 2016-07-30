(function() {
  'use strict';
  var Wrapper = React.createClass({
    render: function() {
      return (
        <div>
          <div className="flex-center-y" style={{marginTop: 10, position: "relative"}}>
            <img style={{height: 50}} src={this.props.img} className="img-responsive" />
            <span style={{ marginLeft: 10, display: "inline-block"}}>{this.props.text}</span>
            <div className="pull-right flex-center-y" style={{height: "100%"}}>
              <span style={{display: "inline-block"}} className="score-text">{this.props.score}</span>
            </div>

          </div>
          <br></br>
          <hr></hr>
          <br></br>
        </div>
      );
    }
  });
  module.exports = Wrapper;
}());
