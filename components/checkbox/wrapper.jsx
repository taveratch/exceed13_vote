var React = require('react');
(function() {
    'use strict';

    module.exports = React.createClass({
      render: function() {
        var imgSource;
        if(this.props.checked) {
          imgSource = '/assets/img/voted_cb.png';
        }else{
          imgSource = '/assets/img/vote_cb.png';
        }
        return (
          <div style={{margin: "15px 0px 15px 0px"}}>
            <img style={{display: 'inline-block'}} width={35} height={35} src={imgSource} className="img-responsive" />
            <span style={{ marginLeft: 20, display: 'inline-block'}}>{this.props.text}</span>
          </div>
        );
      }
    });

}());
