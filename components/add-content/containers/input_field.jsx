(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        /* Components */
        console.log(this.props.value);
  			var FormControl = ReactBootstrap.FormControl;
        return (
          <div>
            <span>{this.props.header}</span>
            <input onChange={this.props.onChange} className="center form-control" disabled={this.props.disable || false} defaultValue={this.props.value || ''} placeholder={this.props.placeholder || ''}/>
          </div>
        );
      }
    });
    module.exports = connect()(Wrapper);
}());
