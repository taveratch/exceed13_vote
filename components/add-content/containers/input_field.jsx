(function() {
  'use strict';
    var Wrapper = React.createClass({
      render: function() {
        /* Components */
  			var FormControl = ReactBootstrap.FormControl;
        return (
          <div>
            <span>{this.props.header}</span>
            <FormControl className="center" disabled={this.props.disable || false} ref="group-name" defaultValue={this.props.value || ''} placeholder={this.props.placeholder || ''}/>
          </div>
        );
      }
    });
    module.exports = connect()(Wrapper);
}());
