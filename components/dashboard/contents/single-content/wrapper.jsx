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
            console.log(this.props.content);
            return (
                <div className="full-width">
                    <Col md={9} mdOffset={1} sm={10} smOffset={1}>
                      <div className="full-width center">
                        <img onClick={this.back} style={{cursor: "pointer"}} className="btn-back" src="/assets/img/back.png" />
                        <h1>{this.props.content.name}</h1>
                        <h3>{this.props.content.group.group_name}</h3>
                        <img src={this.props.content.image_url} className="img-responsive"/>
                      </div>
                      {
                        this.props.content.content.map(function(result, i) {
                          return <ContentBox {...result} />;
                        })
                      }
                      {/*<VoteBox dispatch={this.props.dispatch} vote={this.props.vote} quota={this.props.quota} />*/}
                    </Col>
                </div>
            );
        }
    });
}());
