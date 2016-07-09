var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var NavigationBar = require('./NavigationBar.jsx');
var CircularProgress = require('./CircularProgress.jsx');
var ProfileInfo = require('./ProfileInfo.jsx');
// var CheckList = require('./CheckList.jsx');

var ProjectThumbnail = require('./ProjectThumbnail.jsx');

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var App = React.createClass({
	render: function() {
		return (
			<div className="full-height">
				<NavigationBar style={{width: "100%"}}/>
				<div className="full-height big-container">
					<Grid>
						<Row className="show-grid content-section row-eq-height">
							<Col className="content-section-left" sm={6} md={4}>
							 	<CircularProgress />
						  		<ProfileInfo />
							 </Col>

							 <Col className="content-section-right" sm={6} md={8}>
							 </Col>
					  </Row>
				  </Grid>
				</div>

			</div>
		);
	}
});

module.exports = App;
