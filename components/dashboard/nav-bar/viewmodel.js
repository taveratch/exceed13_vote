(function() {
  'use strict';
    module.exports = function(state, action) {
      var auth = require('auth.service');
      switch(action.type) {
        case 'init':
          return {
            user: auth.getUser()
          };
        default:
          return state;
      }
    };
}());
