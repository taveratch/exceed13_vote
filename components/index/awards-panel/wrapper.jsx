(function() {
  'use strict';
    module.exports = React.createClass({
      render: function() {
        var texts = require('../../dashboard/text.js');
        /* Components */
        var Col = ReactBootstrap.Col;
        var Row = ReactBootstrap.Row;
        var Award = require('./award.jsx');
        return (
          <div className="full-width full-height middle-vertical-parent">
            <Row className="middle-vertical-child">
              {
                texts.vote.map(function(result, i) {
                  return (
                    <Col sm={3} md={3}>
                      <Award src={texts.vote_icon[i]}>
                        <p>{texts.vote[i]}</p>
                        <p>{texts.vote_desc[i]}</p>
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
