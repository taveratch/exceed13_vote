(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        /* Components */
        var Comment = require('./comment.jsx');
        var CommentBox = require('./add_comment_panel.jsx');
        var commentBoxView;
        if(this.props.isShowCommentBox) {
          commentBoxView = <CommentBox isShow={this.props.isShowCommentBox} dispatch={this.props.dispatch} callback={this.props.callback} projectId={this.props.projectId}/>;
        }
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
                { commentBoxView }
              </div>
            </div>
          </div>
        );
      }
    });
    module.exports = Wrapper;
}());
