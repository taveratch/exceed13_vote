var cookie = require('js-cookie');
(function() {
    'use strict';

    module.exports = function(state, action) {
        var auth = require('auth.service');
        var cookie = require('js-cookie');
        switch(action.type) {
            case 'init':
              return _.merge({}, {
                pane: 'thumbnails',
                contents: [],
                content_id: 0,
                vote: [0,0,0,0]
              });
            case 'update_user':
              return _.merge(state,
                {
                  user: _.merge(state.user, action.data)
                }
              );
            case 'update_contents':
              return _.merge(state,
                {
                  pane: 'thumbnails',
                  contents: action.data.projects
                }
              );
            case 'thumbnails':
              return _.merge(state, {
                pane: 'thumbnails'
              });
            case 'redirect':
              return _.merge(state, {
                pane: 'redirect',
                content_id: action.id
              });
            case 'vote':
              state.user.quota = _.merge({},state.vote);
              return state;
            case 'select_vote':
              if (state.vote[action.key] === 0 ){
                state.vote[action.key] = 1;
              }else {
                state.vote[action.key] = 0;
              }
              state.user.percent = percentCalulator(state.vote);
              return state;
            case 'update_comments':
              return _.merge(state, {
                comments: action.data
              });
            default:
              return state;
        }
    };

    function percentCalulator(arr) {
      return _.filter(arr, function(i){ return i===0; }).length * 100.0 / (arr.length);
    }
}());
