(function() {
  'use strict';
    module.exports = React.createClass({
      render: function() {
        return (
          <div className="middle-vertical-parent center full-width">
  					<div className="middle-vertical-child">
  						<img style={{
  							marginBottom: 15
  						}} height={60} src={this.props.src} responsive></img>
  						{this.props.children}
  					</div>
  				</div>
        );
      }
    });
}());
