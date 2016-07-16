var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Dashboard = require('./dashboard/wrapper.jsx');
var AddContent = require('./add-content/wrapper.jsx');
var Index = require('./index/wrapper.jsx');
ReactDOM.render((<Router history={browserHistory}>
    <Route path="/web" component={Index}/>
    <Route path="/web/dashboard" component={Dashboard}/>
    <Route path="/web/add" component={AddContent}/>
</Router>), document.getElementById('container'));
