var React = require('react');
var Rb = require('react-bootstrap');
(function() {
  'use strict';

    module.exports = React.createClass({
        render: function() {
          var self = this;
          /* Components */
          var Col = Rb.Col;
          var ProjectThumbnail = require('./project-thumbnail.jsx');
          return (
            <div>
              {
                this.props.contents.map(function(result, i) {
                  var props = {
                    i: i,
                    imgSrc: result.image_url,
                    groupName: result.group.group_name,
                    projectName: result.name
                  };
                  return (
                    <Col xs={6} md={3} sm={4} className="no-padding">
                      <ProjectThumbnail dispatch={self.props.dispatch} {...props}/>
                    </Col>
                  );
                })
              }
            </div>
          );
        }
    });

}());
