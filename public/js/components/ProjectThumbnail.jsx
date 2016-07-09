var React = require('react');
var ReactBootstrap = require('react-bootstrap');

var Thumbnail = ReactBootstrap.Thumbnail;

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

var ProjectThumbnail = React.createClass({
	render() {
		return (
			<div>
				<Grid>
					<Row> 
						<Col className="no-padding" sm={3} md={4}>
							<Thumbnail href="#" src="../public/img/project.jpg" responsive/>
							<div className="thumbnail-content">
								<h3>Project Name</h3>
								<p>Lorem ipsum dolor sit amet</p>
							</div>
						 </Col>

						 <Col className="no-padding" sm={3} md={4}>
							<Thumbnail href="#" src="../public/img/project2.jpg" responsive/>
							<div className="thumbnail-content">
								<h3>Project Name</h3>
								<p>Lorem ipsum dolor sit amet</p>
							</div>
						 </Col>
				  </Row>
			  </Grid>
			</div>
		);
	}
});

module.exports = ProjectThumbnail;