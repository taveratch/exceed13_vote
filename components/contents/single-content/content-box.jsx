var React = require('react');
var Remarkable = require('remarkable');
var md = new Remarkable();
(function() {
  'use strict';

      module.exports = React.createClass({
          render: function() {
            return (
              <div className="full-width content-wrapper">
                <div className="full-width content-box">
                  <p className="header">{this.props.header}</p>
                  <hr></hr>
                  <p dangerouslySetInnerHTML={{__html: md.render(this.props.desc)}}></p>
                </div>
              </div>

            );
          }
      });

}());
