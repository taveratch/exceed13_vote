(function() {
	'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var actions = require('../actions');
  var http = require('http.service');
  var key=1;
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
	var Wrapper = React.createClass({
    getInitialState: function() {
      this.props.reset();
      return {};
    },
		componentDidMount: function() {
			$('html').css({'height': "auto"});
      this.props.init(this.props.callback);
		},
		componentWillUnmount: function() {
			$('html').css({'height': "100%"});
		},
    updateProjectName: function(ele) {
      this.props.updateProjectName(ele.target.value);
    },
    updateImageUrl: function(ele) {
      this.props.updateImageUrl(ele.target.value);
    },
    submit: function() {
      this.props.submit();
    },
		render: function() {
			/* Components */
			var Navbar = require('../../nav-bar/NavigationBar.jsx');
			var ContentBox = require('../content-box/wrapper.jsx');
      var DummyBox = require('../content-box/dummy.jsx');
      var InputField = require('./input_field.jsx');
      var Row = ReactBootstrap.Row;
      var Col = ReactBootstrap.Col;
			return (
				<div className="full-height">
					<Navbar/>
					<div className="full-height" style={{
						paddingTop: 50
					}}>
						<div className="full-width" style={{
							padding: 15
						}}>
							<div id="content-container" className="full-width">
                <InputField header="Group name" disabled value={this.props.reducer.user.group} />
                <br></br>
                <InputField key={key++} header="Project name" onChange={this.updateProjectName} value={this.props.reducer.name} placeholder="Enter project name"/>
                <br></br>
                <InputField key={key++} header="Image url" onChange={this.updateImageUrl} value={this.props.reducer.image_url} placeholder="Enter image url" />
								{
                  this.props.reducer.content.map(function(item, i) {
                    return <ContentBox key={item.id} id={item.id} header={item.header} desc={item.desc} disabled={item.disabled}/>;
                  })
                }
                <DummyBox />
                <Row className="flex-center-x" style= {{marginTop: 20}}>
                  <span onClick={this.submit} className="btn-vote">Done</span>
                </Row>

							</div>
						</div>
					</div>
				</div>
			);
		},
	});
	Wrapper = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
  module.exports = Wrapper;
}());
