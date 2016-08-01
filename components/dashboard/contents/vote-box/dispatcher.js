(function() {
  'use strict';
    var D = require('flux').Dispatcher;
    var Dispatcher = new D();
    var Store = require('./store');
    Dispatcher.register(function(payload) {
      var type = payload.type;
      var isChange = true;
      switch(type) {
        case 'update':
          var key = payload.data.key;
          var data = {
            data: {},
            buttonEnable: false
          };
          if(key === 0) {
            data.data.best_of_hardware = payload.data.score;
          }else if(key === 1) {
            data.data.best_of_software = payload.data.score;
          }else if(key === 2) {
            data.data.popular = payload.data.score;
          }
          data.buttonEnable = payload.buttonEnable;
          Store.update(data);
          break;
        case 'open_modal':
          Store.update({ modalShow: true });
          break;
        case 'close_modal':
          Store.update({ modalShow: false });
          break;
        case 'update_server_format':
          Store.update({ serverFormat: payload.data });
          break;
        case 'update_voted':
          Store.update({ votedScore: payload.votedScore });
          break;
        case 'vote':
          Store.init();
          isChange = false;
          break;
        default:
          return true;
      }
      if(isChange){
        Store.emitChange();
      }
      return true;
    });
    module.exports = Dispatcher;
}());
