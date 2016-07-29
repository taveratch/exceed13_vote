(function() {
	'use strict';
  var bindActionCreators = Redux.bindActionCreators;
  var actions = require('../actions');
  var http = require('http.service');
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var mapDispatchToProps = function(dispatch) {
    return bindActionCreators(actions, dispatch);
  };
	var Wrapper = React.createClass({
		componentDidMount: function() {
			$('html').css({'height': "auto"});
      this.props.init(this.props.callback);
		},
		componentWillUnmount: function() {
			$('html').css({'height': "100%"});
		},
    updateProjectName: function() {
      var name = this.refs['project-name'].value;
      this.props.updateProjectName(name);
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
      console.log('content');
      console.log(this.props.reducer.content);
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
                <div>
                  <span>Group name</span>
                  <input
                    className="center form-control"
                    disabled
                    defaultValue={this.props.reducer.user.group}/>
                </div>
                <br></br>
                <div>
                  <span>Project name</span>
                  <input onChange={this.updateProjectName}
                    ref="project-name"
                    className="center form-control"
                    value={this.props.reducer.name}
                    placeholder="Enter project name"/>
                </div>
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
