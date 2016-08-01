(function() {
  'use strict';
    module.exports = function(state, action) {
      switch(action.type){
        case 'init':
          return {
            action: action.isNormal || true ? 'normal' : 'selected',
          };
        case 'selected':
          return {
            action: 'selected',
            s: action.s
          };
        default:
          return state;
      }
    };
}());
