(function() {
  'use strict';
    var D = require('flux').Dispatcher;
    var Dispatcher = new D();
    var Store = require('./store');
    Dispatcher.register(function(payload) {
      var type = payload.type;
      var key = payload.data.key;
      console.log(payload);
      switch(type) {
        case 'update':
          var data = {};
          if(key === 0) {
            data.best_of_hardware = payload.data.score;
          }else if(key === 1) {
            data.best_of_software = payload.data.score;
          }else if(key === 2) {
            data.popular = payload.data.score;
          }else if(key === 3) {
            data.top_rated = payload.data.score;
          }
          Store.update(data);
          break;
        default:
          return true;
      }
      Store.emitChange();
      return true;
    });
    module.exports = Dispatcher;
}());
