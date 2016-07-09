var React = require('react');
var Circle = require('rc-progress').Circle;

var CircularProgress = React.createClass({
	getInitialState() {
		return {
			percent: 60,
			color: "#e50a82",
		};
	},

	changeState(value) {
		this.setState({
			percent: value,
			color: "#e50a82",
		});
	},

	render() {
      return (
         <div className="circular-progress" style={circleContainerStyle}>
            <Circle percent={this.state.percent} strokeWidth="4" strokeColor={this.state.color} />
         </div>
      );
   }
});

const circleContainerStyle = {
	  display: 'block',
      width: '200px',
      height: '200px',
    };


module.exports = CircularProgress;
