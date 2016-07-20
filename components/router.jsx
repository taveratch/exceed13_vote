var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Dashboard = require('./dashboard/wrapper.jsx');
var AddContent = require('./add-content/wrapper.jsx');
var Project = require('./dashboard/contents/single-content/wrapper.jsx');
var Index = require('./index/wrapper.jsx');
ReactDOM.render((<Router history={browserHistory}>
    <Route path="/" component={Index} />
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/dashboard/project" component={Project} />
    <Route path="*" component={Index} />
</Router>), document.getElementById('container'));
