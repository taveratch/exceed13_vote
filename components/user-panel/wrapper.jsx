var React = require('react');
var Rb = require('react-bootstrap');
(function() {
  'use strict';

      module.exports = React.createClass({
          render: function() {
            /* Components */
            var Col = Rb.Col;
            var ProfileInfo = require('./ProfileInfo.jsx');
            var CircularProgressBar = require('../circular-progressbar/wrapper.jsx');
            var VotePanel = require('./vote_panel.jsx');
            /* Props */
            var profileInfoProps = _.pick(this.props, ['username', 'group']);
            var votePanelProps = _.pick(this.props, ['vote']);
            /* JSX */
            return (
              <div className="full-heigh middle-vertical-parent">
                <div className="middle-vertical-child">
                  <div>
                    <CircularProgressBar percent={this.props.percent}/>
                  </div>
                  <ProfileInfo {...profileInfoProps} />
                  <VotePanel {...votePanelProps} />
                </div>
              </div>
            );
          }
      });

}());
