(function() {
  'use strict';
    module.exports = React.createClass({
      render: function() {
        var texts = require('text');
        /* Components */
        var Col = ReactBootstrap.Col;
        var Row = ReactBootstrap.Row;
        var Award = require('./award.jsx');
        return (
          <div className="full-width full-height middle-vertical-parent">
            <Row className="middle-vertical-child">
              {
                texts.map(function(result, i) {
                  return (
                    <Col sm={3} md={3}>
                      <Award src={result.icon}>
                        <p>{result.header}</p>
                        <p className="thin">{result.desc}</p>
                      </Award>
                    </Col>
                  );
                })
              }
            </Row>
          </div>
        );
      }
    });
}());
