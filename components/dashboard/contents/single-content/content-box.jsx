var React = require('react');
var Remarkable = require('remarkable');
var md = new Remarkable();
// var option = { responsive: {
//     'srcset': {
//       'header-*': [ {
//         width: 320,
//         rename: {
//           suffix: '-small'
//         }
//       }, {
//         width: 640,
//         rename: {
//           suffix: '-medium'
//         }
//       } ]
//     },
//     'sizes': {
//       'header-*': '(min-width: 36em) 33.3vw, 100vw'
//     }
//   }
// };
// var markdownIt = require('markdown-it')({
//   html: true,
//   linkify: true,
//   typography: true
// }).use(require('markdown-it-responsive'), option);
// var md =  markdownIt;

(function() {
  'use strict';

      module.exports = React.createClass({
          render: function() {
            return (
              <div className="full-width content-wrapper">
                <div className="full-width content-box">
                  <p className="header">{this.props.header}</p>
                  <hr></hr>
                  <p dangerouslySetInnerHTML={{__html: md.render(this.props.desc)}}></p>
                </div>
              </div>
            );
          }
      });

}());
