var React = require('react');
var Rb = require('react-bootstrap');
(function() {
    'use strict';

    module.exports = React.createClass({
        render: function() {
            var self = this;
            /* Components */
            var VoteIcon = require('./vote-icon.jsx');
            var text = require('../../text');
            var Col = Rb.Col;
            var Row = Rb.Row;
            /* JSX */
            return (
              <div className="full-width content-wrapper">
                <div className="full-width content-box">
                  <p className="header">Vote</p>
                  <hr></hr>
                  <p>Tap on icon to vote (You can have more than 1 vote)</p>
                  <Row style={{marginTop: 25}}>
                    {
                      text.vote_icon.map(function(result, i ){
                        return (
                          <Col xs={3} sm={3} md={3} lg={3}>
                            <VoteIcon quota={self.props.quota[i]} imgSrc={result} text={text.vote[i]}/>
                          </Col>
                        );
                      })
                    }
                  </Row>
                </div>
              </div>
            );
        }
    });

}());
