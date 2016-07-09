var React = require('react');
var Rb = require('react-bootstrap');
(function() {
  'use strict';

    module.exports = React.createClass({
        render: function() {
          /* Components */
          var Col = Rb.Col;
          var ProjectThumbnail = require('./project-thumbnail.jsx');
          return (
            <div>
              {
                this.props.contents.map(function(result, i) {
                  var props = {
                    key: i,
                    imgSrc: result.cover_image,
                    groupName: result.group_name,
                    projectName: result.project_name
                  };
                  return (
                    <Col md={4} sm={6}>
                      <ProjectThumbnail {...props}/>
                    </Col>
                  );
                })
              }
            </div>
          );
        }
    });

}());
