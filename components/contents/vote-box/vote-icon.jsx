var React = require('react');
(function() {
  'use strict';

    module.exports = React.createClass({
        getInitialState: function() {
          return {clicked: false};
        },
        handleClick: function() {
          this.setState( {clicked: !this.state.clicked });
        },
        render: function() {
            return (
              <div className="center">
                <img style={{cursor: "pointer"}} onClick={this.handleClick} className={this.state.clicked ? "voted" : ""} src={this.props.imgSrc}/>
                <p style={{marginTop: 15}}>{this.props.text}</p>
              </div>
            );
        }
    });

}());
