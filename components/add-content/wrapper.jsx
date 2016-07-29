(function() {
  'use strict';
      module.exports = React.createClass({
        render: function() {
          /* Components */
          var App = require('./containers/wrapper.jsx');
          var reducers = require('./reducers');
          var store = createStore(reducers);
          var auth = require('auth.service');
          return (
            <Provider store={store}>
              <App />
            </Provider>
          );
        }
      });

}());
