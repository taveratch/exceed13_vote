var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require('react-bootstrap');

(function() {
  'use strict';

    module.exports = React.createClass({
      render: function() {
        /* Components */
        var NavBar = require('./nav-bar/wrapper.jsx');
        var CircularProgressBar = require('./circular-progressbar/wrapper.jsx');
        var Col = Rb.Col;
        return (
          <div>
            {/*<NavBar />*/}
            <div>
              <Col xs={12} sm={5} style={{height: "100%", display: "table"}}>
                <div  style={{display: "table-cell", verticalAlign: "middle"}}>
                  <CircularProgressBar />
                </div>
              </Col>
              <Col xs={12} sm={7}></Col>
            </div>
          </div>
        );
      }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
