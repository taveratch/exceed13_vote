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
              content: [],
              voteChecker: {
                best_of_hardware: true,
                best_of_software: false,
                popular: false
              }
            };
          } else {
            return _.merge(action.data.state.project, {
              voteChecker: {
                best_of_hardware: true,
                best_of_software: false,
                popular: false
              }
            });
          }
          break;
        case 'update_vote_check':
          return _.merge({},state,{
            voteChecker: _.pick(action.data, ['best_of_hardware', 'best_of_software', 'popular'])
          });
        default:
          return state;
      }
    };
}());
