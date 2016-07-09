var _  = require('lodash');
(function() {
    'use strict';

    module.exports = function(state, action) {
        switch(action.type) {
            case 'init':
              return _.merge({}, {
                user: {
                  username : '',
                  group : {
                    id: '',
                    name : ''
                  },
                  percent: 0,
                  quota: [0,0,0,0]
                },
                contents: []
              });
            case 'update_user':
              return _.merge(state,
                {
                  user: _.merge(state.user,
                    action.data,
                    { percent: _.filter(action.data.quota, function(i){ return i===1; }).length * 100.0 / (action.data.quota.length)}
                  )
                }
              );
            case 'update_contents':
              return _.merge(state,
                {
                  contents: action.data
                }
              );
            default:
              return state;
        }
    };

}());
