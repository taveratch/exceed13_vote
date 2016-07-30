(function() {
	'use strict';
	var bindActionCreators = Redux.bindActionCreators;
	var actions = require('../actions');
	var http = require('http.service');
	var key = 1;
  var key2 = 0;
	var mapStateToProps = function(state) {
		return {reducer: state};
	};
	var mapDispatchToProps = function(dispatch) {
		return bindActionCreators(actions, dispatch);
	};
	var Wrapper = React.createClass({
		updateProjectName: function(ele) {
      key--;
			this.props.updateProjectName(ele.target.value);
		},
		updateImageUrl: function(ele) {
      key2++;
			this.props.updateImageUrl(ele.target.value);
		},
    render: function() {
      /* Components */
      var ContentBox = require('../content-box/wrapper.jsx');
      var DummyBox = require('../content-box/dummy.jsx');
      var InputField = require('./input_field.jsx');
      return (
        <div>
          <InputField header="Group name" disabled value={this.props.reducer.user.group} />
          <br></br>
          <InputField key={key++} header="Project name" onChange={this.updateProjectName} value={this.props.reducer.name} placeholder="Enter project name"/>
          <br></br>
          <InputField key={key2--} header="Image url" onChange={this.updateImageUrl} value={this.props.reducer.image_url} placeholder="Enter image url" />
          <br></br>
          <div className="flex-center-x">
            <img className="img-responsive img-preview" style={{padding: 15}}src={this.props.reducer.image_url} />
          </div>
          {
            this.props.reducer.content.map(function(item, i) {
              return <ContentBox key={item.id} id={item.id} header={item.header} desc={item.desc} disabled={item.disabled}/>;
            })
          }
          <DummyBox />
        </div>
      );
    }
	});
  Wrapper = connect(mapStateToProps, mapDispatchToProps)(Wrapper);
  module.exports = Wrapper;
}());
