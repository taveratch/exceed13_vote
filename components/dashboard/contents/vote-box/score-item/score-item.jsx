(function() {
  'use strict';
    module.exports = React.createClass({
      mouseEnter: function() {
        this.props.mouseEnter(this.props.i);
      },
      mouseLeave: function() {
        this.props.mouseLeave();
      },
      onClick: function() {
        this.props.onClick(this.props.i);
      },
      render: function() {
        var mouseAction;
        if(this.props.type === 'normal'){
          mouseAction = {
            onMouseEnter: this.mouseEnter,
            onMouseLeave: this.mouseLeave,
            onClick: this.onClick
          };
        }else if(this.props.type === 'selected') {
          mouseAction = {};
        }
        return (
          <div {...mouseAction} style={{padding: 4, display: "inline-block"}}>
            <div className={"score flex-center-y flex-center-x " + (this.props.selected ? "score-selected" : "score-normal") + (this.props.voted || false ? " score-voted" : "")}>
              <span>{this.props.i}</span>
            </div>
          </div>
        );
      }
    });
}());
