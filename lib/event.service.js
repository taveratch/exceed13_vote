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
            signin: 'auth/signin'
          },
          contents: {
            update: 'contents/update'
          }
        }
      };
    }();
}());
