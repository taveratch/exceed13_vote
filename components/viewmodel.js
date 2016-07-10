var _  = require('lodash');
(function() {
    'use strict';

    module.exports = function(state, action) {
        switch(action.type) {
            case 'init':
              return _.merge({}, {
                pane: 'thumbnails',
                user: {
                  username : '',
                  group : {
                    id: '',
                    name : ''
                  },
                  percent: 0,
                  quota: [0,0,0,0]
                },
                contents: [],
                content_id: 0,
                vote: [0,0,0,0]
              });
            case 'update_user':
              return _.merge(state,
                {
                  user: _.merge(state.user,
                    action.data,
                    { percent: _.filter(action.data.quota, function(i){ return i===1; }).length * 100.0 / (action.data.quota.length)}
                  ),
                  vote: action.data.quota
                }
              );
            case 'update_contents':
              return _.merge(state,
                {
                  pane: 'thumbnails',
                  contents: action.data
                }
              );
            case 'thumbnails':
              return _.merge(state, {
                pane: 'thumbnails'
              });
            case 'single_content':
              return _.merge(state, {
                pane: 'single_content',
                content_id: action.id,
                vote: state.user.quota
              });
            case 'vote':

            case 'select_vote':
              if (state.vote[action.key] === 0 ){
                state.vote[action.key] = 1;
              }else {
                state.vote[action.key] = 0;
              }
              return state;
            default:
              return state;
        }
    };

}());
