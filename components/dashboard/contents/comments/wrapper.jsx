(function() {
  'use strict';
    var vm = require('./viewmodel');
    var Wrapper = React.createClass({
      render: function() {
        /* Components */
        var Comment = require('./comment.jsx');
        var CommentBox = require('./add_comment_panel.jsx');
        /* JSX */
        return (
          <div className="full-width content-wrapper">
            <div className="full-width content-box">
              <p className="header">Comments</p>
              <hr></hr>
              <div style={{paddingLeft: "10%", paddingRight:"10%"}}>
                {
                  this.props.comments.map(function(result, i) {
                    return <Comment key={i} {...result}/>;
                  })
                }
                <CommentBox isShow={this.props.isShowCommentBox} dispatch={this.props.dispatch} callback={this.props.callback} projectId={this.props.projectId}/>
              </div>
            </div>
          </div>
        );
      }
    });
    module.exports = Wrapper;
}());
