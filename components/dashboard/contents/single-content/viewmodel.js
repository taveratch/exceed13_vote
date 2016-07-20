(function() {
  'use strict';
    module.exports = function(state, action) {

      switch(action.type) {
        case 'init':
          if(!action.data){
            return {
              name: '',
              group: {
                group_name: ''
              },
              image_url: '',
              content: []
            };
          } else {
            return action.data.state.project;
          }
          break;
        default:
          return state;
      }
    };
}());
