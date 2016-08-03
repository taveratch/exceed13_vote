(function() {
  'use strict';
  var mapStateToProps = function(state) {
    return {reducer: state};
  };
  var Wrapper = React.createClass({
    render: function() {
      /* Components */
      var ContentBox = require('../../dashboard/contents/single-content/content-box.jsx');
      return (
        <div>
          <div className="center">
            <p style={{fontSize: "1.7em"}}>{this.props.reducer.name}</p>
            <p>{this.props.reducer.user.group}</p>
          </div>
          <div className="flex-center-x">
            <img src={this.props.reducer.image_url} className="img-responsive"/>
          </div>
          {
            this.props.reducer.content.map(function(result, i) {
              return <ContentBox {...result}/>;
            })
          }
        </div>
      );
    }
  });

  Wrapper = connect(mapStateToProps)(Wrapper);
  module.exports = Wrapper;
}());
