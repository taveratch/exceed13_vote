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
                self.dispatch({type: 'update_user', data: data});
            }).error(function(error) {});
            http.get('/api/contents').success(function(data) {
                self.dispatch({type: 'update_contents', data: data.data});
            }).error(function (error) {});
        },
        render: function() {
            /* Components */
            var NavBar = require('./nav-bar/NavigationBar.jsx');
            var UserPanel = require('./user-panel/wrapper.jsx');
            var CircularProgressBar = require('./circular-progressbar/wrapper.jsx');
            var Contents = require('./contents/wrapper.jsx');
            var Col = Rb.Col;
            return (
                <div className="full-height">
                    <NavBar/>
                    <div className="full-height" style={{paddingTop: 50}}>
                        <Col xs={12} sm={3} className="full-height user-panel" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
                            <UserPanel {...this.state.user} />
                        </Col>
                        <Col className="full-height contents-panel" style={{overflowY: "scroll"}} xs={12} sm={9}>
                            <Contents contents={this.state.contents} />
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
