(function() {
  'use strict';
    module.exports = function(){
      var ee;
      function newInstance() {
        return require('event-emitter')({});
      }
      return {
        getInstance: function() {
          if(!ee){ ee = newInstance(); }
          return ee;
        },
        event: {
          auth: {
            signin: 'auth/signin',
            redirect: 'auth/redirect'
          },
          contents: {
            update: 'contents/update'
          },
          comments: {
            update: 'comments/update'
          },
          project: {
            voted: 'project/voted',
            voteCheck: 'project/voteCheck'
          }
        }
      };
    }();
}());
