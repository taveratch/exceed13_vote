(function() {
  'use strict';
    var auth = require('auth.service');
    var initialState = {
      user: auth.getUser(),
      projectName: '',
      content: []
    };
    var types = require('../constants');
    var Reducer = function(state=initialState, action) {
      switch(action.type) {
        case types.SET_PROJECT_NAME:
          return _.merge({},
            state,
            {
              projectName: action.name
            }
          );
        default:
          return state;
      }
    };
    module.exports = Reducer;
}());
