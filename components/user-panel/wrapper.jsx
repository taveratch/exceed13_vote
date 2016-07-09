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
            var votePanelProps = _.pick(this.props, ['quota']);
            /* JSX */
            return (
              <div className="full-height" style={{display: "table"}}>
                <div style={{display: "table-cell", verticalAlign: "middle"}}>
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
