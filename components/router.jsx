var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var Dashboard = require('./dashboard/wrapper.jsx');
var AddContent = require('./add-content/wrapper.jsx');
var Project = require('./dashboard/contents/single-content/wrapper.jsx');
var Index = require('./index/wrapper.jsx');
var auth = require('auth.service');
var cookie = require('js-cookie');
var onCheckSignin = function(nextState, replace, callback) {
  if(!auth.getUser()) {
    replace({
      pathname: '/signin'
    });
  }
  var round = auth.getRound();
  console.log("yyyyy");
  console.log(round);
  callback();
};
var onCheckVote = function(nextState, replace, callback) {
  onCheckSignin(nextState,replace, callback);
  var round = auth.getRound();
  console.log("xxxxxx");
  console.log(round);
  if(!round) {
    replace({
      pathname: '/'
    });
  }else if(round === 'document'){
    replace({
      pathname: '/'
    });
  }
  callback();
};

var onCheckDocument = function(nextState, replace, callback) {
  onCheckSignin(nextState,replace, callback);
  var round = auth.getRound();
  console.log(round);
  if(!round) {
    replace({
      pathname: '/'
    });
  }else if(round === 'vote'){
    replace({
      pathname: '/'
    });
  }
  callback();
};

ReactDOM.render((<Router onUpdate={function(){ window.scrollTo(0,0); }} history={browserHistory}>
  <Route onEnter={onCheckSignin} path="/" component={Index} />
  <Route onEnter={onCheckVote} path="/dashboard" component={Dashboard}/>
  <Route onEnter={onCheckVote} path="/dashboard/project" component={Project} />
  <Route onEnter={onCheckDocument} path='/add' components={AddContent} />
  <Route path="*" component={Index} />
</Router>), document.getElementById('container'));
