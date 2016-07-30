(function() {
  'use strict';
    var Wrapper = React.createClass({
      handleClick: function() {
        var comment = this.refs.comment.value;
        this.props.dispatch({type: 'comment', projectId:this.props.projectId, comment: comment, callback: this.props.callback});
      },
      render: function() {
        return (
          <div>
            <br></br>
            <textarea className="comment-textarea form-control thin" ref="comment" componentClass="textarea" placeholder="Comment..."/>
            <br></br>
            <div className="flex-center-x">
              <button onClick={this.handleClick} className="btn-vote btn-blue">Submit</button>
            </div>
          </div>
        );
      }
    });
    module.exports = Wrapper;
}());
