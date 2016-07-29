(function() {
  'use strict';
    module.exports = function(state, action) {
      switch(action.type) {
        case 'init':
          return {
            best_of_hardware: -1,
            best_of_software: -1,
            popular: -1
          };
        case 'update':
          return _.merge(state,action.data);
        default:
          return state;
      }
    };
}());
