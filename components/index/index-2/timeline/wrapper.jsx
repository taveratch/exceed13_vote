var CircleProgress = require('rc-progress').Circle;
(function() {
	'use strict';
	module.exports = React.createClass({
		render: function() {
      var Col = ReactBootstrap.Col;
      var Row = ReactBootstrap.Row;
			return (
				<Row className="flex-center-y flex-center-x full-width">
          <Col xsOffset={1} xs={4} sm={4} md={4} lg={4} style={{display: 'flex', justifyContent: 'flex-end'}}>
            <div className="flex-center-y" style={{height: "110px", width: "110px"}}>
              {/* <CircleProgress percent={this.props.percent} strokeWidth={3} strokeColor="#E482CB" trailColor="#FBE6F6"/> */}
              <img src={this.props.img} className="img-responsive"/>
            </div>
          </Col>
          <Col xs={7} smOffset={1} sm={7} mdOffset={1} md={7} lgOffset={1} lg={7}>
            <div className="flex-center-y">
              <div style={{textAlign: "left"}}>
                <p>{this.props.header}</p>
                <hr></hr>
                <p className="thin" style={{marginBottom: "30px"}}>{this.props.desc}</p>
                <button onClick={this.props.btnDisabled ? '' :this.props.onClick} className={"btn-vote" + (this.props.btnDisabled ? " disabled" : '')}>{this.props.btnText}</button>
              </div>
            </div>
          </Col>
				</Row>
			);
		}
	});
}());
