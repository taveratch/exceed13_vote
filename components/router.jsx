var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Dashboard = require('./dashboard/wrapper.jsx');
var AddContent = require('./add-content/wrapper.jsx');
var Project = require('./dashboard/contents/single-content/wrapper.jsx');
var Index = require('./index/wrapper.jsx');
var auth = require('auth.service');
var onCheckSignin = function(nextState, replace, callback) {
  if(!auth.getUser()) {
    replace('/');
  }
  callback();
};
ReactDOM.render((<Router onUpdate={function(){ window.scrollTo(0,0); }} history={browserHistory}>
  <Route path="/" component={Index} />
  <Route onEnter={onCheckSignin} path="/dashboard" component={Dashboard}/>
  <Route onEnter={onCheckSignin} path="/dashboard/project" component={Project} />
  <Route onEnter={onCheckSignin} path='/add' components={AddContent} />
  <Route path="*" component={Index} />
</Router>), document.getElementById('container'));
