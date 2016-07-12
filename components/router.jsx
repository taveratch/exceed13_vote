var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;

(function() {
    'use strict';
    /* Components */
    var Dashboard = require('./dashboard/wrapper.jsx');
    var AddContent = require('./add-content/wrapper.jsx');
    ReactDOM.render((
        <Router history={browserHistory}>
            <Route path='/'>
                <Route path='dashboard' component={Dashboard}/>
                <Route path='add' component={AddContent}/>
            </Route>
        </Router>
    ), document.getElementById('container'));
}());
