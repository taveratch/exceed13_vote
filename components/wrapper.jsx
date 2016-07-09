var React = require("react");
var ReactDOM = require("react-dom");
var Rb = require('react-bootstrap');

(function() {
    'use strict';
    /* Services */
    var http = require('../lib/http.service');
    var vm = require('./viewmodel');
    /* React */
    module.exports = React.createClass({
        getInitialState: function() {
            return vm({}, {type: 'init'});
        },
        dispatch: function(action) {
            this.setState(vm(this.state, action));
        },
        componentDidMount: function() {
            var self = this;
            http.post('/api/login').success(function(data) {
                console.log(data);
                self.dispatch({type: 'update', data: data});
            }).error(function(error) {});
        },
        render: function() {
            /* Components */
            // var NavBar = require('./nav-bar/wrapper.jsx');
            var NavBar = require('./nav-bar/NavigationBar.jsx');
            // var UserPanel = require('../public/js/components/ProfileInfo.jsx');
            var UserPanel = require('./user-panel/wrapper.jsx');
            var CircularProgressBar = require('./circular-progressbar/wrapper.jsx');
            var Col = Rb.Col;
            return (
                <div className="full-height">
                    <NavBar/>
                    <div className="full-height" style={{paddingTop: 50}}>
                        <Col xs={12} sm={3} className="full-height" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                            <UserPanel {...this.state.user}/>
                        </Col>
                        <Col xs={12} sm={9}>

                        </Col>
                    </div>
                </div>
            );
        }
    });

}());

var Wrapper = require('./wrapper.jsx');
// var Wrapper = require('../public/js/components/App.jsx');
ReactDOM.render( <Wrapper/>, document.getElementById("container"));
