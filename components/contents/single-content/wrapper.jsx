var React = require('react');
(function() {
    'use strict';
    module.exports = React.createClass({
        render: function() {
            /* Components */
            var ContentBox = require('./content-box.jsx');
            /* JSX */
            return (
                <div className="full-width">
                    <div className="full-width center">
                      <h1>{this.props.content.project_name}</h1>
                      <h3>{this.props.content.group_name}</h3>
                      <img src={this.props.content.project_image} responsive/>
                    </div>
                    {
                      this.props.content.contents.map(function(result, i) {
                        return <ContentBox {...result} />;
                      })
                    }
                </div>
            );
        }
    });
}());
