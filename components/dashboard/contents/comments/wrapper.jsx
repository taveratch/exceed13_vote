(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        /* Components */
        var Comment = require('./comment.jsx');
        /* JSX */
        return (
          <div className="full-width content-wrapper">
            <div className="full-width content-box">
              <p className="header">Comments</p>
              <hr></hr>
              {
                this.props.comments.map(function(result, i) {
                  return <Comment key={i} {...result}/>;
                })
              }
            </div>
          </div>
        );
      }
    });
    module.exports = Wrapper;
}());
