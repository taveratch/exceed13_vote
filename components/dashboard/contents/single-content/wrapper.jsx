var React = require('react');
var Rb = require('react-bootstrap');
(function() {
    'use strict';
    module.exports = React.createClass({
        back: function() {
            this.props.dispatch({type: 'thumbnails'});
        },
        render: function() {
            /* Components */
            var ContentBox = require('./content-box.jsx');
            var VoteBox = require('../vote-box/wrapper.jsx');
            var Col = Rb.Col;
            /* JSX */
            return (
                <div className="full-width">
                    <Col md={9} mdOffset={1} sm={10} smOffset={1}>
                      <div className="full-width center">
                        <img onClick={this.back} style={{cursor: "pointer"}} className="btn-back" src="/assets/img/back.png" />
                        <h1>{this.props.content.project_name}</h1>
                        <h3>{this.props.content.group_name}</h3>
                        <img src={this.props.content.project_image} responsive/>
                      </div>
                      {
                        this.props.content.contents.map(function(result, i) {
                          return <ContentBox {...result} />;
                        })
                      }
                      <VoteBox dispatch={this.props.dispatch} vote={this.props.vote} quota={this.props.quota} />
                    </Col>
                </div>
            );
        }
    });
}());
