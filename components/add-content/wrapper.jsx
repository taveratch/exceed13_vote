(function() {
  'use strict';
      var reducers = require('./reducers');
      var store = createStore(reducers);
      var auth = require('auth.service');
      module.exports = React.createClass({
        render: function() {
          /* Components */
          var App = require('./containers/wrapper.jsx');
          return (
            <Provider store={store}>
              <App />
            </Provider>
          );
        }
      });

}());
