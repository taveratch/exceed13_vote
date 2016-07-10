var React = require('react');
(function() {
  'use strict';

    module.exports = React.createClass({
        getInitialState: function() {
          return {clicked: false};
        },
        handleClick: function() {
          if(this.props.quota === 0) { return; }
          this.setState( {clicked: !this.state.clicked });
          this.props.dispatch({type: 'select_vote', key: this.props.i});
        },
        render: function() {
            return (
              <div className="center">
                <img style={{cursor: "pointer"}} onClick={this.handleClick} className={this.state.clicked ? "voted" : this.props.quota===0 ? "" : "non-voted"} src={this.props.imgSrc}/>
                <p style={{marginTop: 15}}>{this.props.text}</p>
              </div>
            );
        }
    });

}());
